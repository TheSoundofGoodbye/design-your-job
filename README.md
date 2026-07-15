# The Elegant Registry

> **Editorial Job Curator — 정형화된 세속의 직무 속에서 고유의 예술적 아우라를 큐레이팅하다.**

## Live Demo

전 세계 어디서나 아래의 공식 웹 링크를 통해 **The Elegant Registry** 서비스를 실시간으로 이용하실 수 있습니다.

👉 **[https://thesoundofgoodbye.github.io/design-your-job/](https://thesoundofgoodbye.github.io/design-your-job/)**

---

## Overview

**The Elegant Registry**는 일상의 지루한 직무 명칭이나 조롱 섞인 인터넷 은어 속에 감추어진 숭고한 물리적 기여와 낭만적 본질을 보그(Vogue) 매거진의 감각적인 시선으로 재해석하여, 독창적인 에디토리얼 타이틀과 칼럼 에세이 카드로 정제해 주는 미니멀 단일 페이지 웹 애플리케이션입니다.

본 프로젝트는 고용노동부 공식 ｢한국고용직업분류 2025 (KECO 2025)｣ 표준 체계를 로컬 딕셔너리로 마이그레이션하여, API 호출 비용을 획기적으로 절감하는 동시에 프로덕션 환경 수준의 높은 코드 무결성과 보안 안정성을 보장하도록 설계되었습니다.

---

## Core Features

1. **KECO 2025 표준 직무 사전 및 동의어 매핑 레이어 (`SYNONYM_MAP`)**
   - 28종의 KECO 2025 세분류 직종과 80여 개의 유사 은어 체인을 구축했습니다.
   - 예: '라이더', '딸배', '퀵서비스' 입력 시 ➔ KECO 늘찬배달원 프리셋(`Urban Velocity Courier`)으로 자동 수렴 및 0초 만에 오프라인 즉시 변환 가동.
2. **사용자 원본 입력 보존 및 2단 분리 개행 레이아웃**
   - 카드 좌측 상단에는 사용자가 실제로 기입한 원본 입력명(`ORIGIN`)이 훼손 없이 완벽히 보존됩니다.
   - 큐레이팅된 타이틀은 Playfair Display/Outfit 서체 기반의 '영어 칭호', '한글 핵심 칭호명', '한 줄 설명구'로 3단계 개행 분할 렌더링되어 최상의 타이포그래피 미학을 연출합니다.
3. **DJB2 해싱 알고리즘 기반 결정론적 난수 생성**
   - 미등록 직업 입력 시 무작위(Random) 선택 방식을 탈피하고, 가볍고 충돌이 적은 **DJB2 해시 함수**를 구현하였습니다.
   - 입력값에 따른 고유 해시 시드를 활용함으로써, 동일한 단어를 검색할 때마다 언제나 동일한 칭호와 정렬된 카드 템플릿이 보장됩니다.
4. **엔터프라이즈 레벨의 보안 및 예외Remediation**
   - **Prototype Pollution 방어**: 캐시 및 맵 조회 시 `Object.prototype.hasOwnProperty` 가드를 세워 `__proto__` 등 JS 예약어 주입 공격으로 인한 예외 크래시를 원천 차단했습니다.
   - **DOM-based XSS 방어**: 데이터 렌더링 시 `innerHTML` 템플릿 스트링 투입 구조를 완전히 폐기하고, DOM API(`createElement`)와 `.textContent` 매핑을 가동하여 악성 스크립트 실행 공격을 물리적으로 예방했습니다.

---

## Technology Stack

- **Frontend**: Vanilla HTML5, Vanilla CSS3 (HSL 컴포넌트 변수 기반 테마 시스템), Vanilla JavaScript (ES6+)
- **Testing**: Node.js, JSDOM (브라우저 DOM 및 LocalStorage 가상화 모킹 테스트)
- **Static Analysis**: ESLint, Stylelint, HTMLHint
- **Deployment**: GitHub Pages (main 브랜치 자동 퍼블리싱 연동)
