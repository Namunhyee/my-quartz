# Rab Cycle

Rab protein은 membrane과 cytosol 사이를 cycle하면서 vesicle transport를 조절한다.[^기출_중간_2021_미상C][^기출_중간_2022_25][^기출_중간_2023_7] 이 cycle은 vesicle과 target membrane에서 일어나며, vesicle identity와 targeting specificity를 제공한다.

## Rab protein의 구조와 특성

### Monomeric GTPase
- 60개 이상의 member (mammalian cell)
- Largest subfamily of monomeric GTPase
- 각 Rab이 specific organelle/vesicle에 associate

### Membrane localization
각 Rab protein은 특정 compartment에 localize:[^기출_중간_2023_7][^기출_중간_2025_19]

| Rab protein  | Organelle/Vesicle                       |
| ------------ | --------------------------------------- |
| Rab1         | ER, Golgi complex                       |
| Rab2         | cis Golgi network                       |
| Rab3A        | Synaptic vesicle, secretory vesicle     |
| Rab4/Rab11   | Recycling endosome                      |
| ==**Rab5**== | ==**Early endosome, plasma membrane**== |
| Rab6         | Medial and trans Golgi                  |
| ==Rab7==         | ==Late endosome==                           |
| Rab8         | Cilia                                   |
| Rab9         | Late endosome, TGN                      |

## Basic Rab cycle

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Picture_2.jpeg]]

### GDP-bound state (inactive, cytosolic)
- Rab-GDP는 cytosol에서 soluble[^기출_중간_2023_7][^기출_중간_2025_19]
- ==GDI (GDP Dissociation Inhibitor)에 binding==[^기출_중간_2023_7][^기출_중간_2025_19]
- ==GDI가 Rab을 soluble하게 유지==[^기출_중간_2023_7]

### ==Membrane recruitment and activation==
==**Step 1: GEF binding**==
- Membrane-bound Rab GEF가 Rab-GDP에 binding
- 종종 coat component가 GEF recruit

==**Step 2: GDP → GTP exchange**==
- GEF가 GDP release 촉매
- GTP binding (high cytosolic concentration)

==**Step 3: Membrane insertion**==
- GTP binding으로 Conformational change
- Lipid anchor (prenyl group) exposure
- Membrane에 insert[^기출_중간_2025_19]
- GDI release

### ==Active state (GTP-bound, membrane)==
==**Rab effector recruitment**==
- ==Active Rab-GTP가 다양한 Rab effector에 binding==
- Effector type:
  - Tethering protein
  - Motor protein
  - Lipid-modifying enzyme
  - SNARE-binding protein
  - Scaffold protein

### ==Inactivation and membrane release==
**==Step 1: GAP activates Rab GTPase==**
- Rab GAP가 GTP hydrolysis 촉진[^기출_중간_2025_19]
- Often at target membrane

==**Step 2: GTP → GDP**==
- Conformational change
- Effector release
- Lipid anchor retraction

==**Step 3: GDI binding**==
- GDI가 Rab-GDP에 binding[^기출_중간_2023_7]
- Membrane에서 extract[^기출_중간_2023_7]
- Cytosol로 return[^기출_중간_2023_7]

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

### ==Rab-associated domain formation==

![[_page_12_Figure_9.jpeg]]

**Positive feedback mechanism**
1. Rab GEF가 membrane에서 Rab activate
2. Active Rab이 더 많은 같은 Rab GEF recruit
3. More Rab activation

==**Rab5 예시**==: 
1.  ==acitve Rab5가 **PI 3-kinase** activate → PI(3)P production==[^기출_중간_2025_18]
2. ==**PI(3)P**가 **Rab effector** (tethering protein 포함) binding stabilize==[^기출_중간_2025_18]
3. ==Rab-5 associated membrane patch 형성==

### Organelle identity 부여
Rab-associated domain이 organelle의 특성 결정:
- Incoming vesicle traffic (tethering protein, SNARE)
- Outgoing vesicle traffic (coat protein)
- Enzyme activity (lipid kinase, etc.)
- Positioning (motor protein)

