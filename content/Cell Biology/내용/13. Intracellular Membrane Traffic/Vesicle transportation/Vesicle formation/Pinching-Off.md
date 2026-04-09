# Pinching-Off

## 개요

Pinching-off는 budding vesicle이 donor membrane으로부터 완전히 분리되는 과정이다. 이 과정은 vesicle neck의 두 noncytosolic leaflet을 close proximity로 가져와 seal하여 완전한 vesicle을 형성한다.

## Dynamin의 역할

![[Pasted image 20260212115934.png]]

==**Dynamin**은 주요 pinching-off protein이다==:[^기출_중간_2022_23][^기출_중간_2023_2][^기출_중간_2025_18]

### 구조와 기능
- ==GTPase domain==: GTP hydrolysis 조절
- [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|PI(4,5)P2]]-binding domain= ==PH domain==: cytosolic leaflet에 붙음. ==PI(4,5)P<sub>2</sub>==[^기출_중간_2023_2][^기출_중간_2025_22]
- middle domain/stalk : oligomerization
- **Multiple dynamin molecule**: Budding vesicle neck 주위에 spiral로 조립[^기출_중간_2023_2][^기출_중간_2025_22]

### Pinching-off Mechanism

==**Assembly**==:
1. Dynamin molecule들이 막의 PI(4,5)<sub>2</sub>와 결합하면서 결집하여 vesicle neck 주위에 ring 형성 [^기출_중간_2023_2][^기출_중간_2025_22]
2. Ring이 spiral structure로 조립. polymer 형성[^기출_중간_2023_2][^기출_중간_2025_22]
3. 동시에 자동으로 PI(4,5)<sub>2</sub>들도 모여있는 상태가 됨. 이는 머리가 큰 PI(4,5)<sub>2</sub>의 특성상 양의 곡률을 만듦.

==**Constriction**:==
1. Bound GTP hydrolysis[^기출_중간_2023_2][^기출_중간_2025_22]
2. Dynamin의 conformational change[^기출_중간_2023_2][^기출_중간_2025_22]
3. Dynamin ring constriction[^기출_중간_2023_2][^기출_중간_2025_22]
4. Underlying membrane neck도 함께 constrict

> [!question] dynamin dimer란 무엇인가?
> 교과서에서는 stalk 부분이 붙어있는 두 dynamin을 dimer라고 부름.
> ==수업에서는 "GTP dependent한 Dimerization"이라고 함==
> 즉 G-domain이 서로 붙어 형성한 것도 dimer라고 할 수 있음.


**Membrane Fusion**:
- Neck 부위의 두 noncytosolic leaflet이 close proximity
- Leaflet끼리 flow together하여 seal
- Lipid-modifying enzyme recruitment하여 local lipid composition 변화로 membrane fusion 촉진

## GTP Hydrolysis Cycle

![[Cell Biology/출처/md converted/Chapter 13/_page_8_Figure_2.jpeg]]
(B)는 dynamin이 제 역할을 못하는 mutation을 가진 초파리의 상태.

==Dynamin의 작동은 GTP binding과 hydrolysis cycle을 통해 조절된다:==

### Stepping Model
1. ==**GTP binding**==: Dynamin dimer의 GTPase domain이 adjacent rung의 GTPase domain과 상호작용[^기출_중간_2025_22]
2. ==**GTP hydrolysis**: Conformational change로 dynamin molecule compaction==[^기출_중간_2025_22]
3. ==**Partial constriction**==: Dynamin spiral의 부분적 수축
4. **GTP loss**: GTPase domain간 interaction 약화
5. **GTP rebinding**: Dynamin이 adjacent position으로 이동
6. **Cycle repeat**: 반복적인 compaction과 stepping으로 progressive constriction
### Energy Source
- ==GTP hydrolysis의 energy가 membrane neck constriction을 power==
- Cycle을 반복하며 점진적으로 neck 직경 감소
## 관련 내용

- [[Clathrin coat|Clathrin coat]]
- [[Cell Biology/내용/13. Intracellular Membrane Traffic/Vesicle transportation/Vesicle formation/Membrane Bending Protein|Membrane-bending protein]]
- [[Vesicle formation_MOC|Vesicle formation 전체 과정]]
- [[Transportation Mechanism_MOC#Monomeric GTPase control of Coat Assembly|Coat assembly regulation]]

[^기출_중간_2022_23]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_23번|2022 중간 23번]] — Dynamin의 GTPase domain, PI(4,5)P₂-binding PH domain, vesicle neck 주위 spiral 조립 후 GTP hydrolysis에 의한 constriction 메커니즘이 정답 근거로 활용됨.
[^기출_중간_2023_2]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_2번|2023 중간 2번]] — ①번 선지: 가수분해를 통해 polymerization을 한다 (틀림, polymerization 후 GTP 가수분해로 constriction·fission 발생, 순서 오류); ②번 선지: GTPase domain을 통해 PI(4,5)P₂에 결합한다 (틀림, PI(4,5)P₂ 결합은 PH domain 담당); ③번 선지: Membrane에 결합하지 않아도 기능을 할 수 있다 (틀림, membrane 결합 필수); ④번 선지: 가수분해를 통해 GTPase domain의 dimerization을 촉진한다 (틀림, dimerization 후 GTP 가수분해가 활성화되는 것); ⑤번 선지: 가수분해되면서 가수분해목 부분에 힘이 가해져 막이 절단되고 분리된다 (맞음, Dynamin은 neck에서 GTP 가수분해 에너지로 constriction → fission, 정답).
[^기출_중간_2025_22]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_22번|2025 중간 22번]] — ①번 선지: G domain을 통해 dimer 형성 후 PI(4,5)P₂에 결합하게 된다 (틀림, PI(4,5)P₂ 결합은 PH domain 담당); ②번 선지: Dynamin은 막이 잘리는 초기 단계에서 clathrin 코트 내부에서 먼저 작용한다 (틀림, Dynamin은 neck에서 pinch-off 단계에 작용); ③번 선지: Dynamin의 polymerization을 통해 가수분해목을 하고 강하게 수축시켜 막을 분리시킨다 (틀림, polymerization 자체가 constriction 하는 것은 아님); ④번 선지: 소포체 lumen(내강)에 위치하다가 활성화되면 막을 감싸서 막의 분리를 촉진시킨다 (틀림, Dynamin은 세포질(cytoplasmic) 면에서 작동); ⑤번 선지: G domain의 dimer를 이루는 가수분해목 부분이 형성되어 막이 수축하는 변화가 발생하고 동시에 막의 목부분이 된다 (맞음, G domain dimerization → GTPase 활성화 → constriction → fission, 정답).
[^기출_중간_2025_18]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_18번|2025 중간 18번]] — ②번 선지: Dynamin이 활성화되어 막이 폴리머화되어 분리된다 (틀림, PI(4,5)P₂가 분해되면 PH domain의 막 결합이 약화되어 Dynamin 활성 감소 → fission 저해).
