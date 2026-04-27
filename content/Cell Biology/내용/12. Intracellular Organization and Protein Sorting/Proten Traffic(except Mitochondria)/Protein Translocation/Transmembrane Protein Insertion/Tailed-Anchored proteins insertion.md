# The Insertion of Tailed-Anchored Proteins : Guided Entry of Tail-anchored proteins pathway(GET pathway)
#GET3

## 개요
**Tail-anchored proteins**는 C-말단 근처에 단일 transmembrane α-helix를 통해 막에 고정된 중요한 cytosolic face membrane protein군이다. 이들은 [[SRP]]-의존적 경로를 사용할 수 없어, 특수화된 post-translational membrane insertion mechanism을 사용한다.

## Tail-Anchored Proteins의 특징

### 구조적 특성
- C-말단 **매우 가까이**에 단일 transmembrane α-helix 보유
- 대부분의 단백질이 cytosolic face에 위치
- Transmembrane segment는 hydrophobic α-helix 구조

### 기능적 중요성
많은 중요한 단백질들이 이 범주에 속함:
- 다수의 [[SNARE Proteins]] protein subunit (vesicular transport 조절)
- 기타 cytosolic face membrane protein들

## SRP-의존적 경로를 사용할 수 없는 이유

![[Cell Biology/출처/md converted/Chapter 12/_page_29_Picture_2.jpeg]]

### 근본적인 문제
1. Tail-anchored protein이 번역될 때
2. ==Ribosome이 termination codon에 도달하는 시점에==
3. ==Transmembrane α-helix가 되어야 할 polypeptide sequence가 여전히 **ribosome exit tunnel 내부**에 존재==
4. ==[[SRP|SRP]]가 이를 인식할 수 없음==

### 결과
- 단백질이 ribosome에서 **cytosol로 방출**됨
- 대체 경로가 필요

## Tail-Anchored Proteins의 막 삽입 메커니즘
### 0단계: 번역 완료 & C-말단 노출
### 1단계: Cytosol에서의 pre-targeting complex 인식

![[Cell Biology/출처/md converted/Chapter 12/_page_29_Picture_2.jpeg]]

Specialized chaperone complex=**==pre-targeting complex==
- ==Hydrophobic segment가 ribosome에서 나온 후 즉시 인식==
- ==단백질이 aggregation되거나 misfolding되는 것을 방지==
- ==**Get3 targeting factor=Get3 ATPase**로 전달==

### 2단계: Get3에 의한 인식 및 결합

**Get3의 구조와 기능**:

![[Cell Biology/출처/md converted/Chapter 12/_page_29_Picture_2.jpeg]]

- Get3는 SRP와 structurally unrelated
- ==**Hydrophobic pocket**==을 포함:
  - ==많은 methionine side chain으로 구성==
  - 유연한 unbranched side chain을 가진 methionine의 특성 활용
- ==다양한 크기와 형태의 TMS를 인식할 수 있음==


### 3단계: ER 막으로의 Targeting

![[Cell Biology/출처/md converted/Chapter 12/_page_29_Picture_2.jpeg]]
**==Get3-TMS 복합체가 Get1-Get2 receptor complex와 결합==**

**Get1-Get2 receptor complex**:
- ER 막에 위치한 2개 단백질 (Get1과 Get2)로 구성
- 두 가지 기능 수행:
  1. **Receptor 역할**: Get3의 receptor로 작용
  2. **Translocator 역할**: Tail-anchored protein의 hydrophobic segment를 lipid bilayer에 insertion

### 4단계: 막 삽입 및 재활용

**Insertion 과정**:
1. Get3-cargo complex가 Get1-Get2와 결합, 이 때 ==ATP hydrolysis energy로 Get3가 TA protein을 넘겨줌==.
2. Get1-Get2가 hydrophobic segment를 막에 삽입
3. Tail-anchored protein이 ER 막에 고정
4. ==Get3가 방출되어 cytosol로 재활용. ADP 해리되고 ATP가 다시 결합함.==

### 결과
TMS는 ER 막 이중층에 삽입되고, 단백질의 N-말단은 세포질 쪽에 위치.

## [[Co-translational translocation|SRP-의존적 경로]]와의 비교

### 유사점
- **개념적 유사성**:
  - Cytosol에서 cargo 인식
  - Targeting factor (SRP 또는 Get3)가 cargo와 결합
  - Membrane receptor와의 상호작용
  - Membrane translocator를 통한 insertion
  - Targeting factor의 재활용

### 차이점

| 특성 | SRP 경로 | Get3 경로 |
|------|----------|-----------|
| Timing | Co-translational | Post-translational |
| 인식 시점 | Ribosome에서 signal 나타날 때 | Translation 완료 후 cytosol에서 |
| Cargo 상태 | 번역 중인 polypeptide | 완성된 polypeptide |
| Receptor/Translocator | SRP receptor + Sec61 | Get1-Get2 (통합 기능) |
| 에너지 | GTP hydrolysis | ATP hydrolysis |

## 에너지 사용

![[Cell Biology/출처/md converted/Chapter 12/_page_29_Picture_2.jpeg]]

### Get3의 ATP Cycle
- Get3와 SRP 모두 nucleoside triphosphate를 결합하고 가수분해
- **Get3**: ATP 사용
- **SRP**: GTP 사용
- Hydrolysis가 targeting cycle에 directionality 부여

## 다른 Organelle로의 Targeting

### Tail-Anchored Proteins의 분포
일부 tail-anchored protein은 ER 대신 다른 위치로 targeting됨:
- [[Mitochondria]]
- [[Peroxisomes]]

### Targeting 메커니즘
- 이들 organelle로의 targeting mechanism은 아직 알려지지 않음
- 다른 targeting factor와 receptor가 관여할 것으로 추정

### 기타 응용
- 다양한 cytosolic face membrane protein에 사용
- 단백질의 대부분이 cytosol에서 기능하지만 membrane anchorage 필요

## 관련 개념
- [[Transmembrane Protein Insertion]]
- [[Post-translational translocation]]
- [[SNARE Proteins]]
- [[003_Vesicular Transport]]
- [[Protein Targeting]]
- [[Sec61 complex]] (비교 대상)

## 요약
Tail-anchored protein은 C-말단 근처의 transmembrane segment 때문에 SRP-의존적 경로를 사용할 수 없다. 대신, cytosolic chaperone complex가 hydrophobic segment를 인식하고 Get3 targeting factor로 전달한다. Get3는 methionine이 풍부한 hydrophobic pocket을 사용하여 다양한 hydrophobic segment를 인식하며, ER 막의 Get1-Get2 complex가 receptor이자 translocator로 작용한다. 이 post-translational mechanism은 SRP-의존적 경로와 개념적으로 유사하지만, SNARE protein을 포함한 중요한 tail-anchored protein들의 적절한 membrane insertion을 가능하게 한다.
