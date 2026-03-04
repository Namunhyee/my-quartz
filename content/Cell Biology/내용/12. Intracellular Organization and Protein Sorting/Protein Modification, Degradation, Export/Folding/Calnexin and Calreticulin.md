# Calnexin and Calreticulin

Calnexin과 calreticulin은 ER에서 단백질 folding을 돕는 Ca²⁺-dependent chaperone protein이다. 이들은 carbohydrate-binding protein (lectin)으로서 불완전하게 접힌 단백질을 인식하고 ER에 retention시킨다.[^기출_중간_2023_19]

## 구조와 특성

### Calnexin
- **Type**: ER membrane-bound chaperone
- **Location**: ER membrane에 anchored
- **Requirement**: Ca²⁺ 필요

### Calreticulin
- **Type**: Soluble ER resident protein
- **Location**: ER lumen
- **Requirement**: Ca²⁺ 필요
- **Function**: Calnexin과 유사하게 작동

## 작동 메커니즘

### 1. Oligosaccharide Recognition
![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

**인식하는 구조:**
- Singly glucosylated N-linked oligosaccharide
- Terminal glucose 1개를 가진 oligosaccharide
- 이는 새로 만들어진 (그리고 아직 접히지 않은) glycoprotein의 표지

### 2. Quality Control Cycle

**단계별 과정:**

#### Step 1: Initial binding
- 새로 합성된 단백질이 ER로 들어옴
- N-linked precursor oligosaccharide 획득
- ER glucosidase가 2개의 glucose 제거
- 1개의 terminal glucose 남음
- Calnexin/calreticulin이 결합

#### Step 2: Folding attempt
- Chaperone이 단백질을 unfolded 상태로 유지
- 비가역적 aggregation 방지
- Folding 시도

#### Step 3: Glucose removal
- Glucosidase가 마지막 glucose 제거
- Calnexin/calreticulin로부터 방출
- De-glucosylated glycoprotein 형성

#### Step 4: Folding check
**완전히 접힌 경우:**
- ER을 빠져나갈 수 있음
- Golgi로 transport

**불완전하게 접힌 경우:**
- Glucosyl transferase가 인식
- Terminal glucose 재부착 (UDP-glucose 사용)
- Calnexin/calreticulin과 재결합
- Cycle 반복

### 3. ERp57과의 협력

^aff582

**ERp57 chaperone:**
- Calnexin/calreticulin과 함께 작용
- Free sulfhydryl 그룹 인식
- 불완전한 [[Disulfide bond formation]] 표지
- 단백질을 ER에 retention

**협력 메커니즘:**
- Calnexin/calreticulin: Oligosaccharide 인식
- ERp57: Free cysteine 인식
- 함께 불완전하게 접힌 단백질을 종합적으로 평가

## Folding Timer 기능

### Prolonged Retention의 결과
**Mannosidase의 역할:**
- 단백질이 cycle에서 오래 머무를수록
- ER-resident mannosidase가 terminal mannose 제거
- Trimmed oligosaccharide 생성

**Degradation 유도:**
- Reduced mannose를 가진 oligosaccharide
- ER lectin이 인식
- [[ER-associated degradation]] (ERAD)로 routing
- 빠르게 접히는 단백질만 mannosidase trimming 회피

## 생리적 중요성

### 1. Protein Quality Control
- 모든 새로 만들어진 glycoprotein 감시
- 올바르게 접힌 단백질만 ER 통과 허용
- Misfolded protein의 축적 방지

### 2. Selective Retention
**Retention 기준:**
- Exposed hydrophobic regions
- Free sulfhydryl groups
- Incorrect oligomeric assembly
- Incomplete glycosylation

### 3. Degradation Pathway 연결
- Prolonged retention → Mannose trimming
- Trimmed oligosaccharide → ERAD signal
- ER 용량 보호

## 다른 Chaperone과의 차이

### BiP (Hsp70 family)와 비교:
- **BiP**: Hydrophobic sequence 인식, post-translational translocation에도 사용
- **Calnexin/Calreticulin**: Oligosaccharide 인식, glycoprotein에 특화
- 두 system 모두 단백질 aggregation 방지

### Functional complementarity:
- BiP: Non-glycosylated protein 담당
- Calnexin/Calreticulin: Glycoprotein 담당
- ERp57: Disulfide bond formation 감시

## 질병과의 연관

### Glycosylation Defects
- Congenital disorders of glycosylation (CDG)
- Calnexin/calreticulin system 기능장애
- 신경계, 간, 신장 이상

### ER Stress
- Unfolded protein 축적
- [[Unfolded protein response]] 활성화
- Calnexin/calreticulin의 upregulation

## 관련 개념
- [[Oligosaccharides]]
- [[Glycosylation]]
- [[Protein folding in ER]]
- [[ER-associated degradation]]
- [[Glucosyl transferase]]
- [[Mannosidase]]
- [[Disulfide bond formation]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP]]

[^기출_중간_2023_19]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_19번|2023 중간 19번]] — Glycosylation의 순차적 변형(glucose 잔기 수 3→2→1→0)이 단백질 접힘 진행 정도를 나타내는 타이머 역할을 함; Calnexin/Calreticulin이 monoglucosylated glycoprotein에 결합하여 ER retention 유도
