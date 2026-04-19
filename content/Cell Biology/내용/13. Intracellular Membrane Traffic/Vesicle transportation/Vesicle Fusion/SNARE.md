# SNARE

## 개요

**SNARE protein** (SNAREs)은 vesicle transport에서 membrane fusion reaction을 catalyze하는 fusion protein이다.[^기출_중간_2022_26][^기출_중간_2023_8][^기출_중간_2023_ver2_36] SNARE는 "SNAP receptor"의 약자로, 원래 NSF attachment protein (SNAP)과 상호작용하는 receptor로 발견되었다.
세부 메커니즘 : [[Vesicle Fusion by SNARE_MOC]]

## SNARE의 종류와 분포

### ==Classification==

**v-SNARE (vesicle-SNARE)**:[^기출_중간_2021_미상C]
- 주로 transport vesicle membrane에 위치
- Single polypeptide chain
- 대표적 예: Synaptobrevin (synaptic vesicle)

**t-SNARE (target-SNARE)**:
- 주로 target membrane에 위치
- 보통 3개의 protein으로 구성
- 대표적 예: Syntaxin과 SNAP25 (plasma membrane)

### Distribution
- Animal cell에 최소 35개의 서로 다른 SNARE
- 각 SNARE는 특정 organelle과 연관:
  - Secretory pathway의 특정 단계
  - Endocytic pathway의 특정 compartment
- Multiple SNARE가 한 membrane에 공존 가능

## 구조적 특징

### Helical Domain

**초기 상태**:
- 대부분 unstructured
- Isolated 상태에서 defined structure 부재

**활성 상태**:
- v-SNARE와 t-SNARE interaction 시
- Four-helix bundle 형성
- 매우 안정한 구조

### SNARE Complex

**구성**:
- v-SNARE: 1개의 α helix 기여
- t-SNARE: 3개의 α helix 기여
  - Syntaxin: 1개 helix (transmembrane protein)
  - SNAP25: 2개 helix (peripheral membrane protein, fatty acyl chain으로 anchor)

**특징**:
- Four parallel α helices가 coiled coil로 intertwine
- Extremely stable structure
- High energy of formation

## Trans-SNARE Complex Formation

![[Pasted image 20260419171627.png]]
### Zippering Mechanism

1. **Initial Contact**:
   - v-SNARE와 t-SNARE의 N-terminal region 상호작용 시작
   - Loose association

2. **Progressive Zippering**:
   - N-terminus에서 C-terminus 방향으로 zippering
   - Helical domain이 점진적으로 organize
   - Membrane이 점점 더 가까워짐

3. **Complete Assembly**:
   - Full four-helix bundle 완성
   - 두 membrane이 매우 근접 (< 1.5 nm)
   - Membrane fusion 준비 완료

### ==Energy Release==

Assembly process의 energetics:
- Unstructured helix → highly stable bundle
- ==매우 energetically favorable==
- ==Released energy가 다음을 drive:==
  - Water displacement from membrane interface
  - Membrane apposition[^기출_중간_2023_8][^기출_중간_2025_24]
  - Lipid bilayer merger[^기출_중간_2023_8][^기출_중간_2025_24]

## SNARE Specificity

### Pairing Specificity
SNARE pairing은 매우 특이적:
- 특정 v-SNARE는 특정 t-SNARE와만 pair
- Complementary set의 SNARE만 stable complex 형성

### Functional Test

**Liposome fusion assay**:
1. v-SNARE 포함 liposome 준비
2. t-SNARE 포함 liposome 준비
3. 혼합
4. 결과:
   - Matching pair: Efficient membrane fusion
   - Non-matching pair: No fusion

### Biological Significance

