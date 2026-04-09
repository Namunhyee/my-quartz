# Synaptic Vesicles
= tiny (≈50 nm diameter) secretory vesicles
## 개요

Synaptic vesicle은 신경세포와 일부 내분비 세포에서 발견되는 특수화된 작은 [[secretory pathway|secretory vesicle]]이다. 이들은 small-molecule neurotransmitter를 저장하고, millisecond 단위의 매우 빠른 exocytosis를 통해 chemical synapse에서 신호 전달을 매개한다.[^기출_중간_2022_36][^기출_중간_2023_12]

![[Cell Biology/출처/md converted/Chapter 13/_page_36_Figure_2.jpeg]]
*Figure 13-47: Synaptic vesicle의 구조. (A) Presynaptic terminal의 scale model. (B) 단일 synaptic vesicle의 상세 구조. Vesicle은 다양한 membrane protein과 약 1,800개의 neurotransmitter molecule을 포함한다.*

## Synaptic Vesicle의 구조적 특징

### 크기와 조성

**물리적 특성:**
- ==직경: 약 50 nm==
- 매우 작고 균일한 크기
- 신경세포와 일부 내분비 세포에만 존재

**Membrane 조성:**
- 약 7,000개의 phospholipid molecule
- 약 5,700개의 cholesterol molecule
- 약 50종류의 integral membrane protein
- 총 600개의 transmembrane α-helix

**Major membrane protein:**
1. ==**Synaptobrevin (v-SNARE)**==
   - 가장 풍부한 단백질
   - 약 70 copy per vesicle
   - Membrane fusion에 필수

2. **V-type ATPase**
   - H⁺ pump
   - 1-2 copy per vesicle
   - Neurotransmitter loading에 필수

3. **Neurotransmitter transporter**
   - Antiport 형태
   - H⁺ gradient를 이용
   - Specific for each neurotransmitter

### Cargo: Neurotransmitter

**Small-molecule neurotransmitter:**
- Acetylcholine
- Glutamate
- Glycine
- GABA (γ-aminobutyric acid)
- 약 1,800 molecules per vesicle

