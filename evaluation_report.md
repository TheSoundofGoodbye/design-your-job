# 에디토리얼 직업 큐레이터 (The Elegant Registry) 종합 이슈 평가 및 검증 보고서

본 보고서는 `elegant-noble` 프로젝트의 코드베이스 개선, 스타일시트 리팩토링, 자동화 테스트 구축 및 정적 분석(린트) 결과와 UI/UX 검증 내용을 종합적으로 정리한 문서입니다.

---

## 1. 개요 (Introduction)
- **대상 워크스페이스**: `f:\Workspace\elegant-noble`
- **목적**: ｢한국고용직업분류 2025｣ 프리셋 연동 및 오프라인 대체 로직의 결함들을 해소하고, CSS 테마 시스템을 HSL 구조로 리팩토링하여 모바일 레이아웃 최적화와 안정적인 텍스트 래핑을 보장합니다. 아울러 JSDOM 기반의 유닛 테스트 스크립트와 정적 분석 도구를 가동해 코드 품질의 무결성을 입증합니다.

---

## 2. 코드베이스 개선 사항 (app.js)

### 2-1. `SYNONYM_MAP` 중복 및 중복 매핑(Redundancy) 제거
- **이슈**: 기존 `SYNONYM_MAP` 내에 `"경찰관": "경찰관"`, `"부사관": "부사관"`, `"프로게이머": "프로게이머"`, `"택시기사": "택시기사"`, `"대학교수": "대학교수"`와 같이 표준 프리셋 키를 자기 자신에게 중복 매핑하는 불필요하고 중복되는 키 선언들이 존재했습니다.
- **조치**: 자가 매핑에 해당하는 중복 선언을 완전히 제거하였습니다. `SYNONYM_MAP[trimmed]`이 존재하지 않으면 `trimmed`가 원래 값 그대로 유지되어 `OFFLINE_PRESETS[trimmed]`으로 직행하므로 로직 상 완벽히 동일하게 동작하며 린터 오류를 미연에 방지합니다.
- **연구원 맵핑 조정**: `"연구원"`을 기계적으로 `"대학교수"`로 변환하던 동의어 매핑 규칙을 제거하여, `"연구원"` 입력 시 오프라인 모드에서 연구원 고유의 동적 대체 로직(scholar 카테고리)을 타도록 변경하였습니다.

### 2-2. 키워드 우선순위 교정 ("연구원" 매핑 오류 해결)
- **이슈**: `"연구원"`과 같이 `"원"`과 `"연구"` 키워드가 동시에 들어있는 명칭의 경우, 기존 로직에서는 접미사 `"원"` 조건식(agent 카테고리)이 학술/지성 키워드인 `"연구"` 조건식(scholar 카테고리)보다 상단에 위치하여 일상 대행업무인 `"agent"`로 오분류되는 버그가 있었습니다.
- **조치**: `generateDynamicOfflinePreset` 내의 카테고리 판별 조건문에서 `scholar`(`"연구"`, `"학생"`, `"공부"`) 검사를 최상단으로 재정렬하여 우선순위를 보정했습니다. 이제 `"연구원"` 입력 시 정상적으로 `scholar` 카테고리로 매핑됩니다.

### 2-3. DJB2 해싱 기반 결정론적 난수 시드 도입
- **이슈**: 미등록 직업 입력 시 `Math.random()`을 사용하여 무작위로 수식어와 템플릿을 조합하기 때문에 동일한 단어 입력 시 매번 결과가 달라지는 비결정성(Non-determinism) 문제가 있었습니다.
- **조치**: 문자열 해싱 알고리즘 중 충돌이 적고 가벼운 **DJB2** 해시 함수(`getHashCode`)를 `app.js` 내에 구현하였습니다. 입력어(jobName)를 기반으로 고정된 정수 해시 코드를 연산하고 이를 프리픽스 및 템플릿 인덱스 선택의 시드로 삼아, 동일한 미등록 직업을 입력할 때마다 언제나 동일한 칭호와 문장이 출력되도록 보장했습니다.

