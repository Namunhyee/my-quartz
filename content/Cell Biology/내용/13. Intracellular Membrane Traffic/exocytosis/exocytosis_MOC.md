# exocytosis_MOC

## 개요

Exocytosis는 transport vesicle이 plasma membrane과 융합하여 vesicle의 내용물을 세포 외부로 방출하는 과정이다.[^기출_중간_2023_12][^기출_중간_2025_25] Vesicle membrane은 plasma membrane의 일부가 되고, vesicle의 내용물은 extracellular space로 분비된다.[^기출_중간_2025_25] 이 과정은 [[Transportation from the ER Through the Golgi Apparatus_MOC|protein의 ER에서 Golgi apparatus를 거쳐 세포 표면으로의 이동]] 경로의 마지막 단계이다.[^기출_중간_2022_36][^기출_중간_2023_12]

![[_page_0_Figure_14.jpeg]]
*Figure 13-1: Exocytosis와 endocytosis. (A) Exocytosis에서 transport vesicle이 plasma membrane과 융합하여 내용물을 방출한다. (B) Endocytosis에서는 그 반대 과정이 일어난다.*

## Exocytosis의 두 가지 경로

Exocytosis는 크게 두 가지 pathway로 구분된다:
![[Cell Biology/출처/md converted/Chapter 13/_page_28_Figure_2.jpeg]]
### 1. [[secretory pathway#Constitutive Secretory Pathway|Constitutive Secretory Pathway]] 그림에서 3번
- 모든 세포에서 지속적으로 작동[^기출_중간_2025_25]
- 특별한 신호 없이 자동으로 진행
- Plasma membrane 성분과 ECM 단백질 전달[^기출_중간_2025_25]
- Default pathway

### 2. [[secretory pathway#Regulated Secretory Pathway|Regulated Secretory Pathway]] 그림에서 2번
- 특수화된 분비 세포에만 존재
- Extracellular signal에 의해 조절됨
- Secretory vesicle에 cargo를 저장했다가 신호 시 방출
- Hormone, neurotransmitter, digestive enzyme 등 분비

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

## Membrane의 균형 유지

Exocytosis로 plasma membrane에 추가된 membrane은 [[endocytosis_MOC|endocytosis]]를 통해 균형을 이룬다:
- 세포 크기 유지
- Membrane 성분의 재활용
- Receptor down-regulation

![[_page_1_Figure_5.jpeg]]
*Figure 13-3: Secretory pathway와 endocytic pathway의 개략도. Red arrow는 secretory pathway, green arrow는 endocytic pathway, blue arrow는 retrieval pathway를 나타낸다.*

## 특수한 Exocytosis 사례

### Plasma Membrane 확장
- Cytokinesis 중 세포 분열
- Phagocytosis[^기출_중간_2023_12]
- <mark style="background:#fff88f">Membrane 손상 시 repair</mark>[^기출_중간_2023_12]
- Fly embryo의 cellularization

### Lysosomal Secretion
- 소화되지 않은 물질 제거
- Melanosome의 pigment 방출
- Multivesicular body의 exosome 방출

## 극성 세포에서의 Exocytosis

<mark style="background:#fff88f">Epithelial cell과 같은 극성 세포에서는:</mark>
- Apical domain과 basolateral domain으로 selective delivery
- [[direct sorting in TGN|TGN에서의 sorting signal]]에 의해 조절
- Tight junction이 두 domain 사이의 경계 유지

## 요약

Exocytosis는 세포가 단백질, 지질, 기타 분자들을 세포 외부로 방출하는 필수적인 과정이다. Constitutive pathway는 지속적으로 작동하여 membrane과 ECM 성분을 공급하고, regulated pathway는 특수화된 세포에서 신호에 반응하여 저장된 물질을 방출한다. 이 과정은 SNARE protein에 의한 membrane fusion과 적절한 조절 메커니즘을 통해 정밀하게 제어된다.

[^기출_중간_2022_36]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_36번|2022 중간 36번]] — Constitutive secretory pathway와 regulated secretory pathway의 차이(Ca²⁺ trigger, secretory vesicle 저장)가 정답 근거로 활용됨.
[^기출_중간_2023_12]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_12번|2023 중간 12번]] — ①번 선지: 막 안에 있는 내용물을 세포 밖으로 방출하는 과정을 말한다 (맞음, vesicle이 plasma membrane과 융합하여 내용물 방출); ②번 선지: Synaptic 소포체의 막 융합 과정에 SNARE가 필요하지 않다 (틀림, synaptic vesicle fusion에 SNARE 필수); ③번 선지: 일부 분자들이 사라짐이 일어날 때 분비된 물질의 양이 많아 활성된다 (맞음, 자극에 의해 Ca²⁺ 상승 후 regulated exocytosis 활성화, 정답); ④번 선지: Phagocytosis 중에 actin polymerization에 의해 필요한 막을 공급받는다 (맞음, phagocytosis 중 exocytosis로 추가 막 공급); ⑤번 선지: 분비될 물질을 세포 밖으로 보내기 위해서는 항상 특정 신호물질이 이용되는 소포체에 만들어져야 한다 (틀림, constitutive exocytosis는 신호 없이 지속적으로 발생).
[^기출_중간_2025_25]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_25번|2025 중간 25번]] — ①번 선지: 분비된 물질의 막이 세포막의 일부가 되어 세포막 면적이 보충된다 (맞음, vesicle membrane이 plasma membrane과 fusion하여 세포막 면적 보충, 정답); ②번 선지: Exocytosis는 일부 분비 경로에서만 일어나고 다른 경로에서는 발생하지 않는다 (틀림, constitutive exocytosis는 모든 세포에서 지속적으로 발생); ③번 선지: 뇌하수체에서의 호르몬은 endocytosis를 통해 이루어지고, exocytosis를 거치지 않는다 (틀림, 뇌하수체 호르몬 분비는 regulated exocytosis); ④번 선지: Exocytosis를 매개하는 데는 clathrin 복합체가 관여하여 분비물이 전달된다 (틀림, exocytosis에는 secretory vesicle 사용, clathrin은 endocytosis 관여); ⑤번 선지: 세포 밖으로 분비되는 단백질은 모두 ER에서 합성되지 않고, cytosol에서 합성된 뒤 분비된다 (틀림, 분비 단백질은 ER에서 합성 후 secretory pathway를 통해 분비).
