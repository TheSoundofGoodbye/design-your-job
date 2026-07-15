// ============================================================================
// MASTERPIECE OFFLINE PRESETS (VOGUE/EDITORIAL MODE - KECO 2025 STANDARD)
// ============================================================================
// 고용노동부 공식 ｢한국고용직업분류 2025｣ 세분류 체계를 기준으로 사전에 
// 수집·설계된 28대 마스터피스 로컬 직업 사전입니다.
// 포맷: (핵심 칭호명 | 한 줄 요약 설명) 구조로 개행 렌더링을 지원합니다.
// ============================================================================
const OFFLINE_PRESETS = {
  "경영컨설턴트": {
    nobleTitle: "Corporate Vision Alchemist (경영 연금술사 | 조직의 비전을 분석하고 성장을 유도한다.)",
    justification: "기업과 자본의 복잡한 물리 법칙 속에서 숨은 비효율을 진단하고, 지속 가능한 도약의 공식을 찾아 처방하는 전략의 연금술사. 지혜로운 논리와 세련된 통찰로 조직에 새로운 활력의 아우라를 불어넣는 비즈니스 안내자이다.",
    duties: [
      "조직의 비효율 및 결핍 요소를 객관적인 수치로 모니터링",
      "기업의 지속 가능한 발전을 유도하는 로드맵 처방",
      "이해관계자 간의 마찰을 해소하는 가치 조화 프레임 제공"
    ]
  },
  "세무사": {
    nobleTitle: "Fiscal Flow Navigator (세무 설계 가이드 | 가계와 기업의 세무 안전 지대를 지켜낸다.)",
    justification: "복잡하게 얽힌 세법의 격자 그리드 위에서, 소중한 자산이 불필요하게 낭비되지 않도록 합리적인 통로를 설계하는 금융의 세련된 수호자. 합법적인 권익을 사수하며 자본의 건전성을 조율하는 신뢰할 수 있는 도우미이다.",
    duties: [
      "소득 및 자산 거래에 따른 정밀한 세무 리스크 스캔",
      "납세 의무의 성실한 이행과 동시에 합리적인 절세 방안 제공",
      "복잡한 법률 서류 절차를 투명하게 대리 집행"
    ]
  },
  "마케팅 사무원": {
    nobleTitle: "Brand Trend Curator (트렌드 분석 파트너 | 매혹적인 상품 가치와 메시지를 전파한다.)",
    justification: "대중의 마음속 흐름과 욕망의 지도를 민첩하게 파악하여, 브랜드의 가치를 가장 트렌디하고 우아한 메시지로 변환해 닿게 만드는 감각적인 브랜드 전문가. 시장의 소리를 큐레이팅하여 가치를 창출하는 시대의 기획자이다.",
    duties: [
      "소비자의 구매 트렌드 및 시장 니즈 패턴 분석",
      "브랜드 가치를 가장 매혹적인 스토리텔링으로 가공하여 상신",
      "효과적인 프로모션 미디어를 설계하고 소통 반응 체크"
    ]
  },
  "비서": {
    nobleTitle: "Strategic Schedule Director (시크 조력자 | 핵심 의사 결정을 정교한 디테일로 보좌한다.)",
    justification: "의사 결정자가 오직 미래 지향적인 핵심 가치에만 전념할 수 있도록, 시간과 여정의 그리드를 빈틈없이 정돈하는 은밀한 비즈니스 파트너. 고요하고 완벽하게 보좌하며 리더의 아우라를 완성하는 섬세한 조율사이다.",
    duties: [
      "비즈니스 파트너의 일일 일정 및 동선 최적화 설계",
      "대내외 커뮤니케이션의 격조 높은 매너와 의전 수련",
      "핵심 업무에 집중할 수 있는 쾌적한 비즈니스 환경 연출"
    ]
  },
  "소프트웨어 개발자": {
    nobleTitle: "Digital Matrix Builder (프로그래밍 아티스트 | 밤을 지새우며 무형의 소스코드로 세상을 설계한다.)",
    justification: "모두가 잠든 고요한 시각, 모니터 너머의 가상 영토를 정교한 알고리즘과 논리로 설계해나가는 현대의 디지털 아티스트. 그가 써내려간 수많은 소스코드는 보이지 않는 곳에서 문명 시스템을 작동시키는 위대한 보이지 않는 기둥이다.",
    duties: [
      "디지털 세계 내 발생하는 복잡한 버그와 장애의 토벌",
      "밤샘 고독 속에서 발현되는 정밀한 제어 로직 수련",
      "커피와 집중력을 연금하여 문명을 지탱하는 동력원 유지"
    ]
  },
  "데이터 분석가": {
    nobleTitle: "Pattern Insight Reader (데이터 독서가 | 데이터 속 흐름을 포착하여 미래를 준비한다.)",
    justification: "무분별하게 쏟아지는 수치와 텍스트의 파도 속에서, 숨겨진 진실의 형태를 통계적 혜안으로 길어 올리는 정보의 수집가. 정형과 비정형의 경계를 넘어 보이지 않는 인과관계를 읽어내는 날카로운 분석가이다.",
    duties: [
      "빅데이터 인프라 속 가치 있는 정보의 신속한 스캔 및 추출",
      "머신러닝 등 다양한 예측 모델링을 통한 트렌드 도출",
      "추출된 패턴을 명쾌하고 매혹적인 비주얼로 표현 및 기안"
    ]
  },
  "정보보안 전문가": {
    nobleTitle: "Cyber Aegis Warden (보이지 않는 가디언 | 외부 침입의 매트릭스 속에서 자산을 안전하게 봉쇄한다.)",
    justification: "디지털 네트워크 영토의 외곽 성벽을 굳건히 수호하며, 보이지 않는 사이버 위협을 실시간으로 감지하고 소멸하는 가상의 파수꾼. 핵심 정보와 자산의 평화를 지키는 든든한 방패이다.",
    duties: [
      "외부 침입 침투의 흔적을 기민하게 추적 및 실시간 방어",
      "보안 정책의 철저한 엄수와 시스템 취약점의 사후 모니터링",
      "암호화 모듈 제어를 통해 자산의 철통같은 안전 보장"
    ]
  },
  "반도체공학 기술자": {
    nobleTitle: "Micro-Silicon Architect (실리콘 조각가 | 초정밀 회로 공정을 조율하며 미래 가치를 빚는다.)",
    justification: "나노 그리드 단위의 실리콘 웨이퍼 위에 현대 기계 문명의 뇌세포를 직접 조각해 넣는 초정밀 공학 기술자. 무기물에 생각의 불씨를 불어넣는 그의 묵묵한 공정은 정보화 시대를 지탱하는 거룩한 문명의 동력원이다.",
    duties: [
      "초정밀 실리콘 웨이퍼 회로 설계 및 집적도 극대화",
      "미세 공정 중 발생하는 돌발 결함을 사전에 탐지하고 통제",
      "물리적 한계를 돌파하는 새로운 반도체 소자의 연구 수련"
    ]
  },
  "대학교수": {
    nobleTitle: "Intellectual Knowledge Pioneer (학술 연구의 등대 | 깊은 탐구와 강연을 통해 다음 지평을 이끈다.)",
    justification: "인류가 이룩해 온 학문적 영토의 경계선에 서서, 끊임없는 탐구로 새로운 지식의 깃발을 꽂는 지성의 탐험가. 학술적 사색과 멘토링을 통해 내일의 세상을 이끌 젊은 학도들을 성숙한 방향으로 인도하는 지혜로운 스승이다.",
    duties: [
      "전공 분야의 고난도 논문 집필 및 학술지 상신 수련",
      "대학 강당에서의 격조 높고 영감을 자극하는 명강의 수행",
      "학업과 진로에 방황하는 제자들을 위한 사려 깊은 멘토링 제공"
    ]
  },
  "변호사": {
    nobleTitle: "Justice Shield Ambassador (정의의 대변인 | 의뢰인의 안전과 법적 권리를 호위한다.)",
    justification: "복잡하게 얽힌 법률의 정글 속에서 의뢰인의 무고함과 정당한 권익을 사수하기 위해 출정하는 논리와 언어의 호위관. 냉철한 논리 전개와 뜨거운 인간애를 바탕으로 정의의 법정을 이끌어가는 비즈니스 수호자이다.",
    duties: [
      "사건 변론에 필요한 객관적 증거 및 선례 판례의 정밀 조사",
      "사법 기관 앞에서 의뢰인의 입장을 매끄럽게 대변하는 변론 수행",
      "법률적 분쟁의 리스크를 미연에 필터링하는 사전 컨설팅 제공"
    ]
  },
  "경찰관": {
    nobleTitle: "Urban Safety Guardian (밤의 수호자 | 시민들의 안전한 일상을 위해 무질서를 통제한다.)",
    justification: "사회의 어두운 여백과 위험한 골목 속으로 망설임 없이 순찰을 나서며, 이웃들의 소중한 평화를 지키는 실제적 영웅. 무질서와 위협을 사전에 통제하여 도시의 혈류가 평온하게 흐르도록 지탱하는 정의의 기둥이다.",
    duties: [
      "관할 영토 내 발생 가능한 돌발 위험 요소를 성실히 모니터링",
      "시민의 재산과 생명을 위협하는 무법 요소에 대한 엄격한 토벌",
      "질서 유지를 기본으로 이웃들의 안전한 귀가를 인도"
    ]
  },
  "소방관": {
    nobleTitle: "Flame Fighter (강철 심장 전사 | 두려움 없이 화마 속으로 출정하여 인명을 구원한다.)",
    justification: "모두가 도망치는 뜨겁고 위험한 재난 현장 속으로 오직 헌신의 깃발만을 들고 진입하는 용기 있는 영웅. 붉은 불길과 유독가스에 굴하지 않고, 문명이 이룩한 재산을 지켜내는 숭고한 존재이다.",
    duties: [
      "재난 경보 발생 시 즉각 기동 장비를 조작하여 현장 출정",
      "위험에 처한 생명을 구출하고 물리적 위험을 사전에 통제",
      "평시 장비의 완벽한 기능 점검 및 철저한 체력 훈련 수련"
    ]
  },
  "부사관": {
    nobleTitle: "Mil-Grid Backbone Captain (강철 중추 가이드 | 안보 전선에서 대원들을 숙련되게 결속한다.)",
    justification: "국방 인프라의 최전선과 중간 기점에서 장교의 명령을 성실히 실현하고 대원들의 실전 역량을 훈련시키는 군대의 든든한 뼈대. 궂은 일과 훈련의 고단함을 묵묵히 인내하며 평화의 영토를 수호하는 강인한 애국자이다.",
    duties: [
      "부대 내 다양한 방어 장비 및 물자의 완벽한 관리 집행",
      "대원들의 실전 전술 능력과 강인한 평정심을 조율하는 수련 가이드",
      "안보 전선 내 비상 상황 발생 시 기민하게 대처하는 조력자 임무"
    ]
  },
  "전문 의사": {
    nobleTitle: "Vitality Harmony Restorer (웰니스 조율사 | 생체의 해부학적 질서와 에너지를 회복한다.)",
    justification: "인체라는 신비롭고 복잡한 소우주의 생리적 질서가 깨졌을 때, 현대의 과학과 정교한 손길로 무질서를 몰아내고 온전한 생기를 복원하는 생명의 수호자. 환자의 고통에 사려 깊게 귀를 기울이며 신체 밸런스를 건강하게 가꾸는 치유가이다.",
    duties: [
      "정밀 의료 기기를 통한 신체의 생체 신호 정밀 스캔",
      "적절한 수술 치료와 의학적 솔루션을 통한 고통의 소멸",
      "건강한 생명 순환을 돕기 위한 라이프스타일 웰니스 설계"
    ]
  },
  "약사": {
    nobleTitle: "Bio-Chemical Curator (라이프 케미스트 | 조화로운 처방 조제를 통해 생체 에너지를 안배한다.)",
    justification: "수많은 생화학 물질의 메커니즘을 명민하게 이해하여, 개인의 질병 극복과 면역에 최적화된 처방을 안배하고 약학 에너지를 믹싱하는 연금술사. 친절한 미소와 올바른 복약 지도로 이웃들의 일상 건강에 소리 없이 기여한다.",
    duties: [
      "의사의 의학적 처방전을 바탕으로 정밀한 약학 물질 배합",
      "오용과 남용의 위험을 사전에 차단하는 꼼꼼한 처방 필터링",
      "고객의 건강 향상을 돕기 위한 친절하고 상세한 라이프 복약 지도"
    ]
  },
  "간호사": {
    nobleTitle: "Empathy Care Director (에센셜 가디언 | 환자의 상태를 실시간 스캔하며 포근한 회복을 연출한다.)",
    justification: "치유의 최전선 병상 곁에서 24시간 환자의 생체 반응을 정밀히 관찰하고, 포근한 지지와 전문적인 의료 서비스를 제공하는 따뜻한 치유의 등대. 그의 성실한 보살핌은 지친 영혼이 건강을 되찾고 다시 세상으로 나아가게 만드는 든든한 날개이다.",
    duties: [
      "환자의 체온, 맥박 등 다양한 생명 징후의 성실한 기록 스캔",
      "의학적 처방에 따른 정밀한 수액 및 의약품 주입 제어",
      "정서적 평안을 유지하는 따뜻한 친절과 쾌적한 입원 환경 조성"
    ]
  },
  "작가": {
    nobleTitle: "Text Scenario Archivist (온라인 문필가 | 독창적인 플롯과 서사로 대중의 영혼을 울린다.)",
    justification: "하얀 백지라는 광활한 우주 위에, 자신만의 영감과 텍스트로 생생한 인물과 서사를 창조해 내는 시대의 예술가. 그의 펜 끝에서 탄생한 이야기들은 대중의 고단한 일상을 위로하고 새로운 사유의 지평을 열어 준다.",
    duties: [
      "독창적이고 긴장감 넘치는 에디토리얼 시나리오 및 플롯 구상",
      "독자들의 이목을 집중시키는 세련되고 감각적인 언어 연금술",
      "시대의 시대정신과 흐름을 명민하게 포착하여 작품에 반영"
    ]
  },
  "시각 디자이너": {
    nobleTitle: "Aesthetic Grid Director (시각 디렉터 | 무형의 레이아웃에 황금 비율의 미학을 안착시킨다.)",
    justification: "정돈되지 않은 픽셀과 정보의 바다에, 황금 비율과 매혹적인 컬러 팔레트를 적용하여 가장 우아한 시각적 질서를 조각해 내는 감각적인 디자이너. 브랜드와 제품에 시각적 영혼을 불어넣는 시대의 미학가이다.",
    duties: [
      "타깃 브랜드에 최적화된 우아하고 세련된 비주얼 컨셉 기획",
      "사용성(UI)과 심미성의 조화를 꾀하는 레이아웃 및 픽셀 조율",
      "미적인 즐거움을 넘어 가치를 가장 직관적으로 소통하게 도안"
    ]
  },
  "미디어 콘텐츠 창작자": {
    nobleTitle: "Digital Stream Curator (트렌드 아티스트 | 감각적인 콘텐츠로 시대의 공감대를 중계한다.)",
    justification: "글로벌 미디어 플랫폼 채널을 통해 나만의 개성과 영감 가득한 영상을 선보이며, 국경을 넘어 수많은 구독자들과 끈끈히 소통하는 디지털 시대의 개척자. 세상의 주목을 이끌고 문화를 주도하는 현대의 트렌드 메이커이다.",
    duties: [
      "독창적이고 유익한 기획과 세련된 비주얼의 영상 촬영",
      "시청 템포를 지루하지 않게 안배하는 감각적인 연출 에디팅",
      "피드백 채널을 통한 글로벌 팬덤과의 활발한 소셜 소통망 유지"
    ]
  },
  "프로게이머": {
    nobleTitle: "Cyber Arena Gladiator (가상 영토 검투사 | 미크론 단위의 손가락 기동으로 가상의 전장을 정복한다.)",
    justification: "가상 경기장 내 격렬한 픽셀 격돌 속에서, 찰나의 프레임을 제어하는 신들린 반응 속도로 팀을 승리로 이끄는 디지털 시대의 아틀리에 전사. 그의 마우스 클릭 하나는 단순한 게임을 예술적인 스포츠의 지평으로 격상시킨다.",
    duties: [
      "매일 계속되는 한계 돌파형 피지컬 및 멘탈 트레이닝",
      "가상 전장의 전술적 구조 및 상대 동선을 역추적하는 영리한 플레이 설계",
      "찰나의 위기 속에서도 흔들림 없는 강철 같은 집중력 유지"
    ]
  },
  "미용사": {
    nobleTitle: "Personal Aura Designer (헤어 아티스트 | 모발의 미학적인 컷과 컬을 도회적으로 디자인한다.)",
    justification: "고객이 가진 고유한 개성과 아우라를 분석하여, 그를 가장 돋보이게 만들 특별한 헤어 스타일을 디자인해 주는 이미지 컨설턴트. 섬세한 가위질 속에서 고객의 자신감을 돋우어 주는 미의 공간 속 큐레이터이다.",
    duties: [
      "고객의 두상 및 개별 이미지 트렌드에 적합한 스타일 가이드 제안",
      "정교한 커트와 조화로운 약제 믹싱을 통한 세련된 헤어 실현",
      "화학 약제의 주기적인 안전 규정 엄수 및 기구의 청결 소독 관리"
    ]
  },
  "호텔 프런트 사무원": {
    nobleTitle: "Luxury Welcome Ambassador (프런트 에스코트 | 품격 있는 미소로 여행객의 피로를 안아준다.)",
    justification: "환대의 미학이 완성되는 호텔의 첫 얼굴로서, 먼 여정을 지나온 여행객들에게 안락한 귀환을 안내하는 비즈니스 특사. 의뢰인의 체크인 순간부터 체크아웃까지 격조 높은 서비스를 제공하는 럭셔리 라이프스타일 가이드이다.",
    duties: [
      "객실 배정 시스템의 신속한 조율 및 세련된 웰컴 에스코트",
      "고객의 다양한 요구사항에 기민하게 대처하여 솔루션 제공",
      "호텔의 고품격 아우라를 완성하는 기품 있는 애티튜드 유지"
    ]
  },
  "바리스타": {
    nobleTitle: "Aroma Essence Extractionist (블랙 에센스 연금술사 | 커피 원두 속 대지의 숨결을 정제한다.)",
    justification: "엄선된 에스프레소 원두에서 물의 온도와 압력을 영리하게 통제하여, 대지가 머금었던 고귀한 아로마 향을 액체 상태로 정제하는 미각의 조율사. 커피 한 잔에 일상의 평화와 예술적인 온기를 담아 고객의 손길에 전해주는 든든한 멘토이다.",
    duties: [
      "원두의 신선한 상태 관리 및 정밀한 굵기로 그라인딩 집행",
      "에스프레소 머신의 온도 압력 그리드를 최적의 상태로 제어",
      "고객의 취향에 맞는 조화로운 밀크 믹싱 및 아트 연출"
    ]
  },
  "건물 청소원": {
    nobleTitle: "Space Minimalist (환경 디렉터 | 공간의 미학을 가꾸며 청결과 질서를 복원한다.)",
    justification: "세상이 쉼 없이 흘려보낸 무질서와 어지러움을 정돈하고, 본연의 맑고 깨끗한 질서를 복원해내는 보이지 않는 거장. 그가 지나간 공간은 태초의 단순함과 쾌적함을 되찾으며, 우리의 일상을 지탱하는 가장 헌신적이고 고귀한 조율이다.",
    duties: [
      "일상 영토 내 무질서한 잔해물들의 완벽한 정화 작업",
      "이웃들의 안전하고 쾌적한 보행과 호흡을 위한 환경 조성",
      "청결의 미학을 바탕으로 공간에 새로운 생기를 부여"
    ]
  },
  "기술 영업원": {
    nobleTitle: "Frontier Solution Ambassador (비즈니스 특사 | 최접점에서 가치를 중개하는 솔루션 전문가)",
    justification: "기업이 이룩한 고도의 기술 가치를 명쾌하고 설득력 있는 비즈니스 언어로 번안하여, 고객에게 가닿게 만드는 시장 전선의 비즈니스 특사. 고객의 니즈를 꿰뚫어 보며 가장 조화로운 기술 솔루션을 중개하는 금융 외교관이다.",
    duties: [
      "최첨단 기술 트렌드 및 타깃 시장의 리스크 정밀 스캔",
      "기술적 펀더멘털을 바탕으로 한 프레젠테이션 수련",
      "고객 관계를 평화롭고 지속 가능하게 유지하는 섬세한 사후 케어"
    ]
  },
  "늘찬배달원": {
    nobleTitle: "Urban Velocity Courier (신속 보급 전령 | 도시의 거리를 달려 따뜻한 온기를 연결한다.)",
    justification: "온 영토의 사람들에게 따뜻한 식사와 꼭 필요한 물품을 빠르게 수송하여 공간의 경계를 허무는 속도의 미학가. 궂은 날씨 속에서도 바람을 가르며 도로를 누비는 그의 열정은 정체될 뻔한 도시에 온기와 연결감을 전하는 고마운 발걸음이다.",
    duties: [
      "기동 장비를 안전하고 미안하게 운용하여 단시간에 목표지 도달",
      "수송 물품의 신선도와 적정 온도를 소중히 지켜내는 보호 임무",
      "도심 속 혼잡한 도로망을 슬기롭게 돌파하는 민첩한 기동"
    ]
  },
  "택배원": {
    nobleTitle: "Logistics Arterial Captain (화물 기동 사령관 | 대륙의 물류 동맥을 수호하며 대량 수송을 완수한다.)",
    justification: "도시와 도시를 잇는 거대한 고속 도로망 그리드를 종횡무진하며, 문명이 필요로 하는 대규모 산업 자재와 생활 보급품을 묵묵히 대량 수송하는 대륙의 항해사. 거대한 스티어링 휠을 잡은 그의 긴 밤샘 운행은 한 국가의 산업과 혈류를 실시간으로 가동하는 가장 웅장하고 거룩한 기동이다.",
    duties: [
      "거대 운송 장비를 안전하고 숙련되게 운용하여 대륙 간 장거리 수송 완수",
      "화물의 안전한 적재 상태 및 물리적 보호 상태의 실시간 검증",
      "장시간 야간 항해(운행) 중 졸음과 피로를 물리치기 위한 체력 및 멘탈 조율"
    ]
  },
  "택시기사": {
    nobleTitle: "Urban Mobility Specialist (어반 내비게이터 | 복잡한 도심 도로망을 기민하고 안전하게 달린다.)",
    justification: "복잡하게 얽힌 현대 도심의 도로망 그리드를 지혜롭게 파악하여, 바쁜 승객들을 목적지까지 정확히 모시는 기동 서비스 전문가. 그는 매일 불특정 다수의 다양한 사연을 품고 달리는 바퀴 위의 이동 상담소이자, 도시의 활기찬 물류 흐름을 잇는 베테랑 항해사이다.",
    duties: [
      "도심 내 실시간 정체 차로를 회피하는 영리한 노선 네비게이션",
      "탑승객이 이동 시간 동안 쾌적하고 편안하게 쉴 수 있는 승차 환경 조성",
      "운송 장비의 주기적인 기계 결함 검진 및 최적의 청결 상태 유지"
    ]
  }
};

