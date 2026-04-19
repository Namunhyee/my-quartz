# Transportation Mechanism_MOC

## 개요

Transport vesicle이 donor compartment에서 budding된 후, target membrane으로 이동하여 fusion하기까지의 과정은 정교하게 조절된다. 이 과정은 vesicle의 coat disassembly, vesicle의 directed movement, 그리고 correct target membrane에서의 selective docking과 fusion을 포함한다.[^기출_중간_2023_7]

## Transportation의 핵심 요소

Transport vesicle의 이동과 targeting은 다음 molecular system에 의해 조절된다:

### 1. [[Coat Assembly Control by Monomeric GTPase|Coat-recruitment GTPase]]
- Coat assembly 개시
- [[#Monomeric GTPase control of Coat Assembly|Coat disassembly timing 조절]]
- Vesicle formation의 critical switch point 제공

### 2. [[Rab Cycle|Rab Protein System]]
- Vesicle과 target membrane에 특이적 marker 제공
- [[#Rab Cycle|GTP/GDP cycle]]을 통한 membrane association 조절
- Multiple Rab protein간의 [[#Rab Cascades|sequential activation]]으로 organelle maturation

### 3. [[310_Motor Proteins_MOC|Motor Protein]]
- [[310_Motor Proteins_MOC|Cytoskeleton을 따라 vesicle 이동]]
- Rab effector로 작용
- [[300_Microtubules_MOC|Microtubule]] 또는 [[100_Actin filaments_MOC|actin filament]] 이용

### 4. [[Rab Cycle#==Long-range tethering==|Tethering Protein]]
- Initial capture of vesicle at target membrane
- Long-range interaction (최대 200 nm)
- Rab effector로 작용

## [[Coat Assembly Control by Monomeric GTPase|Monomeric GTPase control of Coat Assembly]]

Coat assembly와 disassembly는 **coat-recruitment GTPase**에 의해 조절된다.

### GTPase Family

세 가지 주요 coat-recruitment GTPase:
- **Sar1**: COPII coat assembly (ER membrane)
- **ARF protein**: COPI coat과 clathrin coat assembly (Golgi membrane)
- **Rab7**: Retromer coat assembly (endosome membrane)

### Molecular Switch Mechanism

이들은 [[Cell Biology/내용/03. Energy, Catalysis, and Biosynthesis#GTP-binding Proteins|monomeric GTPase]]로서 작동:

**Inactive state (GDP-bound)**:
- Cytosol에 high concentration으로 존재
- Soluble form

**Active state (GTP-bound)**:
- Membrane에 anchored
- Coat protein recruitment

### Activation Cycle

![[Cell Biology/출처/md converted/Chapter 13/_page_9_Picture_2.jpeg]]

**[[COPII|COPII vesicle formation]] 예시**:

1. **Activation**:
   - ER membrane의 Sar1 GEF가 cytosolic Sar1-GDP 인식
   - GDP release → GTP binding
   - Sar1-GTP는 amphiphilic helix expose
   - Helix가 ER membrane의 cytoplasmic leaflet에 insert

2. **Coat Recruitment**:
   - Membrane-bound Sar1-GTP가 COPII adaptor protein (Sec23/Sec24) recruit
   - Inner coat layer 형성
   - Sec23/Sec24가 cargo receptor binding site 보유
   - Outer coat protein (Sec13/Sec31) recruitment
   - Coat가 membrane deformation과 bud formation drive

3. **Disassembly**:
   - Fully assembled COPII coat가 Sar1의 GTPase activity accelerate
   - GTP → GDP hydrolysis
   - Sar1-GDP는 membrane에서 dissociate
   - Coat disassembly

### Timing Control

**Key principle**: Vesicle formation이 GTP hydrolysis보다 빠르게 완료되어야 함
- Bud formation이 충분히 빠르면 complete vesicle 생성
- 느리면 premature disassembly로 실패
- 적절한 시간과 장소에서 vesicle formation 보장

### COPI Coat의 특수한 조절

COPI-coated vesicle은 다른 disassembly trigger 사용:

**Curvature sensing**:
1. ARF GAP가 assembling COPI coat에 recruit
2. Membrane의 lipid packing density sensing
3. Curvature가 vesicle 수준 접근 시 ARF GAP 활성화
4. ARF의 GTP hydrolysis 자극 → coat disassembly

## [[Rab Cascades]]

**Rab cascade**는 하나의 Rab protein이 다른 Rab protein을 순차적으로 recruit하고 활성화하는 과정이다.

![[Cell Biology/출처/md converted/Chapter 13/_page_13_Picture_2.jpeg]]

### Mechanism

1. **Initial Rab activation** (RabA):
   - RabA GEF가 locally activated
   - RabA-GTP가 membrane에 insert
   - RabA-associated membrane patch (Rab domain) 형성

2. **Effector recruitment**:
   - Active RabA가 effector protein recruit
   - 중요한 effector 중 하나: RabB GEF

3. **Next Rab recruitment** (RabB):
   - RabB GEF가 RabB recruit 및 activate
   - RabB-GTP가 자신의 effector recruit
   - RabB effector 중 하나: RabA GAP

4. **Previous Rab inactivation**:
   - RabA GAP가 RabA-GTP hydrolysis 촉진
   - RabA 비활성화 및 RabA-associated patch disassembly
   - RabB-associated patch 성장

### Functional Significance

**Endosome maturation 예시**:
- Rab5 (early endosome marker) → Rab7 (late endosome marker)
- Rab5-associated patch가 Rab7-associated patch로 대체
- Early endosome이 late endosome으로 conversion

**특징**:
- **Unidirectional**: Self-amplifying nature로 irreversible
- **Progressive**: Organelle identity의 ordered change
- **Autonomous**: Once initiated, proceeds automatically

### Multiple Rab Cascade

일부 organelle은 multiple Rab cascade 거침:
- Each step이 organelle의 progressive maturation 나타냄
- Sequential functional reprogramming

## Rab Cycle

**Rab protein**은 GTP/GDP cycle과 membrane/cytosol cycle을 coupling하여 작동한다.

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Figure_9.jpeg]]

### Rab Protein의 특징

**Family**:
- Monomeric GTPase superfamily의 largest subfamily
- Mammalian cell에 60개 이상 member
- 각 Rab는 특정 organelle 또는 transport vesicle과 연관

**Distribution**:
- 각 membrane-enclosed organelle에 최소 한 가지 Rab
- 각 Rab는 여러 compartment에 존재 가능
- Transport vesicle type에 따라 다른 Rab

### Membrane–Cytosol Cycle

**Inactive state (GDP-bound)**:
1. Rab-GDP는 cytosol에서 soluble
2. GDP dissociation inhibitor (GDI) protein과 결합
3. GDI가 Rab를 soluble하게 유지

**Activation**:
1. Membrane-bound Rab GEF가 Rab-GDP 인식
2. GDP → GTP exchange 촉진
3. Rab-GTP의 lipid anchor가 membrane insert
4. GDI release

**Active state (GTP-bound)**:
1. Membrane-anchored Rab-GTP
2. **Rab effector** protein recruit

**Inactivation**:
1. Rab GAP가 GTP hydrolysis 촉진
2. Rab-GDP 형성
3. Membrane에서 dissociate
4. GDI와 결합하여 cytosol로 return

### Rab Effector

Rab effector는 diverse set of protein:

**종류**:
- **Motor protein**: Vesicle을 cytoskeleton을 따라 transport
- **Tethering protein**: Vesicle과 target membrane 연결
- **PI kinase**: Local [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|phosphoinositide]] 생성
- **SNARE**: Membrane fusion 매개
- **Other Rab GEF**: [[#Rab Cascades]] 매개

**Functional role**:
- Vesicle의 correct target membrane으로의 delivery
- Membrane fusion preparation
- Organelle identity 정의

### Organelle Identity

Rab protein은 organelle identity의 key determinant:

**Rab-associated membrane patch**:
1. Specific Rab GEF가 localized activation
2. Active Rab protein이 자신의 effector recruit
3. Effector 중에는 PI kinase 포함 → local PIP 생성
4. PIP와 Rab가 함께 effector stabilization
5. Positive feedback로 patch assembly amplification

**특징**:
- Large, specialized membrane patch 형성
- Functionally distinct membrane domain 정의
- Multiple Rab-associated patch가 같은 organelle에 공존 가능
  - 예: Endosome의 Rab5 (incoming vesicle), Rab11/Rab4 (recycling), Rab7 (lysosome로의 progression)

## Transport Vesicle Guidance

### Motor Protein

Rab effector로서의 motor protein:
- Vesicle을 [[300_Microtubules_MOC|microtubule]] 또는 [[100_Actin filaments_MOC|actin filament]]를 따라 propel
- Long-distance transport 가능
- Direction 조절 (plus-end vs minus-end)

### Tethering Protein

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Picture_2.jpeg]]

**기능**:
- Target membrane에 localized
- Active Rab protein 인식
- Long threadlike domain으로 vesicle capture (최대 200 nm)

**Mechanism**:
1. Vesicle의 Rab-GTP가 tethering protein의 Rab effector domain 인식
2. Tethering protein이 vesicle과 target membrane 연결
3. Vesicle이 target membrane에 근접
4. [[Vesicle Fusion by SNARE_MOC#SNARE|SNARE]] interaction 가능하게 됨

## 관련 내용

- [[Vesicle formation_MOC|Vesicle formation]]
- [[Vesicle Fusion by SNARE_MOC|Vesicle fusion]]
- [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|Phosphoinositide regulation]]
- [[endocytosis#Endosomes maturation|Endosome maturation]]
- [[Transportation from the ER Through the Golgi Apparatus_MOC|ER to Golgi transport]]

[^기출_중간_2023_7]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_7번|2023 중간 7번]] — Rab protein의 GTP/GDP cycle과 membrane association을 통한 vesicle targeting 메커니즘이 정답 근거로 활용됨.