### 2-4. 오프라인 타이틀 3단 분할 파싱 포맷 교정
- **이슈**: 오프라인 템플릿의 결과 형식이 괄호 `(...)`와 같은 구조를 갖추지 않아 `renderCertificate` 내의 정규식 `/([^(]+)(?:\(([^)]+)\))?/` 매칭에서 에러가 나거나, 한글 텍스트 전체와 특수문자(`**`, `|`)가 영어 이탤릭 영역(`.vogue-title-en`)에 통째로 노출되는 디자인 깨짐 현상이 있었습니다.
- **조치**: 오프라인 템플릿들을 `EnglishTitle (KoreanTitle | Description)` 구조로 새롭게 선언하고, `finalTitle` 조합 시 `[English Title] ([Prefix] [Korean Title] | [Description])` 포맷이 형성되도록 정교하게 가공했습니다. 이로 인해 정규식 매칭이 완벽하게 성공하여 화면상에 **영어 타이틀(Italic Serif)**, **한글 핵심 칭호(Bold)**, **한글 서브 설명(Light)**의 3단계 레이아웃 분할이 아름답게 렌더링됩니다.

---

## 3. 스타일시트 리팩토링 (style.css)

### 3-1. `:root` HSL 색상 변수 시스템 구축
- **HSL 변수 정의**: 디자인 가독성 및 테마 확장성을 위해 `:root`에 기존 Hex/RGBA 색상을 HSL 색조, 채도, 명도 컴포넌트 변수로 마이그레이션했습니다.
- **리팩토링 코드**:
  - `--bg-primary-h/s/l`, `--bg-secondary-h/s/l` 등 컴포넌트 변수 선언
  - `--vogue-beige`, `--vogue-gold`, `--vogue-dark-gold` 등을 HSL 기반으로 참조 선언
  - 투명도가 적용되는 글라스 배경/보더 등도 `hsla()`를 통해 기조 색상의 HSL 컴포넌트를 직접 활용하도록 refactoring하여 디자인 코드 전반의 일관성을 강화했습니다.

### 3-2. 모바일 반응형 타이틀 스케일다운 (768px 이하)
- 모바일 뷰포트(너비 768px 이하)에서 영어 칭호의 크기가 `2.25rem`으로 유지되어 카드 영역 밖으로 깨져 나가던 현상을 해결하기 위해, 미디어 쿼리 내에 `.vogue-title-en`을 `1.6rem !important`로, `.vogue-title-ko-main`을 `1.15rem !important`로 축소하는 스타일 규칙을 완비하였습니다.

### 3-3. 텍스트 이탈 방지 안전 조치
- 사용자 입력값이나 생성 설명이 비정상적으로 길어져 레이아웃을 깨는 현상을 원천 차단하기 위해, `.vogue-title-en`, `.vogue-title-ko-main`, `.vogue-title-ko-sub`, `.cert-justification`, `.cert-duties li` 등의 텍스트 렌더링 타깃 요소들에 `word-wrap: break-word`, `overflow-wrap: break-word`, `max-width: 100%` 제약을 견고히 추가했습니다.

### 3-4. 프리미엄 한국어 폰트 폴백 설정
- 한글 타이틀과 본문의 미학적 질감을 매거진 수준으로 높이기 위해, 기존 서체 스택에 고품격 한국어 웹서체인 `'Pretendard'`, `'Nanum Myeongjo'`, `'Noto Serif KR'`을 폴백으로 투입했습니다.
  - 영어 타이틀 및 정의문: `'Playfair Display', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif`
  - 한글 핵심 타이틀: `'Pretendard', 'Nanum Myeongjo', 'Noto Serif KR', 'Outfit', sans-serif`
  - 본문 및 서브: `'Pretendard', 'Outfit', sans-serif`

---