[[Rab Cascades]]에 의해 Rab의 종류가 바뀌면서 소포의 성질도 시간에 따라 변화함.
- ==Rab5 (early endosome) → Rab7 (late endosome) 전환. Rab5 → Rab7 전환이 실패하면, cargo는 lysosome에 도달 불가==
- ==lysosome과 fusion이 일어나려면 late endosome이 되어야 함. 즉 Rab7으로 전환이 필요==

## ==Vesicle tethering and docking==

![[Cell Biology/출처/md converted/Chapter 13/_page_12_Picture_2.jpeg]]

### ==Long-range tethering==
- ==Rab effector (filamentous protein)가 vesicle capture==
- 200 nm까지 reach 가능
- Vesicle의 Rab-GTP와 target membrane의 Rab effector 상호작용. Rab effector는 target membrane의 Rab-GTP와도 상호작용. **==여기서 두 Rab는 같은 종류여야함.==**[^기출_중간_2025_19]
### ==SNARE-mediated docking==
- Rab effector가 SNARE를 selective하게 binding
- v-SNARE와 t-SNARE pairing 촉진
- Membrane fusion 유도
### Rab inactivation
- Fusion 후 Rab GAP가 Rab-GTP hydrolyze
- Rab-GDP가 membrane에서 dissociate
- GDI에 의해 cytosol로 return

## 생리적 중요성

Rab cycle의 dysregulation:
- Vesicle mis-targeting
- Organelle identity loss
- Trafficking defect
- Disease (e.g., Parkinson's disease와 Rab7L1 mutation)

[^기출_중간_2021_미상C]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상C번|2021 중간 미상C번]] — Rab effector(tethering protein, motor protein 등)의 역할이 선지 근거로 활용됨.
[^기출_중간_2022_25]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_25번|2022 중간 25번]] — Rab cycle에서 Rab-GTP가 effector를 모집하고 tethering protein이 vesicle을 target membrane으로 안내하는 과정이 정답 근거로 활용됨.
[^기출_중간_2023_7]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_7번|2023 중간 7번]] — ①: Rab GAP가 Rab-GTP의 hydrolysis능력을 활성화 하여 Rab-GDP로 만듦. 이것으로 소포에서 방출됨. 방출된 후에 GDI 결합✗- ②: Rab 종류는 **Rab cascade에 의해 전환**될 수 있음 (예: Rab5→Rab7 전환으로 early→late endosome 성숙) ✗- ③: 각 세포 소기관의 막에는 고유한 Rab 단백질이 존재 → "주소지(zip code)" 역할 ✗- **④: 소포와 target에 동일한 Rab-GTP가 존재하여 tethering에 관여 ✓**- ⑤: Rab은 소포 안(lumen)이 아닌 막 표면(cytoplasmic side)에 결합 ✗
[^기출_중간_2025_18]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_18번|2025 중간 18번]] — ④번 선지: Rab5가 PI3K를 활성화시켜 정확한 위치의 vesicle이 fusion될 수 있게 한다 (맞음, Rab5-GTP가 PI 3-kinase를 activate → PI(3)P 생성 → tethering protein 안정화 → early endosome fusion 촉진).
[^기출_중간_2025_19]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_19번|2025 중간 19번]] — ①번 선지: GAP에 의해 가수분해가 이루어져야 Rab 단백질이 활성화된다 (틀림, GAP는 GTP 가수분해로 Rab 비활성화, GEF가 GDP→GTP 교환으로 활성화); ②번 선지: Rab은 한번 활성화되면 하나의 소기관에만 위치하고 다른 곳으로 이동하지 않는다 (틀림, Rab cascade로 Rab5→Rab7 전환 등 소기관 정체성 변화); ③번 선지: Rab5 단백질이 시간이 지남에 따라 정체성이 변화되어 Rab7 단백질이 된다 (틀림, 동일 단백질이 전환되는 것이 아니라 다른 Rab 단백질로 교체); ④번 선지: Rab 단백질은 적어도 특정 Rab이 vesicle에 존재해야 target membrane에 있는 Rab이 활성화되어야 한다 (맞음, Rab effector가 target membrane의 tethering에 관여하며 특정 Rab 조합 필요, 정답); ⑤번 선지: Rab 단백질은 세포질(cytosol)에 soluble 상태로 존재하다가 특정 GEF에 의해 vesicle의 내부(lumen)쪽으로 결합된다 (틀림, Rab은 cytoplasmic face에 결합).