// ============================================================================
// SYNONYM BINDING MAP (동의어 및 파생어 그룹화 사전)
// ============================================================================
const SYNONYM_MAP = {
  // 0. 경영·사무·금융·보험 계열
  "컨설턴트": "경영컨설턴트", "창업컨설턴트": "경영컨설턴트", "비즈니스컨설턴트": "경영컨설턴트",
  "세무공무원": "세무사", "회계사": "세무사", "관세사": "세무사",
  "마케터": "마케팅 사무원", "마케팅": "마케팅 사무원", "홍보": "마케팅 사무원", "광고기획": "마케팅 사무원", "기획자": "마케팅 사무원", "홍보대행": "마케팅 사무원",
  "수행비서": "비서", "개인비서": "비서", "수행원": "비서",
  
  // 1. 연구 및 공학 기술 계열
  "개발자": "소프트웨어 개발자", "코더": "소프트웨어 개발자", "프로그래머": "소프트웨어 개발자", "엔지니어": "소프트웨어 개발자", "컴공": "소프트웨어 개발자", "소프트웨어": "소프트웨어 개발자", "앱개발자": "소프트웨어 개발자",
  "데이터분석가": "데이터 분석가", "데이터분석": "데이터 분석가", "분석가": "데이터 분석가", "통계학자": "데이터 분석가", "데이터사이언티스트": "데이터 분석가",
  "보안전문가": "정보보안 전문가", "정보보안": "정보보안 전문가", "해커": "정보보안 전문가", "보안관제": "정보보안 전문가", "포렌식": "정보보안 전문가",
  "반도체": "반도체공학 기술자", "반도체설계": "반도체공학 기술자", "공정설계": "반도체공학 기술자", "웨이퍼공정": "반도체공학 기술자",
  
  // 2. 교육·법률·경찰·소방·군인 계열
  "교수": "대학교수", "학장": "대학교수",
  "법무사": "변호사", "검사": "변호사", "판사": "변호사", "변리사": "변호사",
  "경찰": "경찰관", "순경": "경찰관", "형사": "경찰관",
  "소방대원": "소방관", "119": "소방관", "구조대원": "소방관",
  "군인": "부사관", "하사": "부사관", "중사": "부사관", "장교": "부사관", "직업군인": "부사관",
  
  // 3. 보건·의료 계열
  "의사": "전문 의사", "전문의": "전문 의사", "한의사": "전문 의사", "치과의사": "전문 의사", "레지던트": "전문 의사",
  "한약사": "약사", "약제사": "약사",
  "간호조무사": "간호사", "수간호사": "간호사",
  
  // 4. 예술·디자인·방송·스포츠 계열
  "소설가": "작가", "시나리오작가": "작가", "문필가": "작가", "웹소설작가": "작가",
  "디자이너": "시각 디자이너", "웹디자이너": "시각 디자이너", "시각디자이너": "시각 디자이너", "일러스트레이터": "시각 디자이너",
  "유튜버": "미디어 콘텐츠 창작자", "크리에이터": "미디어 콘텐츠 창작자", "인플루언서": "미디어 콘텐츠 창작자", "BJ": "미디어 콘텐츠 창작자",
  "게이머": "프로게이머", "e스포츠": "프로게이머",
  
  // 5. 미용·여행·숙박·음식·경비·청소 계열
  "헤어디자이너": "미용사", "이용사": "미용사", "메이크업": "미용사",
  "호텔리어": "호텔 프런트 사무원", "벨맨": "호텔 프런트 사무원", "도어맨": "호텔 프런트 사무원", "프런트": "호텔 프런트 사무원",
  "카페알바": "바리스타", "카페직원": "바리스타", "조주사": "바리스타",
  "환경미화원": "건물 청소원", "미화원": "건물 청소원", "청소부": "건물 청소원", "청소": "건물 청소원",
  
  // 6. 영업·판매·운전·운송 계열
  "영업": "기술 영업원", "세일즈": "기술 영업원", "영업사원": "기술 영업원", "딜러": "기술 영업원",
  "배달": "늘찬배달원", "라이더": "늘찬배달원", "딸배": "늘찬배달원", "퀵": "늘찬배달원", "퀵서비스": "늘찬배달원", "배민": "늘찬배달원", "쿠팡이츠": "늘찬배달원", "요기요": "늘찬배달원",
  "택배": "택배원", "화물": "택배원", "화물기사": "택배원", "트럭커": "택배원", "트럭기사": "택배원", "택배기사": "택배원", "쿠팡맨": "택배원",
  "택시": "택시기사", "개인택시": "택시기사"
};

