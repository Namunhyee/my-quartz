# Retrieval Pathway to the ER

## 개요

Retrieval pathway는 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting|ER]]을 실수로 떠난 protein을 다시 ER로 되돌리는 transport system이다.[^기출_중간_2021_미상B][^기출_중간_2022_27][^기출_중간_2023_5] 이 pathway는 각 compartment의 identity를 유지하는 데 essential하다.

![[Cell Biology/출처/md converted/Chapter 13/_page_19_Figure_10.jpeg]]

## COPI-coated Vesicle

Retrieval pathway는 **COPI-coated vesicle**에 의해 매개된다.

### Budding Sites

COPI vesicle budding 발생 위치:
- **[[Vesicular tubular cluster]]**: ER vesicle fusion 직후 시작
- **Golgi cisternae**: 각 cisterna에서 budding
- **cis Golgi network**: 주요 retrieval site
- **trans Golgi network**: 일부 protein return

### Cargo

COPI vesicle이 운반하는 cargo:

1. **Escaped ER resident protein**
   - Soluble ER protein
   - ER membrane protein
   
2. **Recycled machinery**
   - Cargo receptor
   - SNARE protein
   - Coat component

3. **Golgi resident protein**
   - 다음 cisterna로 잘못 이동한 경우
   - Appropriate cisterna로 return

## ER Retrieval Signal

Retrieval pathway는 specific signal에 의존한다.

### Membrane Protein Signal: KKXX

**Structure**:
- C-terminal end에 위치
- **K-K-X-X**: Two lysine + any two amino acid
- Single-letter code 사용

**Mechanism**:
1. KKXX sequence가 COPI coat에 directly bind
2. Protein이 COPI-coated vesicle에 package
3. ER로 retrograde delivery
4. ER에 도달하여 release

**Protein examples**:
- ER membrane protein
- v-SNARE와 t-SNARE (ER-Golgi interface에서 기능)
- Some cargo receptor

### Soluble ER resident Protein Signal: KDEL

**Structure**:
- C-terminal end에 위치
- **K-D-E-L**: Lys-Asp-Glu-Leu
- 또는 유사한 sequence

**Protein examples**:
- BiP ([[Cell Biology/내용/06. How Cells Obtain Energy from Food|ER chaperone]])
- Other soluble ER resident protein

**Genetic engineering evidence**:
- KDEL 제거: Protein slowly secreted
- KDEL 추가: Normally secreted protein이 ER accumulate

## KDEL Receptor

![[Cell Biology/출처/md converted/Chapter 13/_page_19_Figure_10.jpeg]]

Soluble protein의 retrieval은 **KDEL receptor** 필요.

### Structure
- Multipass transmembrane protein
- Luminal domain: KDEL sequence 인식
- Cytosolic domain: COPI coat binding

### Cycling Mechanism

**ER → Golgi**:
1. KDEL receptor가 ER membrane에 위치
2. Forward transport pathway로 Golgi에 도달
3. Low pH in Golgi

**Golgi에서**:
1. KDEL-bearing protein 인식
2. Receptor–ligand complex 형성
3. COPI coat recruitment
4. COPI vesicle에 package

**Golgi → ER**:
1. COPI vesicle이 ER로 이동
2. ER에 fusion
3. Higher pH in ER
4. Ligand release
5. Free receptor는 다시 Golgi로

### pH-dependent Affinity

![[Cell Biology/출처/md converted/Chapter 13/_page_19_Figure_10.jpeg]]

**Key feature**:
- Golgi (pH ~6.5-6.7): High affinity for KDEL
- ER (pH ~7.2): Low affinity for KDEL

**Molecular basis**:
- Critical histidine in KDEL receptor
- Golgi의 lower pH에서 protonated
- Protonation이 KDEL sequence와의 interaction favor
- ER의 higher pH에서 deprotonated → weak binding

**Functional consequence**:
- Directional transport
- Unidirectional retrieval
- Efficient cycling

### V-type H⁺-ATPase

pH gradient maintenance:
- Golgi membrane의 V-type ATPase
- ATP hydrolysis로 H⁺ pump
- Golgi lumen acidification
- Retrieval system의 driving force 제공

## Two-tier Retention System

ER resident protein retention은 두 mechanism 결합:

### Primary: Aggregation-based Retention

**Mechanism**:
- ER resident protein끊끼리 결합
- Large complex 형성
- Too big to enter transport vesicle efficiently

**Rationale**:
- ER resident protein은 매우 high concentration (millimolar)
- Relatively low-affinity interaction으로도 충분
- 대부분의 protein을 complex로 retain

### Secondary: Signal-based Retrieval

**Mechanism**:
- Aggregation escape한 일부 protein
- KDEL 또는 KKXX signal로 capture
- COPI vesicle로 return

**Efficiency**:
- Complete retention 불가능
- 일부 ER protein은 천천히 leak
- Retrieval system이 대부분 recover

## pH-sensitive Sorting

KDEL receptor는 pH-sensitive protein–protein interaction 사용:
- 많은 protein-sorting step에서 유사 mechanism
- Compartment간 pH difference 이용
- Directional transport 제공

**Other examples**:
- [[Lysosome_MOC#Transport of lysosomal hydrolases to endosomes|M6P receptor]] (TGN ↔ endosome)
- Transferrin receptor (endosome ↔ plasma membrane)
- Various cargo receptor

## Continuous Retrieval

Retrieval은 continuous process:

### Vesicular Tubular Cluster
- ER vesicle fusion 직후 시작
- Initial protein sorting
- Major ER protein return

### Golgi Apparatus
- Each cisterna에서 retrieval
- Progressive protein sorting
- Golgi enzyme도 이전 cisterna로 return

### Maturation
- Vesicular tubular cluster가 Golgi로 이동하면서
- Continuous COPI budding
- Selected protein return
- Composition 점진적 변화

## Functional Significance

### Compartment Identity
- 각 compartment의 unique protein composition 유지
- Constant membrane exchange에도 불구하고
- Identity preservation

### Machinery Recycling
- Cargo receptor, SNARE 등 재사용
- Efficient vesicle transport
- Resource conservation

### Quality Control
- Incorrectly localized protein correction
- Protein sorting error recovery
- System robustness

### Balance Maintenance
- Forward와 retrograde transport balance
- Compartment size와 composition steady-state
- Homeostasis

## 관련 내용

- [[Transportation from the ER Through the Golgi Apparatus_MOC|ER to Golgi transport]]
- [[Vesicular tubular cluster|Vesicular tubular cluster formation]]
- [[Vesicle formation_MOC|COPI vesicle formation]]
- [[Golgi apparatus_MOC|Golgi apparatus]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting|ER resident proteins]]
- [[Cell Biology/내용/06. How Cells Obtain Energy from Food|Chaperone proteins]]

[^기출_중간_2021_미상B]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상B번|2021 중간 미상B번]] — KDEL(soluble ER 단백질 회수)과 KKXX(막 단백질 회수) 신호를 이용한 ER retrieval pathway 개념이 선지 근거로 활용됨.
[^기출_중간_2022_27]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_27번|2022 중간 27번]] — COPI vesicle을 통한 ER retrieval 메커니즘과 KDEL receptor의 pH 의존적 결합이 정답 근거로 활용됨.
[^기출_중간_2023_5]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_5번|2023 중간 5번]] — ER retrieval signal(KDEL/KKXX)과 COPI vesicle 기반 retrograde transport에 관한 선지 ⑤가 정답.
