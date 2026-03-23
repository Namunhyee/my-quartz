# Sorting Signal
## Sorting Signals and Sorting Receptors Direct Proteins to the Correct Cell Address
==Sorting signals은 단백질이 세포 내 올바른 위치로 이동하도록 지시하는 아미노산 서열이다.==[^기출_중간_2023_24] 이러한 signal은 두 가지 형태로 존재한다:
- **Signal sequence**: 선형적인 아미노산 서열
- **Signal patch**: 3차원적으로 배열된 아미노산들
### Signal Sequences
Signal sequences는 단백질 translocation을 위한 선형 신호이며, 다음과 같은 특징을 갖는다:
- 주로 N-terminus에 위치
- Translocation 완료 후 signal peptidases에 의해 제거됨
- 일부는 제거되지 않고 성숙 단백질의 일부로 남음
각 signal sequence는 세포 내 특정 목적지를 지정한다:
- **[[Co-translational translocation|ER signal sequence]]**: 약 5-10개의 소수성 아미노산으로 구성[^기출_중간_2025_11]
- **[[000_Protein import into Mitochondria_MOC|Mitochondrial signal sequence]]**: 양전하를 띤 아미노산과 소수성 아미노산이 교대로 배열[^기출_중간_2025_11][^기출_중간_2025_16]
- **[[Nuclear Localization Signals|Nuclear localization signal]]**: 주로 양전하를 띤 아미노산(lysine, arginine)으로 구성[^기출_중간_2023_25][^기출_중간_2025_11]
- **[[Protein import into Peroxisome|Peroxisomal signal sequence]]**: C-terminus 근처의 특징적인 3개 아미노산 서열
### Signal Sequence의 기능적 특성
Signal sequences가 단백질 targeting에 중요하다는 것은 genetic engineering 실험을 통해 입증되었다:
- [[Co-translational translocation|ER signal sequence]]를 cytosolic protein에 연결하면 → 단백질이 ER로 이동
- ER protein에서 signal sequence를 제거하거나 돌연변이시키면 → 단백질이 cytosol에 머묾
따라서 signal sequences는 protein targeting에 **necessary and sufficient**하다.
동일한 목적지를 가진 단백질들의 signal sequences는:
- 아미노산 서열이 다를 수 있음
- 기능적으로 서로 교환 가능(물리화학적 특성 같은 아미노산 끼리)
- ==정확한 아미노산 서열보다 **물리화학적 특성**(예: 소수성)이 더 중요==
### Sorting Receptors
Sorting signals는 상보적인 sorting receptors에 의해 인식된다:
- Receptors는 단백질을 적절한 목적지로 안내하고 cargo를 하역함
- **촉매적으로 기능**: targeting 완료 후 출발점으로 돌아가 재사용됨
- 개별 단백질보다는 **단백질 class**를 인식
- 공공 교통 시스템처럼 여러 다른 component들을 올바른 위치로 운반
### ==Signal Sequences의 예시==