// ============================================================================
// DATABASE INTERFACE (REPOSITORY PATTERN)
// ============================================================================
const WordRepository = {
  async getWord(word) {
    try {
      const db = JSON.parse(localStorage.getItem('elegant_job_db') || '{}');
      if (db && typeof db === 'object' && Object.prototype.hasOwnProperty.call(db, word)) {
        return db[word];
      }
      return null;
    } catch (e) {
      console.error("Local DB read error:", e);
      return null;
    }
  },

  async saveWord(word, data) {
    try {
      const db = JSON.parse(localStorage.getItem('elegant_job_db') || '{}');
      db[word] = data;
      localStorage.setItem('elegant_job_db', JSON.stringify(db));
      return true;
    } catch (e) {
      console.error("Local DB write error:", e);
      return false;
    }
  }
};

// Advanced Rule-based Dynamic Generator (for unlisted jobs in offline mode)
function generateDynamicOfflinePreset(jobName) {
  // DJB2 string hashing function to generate a deterministic seed
  function getHashCode(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    return Math.abs(hash);
  }

  const hash = getHashCode(jobName);

  const prefixes = [
    "성실한 일상으로 기여하는",
    "보이지 않는 곳에서 헌신하는",
    "묵묵히 세상을 밝히는",
    "삶에 소중한 가치를 더하는",
    "나만의 자유로운 길을 걸어가는",
    "이웃들에게 든든한 동반자가 되는",
    "남다른 손길로 일상을 가꾸는",
    "자신만의 곧은 신념을 간직한"
  ];
  
  let category = "general";
  
  // Keyword priority adjustment: check "scholar" category first to avoid "연구원" misclassification
  if (jobName.includes("연구") || jobName.includes("학생") || jobName.includes("공부")) {
    category = "scholar";
  } else if (jobName.includes("쌀") || jobName.includes("골드") || jobName.includes("게임") || jobName.includes("코인") || jobName.includes("투자") || jobName.includes("주식")) {
    category = "finance";
  } else if (jobName.includes("알바") || jobName.includes("직원") || jobName.includes("원")) {
    category = "agent";
  } else if (jobName.includes("사") || jobName.includes("가") || jobName.includes("인")) {
    category = "expert";
  } else if (jobName.includes("개발") || jobName.includes("엔지니어") || jobName.includes("기계")) {
    category = "alchemist";
  }

  const titleTemplates = {
    finance: [
      "Digital Asset Manager (디지털 자산 매니저 | 가상 리소스 시세를 기민하게 읽고 자산을 보존한다.)",
      "Alternative Economy Planner (대안 경제 플래너 | 가상 경제의 흐름을 리서치하며 새로운 영토를 설계한다.)",
      "Virtual Resource Creator (가상 경제 밸류 크리에이터 | 대륙의 가상 자산을 실질적인 가치로 변환한다.)"
    ],
    agent: [
      "Lifestyle Essential Provider (라이프스타일 에센셜 프로바이더 | 도시인들에게 일상의 필수재를 공급한다.)",
      "Urban Logistic Coordinator (일상 편의 서포트 코디네이터 | 복잡한 도심 물류를 정돈하고 편의를 돕는다.)",
      "Reliable Service Specialist (라이프 서비스 스페셜리스트 | 친절한 기여로 서비스 가치를 격상시킨다.)"
    ],
    expert: [
      "Creative Vision Leader (크리에이티브 비전 리더 | 확고한 영감으로 내면의 잠재력을 가다듬는다.)",
      "Elegant Lifestyle Advisor (우아한 라이프스타일 어드바이저 | 일상 속 유익한 라이프 가치를 조율한다.)",
      "Minimal Space Designer (트렌디 스페이스 디자이너 | 주어진 공간을 조화롭고 매력적으로 정돈한다.)"
    ],
    alchemist: [
      "Digital Matrix Architect (디지털 솔루션 설계관 | 복잡한 가상 매트릭스를 정밀한 코드로 설계한다.)",
      "Dev System Engineer (성실한 기술 개발 크리에이터 | 묵묵한 프로그래밍 집중력으로 기반을 지탱한다.)",
      "Mecanic Solution Operator (현대 기계 문명의 숨은 엔지니어 | 끊임없이 인프라 솔루션을 작동시킨다.)"
    ],
    scholar: [
      "Knowledge Horizon Explorer (지식의 지평선 탐색가 | 성실한 수련으로 학문과 사상을 흡수한다.)",
      "Future Target Researcher (미래 가능성 연구 스페셜리스트 | 배움의 고단함을 인내하며 능력을 배양한다.)",
      "Skill Build Specialist (내일의 꿈을 가꾸는 예비 전문가 | 체계적인 멘탈 관리로 자질을 연마한다.)"
    ],
    general: [
      "Lifestyle Value Leader (라이프스타일 밸류 리더 | 타인의 시선과 무관하게 성실한 하루를 수호한다.)",
      "Aesthetic Life Artist (특별한 미학을 빚는 아티스트 | 삶에 독창적인 아이디어를 얹어 일상을 연출한다.)",
      "Daily Peace Guardian (성실한 일상의 수호자 | 정직하고 묵묵한 노력으로 세상에 소리 없이 기여한다.)"
    ]
  };

  const selectedPrefix = prefixes[hash % prefixes.length];
  const templates = titleTemplates[category];
  const selectedTemplate = templates[hash % templates.length];
  
  // Format the title to include parentheses so it matches regex /([^(]+)(?:\(([^)]+)\))?/
  const regex = /([^(]+)\(([^)]+)\)/;
  const match = selectedTemplate.match(regex);
  
  let finalTitle;
  if (match) {
    const englishTitle = match[1].trim();
    const koreanInner = match[2].trim();
    finalTitle = `${englishTitle} (${selectedPrefix} ${koreanInner})`;
  } else {
    finalTitle = `Urban Explorer (${selectedPrefix} ${selectedTemplate})`;
  }

  let customJustification = `자신이 속한 환경 속에서 소명의식을 갖고 성실히 노력하며, 남들의 섣부른 평가와 무관하게 고유한 하루의 가치와 평화를 일구어가는 성숙한 삶의 거장이다. 그의 노력은 세상을 묵묵히 지탱하는 든든한 밑거름이 된다.`;
  let customDuties = [
    "세속의 편협한 판단에 흔들리지 않고 스스로의 품위와 개성 유지",
    "주어진 일과와 공간을 깨끗하고 명확하게 이끌어가는 실행력 발휘",
    "자신만의 성실함을 통해 주변에 긍정적인 신뢰와 활력 조달"
  ];

  if (category === "finance") {
    customJustification = `전통적인 물리적 노동의 범주를 넘어 새로운 디지털 가치를 창출하고, 가상 공간 내 숨은 기회들을 발굴하여 이를 현실의 실질적 가치로 정제해내는 명민한 활동가이다. 그의 지혜로운 시각과 끈기는 미래 디지털 경제 영토의 숨은 원동력이 된다.`;
    customDuties = [
      "디지털 자산 시장의 흐름과 시세 변동을 기민하게 모니터링",
      "가상 재화의 유통 구조를 파악하여 안정적인 가치 교환 실현",
      "변화무쌍한 플랫폼 시장 규칙에 주체적으로 대응하는 전략 수립"
    ];
  }

  return {
    nobleTitle: finalTitle,
    justification: customJustification,
    duties: customDuties
  };
}

