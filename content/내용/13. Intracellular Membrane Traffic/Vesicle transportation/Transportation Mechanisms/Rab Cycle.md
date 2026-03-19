# Rab Cycle

Rab protein은 membrane과 cytosol 사이를 cycle하면서 vesicle transport를 조절한다.[^기출_중간_2021_미상C][^기출_중간_2022_25][^기출_중간_2023_7] 이 cycle은 vesicle과 target membrane에서 일어나며, vesicle identity와 targeting specificity를 제공한다.

## Rab protein의 구조와 특성

### Monomeric GTPase
- 60개 이상의 member (mammalian cell)
- Largest subfamily of monomeric GTPase
- 각 Rab이 specific organelle/vesicle에 associate

### Membrane localization
각 Rab protein은 특정 compartment에 localize:

| Rab protein | Organelle/Vesicle                   |
| ----------- | ----------------------------------- |
| Rab1        | ER, Golgi complex                   |
| Rab2        | cis Golgi network                   |
| Rab3A       | Synaptic vesicle, secretory vesicle |
| Rab4/Rab11  | Recycling endosome                  |
| **Rab5**        | **Early endosome, plasma membrane**     |
| Rab6        | Medial and trans Golgi              |
| Rab7        | Late endosome                       |
| Rab8        | Cilia                               |
| Rab9        | Late endosome, TGN                  |

## Basic Rab cycle

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Picture_2.jpeg]]

### GDP-bound state (inactive, cytosolic)
- Rab-GDP는 cytosol에서 soluble
- **GDI (GDP Dissociation Inhibitor)**에 binding
- GDI가 Rab을 soluble하게 유지

### Membrane recruitment and activation
**Step 1: GEF binding**
- Membrane-bound Rab GEF가 Rab-GDP에 binding
- 종종 coat component가 GEF recruit

**Step 2: GDP → GTP exchange**
- GEF가 GDP release 촉매
- GTP binding (high cytosolic concentration)

**Step 3: Membrane insertion**
- GTP binding으로 Conformational change
- Lipid anchor (prenyl group) exposure
- Membrane에 insert
- GDI release

### Active state (GTP-bound, membrane)
**Rab effector recruitment**
- Active Rab-GTP가 다양한 Rab effector에 binding
- Effector type:
  - Tethering protein
  - Motor protein
  - Lipid-modifying enzyme
  - SNARE-binding protein
  - Scaffold protein

### Inactivation and membrane release
**Step 1: GAP activation**
- Rab GAP가 GTP hydrolysis 촉진
- Often at target membrane

**Step 2: GTP → GDP**
- Conformational change
- Effector release
- Lipid anchor retraction

**Step 3: GDI binding**
- GDI가 Rab-GDP에 binding
- Membrane에서 extract
- Cytosol로 return

## Vesicle에서의 Rab activation

### Initial activation
Transport vesicle 형성 시:
1. Coat component가 specific Rab GEF recruit
2. Rab activation
3. Vesicle에 Rab-GTP display

### Multiple consequences
**Molecular marker**
- Vesicle identity 표시
- Target membrane recognition에 사용

**Motor protein recruitment**
- [[kinesin|Kinesin]], [[dynein|dynein]], myosin 등
- [[300_Microtubules_MOC|Microtubule]]/[[100_Actin filaments_MOC|actin filament]]을 따라 이동

**Tethering protein recruitment**
- Long-range capture of vesicle
- Initial contact with target membrane

## Target membrane에서의 Rab function

### Rab-associated domain formation

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Figure_9.jpeg]]

**Positive feedback mechanism**
1. Rab GEF가 membrane에서 Rab activate
2. Active Rab이 더 많은 같은 Rab GEF recruit
3. More Rab activation
4. Rab5 예시: PI 3-kinase activate → PI(3)P production
5. PI(3)P가 Rab effector (tethering protein 포함) binding stabilize
6. Large, specialized membrane patch 형성

### Organelle identity 부여
Rab-associated domain이 organelle의 특성 결정:
- Incoming vesicle traffic (tethering protein, SNARE)
- Outgoing vesicle traffic (coat protein)
- Enzyme activity (lipid kinase, etc.)
- Positioning (motor protein)

## Vesicle tethering and docking

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Picture_2.jpeg]]

### Long-range tethering
- Rab effector (filamentous protein)가 vesicle capture
- 200 nm까지 reach 가능
- Vesicle의 Rab-GTP와 target membrane의 Rab effector 상호작용. Rab effector는 target membrane의 Rab-GTP와도 상호작용. 여기서 두 Rab는 같은 종류여야함.

### SNARE-mediated docking
- Rab effector가 SNARE를 selective하게 binding
- v-SNARE와 t-SNARE pairing 촉진
- Membrane fusion 유도

### Rab inactivation
- Fusion 후 Rab GAP가 Rab-GTP hydrolyze
- Rab-GDP가 membrane에서 dissociate
- GDI에 의해 cytosol로 return

## GTP hydrolysis rate의 조절

Active Rab의 concentration과 duration은 GTP hydrolysis rate에 의해 조절:
- Slow hydrolysis → High steady-state Rab-GTP
- Fast hydrolysis → Low steady-state Rab-GTP
- Domain size와 activity 조절

## 생리적 중요성

Rab cycle의 dysregulation:
- Vesicle mis-targeting
- Organelle identity loss
- Trafficking defect
- Disease (e.g., Parkinson's disease와 Rab7L1 mutation)

[^기출_중간_2021_미상C]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상C번|2021 중간 미상C번]] — Rab effector(tethering protein, motor protein 등)의 역할이 선지 근거로 활용됨.
[^기출_중간_2022_25]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_25번|2022 중간 25번]] — Rab cycle에서 Rab-GTP가 effector를 모집하고 tethering protein이 vesicle을 target membrane으로 안내하는 과정이 정답 근거로 활용됨.
[^기출_중간_2023_7]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_7번|2023 중간 7번]] — Rab protein의 특성(GDI와 결합, GEF/GAP 조절, effector 모집)에 대한 선지 ③이 정답.