# Monomeric GTPase control of Coat Assembly

Coat assembly의 시작과 해체는 coat-recruitment GTPase라는 monomeric GTPase family에 의해 조절된다. 이들은 언제 어디서 vesicle이 형성될지를 결정하는 spatial과 temporal cue를 제공한다.[^기출_중간_2022_24][^기출_중간_2023_18]

## GTPase superfamily

### 구성원들
- **ARF proteins**: COPI와 clathrin coat assembly (Golgi)
- **Sar1**: COPII coat assembly (ER)
- **Rab7**: Retromer coat assembly (endosome)

### 공통 mechanism
모든 GTP-binding protein은 molecular switch로 작동한다:
- **GTP-bound state**: Active, membrane-bound
- **GDP-bound state**: Inactive, cytosolic

## Regulatory protein들

### GEF (Guanine nucleotide Exchange Factor)
- GDP를 GTP로 exchange 촉매
- Protein을 activate
- Specific membrane에 localized
- Spatial cue 제공

### GAP (GTPase-Activating Protein)
- GTP hydrolysis 촉진
- Protein을 inactivate
- Coat disassembly timing 조절

## COPII coat assembly: Sar1 example

![[Cell Biology/출처/md converted/Chapter 13/_page_9_Picture_2.jpeg]]

### Activation and membrane recruitment

**Step 1: Sar1 activation**
- Cytosolic Sar1-GDP가 ER membrane의 Sar1 GEF에 binding
- GEF가 GDP release 촉매
- GTP binding (cytosol에 high concentration)

**Step 2: Membrane insertion**
- GTP-triggered conformational change
- Amphiphilic helix exposure
- Helix가 ER membrane의 cytoplasmic leaflet에 삽입
- Membrane bending 시작

### Coat assembly

**Step 3: Adaptor recruitment**
- Active Sar1-GTP가 COPII adaptor protein (Sec23/Sec24) complex에 binding
- Inner coat 형성
- Sec24가 cargo receptor의 cytosolic tail에 binding

**Step 4: Outer coat recruitment**
- Sec13/Sec31 complex가 outer shell 형성
- Symmetrical cage assembly 가능
- Vesicle 형태 결정

## Coat disassembly의 timing control

### GTP hydrolysis에 의한 regulation

**Built-in timer mechanism**
- Sar1의 GTP hydrolysis rate가 coat의 lifetime 결정
- COPII coat가 Sar1의 GTPase activity accelerate
- Fully formed vesicle만 survive

**Kinetic proofreading**
- Bud formation이 GTP hydrolysis보다 빨라야 vesicle 형성
- 너무 느리면 coat가 disassemble되어 다시 시작
- Appropriate time과 place에서만 vesicle 형성

### Disassembly mechanism
1. GTP → GDP hydrolysis
2. Conformational change
3. Hydrophobic tail이 membrane에서 pop out
4. Sar1 release
5. Coat destabilization

그러나 sealed coat는 cooperative interaction으로 충분히 안정화되어 vesicle이 target에 도달할 때까지 유지될 수 있다.

## COPI coat: ARF example

### ARF GAP의 특수 mechanism

**Membrane curvature sensing**
- COPI coat assembly에 recruit되는 ARF GAP
- Lipid packing density를 sense
- Vesicle curvature가 되면 activate

**Curvature-dependent activation**
- Membrane curvature가 vesicle에 접근하면 ARF GAP activate
- ARF의 GTP hydrolysis 자극
- Coat disassembly 시작
- Vesicle이 pinch off 직후 coat 제거

## Spatial control of coat assembly

### GEF localization
Different compartment마다 specific GEF가 localize되어 있음:
- **ER membrane**: Sar1 GEF → COPII vesicle
- **Golgi membrane**: ARF GEF → COPI vesicle
- **Endosome membrane**: Rab7 (coat-recruitment GTPase이면서 Rab) → Retromer

### Membrane-specific cue
- GEF의 compartment-specific localization이 spatial cue
- 특정 membrane에서만 coat assembly 시작
- Vesicle formation의 precise spatial control

## Lipid anchor의 역할

일부 coat-recruitment GTPase는 다른 membrane attachment 사용:
- **Amphiphilic helix**: Sar1
- **Attached lipid**: Some monomeric GTPase
- Both mechanism이 GTP-dependent membrane association 제공

## 생리적 중요성

Coat-recruitment GTPase의 dysregulation:
- Vesicle formation defect
- Protein trafficking impairment
- Organelle morphology change
- Secretory pathway dysfunction

[^기출_중간_2022_24]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_24번|2022 중간 24번]] — Sar1의 GEF에 의한 활성화, amphiphilic helix의 ER membrane 삽입, Sec23/24→Sec13/31 순서의 COPII coat 조립이 정답 근거로 활용됨.
[^기출_중간_2023_18]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_18번|2023 중간 18번]] — GEF가 GDP 방출 촉매→GTP 결합으로 활성화, GAP가 GTP 가수분해→불활성화하는 GTPase 조절 원리에 관한 선지 ③이 정답.