// Particle Floating Effect
function initParticles() {
  const container = document.getElementById('particleContainer');
  if (!container) return;
  container.innerHTML = '';
  const count = 30;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 8 + 8;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.backgroundColor = 'rgba(223, 213, 198, 0.4)';
    
    container.appendChild(particle);
  }
}

// 3D Tilt Card Interaction
function init3DTilt() {
  const wrapper = document.getElementById('certificateWrapper3d');
  const card = document.getElementById('certificateCard');
  
  if (!wrapper || !card) return;
  
  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const angleX = (yc - y) / 25;
    const angleY = (x - xc) / 25;
    
    wrapper.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    card.style.boxShadow = `${-angleY * 1.5}px ${angleX * 1.5}px 40px rgba(223,213,198,0.08), 0 35px 70px rgba(0,0,0,0.9)`;
  });
  
  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.9)';
  });
}

// App State Management
const state = {
  apiKey: localStorage.getItem('nvidia_api_key') || '',
  model: localStorage.getItem('nvidia_model') || 'nvidia/llama-3.1-nemotron-70b-instruct'
};

// UI Elements
const originalJobInput = document.getElementById('originalJobInput');
const convertBtn = document.getElementById('convertBtn');
const presetsList = document.querySelector('.presets-list');
// const apiStatusBar = document.getElementById('apiStatusBar');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const loadingContainer = document.getElementById('loadingContainer');
const resultSection = document.getElementById('resultSection');