Specificity는 두 가지 level의 vesicle targeting 제공:
1. **[[Transportation Mechanism_MOC#Rab Cycle|Rab protein]]**: Initial recognition과 tethering
2. **SNARE**: Final recognition과 fusion

이중 체계로 매우 높은 targeting accuracy 달성.


## ==Synaptic Vesicle의 특수한 SNARE==

![[Cell Biology/출처/md converted/Chapter 13/_page_34_Figure_2.jpeg]]

Synaptic vesicle fusion은 특수한 SNARE set 사용:

### ==Component==
- **v-SNARE**: <font color="#92d050">Synaptobrevin</font> (transmembrane protein)
- **t-SNARE**: 
  - <font color="#00b0f0">Syntaxin</font> (transmembrane protein, 1 helix)
  - <font color="#ffe100">SNAP25</font> (peripheral membrane protein, 2 helices)

### Regulation

일반적인 SNARE와 달리 추가 조절:
- **Synaptotagmin**: Ca²⁺ sensor
- **Complexin**: SNARE complex를 metastable state로 freeze

==**작동 메커니즘**:==
1. ==SNARE partially assemble → primed state==
2. ==Complexin이 premature fusion 방지==
3. ==Ca²⁺ influx → Synaptotagmin 활성화==
4. ==Complexin release==
5. ==SNARE fully zipper → rapid fusion==
6. ==Neurotransmitter release (millisecond scale)==

이는 [[exocytosis#synaptic vesicles|regulated exocytosis]]의 특수한 형태.

## Viral Fusion Protein

일부 virus는 자체 fusion protein 사용:

### 특징
- SNARE-mediated fusion과 달리 한쪽 membrane의 protein만 필요
- Virus envelope의 fusion protein
- Host cell membrane에는 특별한 fusion protein 불필요

### Mechanism
1. Appropriate environment에서 viral fusion protein unfurl
2. Partially hydrophobic patch를 host membrane에 insert
3. Fusion protein compaction
4. 두 membrane을 가까이 bring
5. Membrane fusion drive

### 예시
- **HIV**: Plasma membrane과 fusion
- **Influenza virus**: Endosome에서 low pH로 활성화
- **SARS-CoV-2**: Host protease cleavage로 활성화

![[Cell Biology/출처/md converted/Chapter 13/_page_48_Figure_9.jpeg]]

Viral fusion은 SNARE와 유사한 원리지만 다른 molecular detail을 사용.

## 관련 내용

- [[Vesicle Fusion by SNARE_MOC|Vesicle fusion 메커니즘]]
- [[Transportation Mechanism_MOC|Transportation mechanism]]
- [[exocytosis#synaptic vesicles|Synaptic vesicle exocytosis]]
- [[Transportation from the ER Through the Golgi Apparatus_MOC|ER to Golgi transport]]

[^기출_중간_2021_미상C]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상C번|2021 중간 미상C번]] — v-SNARE의 역할과 Rab effector(tethering protein, motor protein 등)에 대한 이해가 선지 근거로 활용됨.
[^기출_중간_2022_26]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_26번|2022 중간 26번]] — SNARE의 5단계(initial contact, progressive zippering, membrane fusion, NSF disassembly, recycling) 이해가 정답 근거로 활용됨.
[^기출_중간_2023_8]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_8번|2023 중간 8번]] — ①번 선지: Lipid bilayer 두 막의 세포질 면에서 만들어진 막에 새로운 bilayer가 만들어진다 (맞음, v-SNARE와 t-SNARE의 trans-SNARE complex가 membrane apposition·lipid merger를 drive, 정답); ②번 선지: 융합에 관한 SNARE 복합체(V-&T-SNARE)는 분리 후 그대로 보존된다 (틀림, NSF/α-SNAP에 의해 cis-SNARE complex가 disassembly된 후 재활용); ③번 선지: Hemifusion 단계에서 합쳐지는 bilayer의 한 층이 남아 필요 없어지면 분리된다 (틀림, hemifusion 단계에서 두 막의 outer leaflet만 먼저 fusion); ④번 선지: Stalk 형성 단계에서 lipid bilayer 두 막의 세포질 면의 인지질이 섞여 stalk를 만든다 (맞음, cytoplasmic face의 outer leaflet이 stalk 형성); ⑤번 선지: 소포와 target 막사이의 작동자가 먼저 연결될 때만 SNARE가 pairing 할 수 있다 (틀림, SNARE pairing 자체가 fusion을 drive하며 tethering 후에 가능).
[^기출_중간_2023_ver2_36]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_ver2_36번|2023 중간 ver2 36번]] — SNARE 5단계 서술형 문항; trans-SNARE complex 형성부터 NSF 분해 및 재활용까지 순서대로 서술해야 함.
[^기출_중간_2025_24]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_24번|2025 중간 24번]] — ①번 선지: 세포질 면의 막에서의 인지질이 초기 stalk를 만든다 (맞음, cytoplasmic face/outer leaflet의 인지질이 먼저 stalk 형성, 정답); ②번 선지: 세포질쪽에서 만들어진 막에 새로운 bilayer가 만들어진다 (틀림, 새 bilayer는 lumen 쪽에 형성); ③번 선지: Hemifusion 단계에서 합쳐지는 bilayer의 lumenal 막은 융합되지 않고 diaphragm이 형성된다 (맞음, hemifusion에서는 outer leaflet만 융합, inner/lumenal leaflet이 hemifusion diaphragm 형성); ④번 선지: 융합에 관한 SNARE 복합체 (V-&T-SNARE)는 분리되지 않고 보존된다 (틀림, NSF에 의해 분리 후 재활용); ⑤번 선지: Hemifusion 단계에서 합쳐지는 bilayer의 rupture를 통해 pore가 만들어지고 세포질 내에서 소포의 내용물이 희석된다 (틀림, pore 형성 후 내용물은 target compartment lumen으로 방출).
