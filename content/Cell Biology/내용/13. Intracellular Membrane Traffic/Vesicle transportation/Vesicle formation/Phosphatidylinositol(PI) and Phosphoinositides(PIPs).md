# Phosphatidylinositol(PI) and Phosphoinositides(PIPs)

==![[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)#==수업에서 언급된 PIP 종류==|수업에서 언급된 PIP 종류]]==
## ==개요==

Phosphoinositides (PIPs)는 membrane의 약 10% 미만을 차지[^1]하지만 중요한 regulatory function을 가진다.[^기출_중간_2022_22][^기출_중간_2023_3][^기출_중간_2025_2] 이들은 organelle과 membrane domain의 molecular marker로 작용하며, vesicle transport의 여러 단계를 조절한다.

## 구조와 생성

![[Cell Biology/출처/md converted/Chapter 13/_page_6_Figure_2.jpeg]]
PI(3,4,5) P3=phosphatidylinositol 3,4,5-trisphosphate[^2][^기출_중간_2023_3][^기출_중간_2025_2]
### Phosphatidylinositol (PI)
- Inositol sugar head group을 가진 phospholipid[^3][^기출_중간_2023_3][^기출_중간_2025_2]
- Head group의 ==3', 4', 5' position==에 ==free hydroxyl group== 존재

### Phosphoinositide (PIP) 생성
==Inositol ring의 hydroxyl group이 phosphorylation되어 다양한 PIP 생성==:
- **PI 3-kinase**: PI → PI(3)P
- **PI 4-kinase**: PI → PI(4)P  
- **PI 5-kinase**: PI(4)P → PI(4,5)P₂
- **추가 phosphorylation으로** PI(3,4)P₂, PI(3,5)P₂, PI(3,4,5)P₃ 등 생성
## ==명명법==
- 인산에스터 결합을 이루는 탄소가 1번. 여기부터 2,3,4,5,6
- 인산화되는 탄소의 번호를 괄호 안에 적고, PI에서부터 추가로 붙은 인산기 개수만큼 PI()Pn
- 읽는 법
	- "Phosphatidylinositol 3,4-**bis**phosphate"=PI(3,4)P₂
	- "Phosphatidiylinosito 3,4,5-**tris**phosphate"=PI(3,4,5)P₃
- tri, bi는 인산기가 연속적으로 결합해 있는 ATP, ADP 같은 것에 쓰임.
- PIP는 인산기가 연속 결합이 아니라 각기 다른 탄소에 결합했으므로 **tris**, **bis**를 씀.
## ==Compartment-specific Distribution==
각 organelle은 특정 PI와 PIP kinase 및 phosphatase를 가진다:
==모두== [[Asymmetry of the lipid bilayer|cytosolic leaflet에 위치함]]

### Distribution Pattern
- ==**Plasma membrane**: PI(4,5)P₂ enriched==
- ==**Early endosome**: PI(3)P enriched==
- ==**Late endosome**: PI(3)P와 PI(3,5)P₂==
- **Golgi apparatus**: PI(4)P
- **ER**: PI predominant

### ==Enzyme Localization==
- PI and PIP kinase와 PIP phosphatase의 distribution이 highly compartmentalized[^기출_중간_2023_3][^기출_중간_2025_2]
- 이들 enzyme의 distribution, regulation, local balance가 각 PIP species의 steady-state distribution 결정[^기출_중간_2023_3][^기출_중간_2025_2]

## PIP-binding Domain을 통한 Protein Recruitment

![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260210003541.png]]