// Certificate Elements
const certOriginalJob = document.getElementById('certOriginalJob');
const certNobleJob = document.getElementById('certNobleJob');
const certJustification = document.getElementById('certJustification');
const certDuties = document.getElementById('certDuties');
const certDate = document.getElementById('certDate');
const certDbStatus = document.getElementById('certDbStatus');

// Settings Modal Elements
const openSettingsBtn = document.getElementById('openSettingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const apiKeyInput = document.getElementById('apiKeyInput');
const modelSelect = document.getElementById('modelSelect');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const clearApiBtn = document.getElementById('clearApiBtn');

// Download and Share
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');

// Update API Status UI
function updateApiStatusUI() {
  if (state.apiKey) {
    statusIndicator.className = 'status-indicator online';
    statusText.textContent = `NVIDIA NIM AI 연동 중 (${state.model.split('/').pop()})`;
  } else {
    statusIndicator.className = 'status-indicator offline';
    statusText.textContent = '오프라인 감성 큐레이션 엔진 동작 중 (API 연결 시 신조어 학습 및 고밀도 생성 가능)';
  }
}

// Call NVIDIA NIM API
async function callNvidiaNIM(originalJob) {
  const endpoint = "https://integrate.api.nvidia.com/v1/chat/completions";
  
  const systemPrompt = `당신은 세계적인 라이프스타일 매거진의 노련하고 세련된 수석 에디터(Chief Editor)입니다.
사용자가 자신의 지루하고 다소 평범한 직업명, 혹은 특정 커뮤니티 은어나 밈(Meme) 명칭을 제공하면, 그 직무가 갖는 가치와 일상의 흐름을 우아하고 품위 있는 현대적 감성으로 재해석하여, 매력적이고 세련된 '에디토리얼 칭호'와 '에세이 칼럼'을 큐레이팅해 주어야 합니다.

반드시 다음 포맷의 JSON 객체로만 응답하십시오. 잡담, 인사말, 마크다운 백틱(\`\`\`json)은 절대로 포함하지 말고 순수 JSON 문자열만 즉시 출력하십시오.

출력 JSON 형식:
{
  "nobleTitle": "재정의된 에디토리얼 칭호 (영문 타이틀을 앞에 쓰고, 한글 칭호는 반드시 파이프 문자 '|'를 경계로 핵심 칭호명과 한 줄 설명으로 정확히 구분하십시오. 핵심 칭호명에는 볼드 기호 '**'를 씌워주십시오. 예: 'Sabbatical Enjoyer (**안식기 거주자** | 자유와 성찰을 위한 안식의 삶을 향유한다.)', 'Space Minimalist (**환경 디렉터** | 공간의 미학을 가꾸며 청결과 질서를 복원한다.)', 'Public System Strategist (**예비 행정 전문가** | 국가 행정의 기틀을 학습하며 미래를 준비한다.)')",
  "justification": "에디터 칼럼 에세이 (해당 직무나 은어가 상징하는 삶의 본질을 위트 있고 명료한 문체로 친근하고 고상하게 묘사하는 에세이입니다. '그는 ~이다. ~한 성실함을 빚어낸다' 처럼 세련된 3인칭 기사 톤으로 3~4문장으로 서술하십시오. 극도로 느끼하거나 이해하기 어려운 추상적 보그체는 지양하십시오.)",
  "duties": [
    "해당 인물이 일상 속에서 실현해야 할 세련된 행동 가치나 에센셜 1",
    "해당 인물이 일상 속에서 실현해야 할 세련된 행동 가치나 에센셜 2",
    "해당 인물이 일상 속에서 실현해야 할 세련된 행동 가치나 에센셜 3"
  ]
}

주의사항 (CRITICAL INSTRUCTIONS):
- **한글 칭호 파이프 기호 필구현**: 괄호 내부의 한글 부분은 반드시 \`핵심 칭호 | 한 줄 설명\` 구조를 따라야 하며, 핵심 칭호 양끝에는 마크다운 강조 기호 \`**\`를 주어야 합니다. (예: 'Sabbatical Enjoyer (**안식기 거주자** | 자유와 성찰을 위한 안식의 삶을 향유한다.)')
- **보그체 과용 금지**: '어반 시크', '질감', '그리드', '아키타입' 등의 지나치게 난해하고 관용적인 패션 에디터 전문용어(보그체)의 도배를 피하십시오. 더 직관적이고 직업적 특성이 명료히 와닿는 어휘(예: 매니저, 전문가, 가치 창조자, 아티스트, 코디네이터 등)와 세련된 한국어 묘사를 적절히 조화시키십시오.
- **은어/신조어/밈의 본질적 행위 묘사**: 입력된 단어가 한국 인터넷 은어나 밈(예: '쌀숭이', '쌀먹', '월루', '개붕이' 등)이라면, 그 비하적인 뉘앙스를 정화하되 그 단어가 가리키는 실제 행동적 속성(예: '쌀숭이' ➔ 게임 속에서 사냥하여 얻은 가치를 현금화하는 행위)이 읽는 이에게 유쾌하고 직관적으로 와닿을 수 있도록 은유를 사용하십시오. 무관한 추상적인 명칭을 남발해선 안 됩니다.
- **입력 텍스트 그대로 쓰기 금지**: 입력된 원본 단어(예: '알바', '백수', '개발자', '청소부', '쌀숭이' 등)는 최종 칭호('nobleTitle')에 절대 그대로 노출해선 안 됩니다. 100% 다른 세련된 외래어나 은유적 어휘로 완전히 재작명하십시오.
- 품격 넘치고 도회적인 한국어 칼럼 문체를 사용하십시오.`;

  const userPrompt = `입력 직업명: "${originalJob}"`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${state.apiKey}`
    },
    body: JSON.stringify({
      model: state.model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.8,
      max_tokens: 1024
    })
  });

  if (!response.ok) {
    throw new Error(`API 호출 실패 (HTTP ${response.status})`);
  }

  const data = await response.json();
  let contentText = data.choices[0].message.content.trim();
  
  // JSON 파싱 안정성 확보
  if (contentText.startsWith("```json")) {
    contentText = contentText.slice(7);
  }
  if (contentText.endsWith("```")) {
    contentText = contentText.slice(0, -3);
  }
  
  return JSON.parse(contentText.trim());
}

