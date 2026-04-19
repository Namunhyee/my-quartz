# Transportation from the ER Through the Golgi Apparatus_MOC

## 개요

[[Cell Biology/내용/12. Intracellular Organization and Protein Sorting|ER]]에서 합성된 단백질은 [[Golgi apparatus_MOC|Golgi apparatus]]를 거쳐 최종 목적지로 이동한다. 이 과정은 vesicular transport와 retrieval pathway의 정교한 균형으로 이루어지며, 각 compartment의 identity를 유지하면서도 지속적인 cargo 이동을 가능하게 한다.[^기출_중간_2021_13]

## ER Exit: [[COPII]]-coated Vesicle Formation

### ER Exit Site

단백질은 ER의 specialized region인 **ER exit site**에서 출발한다:
- Membrane에 bound ribosome 부재
- 대부분의 animal cell은 ER network 전체에 exit site 분산
- COPII coat assembly가 이곳에서 발생

### Quality Control: [[CFTR]]

**Protein folding 검증**:
- 제대로 fold되고 assemble된 protein만 ER exit 가능
- Misfolded 또는 incompletely assembled protein은 transient하게 ER 체류
- Chaperone protein ([[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]], [[Calnexin and Calreticulin|calnexin]])이 exit signal cover 또는 ER anchor

**실패한 protein의 운명**:
- [[ER-associated degradation|ERAD를 통해 Cytosol로 transport back]]
- Proteasome에 의해 degradation
- [[Quality control of ER protein folding|Quality-control step]]으로 비정상 protein의 onward transport 방지

**CFTR 예시**:
- **Cystic fibrosis transmembrane conductance regulator**
- Plasma membrane의 Cl⁻ transporter
- Predominant mutation으로 slightly misfolded CFTR 생성
- Plasma membrane 도달하면 거의 정상 기능
- 하지만 ER에 retain되어 proteasome에서 degraded
- 결과: Cystic fibrosis disease
- 교훈: Stringent quality control의 drawback

### Exit Rate Variation

서로 다른 cargo protein은 다른 rate와 efficiency로 vesicle 진입:
- Folding과 oligomerization efficiency 차이
- Oligomerization kinetics 차이
- Cargo receptor와 COPII coat engagement 능력 차이

ER exit step은 secretory pathway의 major checkpoint.

## Vesicular Tubular Cluster

### ==Formation==

![[Cell Biology/출처/md converted/Chapter 13/_page_18_Figure_9.jpeg]]

ER-derived transport vesicle이 coat shed 후:

1. ==**Homotypic fusion**==:
   - [[COPII]]-coated vesicle이 서로 fusion
   - [[Vesicle Fusion by SNARE_MOC#Homotypic vs Heterotypic Fusion|Homotypic fusion]]은 symmetrical SNARE interaction 사용
   - 양쪽 membrane에 v-SNARE와 t-SNARE 모두 존재

2. **Vesicular tubular cluster 형성**:
   - Convoluted appearance (electron microscope)
   - ER과는 separate compartment
   - ER에서 기능하는 많은 protein 부재

3. **Continual generation**:
   - 지속적으로 생성
   - ER에서 Golgi로 material 운반하는 transport container로 기능

### Movement to Golgi
![[Cell Biology/출처/md converted/Chapter 13/_page_19_Figure_10.jpeg]]


**Microtubule-based transport**:
- Vesicular tubular cluster가 microtubule을 따라 빠르게 이동
- Motor protein에 의해 추진
- Golgi apparatus로 이동하여 fusion

**Typical lifetime**:
- 약 10분간 incoming vesicle 수용
- 이후 late endosome으로 maturation 시작

### Tubular and Vacuolar Domain

Early stage vesicular tubular cluster:
- **Tubular domain**: 대부분의 membrane surface area
- **Vacuolar domain**: 대부분의 volume

## Retrieval Pathway to the ER
![[Cell Biology/출처/md converted/Chapter 13/_page_18_Figure_9.jpeg]]

### COPI-coated Vesicle Budding

Vesicular tubular cluster 형성 직후:
- **COPI-coated vesicle** budding 시작
- COPII coat shed된 지 수 초 후
- Coat assembly switch의 조절 mechanism은 아직 불명확

### Coatomer

COPI-coated vesicle의 unique feature:
- Inner와 outer coat layer component가 **coatomer**라는 preassembled complex로 recruit
- Clathrin이나 COPII와 달리 한 번에 recruit

### Retrieval Function

==COPI-coated vesicle은 **retrieval pathway** 기능:==

**Cargo**:
1. **Escaped ER resident protein**:
   - 실수로 ER 떠난 protein
   - [[#ER retrieval signal]]로 인식되어 return

2. **Recycled machinery component**:
   - ER budding에 참여한 cargo receptor
   - SNARE protein
   - 다시 ER로 돌아가 재사용

**Continuation**:
- Retrieval은 vesicular tubular cluster뿐만 아니라
- Golgi apparatus에서도 계속됨
- Vesicular tubular cluster가 Golgi로 이동하면서도 retrograde transport 지속

### Maturation Process

Vesicular tubular cluster는 계속 mature:
1. Tubular domain의 대부분이 ER로 recycled
2. Vacuolar domain thoroughly modified
3. Endosome이 motor에 의해 nucleus 쪽으로 이동
4. Composition 지속적으로 변화
5. Selected protein이 ER로 return
6. Eventually transform into late endosome

Golgi 도달 후에도 retrieval 계속되어 더욱 mature.

## ER Retrieval Signal

### [[#Retrieval Pathway to the ER|Retrieval pathway]]는 **ER retrieval signal** 의존

#### Membrane Protein의 Retrieval Signal

**KKXX sequence**:
- C-terminal end에 two lysine + any two amino acid
- Single-letter amino acid code로 KKXX
- COPI coat에 directly bind
- COPI-coated vesicle에 package되어 ER로 retrograde delivery

**Function**:
- ER membrane protein retain
- ER-Golgi interface에서 기능하는 membrane protein에서 발견:
  - v-SNARE와 t-SNARE
  - Some cargo receptor

#### Soluble Protein의 Retrieval Signal

**KDEL sequence** (Lys-Asp-Glu-Leu):
- C-terminal end
- BiP 같은 soluble ER resident protein에 존재

**Genetic engineering experiment**:
- KDEL 제거 시: BiP가 천천히 secreted
- KDEL을 normally secreted protein에 transfer: ER accumulation

**KDEL Receptor**:

![[Cell Biology/출처/md converted/Chapter 13/_page_19_Figure_10.jpeg]]

- Multipass transmembrane protein
- KDEL sequence 인식
- KDEL-bearing protein을 COPI-coated retrograde vesicle에 package

### Receptor Cycling

**KDEL receptor cycling**:
- ER과 Golgi 사이 shuttle
- Golgi에서 KDEL sequence binding (high affinity at lower pH)
- ER에서 release (low pH에서 affinity 감소)

**pH-dependent affinity**:
- Golgi의 낮은 pH에서 강한 binding
- ER의 pH에서 weak binding
- Critical histidine이 Golgi의 lower pH에서 protonated
- Protonation이 KDEL sequence와의 interaction favor

V-type ATPase에 의한 H⁺ pump가 이 pH difference 유지.

**Similar mechanism**:
- 세포의 많은 protein-sorting step에서 pH-sensitive interaction 사용
- Compartment의 pH difference가 directional transport 제공

## Retention Mechanism

### ER Retrieval Signal의 한계

KDEL 제거된 ER resident protein:
- Secretion되지만 normal secretory protein보다 훨씬 느림
- KDEL pathway가 일부만 설명

### Aggregation-based Retention

또 다른 retention mechanism 제안:
- ER resident protein끼리 서로 결합
- Too big complex 형성하여 transport vesicle 진입 비효율적

**Rationale**:
- ER resident protein은 ER에서 매우 높은 concentration (millimolar 추정)
- Relatively low-affinity interaction으로도 충분
- 대부분의 protein이 complex로 retain

**General mechanism**:
- 같은 compartment에서 기능하는 protein끼리 aggregation
- Golgi enzyme도 서로 bind
- Transport vesicle에서 restrained
- Organelle에 resident protein organize 및 retain하는 일반 mechanism

### Two-tier Retention

결합된 mechanism:
1. **Primary retention**: Protein aggregation
2. **Backup retrieval**: KDEL receptor pathway로 escaped protein capture

이중 체계로 ER resident protein의 effective retention 달성.

## 관련 내용

- [[CFTR|CFTR과 quality control]]
- [[Retrieval Pathway to the ER|ER retrieval mechanism]]
- [[Vesicular tubular cluster|Vesicular tubular cluster]]
- [[Vesicle formation_MOC|Vesicle formation]]
- [[Vesicle Fusion by SNARE_MOC|Vesicle fusion]]
- [[Golgi apparatus_MOC|Golgi apparatus]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting|ER protein synthesis]]

[^기출_중간_2021_13]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_13번|2021 중간 13번]] — COPII coat가 ER에서 Golgi로 단백질을 수송하는 메커니즘이 정답 근거로 활용됨.
