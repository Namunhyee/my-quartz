# Retrieval Pathway to the ER
#KDEL #COPI

## 개요

Retrieval pathway는 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting|ER]]을 실수로 떠난 protein을 다시 ER로 되돌리는 transport system이다.[^기출_중간_2021_미상B][^기출_중간_2022_27][^기출_중간_2023_5] 이 pathway는 각 compartment의 identity를 유지하는 데 essential하다.

![[_page_19_Figure_10.jpeg]]

## ==COPI-coated Vesicle==

==Retrieval pathway는 **COPI-coated vesicle**에 의해 매개된다.==[^기출_중간_2023_5][^기출_중간_2025_20][^기출_중간_2025_18]

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

## Signals

Retrieval pathway는 specific signal에 의존한다.

### ==Membrane Protein Signal: KKXX==
=ER resident membrane protein[^기출_중간_2023_5][^기출_중간_2025_20]
**Structure**:
- C-terminal end에 위치
- **K-K-X-X**: Two lysine + any two amino acid
- Single-letter code 사용

**Mechanism**:
1. ==KKXX sequence가 COPI coat에 directly bind==[^기출_중간_2023_5][^기출_중간_2025_20]
2. Protein이 COPI-coated vesicle에 package
3. ER로 retrograde delivery
4. ER에 도달하여 release

**Protein examples**:
- ER membrane protein
- v-SNARE와 t-SNARE (ER-Golgi interface에서 기능)
- Some cargo receptor

### ==Soluble ER resident Protein Signal: KDEL==

**Structure**:
- C-terminal end에 위치[^기출_중간_2023_5][^기출_중간_2025_20]
- ==**K-D-E-L**: Lys-Asp-Glu-Leu==
- 또는 유사한 sequence

**Protein examples**:
- [[BiP]] (ER chaperone)
- Other ==soluble ER resident protein==

**Genetic engineering evidence**:
- KDEL 제거: Protein slowly secreted
- KDEL 추가: Normally secreted protein이 ER accumulate

## KDEL Receptor

![[_page_19_Figure_10.jpeg]]

Soluble protein의 retrieval은 **KDEL receptor** 필요.

### Structure
- Multipass transmembrane protein
- Luminal domain: KDEL sequence 인식[^기출_중간_2023_5][^기출_중간_2025_20]
- Cytosolic domain: COPI coat binding[^기출_중간_2023_5][^기출_중간_2025_20]

### Cycling Mechanism

==**ER → Golgi**:==
1. KDEL receptor가 ER membrane에 위치[^기출_중간_2023_5]
2. Forward transport pathway로 ==Golgi에 도달==[^기출_중간_2023_5]
3. ==Low pH in Golgi==

==**Golgi에서**:==
1. ==KDEL-bearing protein 인식==
2. ==Receptor–ligand complex 형성==
3. ==COPI coat recruitment==
4. COPI vesicle에 package

==**Golgi → ER**:==
1. ==COPI vesicle이 ER로 이동==
2. ==ER에 fusion==
3. ==Higher pH in ER==
4. ==Ligand release==
5. ==Free receptor는 다시 Golgi로==

### ==pH-dependent Affinity==

![[_page_19_Figure_10.jpeg]]

**Key feature**:
- ==Golgi (pH ~6.5-6.7): High affinity for KDEL[^기출_중간_2023_5][^기출_중간_2025_20]==
- ==ER (pH ~7.2): Low affinity for KDEL[^기출_중간_2023_5][^기출_중간_2025_20]==

**Molecular basis**:
- Critical histidine in KDEL receptor
- Golgi의 lower pH에서 protonated[^기출_중간_2025_20]
- Protonation이 KDEL sequence와의 interaction favor[^기출_중간_2025_20]
- ER의 higher pH에서 deprotonated → weak binding[^기출_중간_2025_20]

**Functional consequence**:
- Directional transport
- Unidirectional retrieval
- Efficient cycling

## 관련 내용

- [[Transportation from the ER Through the Golgi Apparatus_MOC|ER to Golgi transport]]
- [[Vesicular tubular cluster|Vesicular tubular cluster formation]]
- [[Vesicle formation_MOC|COPI vesicle formation]]
- [[Golgi apparatus_MOC|Golgi apparatus]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting|ER resident proteins]]
- [[Cell Biology/내용/06. How Cells Obtain Energy from Food|Chaperone proteins]]

[^기출_중간_2021_미상B]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상B번|2021 중간 미상B번]] — KDEL(soluble ER 단백질 회수)과 KKXX(막 단백질 회수) 신호를 이용한 ER retrieval pathway 개념이 선지 근거로 활용됨.
[^기출_중간_2022_27]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_27번|2022 중간 27번]] — COPI vesicle을 통한 ER retrieval 메커니즘과 KDEL receptor의 pH 의존적 결합이 정답 근거로 활용됨.
[^기출_중간_2023_5]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_5번|2023 중간 5번]] — ①번 선지: KDEL 신호서열은 COPI에 의해 운반된다 (틀림, KDEL 자체가 COPI에 결합하는 것이 아니라 KDEL receptor의 cytosolic tail에 있는 신호(KKXX-like)가 COPI에 결합); ②번 선지: ER 루멘은 골지체에서의 루멘과 비교하여 더 낮은 pH를 가지고 있다 (틀림, ER lumen pH ~7.2 > Golgi pH ~6.5); ③번 선지: ER로의 회수 과정에는 COPII가 coating 단백질로 작용한다 (틀림, ER retrieval은 COPI vesicle 사용, COPII는 ER→Golgi 전진 수송); ④번 선지: Soluble ER resident 단백질은 KKXX 신호서열을 가지고 있다 (틀림, soluble lumenal ER resident는 KDEL, 막 단백질이 KKXX 신호 보유); ⑤번 선지: KDEL receptor는 ER의 vesicle 그리고 골지체에 모두 위치한다 (맞음, KDEL receptor는 ER과 Golgi 사이를 순환, 정답).
[^기출_중간_2025_18]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_18번|2025 중간 18번]] — ⑤번 선지: COPI 코팅이 활성화되어 retrieval pathway(역행 수송)가 활성화되고 유지된다 (틀림, COPI는 PI(4)P/ARF에 의해 Golgi에서 활성화되며, 제시된 효소들은 PI(4,5)P₂를 분해하여 COPI와는 관련 없음).
[^기출_중간_2025_20]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_20번|2025 중간 20번]] — ①번 선지: KDEL 신호서열은 COPI 결합 신호이다 (틀림, KDEL은 KDEL receptor가 인식하는 신호, receptor의 KKXX-like tail이 COPI 결합); ②번 선지: ER로의 회수 과정에는 COPII가 coating 단백질로 작용한다 (틀림, COPI 사용); ③번 선지: KDEL receptor는 대부분 활성화되어 불활성화되지 않고 이동된다 (틀림, KDEL receptor는 재활용(recycled) 됨); ④번 선지: Soluble ER resident 단백질은 KKXX 신호서열을 가지고 있다 (틀림, KKXX는 transmembrane ER membrane 단백질의 신호, soluble은 KDEL); ⑤번 선지: ER 루멘은 골지체에서의 루멘과 비교하여 더 높은 pH를 가지고 있어 KDEL receptor가 cargo와 분리된다 (맞음, ER pH ~7.2에서 KDEL receptor가 KDEL 배위체를 낮은 친화도로 결합하여 cargo 방출, 정답).
