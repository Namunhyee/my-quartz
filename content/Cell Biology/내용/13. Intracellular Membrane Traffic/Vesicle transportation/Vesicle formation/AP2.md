# AP2

## 개요

AP2 (Adaptor Protein 2)는 [[Clathrin coat|clathrin-coated vesicle]]의 adaptor protein 중 하나이다.[^기출_중간_2022_21][^기출_중간_2023_4] AP2는 plasma membrane과 clathrin 사이에 위치하여 cargo selection과 clathrin recruitment를 매개한다.

## 구조
AP2는 네 개의 다른 protein subunit로 구성된 complex이다:
- α subunit
- β2 subunit  
- μ2 subunit
- σ2 subunit

![](_page_5_Picture_6.jpeg)

## ==Conformation Switching Mechanism==
AP2는 [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|phosphoinositide]]에 의해 조절되는 conformation switch를 가진다:

### ==Inactive State (Closed)==
- Cytosol에서 자유롭게 존재
- Cargo receptor binding site가 buried되어 있음

### ==Active State (Open)==
**Activation 과정**:
1. ==AP2가 plasma membrane의 PI(4,5)P₂와 상호작용==[^기출_중간_2022_21][^기출_중간_2023_4]
2. Conformational change 발생[^기출_중간_2022_21][^기출_중간_2023_4]
3. Cargo receptor binding site가 exposed됨[^기출_중간_2022_21]

**결과**:
- μ2와 σ2 subunit이 cargo receptor의 cytosolic tail 결합
- ==Cargo receptor는 특정 amino acid sequence motif (endocytosis signal) 보유==
- AP2가 membrane에 tightly bind하면 membrane curvature 유도

## Cooperative Assembly

AP2의 membrane binding은 highly cooperative하다:[^기출_중간_2025_18]

1. **Lipid-protein interaction**: PI(4,5)P₂ binding[^기출_중간_2025_18]
2. **Protein-protein interaction**: Cargo receptor cytosolic tail binding
3. **Membrane curvature induction**: [[Cell Biology/내용/13. Intracellular Membrane Traffic/Vesicle transportation/Vesicle formation/Membrane Bending Protein|Curved membrane이 추가 AP2 binding 촉진]]
4. **Clathrin recruitment**: AP2가 [[Clathrin coat|clathrin]] binding site 제공

이러한 cooperative binding은 signal을 greatly amplify하여 efficient vesicle formation을 가능하게 한다.

## Cargo Selection
AP2는 transmembrane cargo와 cargo receptor를 선택적으로 인식한다:

### Recognition Mechanism
- ==Cargo 혹은 receptor의 cytosolic tail에 있는 **specific amino acid sequence motif** 인식==
- 대표적 motif 예시:
  - Tyrosine-based signal (YXXφ, φ는 hydrophobic residue)
  - Dileucine-based signal ([DE]XXXL[LI])

### Cargo Types
1. **Transmembrane proteins**: Direct binding to AP2
2. **Soluble proteins**: Cargo receptor를 통해 indirect binding
   - Cargo receptor는 lumenal side에서 soluble cargo 결합
   - Cytosolic side에서 AP2 결합

## 다른 Adaptor Protein과의 비교

==여러 type의 adaptor protein이 존재하며, 각각 특성이 다르다:==

### Structure
- AP2처럼 4개의 subunit로 구성된 adaptor protein (예: AP1, AP3, AP4)
- Single-chain adaptor protein도 존재

### ==Specificity==
==각 adaptor protein은 **특이성**을 가진다:=[^기출_중간_2022_21][^기출_중간_2023_4]=
- **Phosphoinositide specificity**: 다른 type의 PIP 인식
- **Sequence motif specificity**: 다른 amino acid sequence 인식

==이러한 specificity로 인해:==
- ==각 adaptor protein은 특정 membrane에서만 coat assembly 유도==
- ==특정 subset의 cargo만 특정 vesicle에 packaging==[^기출_중간_2022_21][^기출_중간_2023_4]

[^기출_중간_2022_21]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_21번|2022 중간 21번]] — ②번 선지: AP2 단백질은 특정 단백질(PI(4,5)P₂)과 결합으로 구조가 변형된다 (틀림, PI(4,5)P₂, 즉 당지질과 결합 시 conformational change로 cargo binding site가 노출됨); ④번 선지: 같은 clathrin으로 코팅된 vesicle은 같은 cargo receptor를 가진다 (틀림, adaptor 종류에 따라 서로 다른 cargo receptor 포장).
[^기출_중간_2023_4]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_4번|2023 중간 4번]] — ③번 선지: AP1 단백질은 G 단백질과의 상호작용으로 구조가 변형된다 (정답, AP1은 PI(4)P 및 Arf1-GTP(ARF family GTPase)에 의해 conformational change 유도, 'G 단백질과 상호작용'은 기술적으로 맞음); ④번 선지: Clathrin으로부터 형성된 vesicle은 같은 cargo receptor를 갖게 된다 (틀림, adaptor 종류 차이로 다른 cargo).
[^기출_중간_2025_18]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_18번|2025 중간 18번]] — ③번 선지: AP2/clathrin이 세포막으로부터 분리되어 clathrin이 탈락된다 (맞음, PI(4,5)P₂ 분해 phosphatase 활성화 → AP2의 막 결합력 감소 → clathrin coat 탈락, 정답).