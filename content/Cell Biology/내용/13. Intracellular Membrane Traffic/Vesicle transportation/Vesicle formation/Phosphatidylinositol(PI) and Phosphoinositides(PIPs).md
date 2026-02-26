# Phosphatidylinositol(PI) and Phosphoinositides(PIPs)

## 개요

Phosphoinositides (PIPs)는 membrane의 약 10% 미만을 차지[^1]하지만 중요한 regulatory function을 가진다. 이들은 organelle과 membrane domain의 molecular marker로 작용하며, vesicle transport의 여러 단계를 조절한다.

## 구조와 생성

![[Cell Biology/출처/md converted/Chapter 13/_page_6_Figure_2.jpeg]]
PI(3,4,5) P3=phosphatidylinositol 3,4,5-trisphosphate[^2]
### Phosphatidylinositol (PI)
- Inositol sugar head group을 가진 phospholipid[^3]
- Head group의 3', 4', 5' position에 free hydroxyl group 존재

### Phosphoinositide (PIP) 생성
Inositol ring의 hydroxyl group이 phosphorylation되어 다양한 PIP 생성:
- **PI 3-kinase**: PI → PI(3)P
- **PI 4-kinase**: PI → PI(4)P  
- **PI 5-kinase**: PI(4)P → PI(4,5)P₂
- **추가 phosphorylation으로** PI(3,4)P₂, PI(3,5)P₂, PI(3,4,5)P₃ 등 생성

## Compartment-specific Distribution
각 organelle은 특정 PI와 PIP kinase 및 phosphatase를 가진다:
<font color="#ff0000">모두 cytosolic leaflet에 위치함.</font>

### Distribution Pattern
- **Plasma membrane**: PI(4,5)P₂ enriched
- **Early endosome**: PI(3)P enriched
- **Late endosome**: PI(3)P와 PI(3,5)P₂
- **Golgi apparatus**: PI(4)P
- **ER**: PI predominant

### Enzyme Localization
- PI and PIP kinase와 PIP phosphatase의 distribution이 highly compartmentalized
- 이들 enzyme의 distribution, regulation, local balance가 각 PIP species의 steady-state distribution 결정

## PIP-binding Domain을 통한 Protein Recruitment

![[Pasted image 20260210003541.png]]

많은 protein이 특정 PIP의 head group에 high specificity로 결합하는 domain 보유:
예를 들어, [[phagocytosis#Phosphoinositide의 역할|phagocytosis]]는 PI(4,5)P<sub>2</sub> , PI(3,4,5)P<sub>3</sub> 가 진행하기 위한 주요 Phosphatidiylinositides 신호로 작용함.

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

**[[Clathrin coat]] at plasma membrane**:
1. PI 5-kinase가 PI(4)P → PI(4,5)P₂ 전환
2. [[AP2]] adaptor protein이 PI(4,5)P₂ 인식
3. AP2가 conformational change하여 cargo binding site expose
4. [[Clathrin coat]] assembly 시작

**COPII coat at ER**:
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
- [[endocytosis_MOC|Endocytosis]]

[^1]: [[2023 세포생물학 중간고사 문제지.pdf#page=1&selection=285,0,297,1|(1) 세포막을 이루는 인지질의 50%정도를 차지한다]]

[^2]: [[2023 세포생물학 중간고사 문제지.pdf#page=1&selection=316,0,332,2|PI(3,4,5) P3를 phosphatidylinositol 3,4,5-tri-phosphate 라고 읽는다.]]

[^3]: [[2023 세포생물학 중간고사 문제지.pdf#page=1&selection=336,0,353,2|인지질의 글리세롤 대신 이노시톨 (inositol)이 붙어있는 것이 PI이다.]]
