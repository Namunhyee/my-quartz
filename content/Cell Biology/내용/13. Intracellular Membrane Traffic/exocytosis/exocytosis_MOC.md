# exocytosis_MOC

## 개요

Exocytosis는 transport vesicle이 plasma membrane과 융합하여 vesicle의 내용물을 세포 외부로 방출하는 과정이다.[^기출_중간_2023_12][^기출_중간_2025_25] Vesicle membrane은 plasma membrane의 일부가 되고, vesicle의 내용물은 extracellular space로 분비된다.[^기출_중간_2025_25] 이 과정은 [[Transportation from the ER Through the Golgi Apparatus_MOC|protein의 ER에서 Golgi apparatus를 거쳐 세포 표면으로의 이동]] 경로의 마지막 단계이다.[^기출_중간_2022_36][^기출_중간_2023_12]

![[Pasted image 20260409190121.png]]

## Exocytosis의 두 가지 경로

Exocytosis는 크게 두 가지 pathway로 구분된다:
![[Cell Biology/출처/md converted/Chapter 13/_page_28_Figure_2.jpeg]]
### 1. [[secretory pathway#Constitutive Secretory Pathway|Constitutive Secretory Pathway]] <font color="#9bbb59">그림에서 3번</font>
- ==모든 세포에서 지속적으로 작동==[^기출_중간_2025_25]
- ==특별한 신호 없이 자동으로 진행==[^기출_중간_2023_12]
- Plasma membrane 성분과 ECM 단백질 전달[^기출_중간_2025_25]
- Default pathway

### 2. [[secretory pathway#Regulated Secretory Pathway|Regulated Secretory Pathway]] <font color="#ff0000">그림에서 2번</font>
- ==특수화된 분비 세포에만 존재==
- Extracellular signal에 의해 조절됨
- Secretory vesicle에 cargo를 저장했다가 신호 시 방출
- ==Hormone, neurotransmitter, digestive enzyme 등 분비==

## 관련 주제

### [[Proteolytical  processing of secretory proteins|Secretory Protein Processing]]
많은 secretory protein들은 inactive precursor로 합성되어 vesicle 형성과 성숙 과정에서 proteolytic cleavage를 통해 활성화된다.

### [[synaptic vesicles|Synaptic Vesicles]]
신경세포에서 neurotransmitter를 저장하고 방출하는 특수한 형태의 secretory vesicle이다. 매우 빠른 exocytosis를 수행한다.

### [[direct sorting in TGN]]
TGN에서 서로 다른 목적지로 가는 protein들이 어떻게 선별되고 포장되는지에 대한 메커니즘이다.

## Exocytosis의 분자 메커니즘

### SNARE Protein의 역할
[[SNARE|SNARE protein]]들이 vesicle과 target membrane의 융합을 매개한다:
- v-SNARE: vesicle membrane에 위치
- t-SNARE: target membrane에 위치
- Trans-SNARE complex 형성으로 membrane fusion 유도

### Calcium의 역할
Regulated exocytosis에서 Ca²⁺는 핵심 trigger이다:
- Extracellular signal → Ca²⁺ 농도 증가
- Ca²⁺가 synaptotagmin과 결합
- Membrane fusion 개시

## ==Membrane의 균형 유지==

Exocytosis로 plasma membrane에 추가된 membrane은 [[_endocytosis_MOC|endocytosis]]를 통해 균형을 이룬다:
- 세포 크기 유지
- Membrane 성분의 재활용
- Receptor down-regulation

![[_page_1_Figure_5.jpeg]]
*Figure 13-3: Secretory pathway와 endocytic pathway의 개략도. Red arrow는 secretory pathway, green arrow는 endocytic pathway, blue arrow는 retrieval pathway를 나타낸다.*

## Regulated Exocytosis가 Plasma membrane을 확장하다
![[Cell Biology/출처/md converted/Chapter 13/_page_37_Picture_2.jpeg]]
### ==4 examples==
- ==Cytokinesis 중 세포 분열==
- ==[[Phagocytosis]][^기출_중간_2023_12]==
- ==Membrane 손상 시 repair[^기출_중간_2023_12]==
- ==Fly embryo의 cellularization==


## ==극성 세포에서의 Exocytosis==
### ==Epithelial cell==
![[Cell Biology/출처/md converted/Chapter 13/_page_38_Figure_2.jpeg]]
Epithelial cell과 같은 극성 세포에서는:
- ==Apical domain과 basolateral domain으로 selective delivery==
- ==[[direct sorting in TGN|TGN에서의 sorting signal]]에 의해 조절==
- ==Tight junction이 두 domain 사이의 경계 유지==
- ==A는 direct한 sorting, B는 transcytosis를 이용한 indirect sorting.==
### ==동물 난세포==
동물극과 식물극이 나눠져 있음. 여기에도 다른 경로의 sorting과 exocytosis가 일어남.

## 요약

Exocytosis는 세포가 단백질, 지질, 기타 분자들을 세포 외부로 방출하는 필수적인 과정이다. Constitutive pathway는 지속적으로 작동하여 membrane과 ECM 성분을 공급하고, regulated pathway는 특수화된 세포에서 신호에 반응하여 저장된 물질을 방출한다. 이 과정은 SNARE protein에 의한 membrane fusion과 적절한 조절 메커니즘을 통해 정밀하게 제어된다.

[^기출_중간_2022_36]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_36번|2022 중간 36번]] — Constitutive secretory pathway와 regulated secretory pathway의 차이(Ca²⁺ trigger, secretory vesicle 저장)가 정답 근거로 활용됨.
[^기출_중간_2023_12]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_12번|2023 중간 12번]] —①: Exocytosis는 물질 방출 외에 **세포막 면적 보충, 수용체 재활용** 등 다양한 역할 수행 ✗- ②: Synaptic vesicle 융합은 SNARE(synaptobrevin/VAMP + syntaxin + SNAP-25) 의존적 ✗- ③: 근육 세포나 상피 세포 등 물리적 자극에 의한 세포막 손상이 자주 일어나는 곳에서 exocytosis로 빠르게 막 면적을 보충·복구 ✓- ④: [[Phagocytosis]] 중 pseudopod 형성을 위한 actin polymerization에 필요한 물질은 receptor, PIP2, PIPK로서 이미 존재하지, exocytosis가 phagocytosis중에 중요하게 관여하는 것은 아님. **부족해진 membrane을 보충할 뿐** ✗- ⑤: **구성적 분비(constitutive exocytosis)는 수용체 없이 진행됨** ✗
[^기출_중간_2025_25]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_25번|2025 중간 25번]] — ① Exocytosis 시 vesicle membrane이 plasma membrane과 융합 → 세포막 면적이 보충됨 (endocytosis가 반대 작용) ✓- ② **모든 세포에서 constitutive exocytosis 일어남** ✗- ③ 신경전달물질 방출은 regulated exocytosis ✗- ④ clathrin 코팅 소포는 [[Vesicle formation_MOC|vesicle]] 생성 직후 떨어져나감.  ✗- ⑤ 분비 단백질은 ER에서 합성 후 secretory pathway를 통해 분비 ✗
