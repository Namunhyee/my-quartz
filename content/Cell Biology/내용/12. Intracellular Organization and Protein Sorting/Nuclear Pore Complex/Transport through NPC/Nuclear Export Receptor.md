# Nuclear Export Receptor

Nuclear export receptor는 **karyopherin** 단백질 계열에 속하는 단백질로, NES를 인식하고 cargo를 핵에서 세포질로 수송한다. Import receptor와 구조적·진화적으로 유사하지만 반대 방향으로 작동한다.

## Import Receptor와의 비교

Nuclear import receptor와 export receptor는 동일한 FG repeat 결합 메커니즘으로 NPC를 통과하지만, **Ran-GTP와의 상호작용이 반대**이다:

| | Import Receptor | Export Receptor |
|---|---|---|
| Cargo 결합 | 세포질에서 (Ran-GDP 상태) | 핵에서 (Ran-GTP 존재 시) |
| Cargo 해리 | 핵에서 (Ran-GTP가 해리 유도) | 세포질에서 (Ran GAP이 GTP 가수분해 → 해리) |
| 재순환 방향 | 핵 → 세포질 | 세포질 → 핵 |

## 수출 메커니즘

1. 핵 안에서 **Ran-GTP**가 export receptor와 NES cargo의 결합을 **촉진** (삼중 복합체: receptor + cargo + Ran-GTP 형성)
2. 삼중 복합체가 FG repeat를 이용해 NPC를 통해 세포질로 이동
3. 세포질에서 **Ran GAP**이 Ran-GTP 가수분해 유도 → receptor의 구조 변화
4. Cargo와 Ran-GDP 모두 세포질로 방출
5. Free export receptor와 Ran-GDP가 [[Nuclear Import Receptor|import receptor]]와 Ran GTPase 시스템을 이용해 핵으로 재수입됨

## 수출되는 RNA들

snRNA, miRNA, tRNA는 nuclear export receptor와 Ran-GTP gradient를 이용해 수출된다. 반면 mRNA는 export receptor를 사용하지 않는 별도의 경로를 사용한다 (→ [[020_Transport through NPC_MOC#mRNA 수출의 특수한 메커니즘]] 참조).
