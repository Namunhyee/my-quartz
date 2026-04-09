# Coat Assembly Control by Monomeric GTPase

## 개요

각 compartment에서 적절한 coated vesicle이 형성되려면 coat assembly가 언제, 어디서 시작될지 정밀하게 제어되어야 한다.[^기출_중간_2022_24][^기출_중간_2023_18] 이 제어에서 핵심적인 역할을 하는 것이 **coat-recruitment GTPase**이다. ==Coat-recruitment GTPase는 특정 compartment의 membrane에서 활성화되어 해당 membrane에 맞는 coat protein을 불러들이는 분자 스위치로 작동한다.==

이들은 [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)]]와 함께 ==coat assembly의 위치 특이성을 결정하는 두 가지 주요 메커니즘 중 하나==이다. 
- ==PIP==가 [[Vesicle formation_MOC#Coated Vesicle의 종류와 경로|plasma membrane과 Golgi, endosome에서 clathrin coat를 조절]]하는 반면
- ==coat-recruitment GTPase는 Golgi, ER, endosome 모두에서== ==COPI, COPII==, retromer coat assembly를 주도적으로 ==조절한다.==

## ==Coat-recruitment GTPase의 종류==

| GTPase               | 작동 compartment     | 조절하는 coat                    |
| -------------------- | ------------------ | ---------------------------- |
| ==**Sar1**==         | ==ER membrane==    | ==COPII coat==               |
| ==**ARF proteins**== | ==Golgi membrane== | ==COPI coat, Clathrin coat== |
| ~~**Rab7**~~         | Endosome membrane  | Retromer coat                |

각각은 서로 다른 GEF에 의해 특정 compartment에서 활성화되며, 이 GEF의 위치 자체가 coat assembly의 공간적 조절을 결정한다.

## ==분자 스위치 메커니즘: GDP/GTP Cycle==

Coat-recruitment GTPase는 [[12. Protein Targeting and Transport#GTP-binding Proteins|monomeric GTPase]]의 일반적인 작동 원리를 따른다. GTP-bound 상태에서 활성, GDP-bound 상태에서 비활성 상태로 전환된다.

**두 가지 조절 단백질:**
- ==**GEF (Guanine nucleotide exchange factor)**: GDP → GTP 교환을 촉매하여 활성화==
- ==**GAP (GTPase-activating protein)**: GTP hydrolysis를 촉진하여 불활성화==
![[Pasted image 20260212122359.png]]
**주요 특징:**
- 세포질 내 GTP 농도가 GDP 농도보다 훨씬 높기 때문에, GDP가 방출되면 즉시 GTP가 결합됨
- 따라서 GEF가 GDP를 방출시키는 것만으로도 활성화가 일어남
- ==GAP는 GTPase의 가수분해 기능을 활성화 -> GTPase가 자기자신에게 붙은 GTP를 분해.->GTPase의 lipid anchor 기능 불활성화==

## 핵심 예시: Sar1에 의한 COPII Coat Assembly

COPII coat의 형성 과정은 coat-recruitment GTPase의 작동 방식을 잘 보여준다.

![[Cell Biology/출처/md converted/Chapter 13/_page_9_Picture_2.jpeg]]
*Figure 13-15: COPII-coated vesicle의 형성. (A) Sar1 GEF가 ER membrane에서 Sar1-GDP를 활성화시킨다. (B) Sar1-GTP가 inner coat인 Sec23/Sec24 복합체를 recruitment한다. (C) Outer coat인 Sec13/Sec31 복합체가 Sec23/Sec24 위에 조립된다. (D) 전체 과정의 모식도.*

### ==단계별 과정==

**1단계: Sar1 활성화**
- ==**Sar1**은 평소 세포질에 **Sar1-GDP** 상태로 존재==[^기출_중간_2023_18]
- ER membrane에 embedded된 Sar1 GEF(Sec12, 이건 Sar1이 아님.)가 세포질의 Sar1-GDP와 결합[^기출_중간_2023_18]
- ==**GEF**가 GDP를 방출==시키고, ==세포질에 풍부한 GTP가 즉시 결합==[^기출_중간_2022_24][^기출_중간_2023_18]
- ==**Sar1-GTP** 형성==[^기출_중간_2022_24][^기출_중간_2023_18]

**2단계: ER membrane에 anchor**
- ==GTP 결합으로 Sar1의 conformational change==
- ==N-terminal의 **amphiphilic(양친매성) helix**가 노출==
- ==이 helix가 ER membrane의 cytoplasmic leaflet에 wedge처럼 삽입==
- Sar1이 ER membrane에 단단히 결합되고, 동시에 membrane curvature 유도 시작

**3단계: Inner coat 조립**
- ==Membrane-bound Sar1-GTP가 COPII adaptor coat protein인 **Sec23/Sec24 복합체** 모집==
- Sec24는 ER exit signal을 가진 cargo receptor의 cytosolic tail에 대한 여러 binding site 보유
- Sec23/Sec24 전체 복합체의 membrane-접촉면은 완만하게 굽은 형태로, COPII vesicle의 곡률과 일치

**4단계: Outer coat 조립**
- ==Sec23/Sec24 위에 outer coat protein인 **Sec13/Sec31 복합체** 모집==
- Sec13/Sec31은 독립적으로 삼각형, 사각형, 오각형의 cage를 형성 가능
- 적절한 크기의 vesicle을 감쌀 수 있는 symmetric cage 형성

**5단계: Budding 완성**
- Coat assembly가 membrane curvature를 증폭
- Vesicle neck에 [[Pinching-Off|dynamin 유사 machinery]]가 작용하여 pinch off
- COPII-coated vesicle 완성

## ARF Protein에 의한 COPI Coat 및 Clathrin Coat Assembly

**ARF protein** (ADP-ribosylation factor)은 Golgi membrane에서 두 종류의 coat를 조절한다.

- **COPI coat**: Golgi cisternae 사이 retrograde transport 및 ER retrieval
- **[[Clathrin coat]] (Golgi)**: TGN에서 endosome 및 secretory vesicle로의 transport

Sar1과 마찬가지로 ARF protein도:
- 평소 cytosol에 ARF-GDP 상태로 존재
- Golgi membrane의 ARF GEF에 의해 활성화
- GTP 결합 후 lipid anchor가 Golgi membrane에 삽입
- 해당 coat protein을 모집

**GEF의 위치가 곧 coat assembly의 위치:**
ER의 Sar1 GEF는 COPII를 ER에서만, Golgi의 ARF GEF는 COPI/Clathrin을 Golgi에서만 활성화시킨다. 각기 다른 compartment에 위치한 GEF가 coat assembly의 공간적 특이성을 보장한다.

## ~~Coat Disassembly의 제어~~

Vesicle이 donor membrane에서 떨어지고 나면 coat를 빠르게 제거해야 target membrane과 융합이 가능하다. Coat disassembly 역시 coat-recruitment GTPase에 의해 시작된다.

### GTP 가수분해가 trigger

GTP 가수분해가 일어나면 GTPase의 conformational change로 인해:
- 막에 삽입된 hydrophobic tail/helix가 membrane에서 빠져나옴
- GTPase가 membrane에서 분리됨
- GTPase의 이탈로 coat protein들의 결합이 불안정해짐
- Coat disassembly 시작

**따라서 GTP 가수분해 속도 = coat가 유지되는 시간**

### Coat별 Disassembly Timing 비교

**COPII coat:**
- COPII coat 자체가 Sar1의 GTP hydrolysis를 촉진
- 그러나 coat가 온전히 형성되면 cargo receptor 결합 등 협동적 상호작용이 coat를 안정화
- 완전한 vesicle이 형성되는 속도가 GTP hydrolysis에 의한 disassembly보다 빠를 때만 vesicle 완성
- Vesicle pinch off 후, kinase가 coat protein을 인산화 → disassembly 완성

**COPI coat:**
- Vesicle membrane의 curvature 자체가 trigger
- Coat에 함께 모집된 **ARF GAP**가 membrane의 lipid packing density 감지
- Membrane curvature가 transport vesicle 수준에 달하면 ARF GAP 활성화
- ARF가 GTP를 가수분해 → ARF가 membrane에서 분리 → coat 즉시 disassemble
- Vesicle pinch off 직후 coat 제거

**Clathrin coat:**
- Coat에 co-packaged된 auxilin이 hsp70 chaperone(ATPase) 활성화
- hsp70이 ATP hydrolysis 에너지로 clathrin coat를 물리적으로 제거
- Vesicle내 phosphoinositide phosphatase가 coat adaptor를 membrane에서 이탈시킴

### Timing의 중요성

Coat는 vesicle이 완전히 형성되기 전에 너무 일찍 제거되어서는 안 된다. 그렇지 않으면 반쯤 형성된 bud가 다시 donor membrane으로 흡수된다. 이에 대한 해결책으로:
- Coat-recruitment GTPase가 coat assembly를 시작하는 동시에 disassembly timer를 세팅
- Cargo receptor와의 결합, 협동적 coat protein 상호작용이 GTP hydrolysis보다 coat를 안정화
- 완전한 vesicle이 형성될 때까지 coat가 유지됨

## 요약

Coat-recruitment GTPase는 특정 compartment membrane에 위치한 GEF에 의해 그 자리에서만 활성화되어, 해당 membrane에 적합한 coat protein을 불러들이는 분자 스위치다. Sar1은 ER에서 COPII coat를, ARF protein은 Golgi에서 COPI 및 clathrin coat를, Rab7은 endosome에서 retromer coat를 조절한다. 활성화된 GTPase는 amphiphilic helix나 lipid anchor를 통해 membrane에 삽입되고, 이후 coat protein의 단계적 조립을 유도한다. GTP 가수분해는 coat disassembly의 trigger로 작용하며, 그 속도가 vesicle이 유지되는 시간을 결정한다.

[^기출_중간_2022_24]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_24번|2022 중간 24번]] — Sar1의 GEF에 의한 활성화, amphiphilic helix의 ER membrane 삽입, Sec23/24→Sec13/31 순서의 COPII coat 조립이 정답 근거로 활용됨.
[^기출_중간_2023_18]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_18번|2023 중간 18번]] — ①번 선지: A는 항상 soluble 단백질로 존재한다 (틀림, GAP(A)는 일부 막 결합 형태로도 기능); ②번 선지: B는 비활성화 G 단백질을 활성화시킨다 (틀림, GEF(B)는 Sar1-GDP에서 GDP를 방출시켜 GTP가 결합되게 하는 것으로 활성화, 설명은 맞지만 '비활성화'의 대상이 Sar1-GDP이므로 맞음 — 그러나 실제 해설에서는 이것이 맞는 선지로 나옴); ③번 선지: B는 pinch off 과정에도 중요한 역할을 할 수 있다 (맞음, GEF(B=Sec12)는 Sar1을 활성화하고 Sar1-GTP의 amphipathic helix가 ER membrane 삽입 → coat assembly → pinch off에 기여, 정답); ④번 선지: Sar1은 C의 소수성 그룹으로 이루어진 막을 통해 막에 결합할 수 있다 (틀림, Sar1은 amphiphilic(양친매성) helix로 결합, farnesyl 같은 소수성 그룹이 아님); ⑤번 선지: A 단백질은 모든 G 단백질에 대해 보편적으로 작용하는 하나의 단백질이다 (틀림, GAP는 특정 G 단백질에 특이적으로 작용).