많은 protein이 특정 PIP의 head group에 high specificity로 결합하는 domain 보유:
예를 들어, [[phagocytosis#Phosphoinositide의 역할|phagocytosis]]는 PI(4,5)P<sub>2</sub> , PI(3,4,5)P<sub>3</sub> 가 진행하기 위한 주요 Phosphatidiylinositides 신호로 작용함.
### ==수업에서 언급된 PIP 종류==

| 어느 메커니즘에서                                                                                              | 어떤 PIP                 | 어느 단백질과                             | 어떻게 작용                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Clathrin coat]]                                                                                      | PI(4,5)P₂              | [[AP2]]                             | [[AP2]]가 처음 membrane에 모집될 때 PI(4,5)P₂를 인식함.                                                                                                                                        |
| [[Endosomes maturation#==5.== ESCRT Protein Complex Intralumenal Vesicle 형성\|Intralumenal vesicle 형성]] | PI(3)P                 | [[ESCRT Protein Complex]] 중 ESCRT-0 | [[ESCRT Protein Complex]] 중 첫 단계 역할인ESCRT-0가 PI(3)P를 인식하여 메커니즘 시작                                                                                                                  |
| [[phagocytosis]]                                                                                       | PI(4,5)P₂, PI(3,4,5)P₃ | ~~WASP, Rac1/WAVE~~                 | PI(3)P에서 PI(4,5)P₂로 인산화 : actin reorganization.<br>PI(4,5)P₂에서 PI 3-kinase가 PI(3,4,5)P₃로 인산화 : cup 닫기<br>이후 PIP2,PIP3는 사라지고 PI(3)P가 남아 early phagosome으로 역할                        |
| [[Pinching-Off]]                                                                                       | PI(4,5)P₂              | dynamin                             | 메커니즘 첫단계에서 dynamin의 PH domain(PIP2 binding domain)이 cytosolic leaflet에서 PI(4,5)P₂와 결합                                                                                              |
| Rab5 associated domain formation                                                                       | PI(3)P                 | Rab5 effectors                      | 1.  acitve Rab5가 **PI 3-kinase** activate → PI(3)P production<br>2. **PI(3)P**가 **Rab effector** (tethering protein 포함) binding stabilize<br>3. Rab-5 associated membrane patch 형성 |
### compartment별 분포
| Compartment     | 주요 PIP             |
| --------------- | ------------------ |
| Plasma membrane | PI(4,5)P₂          |
| Early endosome  | PI(3)P             |
| Late endosome   | PI(3)P + PI(3,5)P₂ |
| Golgi           | PI(4)P             |
| ER              | PI                 |


### Recognition Specificity
- 서로 다른 phosphorylation form을 구별
- 예: PI(3)P-binding domain은 PI(4)P나 PI(4,5)P₂와 결합하지 않음

### Functional Consequences
Local PIP kinase와 phosphatase 조절을 통해:
1. 특정 PIP 생성
2. PIP-binding domain을 가진 protein이 membrane으로 recruit
3. 이들 protein이 vesicle formation 등의 process 조절

## Vesicle Transport에서의 역할

### Coat Assembly 개시

==**[[Clathrin coat]] at plasma membrane**:==
1. ==PI 5-kinase가 PI(4)P → PI(4,5)P₂ 전환==
2. [[AP2]] ==adaptor protein이 PI(4,5)P₂ 인식==
3. AP2가 conformational change하여 cargo binding site expose
4. [[Clathrin coat]] assembly 시작

**[[COPII]] coat at ER**:
- Sar1 GEF는 ER membrane에 embedded
- Local PIP가 Sar1 activation site 표시

### Coat Disassembly

Vesicle budding 후:
1. Phosphoinositide phosphatase가 vesicle 내부에서 작용
2. PIP depletion
3. Adaptor protein의 membrane binding 약화
4. Coat disassembly 촉진

### Vesicle Trafficking 조절

각 vesicle transport event와 연관된 특정 PIP:
- **Secretory vesicle**: PI(4)P 함유
  - Plasma membrane fusion 시 PI 5-kinase가 PI(4)P → PI(4,5)P₂
  - PI(4,5)P₂가 clathrin-coated pit formation 촉진 (endocytosis)
- **Endocytic vesicle**: PI(4,5)P₂에서 시작
  - Early endosome 도달 후 PI(5)P phosphatase가 작용
  - Vesicle uncoating 촉진

## Membrane Domain 정의

PIP distribution은 continuous membrane 내에서도 vary:
- Specialized membrane domain 정의
- 같은 organelle 내 서로 다른 region 구별
- 예: Early endosome의 tubular domain vs vacuolar domain

## Signaling에서의 역할

Vesicle transport 외에도 PIP는 intracellular signaling에 중요:
- Extracellular signal 응답으로 특정 PIP 생성
- Specific signaling protein을 plasma membrane으로 recruit
- 이는 vesicle transport와 유사한 전략 사용

## 관련 내용

- [[AP2|AP2의 PIP-dependent activation]]
- [[Clathrin coat|Clathrin coat assembly]]
- [[Vesicle formation_MOC|Vesicle formation 메커니즘]]
- [[Transportation Mechanism_MOC#Monomeric GTPase control of Coat Assembly|Coat-recruitment GTPase]]
- [[_endocytosis_MOC|Endocytosis]]

[^1]: [[2023 세포생물학 중간고사 문제지.pdf#page=1&selection=285,0,297,1|(1) 세포막을 이루는 인지질의 50%정도를 차지한다]]

[^2]: [[2023 세포생물학 중간고사 문제지.pdf#page=1&selection=316,0,332,2|PI(3,4,5) P3를 phosphatidylinositol 3,4,5-tri-phosphate 라고 읽는다.]]

[^3]: [[2023 세포생물학 중간고사 문제지.pdf#page=1&selection=336,0,353,2|인지질의 글리세롤 대신 이노시톨 (inositol)이 붙어있는 것이 PI이다.]]

[^기출_중간_2022_22]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_22번|2022 중간 22번]] — 각 compartment의 특이적 PIP 분포(plasma membrane: PI(4,5)P₂, early endosome: PI(3)P 등)와 vesicle transport 조절 기능이 정답 근거로 활용됨.
[^기출_중간_2023_3]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_3번|2023 중간 3번]] — ①번 선지: 세포막을 이루는 지질의 50% 정도를 차지한다 (틀림, 막 지질의 약 10% 미만, 소수 성분); ②번 선지: 한번 생성되면 같은 종류로만 전환된다 (틀림, kinase/phosphatase에 의해 다양하게 인산화 위치 변환 가능); ③번 선지: PI(3,4,5)P₃를 phosphatidylinositol 3,4,5-tri-phosphate라고 읽는다 (틀림, trisphosphate가 올바른 명칭); ④번 선지: 인지질의 글리세롤 대신 이노시톨(inositol)이 붙어있는 것이 PI이다 (틀림, inositol은 글리세롤을 대체하는 것이 아니라 phosphate를 통해 glycerol의 세 번째 탄소에 연결됨); ⑤번 선지: 작용하는 각 kinase와 phosphatase의 분포가 각 소기관마다 다르다 (맞음, 소기관별 분포 enzyme 차이가 PIP 위치 특이성 결정, 정답).
[^기출_중간_2025_2]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_2번|2025 중간 2번]] — ①번 선지: 세포막을 이루는 지질의 50%정도를 차지한다 (틀림, 소수 성분 1~2%); ②번 선지: PI는 한번 생성되면 다른 PIP로 전환될 수 없다 (틀림, kinase/phosphatase에 의해 상호전환 가능); ③번 선지: PI는 인지질의 글리세롤 대신 이노시톨(inositol)이 붙어있는 지질이다 (틀림, 인산기를 통해 글리세롤 세 번째 위치에 연결, 대체 아님); ④번 선지: PI(3,4,5)P₃를 phosphatidylinositol 3,4,5-triphosphate라고 읽는다 (틀림, 올바른 명칭은 trisphosphate); ⑤번 선지: 각 kinase와 phosphatase의 분포가 각 소기관마다 달라 PIPs의 위치 특이성이 생긴다 (맞음, 소기관별 PIP 분포를 결정하는 enzyme 분포가 다름, 정답).
