const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

async function runTests() {
  console.log("=== STARTING THE ELEGANT REGISTRY TEST SUITE ===");

  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
  const jsCode = fs.readFileSync(path.resolve(__dirname, 'app.js'), 'utf8');

  // Create JSDOM instance with url set to enable standard DOM features
  const dom = new JSDOM(html, { 
    url: "http://localhost",
    runScripts: "dangerously" 
  });
  const { window } = dom;

  // Mock global window objects for Node context
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;

  // Mock Element.prototype.scrollIntoView to prevent errors
  window.Element.prototype.scrollIntoView = () => {};

  // Mock localStorage properly on window and global
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem(key) { return store[key] || null; },
      setItem(key, value) { store[key] = String(value); },
      removeItem(key) { delete store[key]; },
      clear() { store = {}; }
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
    configurable: true
  });
  global.localStorage = localStorageMock;

  // Mock external CDN libraries
  window.lucide = {
    createIcons: () => {}
  };
  global.lucide = window.lucide;

  window.html2canvas = () => Promise.resolve({
    toDataURL: () => "data:image/png;base64,mock"
  });
  global.html2canvas = window.html2canvas;

  // Mock alert to prevent JSDOM from stalling
  window.alert = (msg) => {
    console.log(`[ALERT MOCKED] ${msg}`);
  };

  // Inject app.js into JSDOM by appending a script tag, exposing private variables for testing
  const scriptEl = window.document.createElement("script");
  scriptEl.textContent = jsCode + `
    window.OFFLINE_PRESETS = OFFLINE_PRESETS;
    window.SYNONYM_MAP = SYNONYM_MAP;
    window.handleConvert = handleConvert;
    window.WordRepository = WordRepository;
    window.renderCertificate = renderCertificate;
  `;
  window.document.body.appendChild(scriptEl);

  // Trigger DOMContentLoaded
  const event = new window.Event('DOMContentLoaded');
  window.document.dispatchEvent(event);

  const OFFLINE_PRESETS = window.OFFLINE_PRESETS;
  const handleConvert = window.handleConvert;

  let passed = 0;
  let failed = 0;

  function runAssert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
      failed++;
    }
  }

  // 1. Verify all 28 KECO 2025 presets exist in OFFLINE_PRESETS and match the layout structure.
  console.log("\n--- Testing 28 KECO Presets ---");
  const presetKeys = Object.keys(OFFLINE_PRESETS);
  runAssert(presetKeys.length === 28, `Expected exactly 28 KECO presets, found: ${presetKeys.length}`);

  for (const preset of presetKeys) {
    const data = OFFLINE_PRESETS[preset];
    const hasCorrectStructure = data.nobleTitle && data.justification && Array.isArray(data.duties);
    runAssert(hasCorrectStructure, `Preset '${preset}' matches required structure`);
    
    // Test conversion
    window.document.getElementById('originalJobInput').value = preset;
    await handleConvert(preset);
    
    // Check elements
    const certNobleJob = window.document.getElementById('certNobleJob');
    const vogueEn = certNobleJob.querySelector('.vogue-title-en');
    const vogueKoMain = certNobleJob.querySelector('.vogue-title-ko-main');
    const vogueKoSub = certNobleJob.querySelector('.vogue-title-ko-sub');
    
    const hasEnglish = vogueEn && vogueEn.textContent.length > 0;
    const hasKoMain = vogueKoMain && vogueKoMain.textContent.length > 0;
    const hasKoSub = vogueKoSub && vogueKoSub.textContent.length > 0;
    
    runAssert(hasEnglish && hasKoMain && hasKoSub, `Preset '${preset}' rendered with all layout components`);
  }

  // 2. Verify synonym map conversions (e.g., '카페알바' -> '바리스타', and its title mapping to 'Aroma Essence Extractionist / 블랙 에센스 연금술사').
  console.log("\n--- Testing Synonym Map Conversions ---");
  const testInput = "카페알바";
  window.document.getElementById('originalJobInput').value = testInput;
  await handleConvert(testInput);

  const certNobleJob = window.document.getElementById('certNobleJob');
  const vogueEn = certNobleJob.querySelector('.vogue-title-en').textContent.trim();
  const vogueKoMain = certNobleJob.querySelector('.vogue-title-ko-main').textContent.trim();
  
  runAssert(vogueEn === "Aroma Essence Extractionist", `English part mapped correctly to 'Aroma Essence Extractionist' (got: '${vogueEn}')`);
  runAssert(vogueKoMain === "블랙 에센스 연금술사", `Korean main part mapped correctly to '블랙 에센스 연금술사' (got: '${vogueKoMain}')`);

  // 3. Verify that the original user input is preserved in the ORIGIN field (#certOriginalJob).
  console.log("\n--- Testing Original Input Preservation ---");
  const certOriginalJob = window.document.getElementById('certOriginalJob');
  runAssert(certOriginalJob.textContent === testInput, `Original input '${testInput}' is preserved in #certOriginalJob (got: '${certOriginalJob.textContent}')`);

  // 4. Verify that offline inputs (e.g., "연구원", "개붕이") correctly trigger the deterministic offline preset generation and parse successfully.
  console.log("\n--- Testing Offline Inputs (연구원, 개붕이) ---");
  const offlineInputs = ["연구원", "개붕이"];
  
  for (const input of offlineInputs) {
    window.document.getElementById('originalJobInput').value = input;
    await handleConvert(input);
    
    // Verify that the title is generated and correctly parsed
    const certNobleJob = window.document.getElementById('certNobleJob');
    const vogueEn = certNobleJob.querySelector('.vogue-title-en');
    const vogueKoMain = certNobleJob.querySelector('.vogue-title-ko-main');
    const vogueKoSub = certNobleJob.querySelector('.vogue-title-ko-sub');
    
    const hasEnglish = vogueEn && vogueEn.textContent.length > 0;
    const hasKoMain = vogueKoMain && vogueKoMain.textContent.length > 0;
    const hasKoSub = vogueKoSub && vogueKoSub.textContent.length > 0;
    
    runAssert(hasEnglish && hasKoMain && hasKoSub, `Offline input '${input}' generated correctly split titles`);
    
    // Check if the scholar keyword "연구원" was classified as "scholar" and not "agent"
    if (input === "연구원") {
      const isScholar = vogueKoSub && (
        vogueKoSub.textContent.includes("학문") || 
        vogueKoSub.textContent.includes("연구") || 
        vogueKoSub.textContent.includes("배움") || 
        vogueKoSub.textContent.includes("멘탈") || 
        vogueKoSub.textContent.includes("자질")
      );
      runAssert(isScholar, `연구원 is classified as scholar (got sub: '${vogueKoSub ? vogueKoSub.textContent : ''}')`);
    }

    // Deterministic check: convert a second time and check if output is identical
    const firstTitleText = certNobleJob.innerHTML;
    const firstJustificationText = window.document.getElementById('certJustification').textContent;
    
    await handleConvert(input);
    const secondTitleText = certNobleJob.innerHTML;
    const secondJustificationText = window.document.getElementById('certJustification').textContent;
    
    runAssert(firstTitleText === secondTitleText, `Deterministic check for '${input}' title`);
    runAssert(firstJustificationText === secondJustificationText, `Deterministic check for '${input}' justification`);
  }

  // 5. Verify Prototype Safety
  console.log("\n--- Testing Prototype Safety ---");
  const wordRepo = window.WordRepository;
  
  // Test WordRepository directly
  const protoResult = await wordRepo.getWord("__proto__");
  runAssert(protoResult === null, `WordRepository.getWord("__proto__") returns null`);
  
  const constructorResult = await wordRepo.getWord("constructor");
  runAssert(constructorResult === null, `WordRepository.getWord("constructor") returns null`);

  // Test through UI / handleConvert flow
  try {
    window.document.getElementById('originalJobInput').value = "__proto__";
    await handleConvert("__proto__");
    const certNobleJob = window.document.getElementById('certNobleJob');
    const vogueEn = certNobleJob.querySelector('.vogue-title-en');
    runAssert(vogueEn && vogueEn.textContent.length > 0, "Querying '__proto__' does not throw and renders a title");
  } catch (err) {
    runAssert(false, `Querying '__proto__' threw an error: ${err.message}`);
  }

  try {
    window.document.getElementById('originalJobInput').value = "constructor";
    await handleConvert("constructor");
    const certNobleJob = window.document.getElementById('certNobleJob');
    const vogueEn = certNobleJob.querySelector('.vogue-title-en');
    runAssert(vogueEn && vogueEn.textContent.length > 0, "Querying 'constructor' does not throw and renders a title");
  } catch (err) {
    runAssert(false, `Querying 'constructor' threw an error: ${err.message}`);
  }

  // 6. Verify DOM XSS Safety
  console.log("\n--- Testing DOM XSS Safety ---");
  const xssPayload = "<img src=x onerror=alert(1)>";
  
  // Test scenario 1: Querying through handleConvert flow
  window.document.getElementById('originalJobInput').value = xssPayload;
  await handleConvert(xssPayload);
  
  const certOriginalJobEl = window.document.getElementById('certOriginalJob');
  const certCardEl = window.document.getElementById('certificateCard');
  
  // Check that no img elements were created anywhere in the card
  let imgElements = certCardEl.getElementsByTagName('img');
  runAssert(imgElements.length === 0, "No HTML tags (like <img>) are parsed or rendered in the certificate card");
  runAssert(certOriginalJobEl.textContent === xssPayload, `XSS payload in original job is rendered safely as plain text`);
  
  // Test scenario 2: Malicious API data containing HTML in nobleTitle (with parens)
  const xssData1 = {
    nobleTitle: `${xssPayload} (${xssPayload} | ${xssPayload})`,
    justification: "Justification",
    duties: ["duty 1"]
  };
  
  window.renderCertificate("Test Job", xssData1);
  const certNobleJobEl = window.document.getElementById('certNobleJob');
  imgElements = certNobleJobEl.getElementsByTagName('img');
  runAssert(imgElements.length === 0, "No HTML tags (like <img>) are rendered for matching title structure");
  
  // Test scenario 3: Malicious API data containing HTML in nobleTitle (without matching structure)
  const xssData2 = {
    nobleTitle: xssPayload,
    justification: "Justification",
    duties: ["duty 1"]
  };
  
  window.renderCertificate("Test Job", xssData2);
  imgElements = certNobleJobEl.getElementsByTagName('img');
  runAssert(imgElements.length === 0, "No HTML tags (like <img>) are rendered for non-matching title structure");
  
  // Verify that the text was rendered safely as text (the HTML tags are visible as text characters)
  runAssert(certNobleJobEl.textContent.includes("<img src=x onerror=alert"), "XSS payload text is safely preserved as plain text");

  console.log(`\n=== TEST SUITE COMPLETE: Passed ${passed}, Failed ${failed} ===`);
  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
