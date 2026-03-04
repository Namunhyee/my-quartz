# FRAP (Fluorescence Recovery After Photobleaching)

## 개요

FRAP는 [[Fluorescent Proteins(GFP, GFP tagging)#Green Fluorescent Protein (GFP)|GFP]]에 융합된 관심 단백질을 활용하여 단백질의 dynamics를 연구하는 또 다른 방법이다. 이 기술은 형광을 선택적으로 소멸시킨 후, 그 영역으로 형광 분자가 이동해 들어오는 과정을 분석한다.[^기출_중간_2022_8]

## FRAP의 원리

### 기본 개념

**Photobleaching(광표백)**:
- Laser의 강한 집속 빛(strong focused beam of light)을 사용
- 세포의 특정 영역에서 [[Fluorescent Proteins(GFP, GFP tagging)#Green Fluorescent Protein (GFP)|GFP]] 형광을 소멸(extinguish)시킴

**Recovery(회복) 관찰**:
- 소멸되지 않은 나머지 형광 단백질 분자들의 이동 분석
- 표백된 영역(bleached area)으로 들어오는 방식을 시간의 함수로 분석

## 작동 메커니즘

### 1단계: Photobleaching

**과정**:
- Laser의 강한 집속 빛을 세포의 지정된 영역에 조사
- 해당 영역의 형광 단백질 분자들의 형광 소멸
- 주변 영역의 형광 단백질은 영향받지 않음

### 2단계: Recovery Monitoring

**관찰**:
- 표백되지 않은 형광 단백질 분자들이 표백 영역으로 이동
- 시간 경과에 따른 형광 회복 측정
- 회복 속도와 정도 정량화

### 3단계: 데이터 분석

**추출 가능한 정보**:
- 이동 속도 (diffusion coefficients)
- Active transport rates
- 다른 단백질과의 결합 및 해리 속도 (binding and dissociation rates)

## Figure 9-20: FRAP의 실험 과정
![[Cell Biology/출처/md converted/Chapter 9/_page_13_Figure_2.jpeg]]

### (A) 실험 이미지

**시스템**:
- 배양된 포유류 세포
- **CD86** 발현: integral membrane protein
- Fluorescent protein에 융합

**CD86의 생물학적 역할**:
- Antigen-presenting cells의 plasma membrane에 존재
- Co-stimulatory protein
- T cells의 활성화에 필요 (Figure 24-34 참조)

**실험 과정**:
1. Plasma membrane의 작은 영역을 선택적으로 photobleaching
2. 나머지 형광 분자들이 membrane의 평면 내에서 빠르게 확산
3. 표백된 영역을 채움
4. 시간의 함수로 회복 추적

### (B) 실험 개략도

**도식적 표현**:
- (A)에 표시된 실험의 단계별 설명
- Photobleaching 전, 중, 후의 상태
- 형광 분자들의 이동 방향 표시

### (C) Fluorescence Recovery Curve

**그래프 분석**:
- X축: 시간 (time)
- Y축: 표백 영역의 형광 강도 (fluorescence intensity)

**정량적 데이터 추출**:
1. **회복 속도 (Rate of recovery)**
   - 곡선의 기울기
   - 분자 이동 속도 반영

2. **Mobile fraction(이동 가능 분획)**
   - 최종적으로 회복된 형광의 비율
   - 이동 가능한 단백질 분자의 비율

3. **Immobile fraction(이동 불가 분획)**
   - 회복되지 않은 형광의 비율
   - 고정되어 있거나 매우 느리게 이동하는 분자들

## 측정 가능한 Kinetic Parameters

### 1. Diffusion Coefficients (확산 계수)

**의미**:
- 단백질이 자유롭게 확산하는 속도
- 분자의 크기와 환경의 점성도 반영

**응용**:
- Membrane fluidity 평가
- Protein-lipid interactions
- Cytoplasmic viscosity 측정

### 2. Active Transport Rates

**의미**:
- 능동적으로 운반되는 속도
- Motor proteins에 의한 이동

**응용**:
- [[Cell Biology/내용/13. Intracellular Membrane Traffic/Vesicle transportation/Vesicle transportation_MOC|Vesicle trafficking]]
- Organelle movement
- Directed protein transport

### 3. Binding and Dissociation Rates

**의미**:
- 다른 단백질이나 구조물과의 결합/해리 속도
- 상호작용의 역학

**응용**:
- Protein-protein interactions
- DNA-protein binding
- Cytoskeleton association

## FRAP의 장점

### 1. 정량적 분석

**측정 가능**:
- 회복 속도의 정확한 측정
- Mobile/immobile fractions의 비율
- 다양한 kinetic parameters

### 2. 살아있는 세포에서 관찰

**In vivo 연구**:
- 생리적 조건 유지
- 실시간 dynamics
- 자연스러운 세포 환경

### 3. 비침습적 (초기 표백 제외)

**최소한의 교란**:
- 표백 후에는 정상적인 세포 기능 유지
- 장시간 관찰 가능
- 반복 실험 가능 (다른 영역)

### 4. 다양한 적용 가능

**광범위한 응용**:
- 막 단백질
- 세포질 단백질
- 핵 단백질
- 세포소기관 단백질

## 생물학적 응용

### Membrane Protein Dynamics

**연구 대상**:
- Lateral diffusion in membranes
- Membrane domain organization
- [[Cell Biology/내용/10. Membrane Structure/Structures in membrane/Raft domain|Lipid raft association]]
- Receptor clustering

**예시 (Figure 9-20)**:
- CD86의 plasma membrane 내 확산
- 빠른 lateral mobility 확인
- Membrane fluidity 평가

### Nuclear Protein Dynamics

**연구 대상**:
- Nucleocytoplasmic shuttling
- Chromatin binding
- Transcription factor dynamics
- DNA repair protein recruitment

### Cytoskeletal Dynamics

**연구 대상**:
- [[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/treadmilling|Actin turnover]] (treadmilling)
- Microtubule dynamics
- Intermediate filament exchange
- Motor protein movement

### Organelle Proteins

**연구 대상**:
- ER resident proteins
- Golgi trafficking
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein import into Mitochondria/000_Protein import into Mitochondria_MOC|Mitochondrial protein import]]
- Peroxisomal dynamics

## 실험적 고려사항

### Photobleaching 조건

**최적화 필요**:
- Laser 강도: 충분히 표백하되 세포 손상 최소화
- 표백 시간: 빠르게 완료
- 표백 영역 크기: 분석 목적에 맞게 조절

### 시간 해상도

**Trade-off**:
- 빠른 회복: 높은 시간 해상도 필요
- 느린 회복: 장시간 imaging
- 추가 photobleaching 최소화

### 형광 강도

**고려사항**:
- 초기 형광 강도 충분해야 함
- 표백 후 회복 측정 가능한 수준
- Signal-to-noise ratio 확보

## FRAP vs 다른 기술

### vs [[Photoactivation]]

**공통점**:
- 단백질 dynamics 연구
- 시간에 따른 변화 추적
- Kinetic parameters 측정

**차이점**:

| 특성 | FRAP | Photoactivation |
|------|------|----------------|
| 초기 신호 | 감소 (표백) | 증가 (활성화) |
| 추적 방향 | 밖에서 안으로 | 안에서 밖으로 |
| 측정 | 회복 속도 | 이동/분산 |

### vs [[FRET]]

**FRET**:
- 단백질 간 상호작용
- 거리 의존적 (5 nm 이내)
- 실시간 결합 관찰

**FRAP**:
- 단백질의 이동성
- 결합/해리 kinetics
- 전체 mobility 평가

## 데이터 해석

### Recovery Curve의 분석

**완전 회복 (100%)**:
- 모든 분자가 mobile
- 자유로운 확산
- 안정적 결합 없음

**부분 회복 (~50-90%)**:
- Mobile fraction 존재
- 일부 immobile fraction
- 일시적 결합 또는 구조적 제약

**낮은 회복 (<50%)**:
- 대부분 immobile
- 강한 결합 또는 고정
- 구조적 구성 요소

### Recovery Rate 해석

**빠른 회복 (초 단위)**:
- 자유 확산
- 약한 상호작용
- 유동적 환경

**느린 회복 (분 단위)**:
- 제한된 확산
- 강한 상호작용
- 점성 높은 환경

**매우 느린 회복 (시간 단위)**:
- 매우 제한적 이동
- 매우 강한 결합
- 구획화된 환경

## 기술적 발전

### Improved Imaging Systems

**고감도 detectors**:
- 낮은 형광 강도에서도 측정
- 빠른 acquisition
- 낮은 광독성

### Multiple ROI FRAP

**동시 다중 영역**:
- 여러 위치 동시 표백
- 비교 분석 용이
- 실험 효율 증가

### Automated Analysis

**소프트웨어 발전**:
- 자동 curve fitting
- Kinetic parameter 자동 계산
- 통계 분석 통합

## 요약

### 핵심 원리
- 선택적 photobleaching 후 형광 회복 관찰
- 시간에 따른 분자 이동 정량화
- Kinetic parameters 측정

### 주요 장점
- 정량적 분석
- 살아있는 세포에서 관찰
- 다양한 kinetic 정보
- 광범위한 응용

### 측정 가능한 정보
- Diffusion coefficients
- Active transport rates
- Binding/dissociation kinetics
- Mobile/immobile fractions

### 생물학적 의의
- Membrane dynamics
- Protein-protein interactions
- Cytoskeletal dynamics
- Organelle protein behavior

---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "Protein Dynamics Can Be Followed in Living Cells"
- Related Figure: 9-20, 24-34
- Related Movie: Movie 10.6
- Related techniques: [[FRET]], [[Photoactivation]]
- Related concept: [[Fluorescent Proteins(GFP, GFP tagging)]]

[^기출_중간_2022_8]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_8번|2022 중간 8번]] — FRAP는 photobleaching 후 형광 회복을 분석하여 분자 집단(population)의 이동성을 측정하며, 단일 분자(single molecule)를 추적하는 방법이 아니라는 점이 정답 근거(선지 ④)로 활용됨.