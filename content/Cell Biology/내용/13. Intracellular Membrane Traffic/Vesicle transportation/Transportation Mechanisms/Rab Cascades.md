---
dg-publish: true
---
# Rab Cascades

Rab cascade는 한 Rab protein이 다른 Rab protein을 순차적으로 recruit하고 activate하는 과정이다. 이를 통해 organelle의 identity가 dynamically하게 변화할 수 있다.

## Rab cascade의 개념

### Sequential Rab recruitment

![[Cell Biology/출처/md converted/Chapter 13/_page_13_Picture_2.jpeg]]

하나의 Rab protein이 다음 Rab protein의 GEF를 recruit할 수 있다:
1. RabA가 membrane에서 activate
2. RabA가 자신의 effector (RabB GEF) recruit
3. RabB GEF가 RabB를 activate
4. RabB가 자신의 effector (RabA GAP 포함) recruit
5. RabA GAP가 RabA inactivate
6. RabA-associated domain 해체
7. RabB-associated domain 확립

### Unidirectional transition
- RabA → RabB transition은 irreversible
- RabB가 RabA를 inactivate하므로
- Forward progression만 가능

## Endosome maturation example

### Early endosome (Rab5) → Late endosome (Rab7)

**Initial state: Rab5-associated domain**
- Rab5-GTP가 early endosome membrane에 abundant
- Rab5 effector들이 recruit됨
- Early endosome function

**Transition initiation**
- Rab5 effector 중 하나가 Rab7 GEF
- Rab7 GEF가 Rab7을 locally activate
- Rab7-GTP 생성 시작

**Rab7 domain establishment**
- Rab7이 자신의 effector recruit
- Rab7 effector 중에 Rab5 GAP 포함
- Rab5 GAP가 Rab5-GTP를 Rab5-GDP로 전환
- Rab5-GDP는 membrane에서 dissociate

**Complete transition**
- Rab5-associated domain 완전 해체
- Rab7-associated domain으로 대체
- Early endosome → Late endosome maturation

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
- 다른 motor protein → 다른 cellular location
- Early endosome: Cell periphery
- Late endosome: Near nucleus

**Biochemical properties**
- 다른 enzyme recruitment
- 다른 pH regulation
- 다른 metabolic activity

## Self-amplification

### Positive feedback
Rab-associated domain 형성은 self-amplifying:
1. Active Rab이 자신의 GEF recruit
2. More Rab activation
3. More effector recruitment
4. Membrane patch 확장

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