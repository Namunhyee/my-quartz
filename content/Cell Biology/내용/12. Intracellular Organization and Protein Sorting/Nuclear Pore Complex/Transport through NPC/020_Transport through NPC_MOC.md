# Transport through NPC

NPC를 통한 수송은 다른 organelle의 막을 가로지르는 수송과 근본적으로 다르다. NPC는 단백질 translocator처럼 닫힌 채널이 아니라, **항상 열려 있는 대형 pore**를 통해 수송이 이루어진다. 따라서 완전히 접힌 단백질과 대형 복합체도 양방향으로 수송될 수 있다.

## 목차

- [[Nuclear Localization Signals]] — 핵으로 들어가는 신호
- [[Nuclear Export Signals]] — 핵에서 나가는 신호
- [[Nuclear Import Receptor]] — NLS를 인식하고 NPC를 통과하는 karyopherin
- [[Nuclear Export Receptor]] — NES를 인식하고 핵에서 export를 수행하는 karyopherin
- [[Ran-GTP cycle & Transport Through NPC]] — 수송에 방향성을 부여하는 GTPase 사이클
- [[021_Nuclear Transport Regulation_MOC]] — 수송 조절의 예시들

## 수송의 기본 메커니즘

1. Cargo 단백질의 [[Nuclear Localization Signals|NLS]] 또는 [[Nuclear Export Signals|NES]]가 해당 [[Nuclear Import Receptor|import]] 또는 [[Nuclear Export Receptor|export]] receptor에 인식됨
2. Receptor–cargo 복합체가 NPC의 **cytosolic fibrils**의 FG repeat에 모집됨
3. Receptor가 FG repeat에 결합하면서 mesh를 국소적으로 녹여 NPC 내부로 확산이 가속됨
4. [[Ran-GTP cycle & Transport Through NPC]]이 cargo의 결합과 해리에 방향성을 부여:
   - **Import**: 핵 안의 Ran-GTP가 receptor에서 cargo를 해리시킴
   - **Export**: 핵 안의 Ran-GTP가 receptor와 cargo의 결합을 촉진, 세포질의 Ran GAP이 cargo를 해리시킴
5. Receptor가 반대 방향으로 재순환됨

## mRNA 수출의 특수한 메커니즘

mRNA는 nuclear export receptor나 Ran-GTPase를 사용하지 않는다. 대신:
- 가공된 mRNA가 여러 RNA-결합 단백질과 조립되어 **mRNP (mRNA ribonucleoprotein)** 복합체 형성
- mRNP가 FG repeat mesh를 통해 NPC를 탐색
- NPC 세포질쪽의 **helicase 복합체**가 ATP 가수분해로 mRNP에서 일부 단백질을 제거 → 역진입 방지 (단방향성 확보)
- 제거된 RNA-결합 단백질은 import receptor와 Ran GTPase 시스템으로 핵으로 재수입됨
