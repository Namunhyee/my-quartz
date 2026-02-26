---
dg-publish: true
---
# SNARE

## 개요

**SNARE protein** (SNAREs)은 vesicle transport에서 membrane fusion reaction을 catalyze하는 fusion protein이다. SNARE는 "SNAP receptor"의 약자로, 원래 NSF attachment protein (SNAP)과 상호작용하는 receptor로 발견되었다.

## SNARE의 종류와 분포

### Classification

**v-SNARE (vesicle-SNARE)**:
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

![[Ch13-1.pdf#page=19]]
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

### Energy Release

Assembly process의 energetics:
- Unstructured helix → highly stable bundle
- 매우 energetically favorable
- Released energy가 다음을 drive:
  - Water displacement from membrane interface
  - Membrane apposition
  - Lipid bilayer merger

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

## SNARE Cycle

### 1. Trans-SNARE Complex Formation
**Location**: Vesicle과 target membrane 사이
**Function**: Membrane fusion 촉진
**State**: Four-helix bundle across two membranes

### 2. Membrane Fusion
Trans-SNARE complex가 membrane fusion drive:
- Membrane apposition
- Lipid mixing
- Content release

### 3. Cis-SNARE Complex
**Fusion 후**:
- Trans-SNARE complex → cis-SNARE complex
- 모든 SNARE가 같은 membrane에 위치
- 여전히 매우 stable

### 4. NSF-mediated Disassembly
![[Cell Biology/출처/md converted/Chapter 13/_page_14_Figure_8.jpeg]]
**NSF** (N-ethylmaleimide-sensitive fusion protein):
- Hexameric AAA-ATPase
- Cis-SNARE complex 인식
**Mechanism**:
1. NSF가 accessory protein (α-SNAP)과 함께 cis-SNARE complex 결합
2. ATP hydrolysis
3. Conformational change
4. SNARE helix를 forcibly unwind
5. SNARE protein 분리

### 5. SNARE Recycling
분리된 SNARE는:
- Original compartment로 return
- 새로운 transport vesicle에 repackage
- 다시 fusion reaction에 사용

## Synaptic Vesicle의 특수한 SNARE

![[Cell Biology/출처/md converted/Chapter 13/_page_34_Figure_2.jpeg]]

Synaptic vesicle fusion은 특수한 SNARE set 사용:

### Component
- **v-SNARE**: Synaptobrevin (transmembrane protein)
- **t-SNARE**: 
  - Syntaxin (transmembrane protein, 1 helix)
  - SNAP25 (peripheral membrane protein, 2 helices)

### Regulation

일반적인 SNARE와 달리 추가 조절:
- **Synaptotagmin**: Ca²⁺ sensor
- **Complexin**: SNARE complex를 metastable state로 freeze

**작동 메커니즘**:
1. SNARE partially assemble → primed state
2. Complexin이 premature fusion 방지
3. Ca²⁺ influx → Synaptotagmin 활성화
4. Complexin release
5. SNARE fully zipper → rapid fusion
6. Neurotransmitter release (millisecond scale)

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

- [[Vesicle Fusion_MOC|Vesicle fusion 메커니즘]]
- [[Transportation Mechanism_MOC|Transportation mechanism]]
- [[exocytosis#synaptic vesicles|Synaptic vesicle exocytosis]]
- [[Transportation from the ER Through the Golgi Apparatus_MOC|ER to Golgi transport]]