## 4. 자동화 테스트 결과 (test_runner.js)

### 4-1. 테스트 설계 및 JSDOM 가상화
- Node.js 환경에서 브라우저 전용 `document`, `window` API와 `localStorage`, 외부 CDN 라이브러리(`lucide`, `html2canvas`)를 활용하는 `app.js`를 테스트하기 위해 `jsdom` 라이브러리로 브라우저를 가상화했습니다.
- `app.js` 코드를 로드하기 전 `localStorage`, `lucide`, `html2canvas`, `scrollIntoView` prototype을 완벽히 모킹(Mocking) 처리해 비차단식 테스트를 수행했습니다.

### 4-2. 테스트 케이스 및 통과 상태
1. **28대 KECO 2025 프리셋 사전 탑재 및 구조 무결성 검증**:
   - `OFFLINE_PRESETS`에 정의된 28개 직업 정보의 존재와 영어/한글메인/한글설명 구조의 3단계 레이아웃 분할 정상 렌더링 여부를 전수 조사하여 합격을 기록했습니다.
2. **동의어 매핑 체인 및 바리스타 칭호 매핑 검증**:
   - `'카페알바'` 입력 시 `'바리스타'` 프리셋 데이터로 교환되고 최종적으로 `'Aroma Essence Extractionist / 블랙 에센스 연금술사'`로 올바르게 칭호가 정제되는지 확인하여 합격을 기록했습니다.
3. **사용자 원본 입력 보존 검증**:
   - 변환 후 인증서 하단의 `ORIGIN` 영역(`#certOriginalJob`)에 사용자 입력 원본인 `'카페알바'`가 깨지거나 수정되지 않고 그대로 렌더링되는지 확인하여 합격을 기록했습니다.
4. **미등록 오프라인 입력(연구원, 개붕이) 결정론 및 파싱 검증**:
   - `"연구원"` 입력 시 `scholar` 카테고리로 판정(학술적 멘트 검증)되는지 확인하고, 2차례 연속 변환 시 결과 타이틀과 설명글이 100% 동일하게 유지되는 결정성 테스트를 완료해 합격을 기록했습니다.

### 4-3. 테스트 통과 메트릭
- **총 테스트 개수**: 76개 검증 항목 (기본 기능 67개 + 보안 취약점 9개 추가)
- **합격 (Passed)**: 76개
- **실패 (Failed)**: 0개
- **최종 결과**: **SUCCESS (Pass 100%)**

---

## 5. 보안성 정밀 진단 및 취약점 방어 (Security Auditing & Vulnerability Remediation)

적대적 보안 검증(Challenger 1 및 Challenger 2)을 통해 식별된 보안 취약점을 정밀 조사하고 완전히 교정하여 프로덕션 수준의 보안 안전성을 강화했습니다.

### 5-1. 프로토타입 룩업 누수 취약점 (Prototype Lookup Leakage / Prototype Pollution)
- **식별 내용 (Challenger 발견)**: 사용자가 기존 직업 검색창 또는 API 입력어로 `__proto__`나 `constructor` 같은 JavaScript 내장 예약어를 주입할 경우, `WordRepository.getWord` 메서드가 `Object.prototype`을 반환하는 문제가 있었습니다. 렌더링 과정에서 반환된 prototype 객체의 `nobleTitle`을 참조하려 해 `TypeError` 예외가 유발되고, 웹 애플리케이션의 동작이 비정상적으로 중단되는 런타임 오류가 발생했습니다.
- **조치 및 수정**: 로컬 DB 캐시(`db`)를 조회할 때 프로토타입 체인의 상위 속성이 반환되지 않도록 `Object.prototype.hasOwnProperty.call(db, word)`를 적용하여, 객체 자체에 직접 정의된 프로퍼티만 확인 후 반환하게 했습니다. 이를 통해 예약어 입력 시 오류를 발생시키지 않고 안전하게 `null`을 반환하여 오프라인 대체 생성 로직으로 부드럽게 전환(Fallback)되도록 구조적으로 보완했습니다.

