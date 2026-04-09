# Rab Cascades

Rab cascade는 한 Rab protein이 다른 Rab protein을 순차적으로 recruit하고 activate하는 과정이다. 이를 통해 organelle의 identity가 dynamically하게 변화할 수 있다.[^기출_중간_2022_25]

## Rab cascade의 개념

### ==Sequential Rab recruitment==

![[_page_13_Picture_2.jpeg]]

하나의 Rab protein이 다음 Rab protein의 GEF를 recruit할 수 있다:[^기출_중간_2023_7][^기출_중간_2025_19][^기출_중간_2025_21]
1. RabA가 membrane에서 activate
2. RabA가 자신의 effector (RabB GEF) recruit
3. RabB GEF가 RabB를 activate
4. RabB가 자신의 effector (RabA GAP 포함) recruit
5. **RabA GAP가 RabA inactivate**
6. RabA-associated domain 해체
7. RabB-associated domain 확립

### Unidirectional transition
- RabA → RabB transition은 irreversible
- RabB가 RabA를 inactivate하므로
- Forward progression만 가능

## Endosome maturation example

### ==Early endosome (Rab5) → Late endosome (Rab7)==

==**Initial state: Rab5-associated domain**==
- Rab5-GTP가 early endosome membrane에 abundant
- Rab5 effector들이 recruit됨
- Early endosome function

==**Transition initiation**==
- Rab5 effector 중 하나가 Rab7 GEF
- Rab7 GEF가 Rab7을 locally activate
- Rab7-GTP 생성 시작

==**Rab7 domain establishment**==
- Rab7이 자신의 effector recruit
- ==Rab7 effector 중에 Rab5 GAP 포함==
- Rab5 GAP가 Rab5-GTP를 Rab5-GDP로 전환
- ==Rab5-GDP는 membrane에서 dissociate==

**Complete transition**
- ==Rab5-associated domain 완전 해체==[^기출_중간_2025_19]
- ==Rab7-associated domain으로 대체==[^기출_중간_2025_19][^기출_중간_2025_21]
- ==Early endosome → Late endosome maturation==[^기출_중간_2025_19][^기출_중간_2025_21]

## Functional consequences

### Organelle identity change

Rab protein의 교체는 organelle의 여러 특성을 변화시킨다:

**Incoming traffic**
- 다른 tethering protein → 다른 vesicle capture
- 다른 SNARE → 다른 fusion partner

**Outgoing traffic**
- 다른 coat protein → 다른 destination
- 다른 cargo selection

**Positioning**
- 다른 [[310_Motor Proteins_MOC|motor protein]] → 다른 cellular location
- Early endosome: Cell periphery
- Late endosome: Near nucleus ([[dynein]]에 의해 [[300_Microtubules_MOC|microtubule]]을 따라 핵 방향으로 이동)

**Biochemical properties**
- 다른 enzyme recruitment
- 다른 pH regulation
- 다른 metabolic activity

## Self-amplification

### ==Positive feedback==
Rab-associated domain 형성은 self-amplifying:
1. ==Active Rab이 자신의 GEF recruit==
2. More Rab activation
3. More effector recruitment
4. ==Membrane patch 확장==

이러한 positive feedback가 transition을 unidirectional하고 irreversible하게 만든다.

## Multiple sequential transitions

Principle은 더 긴 cascade로 확장 가능:
- RabA → RabB → RabC ...
- 각 step이 이전 Rab inactivate
- Progressive organelle maturation

## Timing control

### GTPase activity
Rab의 GTP hydrolysis rate가 transition timing에 영향:
- Slow hydrolysis → Longer RabA phase
- Fast hydrolysis → Rapid transition

### Effector availability
- GEF와 GAP의 local concentration
- Competition between different effector
- Cellular condition에 따른 modulation

## 다른 cellular process

Rab cascade mechanism은 다른 곳에서도 사용됨:
- Autophagosome maturation
- Phagosome maturation
- Specialized organelle formation

## 생리적 중요성

Rab cascade의 dysregulation:
- Endosome maturation defect
- Cargo trafficking error
- Degradation pathway impairment
- Disease (e.g., neurodegeneration)

[^기출_중간_2022_25]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_25번|2022 중간 25번]] — Rab protein의 cascade(Rab5→Rab7 전환)를 통한 endosome maturation 조절이 정답 근거로 활용됨.
[^기출_중간_2025_19]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_19번|2025 중간 19번]] — ③번 선지: Rab5 단백질이 시간이 지남에 따라 정체성이 변화되어 Rab7 단백질이 된다 (틀림, Rab5가 Rab7으로 변화하는 것이 아니라 Rab5-associated domain이 Rab7-associated domain으로 교체); ④번 선지: Rab 단백질은 적어도 특정 Rab이 vesicle에 존재해야 target membrane에 있는 Rab이 활성화되어야 한다 (맞음, Rab cascade에서 상류 Rab이 하류 Rab의 GEF를 recruit하여 활성화, 정답).
[^기출_중간_2025_21]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_21번|2025 중간 21번]] — ⑤번 선지: Endosome에서 Rab5가 없어지고 Rab7이 생겨나는 Rab cascade는 Cisternal maturation model을 지지하는 것과 유사한 개념이다 (맞음, endosome의 Rab5→Rab7 전환이 막 identity 순차 변화라는 점에서 cisternal maturation model의 cisternae 성숙과 유사, 정답).