// Render Certificate
function renderCertificate(originalJob, data, source = "NEW RECORD") {
  certOriginalJob.textContent = originalJob;
  
  const nobleTitle = data.nobleTitle;
  const match = nobleTitle.match(/([^(]+)(?:\(([^)]+)\))?/);
  
  if (match) {
    const englishPart = match[1].trim();
    const koreanCombined = match[2] ? match[2].trim() : '';
    
    // Parse core noun and sub-description by splitting on pipe '|'
    const parts = koreanCombined.split('|');
    const coreNoun = parts[0] ? parts[0].replace(/\*\*/g, '').trim() : ''; // Remove asterisks if present
    const description = parts[1] ? parts[1].trim() : '';
    
    certNobleJob.textContent = '';
    const enDiv = document.createElement('div');
    enDiv.className = 'vogue-title-en';
    enDiv.textContent = englishPart;
    certNobleJob.appendChild(enDiv);
    
    if (coreNoun) {
      const koMainDiv = document.createElement('div');
      koMainDiv.className = 'vogue-title-ko-main';
      koMainDiv.textContent = coreNoun;
      certNobleJob.appendChild(koMainDiv);
    }
    
    if (description) {
      const koSubDiv = document.createElement('div');
      koSubDiv.className = 'vogue-title-ko-sub';
      koSubDiv.textContent = description;
      certNobleJob.appendChild(koSubDiv);
    }
  } else {
    certNobleJob.textContent = '';
    const enDiv = document.createElement('div');
    enDiv.className = 'vogue-title-en';
    enDiv.textContent = nobleTitle;
    certNobleJob.appendChild(enDiv);
  }
  
  certJustification.textContent = data.justification;
  certDbStatus.textContent = source;
  
  // Render Duties
  certDuties.innerHTML = '';
  data.duties.forEach(duty => {
    const li = document.createElement('li');
    li.textContent = duty;
    certDuties.appendChild(li);
  });
  
  // Date Update
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const today = new Date();
  certDate.textContent = `${months[today.getMonth()]} ${today.getFullYear()}`;
  
  // Show Section
  resultSection.classList.remove('hidden');
  
  // Re-init lucide icons
  lucide.createIcons();
  
  // Scroll to results
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Process Job Conversion
async function handleConvert(jobName) {
  let trimmed = jobName.trim();
  if (!trimmed) {
    alert("새롭게 에디팅할 직업을 입력해주십시오.");
    return;
  }
  
  const originalInput = trimmed; // 사용자 입력 원본 명칭 보존
  
  loadingContainer.classList.remove('hidden');
  resultSection.classList.add('hidden');
  convertBtn.disabled = true;
  
  try {
    let resultData;
    let source = "NEW RECORD";
    
    // SYNONYM BINDING LAYER
    if (SYNONYM_MAP && typeof SYNONYM_MAP === 'object' && Object.prototype.hasOwnProperty.call(SYNONYM_MAP, trimmed)) {
      trimmed = SYNONYM_MAP[trimmed];
    }
    
    // 1. Check Hardcoded Offline Presets
    if (OFFLINE_PRESETS && typeof OFFLINE_PRESETS === 'object' && Object.prototype.hasOwnProperty.call(OFFLINE_PRESETS, trimmed)) {
      await new Promise(resolve => setTimeout(resolve, 800));
      resultData = OFFLINE_PRESETS[trimmed];
      source = "ARCHIVE RECORD";
    } 
    // 2. Check Database Layer (Asynchronous Repository call)
    else {
      const cachedData = await WordRepository.getWord(trimmed);
      if (cachedData) {
        await new Promise(resolve => setTimeout(resolve, 600));
        resultData = cachedData;
        source = "DATABASE EXTRACTED";
      } 
      // 3. Fallback to API if key exists
      else if (state.apiKey) {
        try {
          resultData = await callNvidiaNIM(trimmed);
          // Save new query to the Database
          await WordRepository.saveWord(trimmed, resultData);
          source = "NEW RECORD STORED";
        } catch (apiError) {
          console.error("AI API fail, fallback to dynamic offline preset", apiError);
          resultData = generateDynamicOfflinePreset(trimmed);
          source = "DYNAMIC COMPOSE";
        }
      } 
      // 4. Offline Dynamic compose if no API Key
      else {
        await new Promise(resolve => setTimeout(resolve, 1200));
        resultData = generateDynamicOfflinePreset(trimmed);
        source = "DYNAMIC COMPOSE";
      }
    }
    
    renderCertificate(originalInput, resultData, source);
  } catch (error) {
    console.error(error);
    alert("큐레이션 중 문제가 발생했습니다. 입력을 다시 확인해주세요.");
  } finally {
    loadingContainer.classList.add('hidden');
    convertBtn.disabled = false;
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  init3DTilt();
  updateApiStatusUI();
  lucide.createIcons();
  
  apiKeyInput.value = state.apiKey;
  modelSelect.value = state.model;
  
  convertBtn.addEventListener('click', () => {
    handleConvert(originalJobInput.value);
  });
  
  originalJobInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleConvert(originalJobInput.value);
    }
  });
  
  presetsList.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-preset');
    if (!btn) return;
    
    const targetJob = btn.getAttribute('data-job');
    originalJobInput.value = targetJob;
    handleConvert(targetJob);
  });
  
  openSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
  });
  
  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
  });
  
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add('hidden');
    }
  });
  
  saveSettingsBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    const model = modelSelect.value;
    
    state.apiKey = key;
    state.model = model;
    
    localStorage.setItem('nvidia_api_key', key);
    localStorage.setItem('nvidia_model', model);
    
    updateApiStatusUI();
    settingsModal.classList.add('hidden');
    
    if (key) {
      alert("NVIDIA NIM API 연동 정보가 저장되었습니다.");
    }
  });
  
  clearApiBtn.addEventListener('click', () => {
    state.apiKey = '';
    apiKeyInput.value = '';
    localStorage.removeItem('nvidia_api_key');
    updateApiStatusUI();
    settingsModal.classList.add('hidden');
    alert("설정이 초기화되었습니다. 오프라인 모드로 동작합니다.");
  });
  
  downloadBtn.addEventListener('click', () => {
    const cardElement = document.getElementById('certificateCard');
    
    const wrapper = document.getElementById('certificateWrapper3d');
    const oldTransform = wrapper.style.transform;
    wrapper.style.transform = 'none';
    
    html2canvas(cardElement, {
      scale: 2.5,
      backgroundColor: '#0d0d0d',
      useCORS: true,
      logging: false
    }).then(canvas => {
      wrapper.style.transform = oldTransform;
      
      const link = document.createElement('a');
      link.download = `editorial_cover_${certOriginalJob.textContent}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(err => {
      console.error("Capture failed", err);
      alert("커버 이미지 다운로드 중 문제가 발생했습니다.");
    });
  });
  
  shareBtn.addEventListener('click', () => {
    const dummyUrl = window.location.href;
    navigator.clipboard.writeText(dummyUrl).then(() => {
      alert("공유 링크가 클립보드에 복사되었습니다!");
    }).catch(err => {
      console.error("Clipboard copy failed", err);
      alert("클립보드 복사에 실패했습니다.");
    });
  });
});