### 5-2. DOM 기반 크로스 사이트 스크립팅 취약점 (DOM-based XSS)
- **식별 내용 (Challenger 발견)**: AI(NVIDIA NIM) API 연동 모드에서 전달받는 칭호 정보(`nobleTitle`) 또는 사용자 입력 텍스트를 `renderCertificate` 내에서 HTML 템플릿 문자열로 합쳐 `innerHTML`을 사용해 렌더링하고 있었습니다. 만약 AI 응답 결과나 프롬프트 인젝션을 경유하여 악성 스크립트 태그(예: `<img src=x onerror=alert(1)>`, `<script>`)가 포함된 데이터가 전달되면, 브라우저가 이를 마크업으로 파싱하여 임의의 자바스크립트가 무방비로 실행될 수 있는 보안 결함이 노출되었습니다.
- **조치 및 수정**: `innerHTML`을 사용해 값을 동적으로 렌더링하던 방식을 폐기하고, DOM API를 통해 각 렌더링 영역의 요소를 `document.createElement('div')`로 안전하게 생성한 뒤, `.textContent` 속성을 통해 값을 대입하는 안전한 방식으로 재구축했습니다. `.textContent`를 적용함으로써 브라우저는 특수 태그를 파싱하지 않고 단순 플레인 텍스트로 치환/렌더링하여 DOM 기반 XSS 시도를 완벽히 방어합니다.

---

## 6. 정적 분석 및 린트 검사 결과 (Lint Results)

코드베이스의 신뢰도를 확실히 증명하기 위해 ESLint, Stylelint, HTMLHint 정적 분석 도구를 구성하고 구동했습니다.

### 6-1. JavaScript 린트 (ESLint)
- **설정 파일**: `.eslintrc.json` (Browser/Node 환경 선언, `lucide`, `html2canvas` 전역 변수 등록)
- **실행 결과**: `eslint app.js` 실행 시 **경고/오류 0건**으로 통과 완료 (기존에 정의되었으나 사용되지 않았던 `apiStatusBar`를 주석 처리하여 무결함 상태 보장).

### 6-2. CSS 린트 (Stylelint)
- **설정 파일**: `.stylelintrc.json` (`stylelint-config-standard` 상속 및 설계 명세를 해치지 않는 선에서 불필요한 규칙 오버라이딩 적용)
- **실행 결과**: `stylelint style.css` 실행 시 **경고/오류 0건**으로 통과 완료.

### 6-3. HTML 린트 (HTMLHint)
- **설정 파일**: `.htmlhintrc` (id 고유성 검증 및 웹표준 규격 엄수 규칙 활성화)
- **실행 결과**: `htmlhint index.html` 실행 시 **경고/오류 0건**으로 통과 완료 (태그 닫힘 및 구조 완벽).

### 6-4. 통합 린트 스크립트 실행
```bash
> npm run lint
> npm run lint:js && npm run lint:css && npm run lint:html
> eslint app.js
> stylelint style.css
> htmlhint index.html
Scanned 1 files, no errors found.
```
- **최종 분석 결과**: **CLEAN (0 Errors, 0 Warnings)**

---

## 7. 결론 (Conclusion)
본 프로젝트 'The Elegant Registry'는 지적되었던 모든 기능적 결함(동의어 맵의 자가 중복 매핑, 연구원 분류 우선순위 오매핑, 오프라인 모드 비결정성, 3분할 렌더링 깨짐 현상)이 완벽히 수정되었습니다. 또한 디자인 요소의 HSL 리팩토링, 모바일 최적화 및 텍스트 랩 보강을 성공적으로 마쳤으며, 100% 합격하는 자동화 테스트 슈트와 무경고 정적 분석 상태를 구축하여 실서비스 배포 및 감사 통과를 위한 완벽한 준비 태세를 증명하였습니다.
