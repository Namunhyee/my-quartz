# Protein import into Peroxisome

Peroxisome의 단백질들은 두 가지 경로로 전달된다.

![[Cell Biology/출처/md converted/Chapter 12/_page_42_Figure_5.jpeg]]
*Fig 12-46. Peroxisome 증식 및 신규 생성 모델. 일부 막 단백질(Pex3, Pex15)은 ER에서 유래한 precursor vesicle을 통해 전달되고, 대부분의 peroxisomal 단백질은 cytosol에서 직접 수입된다.*[^기출_중간_2023_30]

## 경로 1: ER 경유 경로 (일부 막 단백질)

일부 peroxisomal **막 단백질**은 먼저 ER의 [[Sec61 complex|Sec61 translocator]]를 통해 ER 막에 삽입된 후, 특화된 **peroxisomal precursor vesicle**로 포장되어 기존 peroxisome과 융합하거나 새로운 peroxisome을 형성한다. 이 budding 반응에는 **Pex19** 및 아직 밝혀지지 않은 cytosolic 단백질들이 관여한다.

## 경로 2: Cytosol에서 직접 수입 (대부분의 단백질)

대부분의 peroxisomal 단백질은 cytosolic ribosome에서 합성된 후 peroxisome 막의 import receptor와 translocator를 통해 직접 수입된다. 이 과정은 ATP 가수분해에 의해 구동된다.[^기출_중간_2025_12]

### Peroxisomal Sorting Signals

두 종류의 신호 서열이 있다 (→ [[Sorting Signal|Sorting Signal]] 참조):
- **PTS1 (Peroxisome Targeting Signal 1)**: 대부분의 peroxisomal 단백질의 C-terminus에 있는 3개 아미노산 서열 (Ser-Lys-Leu)
- **PTS2**: 일부 단백질의 N-terminus 근처에 있는 부분적으로 소수성인 더 긴 서열

## Peroxin(Pex) 단백질들의 역할 — 수입 사이클 순서

### 1단계: Cargo 인식 (cytosol)

- **Pex5**: PTS1을 인식하는 cytosolic import receptor. PTS1을 가진 cargo 단백질과 결합한다.[^기출_중간_2023_30]
- **Pex7**: PTS2를 인식하는 cytosolic import receptor. 추가적인 accessory peroxin들과 함께 작동한다.

### 2단계: Peroxisomal 막으로 이동 및 Translocation

- Pex5–cargo 복합체(또는 Pex7 복합체)가 peroxisomal 막의 **protein translocator**에 결합한다.
- Translocator는 최소 6개의 peroxin으로 구성되어 있으며, 완전히 접힌(folded) 단백질도 막을 통과시킬 수 있다.[^기출_중간_2025_12] ER translocator와 달리 가변적인 크기의 cargo를 수용하기 위해 동적으로 크기가 변한다.
- Cargo가 peroxisome 내부로 방출된다.

### 3단계: Pex5 재순환 (recycling)

Cargo를 방출한 후, Pex5는 cytosol로 되돌아가야 한다. 이 recycling 과정은 여러 단계를 거친다:

- **Pex5의 ubiquitin 수식**: Pex5가 peroxisomal 막에서 재순환되기 위해 **ubiquitin**이 부착된다. Ubiquitin이 Pex5를 cytosol로 끌어내는 데 필요한 손잡이 역할을 한다.
- **Pex1–Pex6 AAA-ATPase[^1] 복합체**: ATP 가수분해 에너지를 이용해 ubiquitin이 부착된 Pex5를 peroxisome에서 cytosol로 꺼낸다. 이것이 import 사이클의 에너지 구동 단계이다.
- 재순환된 Pex5는 다음 cargo 분자를 위해 재사용된다.

## ==Zellweger Syndrome==

**Zellweger syndrome**은 peroxin 유전자, 가장 흔하게는 ==**Pex1** 돌연변이==로 인해 발생하는 유전 질환이다. 세포는 "빈" peroxisome(막은 있으나 효소가 없는)을 포함하며, 다음과 같은 대사 이상이 나타난다:
- 매우 긴 사슬(very-long-chain) 및 분지형 지방산 축적 (peroxisome의 β-oxidation 불가)
- [[Plasmalogen]] 결핍
### ==3 Metabolic Consequences== 
- Peroxisomal β-oxidation 감소 = Very long-chain fatty acids (VLCFA) 축적 
- plasmalogen 감소 = Membrane structure/function 이상 
- H₂O₂ detox 문제 = Oxidative stress 증가

### ==Clinical Features==
- Severe hypotonia
- Seizures 
- Hepatomegaly / liver dysfunction
- Craniofacial dysmorphism (high forehead, flat face)
- 대부분 infancy에 사망


[^기출_중간_2023_30]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_30번|2023 중간 30번]] — 퍼옥시좀으로 단백질 import는 두가지 경로. ER에서 vesicular transport 혹은 cytosolic protein의 직접적인 import.
[^기출_중간_2025_12]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_12번|2025 중간 12번]] — 과산화소체는 자체 DNA·리보솜이 없고 모든 단백질을 세포질 리보솜 합성 후 수입한다는 내용이 틀린 선지 ③으로 출제됨.

[^1]: [[ER-associated degradation#^95a85b|AAA-ATPase]]는 ERAD에서 exported protein을 잡아당기는 역할을 했었음
