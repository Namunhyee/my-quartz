# ==Ran-GTP Cycle==

**Ran GTPase**는 핵 수입과 수출 모두에 방향성을 부여하는 핵심 분자이다. GTP 결합/가수분해 상태에 따라 두 가지 구조로 전환되는 molecular switch이다.

![[Cell Biology/출처/md converted/Chapter 12/_page_57_Figure_7.jpeg]]
*Fig 12-60. Ran-GDP와 Ran-GTP의 구획화. (A) Ran GAP은 세포질에, Ran GEF는 핵의 chromatin에 결합하므로, 세포질에는 주로 Ran-GDP, 핵에는 주로 Ran-GTP가 존재한다. (B) 핵 import receptor와 cargo의 상호작용은 Ran-GTP에 의해 역전된다 — 세포질에서는 receptor-cargo 결합이 유리하고 핵에서는 불리하다.*

## Ran의 두 상태

- ==**Ran-GTP** : active state. A 핵에 주로 존재[^기출_중간_2025_15]==
- ==**Ran-GDP** : inactive state. 세포질에 주로 존재[^기출_중간_2025_15]==

이 gradient를 만드는 요인:
- ==**Ran GAP** (GTPase-activating protein): 세포질에 위치, Ran-GTP → Ran-GDP 전환 촉진[^기출_중간_2023_25]==
- ==**Ran GEF** (guanine nucleotide exchange factor): 핵 chromatin에 결합, Ran-GDP → Ran-GTP 전환 촉진[^기출_중간_2023_25]==

==두 조절 단백질의 위치 차이가 Ran의 상태 gradient를 만들고, 이것이 수송의 방향성을 결정한다==.[^기출_중간_2021_18][^기출_중간_2025_15]

# ==NPC를 통한 수송==
## ==핵 수입에서의 역할==
![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260409202923.png]]
*Fig 12-61. 핵 수입과 수출 모두 Ran GTPase 사이클을 사용한다. 핵 수입(A)에서는 Ran-GTP가 cargo를 receptor에서 해리시키고, 핵 수출(B)에서는 Ran-GTP가 cargo-receptor 결합을 촉진한다. 두 경우 모두 세포질의 Ran GAP이 GTP 가수분해를 유도하여 사이클을 완성한다.*

1. [[Nuclear Import Receptor|Import receptor]]가 세포질에서 [[Nuclear Localization Signals|NLS]] cargo와 결합 (Ran-GDP 상태에서 가능)
2. Receptor–cargo 복합체가 FG repeat를 이용해 NPC를 통과
3. 핵 안에서 **Ran-GTP**가 receptor에 결합 → receptor가 cargo를 해리[^기출_중간_2023_25][^기출_중간_2025_15]
4. Cargo는 핵에 방출됨
5. Ran-GTP와 결합한 empty receptor가 NPC를 통해 세포질로 되돌아감
6. 세포질의 **Ran GAP**이 Ran-GTP 가수분해 유도 → Ran-GDP 생성
7. Ran-GDP가 receptor에서 해리, receptor가 다음 cargo를 위해 재사용됨

## ==핵 수출에서의 역할==

![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260409202948.png]]
Import와 반대 방향으로 작동:

1. 핵 안에서 **Ran-GTP**가 [[Nuclear Export Receptor|export receptor]]–[[Nuclear Export Signals|NES]] cargo 복합체 결합을 **촉진**
2. Export receptor–cargo–Ran-GTP 삼중 복합체가 NPC를 통해 세포질로 이동
3. 세포질에서 **Ran GAP**이 Ran-GTP 가수분해 유도
4. 가수분해 후 export receptor가 구조 변화 → cargo와 Ran-GDP 모두 세포질에 방출
5. Free export receptor와 Ran-GDP는 핵으로 재수입됨 (import pathway 이용)

## 에너지 원천

Ran-GTP 가수분해의 자유에너지가 수송의 방향성을 부여하는 에너지원이다.[^기출_중간_2025_15] GTP 가수분해는 세포질쪽에서만 일어나므로 수송이 일방향으로 rectify된다.

[^기출_중간_2021_18]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_18번|2021 중간 18번]] — 핵과 세포질 사이 단백질 수송의 방향성을 제공하는 기전: RanGEF는 핵 chromatin에, RanGAP는 세포질에 존재하여 Ran-GTP/GDP 농도 구배를 만들고, 이 구배가 수입·수출의 방향을 결정함. 복기 불완전. (선지 미복기)
[^기출_중간_2023_25]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_25번|2023 중간 25번]] — ① 정답(바르게 된 것): 핵막은 이중막이며 외막은 ER과 연속적. ③ 오답: NLS는 negatively charged가 아닌 positively charged(Lys/Arg) 아미노산으로 구성. ⑤ 오답 근거: 세포질 RanGAP가 RanGTP를 가수분해하여 RanGDP로 전환함으로써 importin에서 cargo가 해리되는 것이 아니라 핵 내 Ran-GTP가 importin에서 cargo를 방출시킴.
[^기출_중간_2025_15]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_15번|2025 중간 15번]] — ③ 틀림(정답): Ran-GTP는 핵 내에서 높고 세포질에서 낮음(선지는 반대로 기술). ④ 옳음: Ran GTP 가수분해로 수송 방향성 에너지 제공. ⑤ 옳음: 핵 내 Ran-GTP가 importin에 결합하면 cargo 방출.