**Neuropeptide:**
- [[secretory pathway#Regulated Secretory Pathway|Dense-core secretory granule]]에 저장
- Synaptic vesicle과는 별도
- 더 느린 신호 전달

## Synaptic Vesicle의 형성

### 형성 경로의 특수성

일반적인 secretory vesicle과 달리, synaptic vesicle은 ==local recycling==을 통해 형성된다. ==즉 cytosol의 작은 neurotransmitter를 gate(antiport)를 통해 local에서 공급함.==
==ER에서  넣어져서 오는 것이 아님.==
![[Cell Biology/출처/md converted/Chapter 13/_page_35_Figure_2.jpeg]]
*Figure 13-46: Synaptic vesicle의 형성과 재활용. Nerve terminal에서의 local endocytosis와 neurotransmitter loading 과정.*
	2 - 5 - 6 경로가 가장 빠르고 흔함
	3 - 4 - 5 - 6 경로가 느리고 보조적인 경로

#### 1. Plasma Membrane으로의 초기 전달

**새로운 vesicle 성분의 공급:**
- [[secretory pathway|Constitutive secretory pathway]] 이용
- Cell body에서 합성
- [[kinesin|Kinesin motor]]에 의해 axon을 따라 이동 ([[Microtubule organization in a neuron|뉴런 내 microtubule 방향성]] 참조)
- Plasma membrane에 삽입

#### 2. Local Endocytosis

**Nerve terminal에서의 재활용:**
- Vesicle이 plasma membrane과 융합 후
- 거의 즉시 endocytosis 시작
- Clathrin-mediated endocytosis
- 매우 빠른 속도 (seconds)

==**속도의 중요성:**==
- ==신경세포는 초당 1000회 이상 발화 가능==
- ==빠른 vesicle 재생성 필요==
- ==Local recycling으로 해결==

#### 3. Neurotransmitter Loading

**Transport mechanism:**

```
Cytosol → Vesicle lumen

H⁺/neurotransmitter antiport:
- V-type ATPase가 H⁺을 vesicle 안으로 pump
- H⁺ gradient 생성
- Neurotransmitter transporter가 H⁺ gradient 이용
- H⁺ 밖으로, neurotransmitter 안으로
```

**직접 loading:**
- Endocytic vesicle이 형성되자마자 시작
- 별도의 intermediate compartment 불필요
- 매우 효율적

## ==Rapid Exocytosis의 분자 메커니즘==

### Priming: Fusion 준비 상태

![[Cell Biology/출처/md converted/Chapter 13/_page_34_Figure_2.jpeg]]
*Figure 13-45: Synaptic vesicle exocytosis의 분자 메커니즘. Priming과 Ca²⁺-triggered fusion 과정.*

**Priming process:**

1. ==**Vesicle docking**==
   - Presynaptic plasma membrane에 결합
   - Rab protein과 tethering protein 역할

2. **==Priming I==. [[SNARE#Synaptic Vesicle의 특수한 SNARE|SNARE pairing]] 시작**[^기출_중간_2023_12]
   - <font color="#ff0000">Synaptobrevin</font> (==v-SNARE==)[^기출_중간_2023_12]
   - <font color="#00b0f0">Syntaxin</font> (==t-SNARE==)
   - <font color="#ffe100">SNAP25</font> (==t-SNARE==, 2개의 α-helix 기여)
   - ==부분적으로 assemble된 상태==

3. ==**Priming II. Complexin binding**==
   - SNARE complex에 결합
   - Complete zippering 방지
   - "Brake" 역할

=>**Metastable state**형성
   - ==융합 직전 상태==
   - ==Ca²⁺ 신호 대기==
   - ==매우 빠른 반응 가능==
### Ca²⁺-triggered Fusion
이후 action potential 도착으로 **Ca²⁺ influx**

4. ==Fusion pore opeing==. <font color="#76923c">Synaptotagmin</font> activation**
   - ==Ca²⁺-binding domain 보유==
   - Ca²⁺ 결합으로 conformational change
   - SNARE complex와 상호작용하여 **Complexin displacement**, pore opening

4. ==**Fusion complete**==
   - SNARE bundle 완전히 형성
   - Fusion pore 개방
   - Neurotransmitter 방출aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


**Triggering mechanism:**

1. **Action potential 도착**
   - Nerve terminal depolarization
   - Voltage-gated Ca²⁺ channel 개방

2. **Ca²⁺ influx**
   - Cytosolic Ca²⁺ 급증
   - Local concentration 증가

3. **Synaptotagmin activation**
   - Ca²⁺-binding domain 보유
   - Ca²⁺ 결합으로 conformational change
   - SNARE complex와 상호작용

4. **Complexin displacement**
   - Synaptotagmin이 complexin 제거
   - Brake 해제

5. **Complete zippering**
   - SNARE bundle 완전히 형성
   - Fusion pore 개방
   - Neurotransmitter 방출

**속도:**
- 전체 과정: milliseconds
- Priming 덕분에 가능
- 빠른 synaptic transmission

### Primed Vesicle의 Pool

**다중 pool 시스템:**

1. **Readily releasable pool (RRP)**
   - Primed vesicle
   - 즉시 방출 가능
   - 소수만 primed 상태

2. **Recycling pool**
   - 활발히 재활용 중
   - RRP로 신속히 보충

3. **Reserve pool**
   - 장기간 자극 시 사용
   - 천천히 mobilize

**장점:**
- 연속적인 발화 가능
- RRP 소진 시 recycling pool에서 보충
- 피로(fatigue) 방지

## Synaptic Vesicle Recycling의 여러 경로

### Kiss-and-run
- Vesicle이 완전히 융합하지 않음
- Fusion pore만 일시적으로 개방
- Neurotransmitter 방출 후 즉시 닫힘
- 가장 빠른 재활용

### Full collapse and reformation
- Vesicle이 완전히 plasma membrane과 융합
- Clathrin-mediated endocytosis로 재형성
- 좀 더 시간 소요

### Bulk endocytosis
- 고빈도 자극 시
- 대량의 membrane을 한꺼번에 endocytose
- 내부에서 vesicle 재형성

## Synaptic Vesicle의 생리학적 중요성

### 신경 전달의 핵심

**Fast synaptic transmission:**
- Millisecond 단위 신호 전달
- Priming system 필수
- 연속적인 발화 가능

**Synaptic plasticity:**
- 학습과 기억의 기초
- Vesicle pool size 조절
- Release probability 변화

### Neurotransmitter 특이성

**각 신경세포의 특화:**
- 특정 neurotransmitter transporter 발현
- 특정 neurotransmitter만 loading
- 일관된 신호 전달

## 병리학적 측면

### Genetic Disorder

**Dynamin 돌연변이:**
- *Drosophila shibire* mutant
- 고온에서 마비
- Vesicle recycling 차단
- Clathrin-coated pit이 pinch off하지 못함

### Toxin 표적

**Botulinum toxin:**
- SNARE protein 절단
- Vesicle fusion 차단
- 마비 유발

**Tetanus toxin:**
- Synaptobrevin 절단
- Inhibitory neuron 표적
- 경련 유발

### Drug Target

**많은 신경약물이 synaptic vesicle 표적:**
- Neurotransmitter transporter 억제제
- Vesicle acidification 차단
- Release 조절

## 요약

Synaptic vesicle은 신경세포에서 빠른 신호 전달을 가능하게 하는 특수화된 vesicle이다. 약 50 nm 크기에 다양한 membrane protein과 1,800개의 neurotransmitter molecule을 포함한다. 이들은 nerve terminal에서 local recycling을 통해 형성되며, priming system을 통해 fusion 직전 상태로 대기한다. Action potential에 의한 Ca²⁺ influx가 trigger가 되어 millisecond 내에 neurotransmitter를 방출하며, 연속적인 신경 전달을 위해 매우 빠르게 재활용된다.

[^기출_중간_2022_36]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_36번|2022 중간 36번]] — Regulated secretory pathway에서 Ca²⁺-triggered exocytosis 메커니즘(synaptotagmin, SNARE complex)이 정답 근거로 활용됨.
[^기출_중간_2023_12]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_12번|2023 중간 12번]] — ②번 선지: Synaptic 소포체의 막 융합 과정에 SNARE가 필요하지 않다 (틀림, synaptic vesicle fusion에 synaptobrevin(v-SNARE) + syntaxin + SNAP25(t-SNARE) 필수); ③번 선지: 일부 분자들이 사라짐이 일어날 때 분비된 물질의 양이 많아 활성된다 (맞음, Ca²⁺ influx에 의해 synaptotagmin 활성화 → complexin 제거 → SNARE zippering → neurotransmitter 방출, regulated exocytosis 정답).