| Signal Type         | Sequence Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Destination       |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Nuclear import      | ...Pro–Pro–<mark style="background: #FFB8B8">Lys</mark>–<mark style="background: #FFB8B8">Lys</mark>–<mark style="background: #FFB8B8">Lys</mark>–<mark style="background: #FFB8B8">Arg</mark>–<mark style="background: #FFB8B8">Lys</mark>–Val...                                                                                                                                                                                                                                                                                                                                                                                                                         | Nucleus           |
| Nuclear export      | <mark style="background: #FFB8B8">Met</mark>–<mark style="background: #ABF7F7">Glu</mark>–<mark style="background: #ABF7F7">Glu</mark>–<mark style="background: #CAFFD8">Leu</mark>–Ser–Gln–Ala–<mark style="background: #CAFFD8">Leu</mark>–Ala–Ser–Ser–<mark style="background: #CAFFD8">Phe</mark>–                                                                                                                                                                                                                                                                                                                                                                     | Nucleus → Cytosol |
| Mitochondria import | N–Met–Leu–Ser–<mark style="background: #CAFFD8">Leu</mark>–<mark style="background: #FFB8B8">Arg</mark>–Gln–Ser–<mark style="background: #CAFFD8">Ile</mark>–<mark style="background: #FFB8B8">Arg</mark>–<mark style="background: #CAFFD8">Phe</mark>–<mark style="background: #CAFFD8">Phe</mark>–<mark style="background: #FFB8B8">Lys</mark>–Pro–<mark style="background: #CAFFD8">Ala</mark>–Thr–<mark style="background: #FFB8B8">Arg</mark>–Thr–<mark style="background: #CAFFD8">Leu</mark>–Cys–Ser–Ser–<mark style="background: #FFB8B8">Arg</mark>–Tyr–Leu–Leu–                                                                                                  | Mitochondria      |
| Plastid import      | N–Met–Val–Ala–Met–Ala–Met–Ala–<mark style="background: #FFF3A3">Ser</mark>–Leu–Gln–<mark style="background: #FFF3A3">Ser</mark>–<mark style="background: #FFF3A3">Ser</mark>–Met–<mark style="background: #FFF3A3">Ser</mark>–<mark style="background: #FFF3A3">Ser</mark>–Leu–<mark style="background: #FFF3A3">Ser</mark>–Leu–<mark style="background: #FFF3A3">Ser</mark>–<mark style="background: #FFF3A3">Ser</mark>–Asn–<mark style="background: #FFF3A3">Ser</mark>–Phe–Leu–Gly–Gln–Pro–Leu–<mark style="background: #FFF3A3">Ser</mark>–Pro–Ile–<mark style="background: #FFF3A3">Thr</mark>–Leu–<mark style="background: #FFF3A3">Ser</mark>–Pro–Phe–Leu–Gln–Gly– | Plastids          |
| Peroxisome import   | ...<mark style="background: #FFF3A3">Ser</mark>–<mark style="background: #FFB8B8">Lys</mark>–<mark style="background: #CAFFD8">Leu</mark>–C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Peroxisomes       |
| ER import           | N–Met–Met–Ser–Phe–Val–Ser–<mark style="background: #CAFFD8">Leu</mark>–<mark style="background: #CAFFD8">Leu</mark>–<mark style="background: #CAFFD8">Leu</mark>–<mark style="background: #CAFFD8">Val</mark>–<mark style="background: #CAFFD8">Gly</mark>–<mark style="background: #CAFFD8">Ile</mark>–<mark style="background: #CAFFD8">Leu</mark>–Phe–Trp–Ala–Thr–Glu–Ala–Glu–Gln–Leu–Thr–Lys–Cys–Glu–Val–Phe–Gln–                                                                                                                                                                                                                                                      | ER                |
| ER retention        | ...<mark style="background: #FFB8B8">Lys</mark>–<mark style="background: #ABF7F7">Asp</mark>–<mark style="background: #ABF7F7">Glu</mark>–<mark style="background: #CAFFD8">Leu</mark>–C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | ER (retention)    |

^81aca8

**범례:**
- <mark style="background: #ABF7F7">Negatively charged amino acids</mark>[^negatively-charged]
- <mark style="background: #FFB8B8">Positively charged amino acids</mark>[^positively-charged]
- <mark style="background: #CAFFD8">Important hydrophobic amino acids</mark>[^important-hydrophobic]
- <mark style="background: #FFF3A3">Important uncharged polar amino acids</mark>[^important-polar]

[^negatively-charged]: Asp (D), Glu (E)
[^positively-charged]: Lys (K), Arg (R), His (H)
[^important-hydrophobic]: 해당 signal sequence의 기능에 핵심적인 소수성 아미노산. 이들의 소수성 특성이 sorting receptor와의 상호작용이나 signal sequence의 인식에 필수적이다.
[^important-polar]: 해당 signal sequence의 기능에 핵심적인 비하전 극성 아미노산. 이들의 극성 특성이 sorting receptor와의 상호작용이나 signal sequence의 인식에 필수적이다.

### 중요 개념
Sorting signals와 sorting receptors의 시스템은:
1. 세포 내 단백질의 구획화를 가능하게 함
2. 각 organelle이 고유한 단백질 조성을 유지하도록 함
3. [[Co-translational translocation|Signal hypothesis]]의 핵심 원리를 구현함
Sorting signal이 없는 단백질들은 cytosol에 남아 있게 된다.[^기출_중간_2025_11]

[^기출_중간_2023_24]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_24번|2023 중간 24번]] — ① 옳음: sorting signal은 단백질을 올바른 세포 내 위치로 이동시키는 아미노산 서열. 영어 지문의 protein translocation 기술 중 틀린 것 찾기 문제.
[^기출_중간_2025_16]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_16번|2025 중간 16번]] — ① 옳음: 미토콘드리아 matrix 단백질은 N-말단에 양전하 아미노산과 소수성 아미노산이 교대하는 amphipathic α-helix 구조의 signal sequence를 가지며, 수송 후 MPP에 의해 절단됨.
[^기출_중간_2023_25]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_25번|2023 중간 25번]] — ③ 틀림 근거: NLS는 negatively charged가 아닌 positively charged(Lys, Arg) 아미노산으로 구성됨.
[^기출_중간_2025_11]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_11번|2025 중간 11번]] — sorting signal이 없는 단백질의 default 목적지가 세포질(cytosol)임이 정답으로 출제됨.