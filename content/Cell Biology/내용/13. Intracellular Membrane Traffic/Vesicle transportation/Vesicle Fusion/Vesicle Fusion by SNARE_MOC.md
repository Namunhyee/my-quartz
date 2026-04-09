# Vesicle Fusion_MOC

## 개요

Vesicle fusion은 transport vesicle이 coat를 shed한 후 target membrane과 융합하여 cargo를 전달하는 최종 단계이다. Membrane fusion은 두 lipid bilayer를 1.5 nm 이내로 근접시켜 merge하는 과정으로, 특수한 **fusion protein**이 필요하다.

## Membrane Fusion의 Energetic Challenge

Membrane fusion은 energetically unfavorable하다:

### 문제점
- Membrane의 hydrophilic surface에서 water molecule 제거 필요
- 두 membrane을 1.5 nm 이내로 접근시켜야 함
- 매우 높은 energy barrier 극복 필요

### 해결책
Specialized fusion protein이 energy barrier 극복:
- Water displacement 촉진
- Membrane을 강제로 접근시킴
- Lipid bilayer merge 유도

## SNARE-mediated Fusion

세포 내 대부분의 membrane fusion은 **[[SNARE|SNARE protein]]**에 의해 매개된다.

![[_page_14_Figure_8.jpeg]]

### SNARE의 특징

**Distribution**:
- Animal cell에 최소 35개의 다른 SNARE
- 각 SNARE는 secretory 또는 endocytic pathway의 특정 organelle과 연관

==**Classification**:==
- **v-SNARE**: 주로 vesicle membrane에 위치
- **t-SNARE**: 주로 target membrane에 위치

### SNARE Complex 형성

**구조**:
- v-SNARE는 single polypeptide chain
- t-SNARE는 보통 3개의 protein으로 구성
- 각각 characteristic helical domain 보유

**Interaction**:
1. **초기 상태**: Helical domain이 mostly unstructured
2. **상호작용**: v-SNARE의 helix가 t-SNARE의 helix와 interaction
3. **Zippering**: Four-helix bundle (trans-SNARE complex) 형성
4. **결과**: 매우 안정한 구조 형성

## ==Membrane Fusion Process==

![[_page_14_Figure_9.jpeg]]

### ==단계별 과정==

1. ==**Membrane Apposition**:==
   - 두 membrane이 tight하게 lock
   - Membrane face가 매우 근접
2. ==**Expels water molecules**==
	- ==SNARE pairing의 extreme stability가 energy 제공==
3. ==**Stalk Formation**:==
   - ==SNARE pairing의 extreme stability가 energy 제공==
   - Interacting cytosolic leaflet의 lipid molecule이 두 membrane 사이를 flow
   - Connecting stalk 형성

4. ==**Hemifusion**:==
   - Noncytosolic leaflet의 lipid contact
   - ==New bilayer 형성== (hemifusion 또는 half-fusion)
   - Fusion zone 확장

5. ==**Complete Fusion**:==
   - New bilayer rupture
   - Complete fusion reaction
   - Content mixing

### Energy Source

- ==Trans-SNARE complex assembly가 energetically favorable==
- Unstructured helix → highly stable four-helix bundle
- 이 energy가 membrane apposition과 fusion drive
==이 에너지는 근본적으로 [[NSF mediated Disassembly]]에서 쓰인 ATP hydrolysis 에너지.==

## SNARE Specificity

SNARE pairing은 highly specific:

### Biochemical Assay
- Liposome에 v-SNARE와 complementary t-SNARE 혼합
- 올바른 SNARE pair만 membrane fusion 유도
- 서로 다른 SNARE combination은 fusion 실패

### Functional Significance
- 특정 vesicle이 특정 target membrane과만 fuse
- Vesicle transport의 specificity layer 추가
- [[Transportation Mechanism_MOC#Rab Cycle|Rab protein]]과 함께 작동하여 높은 정확도 달성

## Trans-SNARE Complex Disassembly
![[_page_14_Figure_8.jpeg]]

Fusion 후 SNARE는 재사용을 위해 분리되어야 함:

### [[NSF mediated Disassembly|NSF]]의 역할

==**NSF** (N-ethylmaleimide-sensitive fusion protein):==
- Hexameric ATPase (AAA-protein family)
- Membrane과 cytosol 사이를 cycle
- ==Trans-SNARE complex disassembly 촉진==

**Mechanism**:
1. NSF가 trans-SNARE complex에 결합
2. Accessory protein 도움
3. ==**ATP** hydrolysis==
4. Helical domain간의 intimate interaction unravel
5. SNARE protein 분리

### Energy Recycling

- SNARE-mediated fusion의 energy는 궁극적으로 ==NSF의 ATP hydrolysis에서 유래==
- SNARE pair를 apart하는 데 ATP 소비
- 분리된 SNARE는 다시 assembly하며 fusion drive
- Cycle 반복

## v-SNARE Retrieval

Fusion 후 destination compartment에서:
- v-SNARE는 selective retrieval pathway로 return
- 원래 compartment로 되돌아가 재사용
- Newly formed transport vesicle에 재포장

이는 각 compartment의 identity 유지에 critical함.

## ==Homotypic vs Heterotypic Fusion==

### ==Heterotypic Fusion==
대부분의 경우:
- ==서로 다른 compartment의 membrane fusion==
- ==v-SNARE (vesicle)와 t-SNARE (target) pairing==

### ==Homotypic Fusion==
일부 경우:
- ==같은 종류의 membrane끼리 fusion==
- ==양쪽 membrane에 v-SNARE와 t-SNARE 모두 존재==
![[Cell Biology/출처/md converted/Chapter 13/_page_18_Picture_2.jpeg]]


**예시**:
- [[Transportation from the ER Through the Golgi Apparatus_MOC#Vesicular tubular cluster|ER-derived vesicle]]끼리 fusion하여 vesicular tubular cluster 형성
- Endosome끼리 fusion하여 larger endosome 형성

**Mechanism**:
1. NSF가 양쪽 membrane의 identical SNARE pair 분리
2. 분리된 matching SNARE가 adjacent membrane의 것과 interact
3. Membrane fusion → continuous compartment 형성
4. Homotypic fusion으로 compartment 성장

## Regulated vs Spontaneous Fusion

### Spontaneous Fusion
대부분의 constitutive vesicle transport:
- SNARE interaction만으로 충분
- Vesicle이 target에 도착하면 즉시 fusion

### Regulated Fusion
일부 specialized case:
- SNARE zippering의 마지막 부분이 delayed
- Specific extracellular signal까지 fusion 지연
- 예: [[exocytosis#synaptic vesicles|Regulated exocytosis]]

## 관련 내용

- [[SNARE|SNARE protein의 구조와 기능]]
- [[Transportation Mechanism_MOC|Transportation mechanism]]
- [[Vesicle formation_MOC|Vesicle formation]]
- [[exocytosis_MOC|Exocytosis]]
- [[Transportation from the ER Through the Golgi Apparatus_MOC|ER to Golgi transport]]
