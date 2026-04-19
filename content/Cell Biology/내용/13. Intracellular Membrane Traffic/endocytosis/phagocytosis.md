# Phagocytosis

==**Phagocytosis** ("cell eating")는 **면역 세포**가 **phagosome**이라고 불리는 큰 endocytic vesicle을 사용하여 큰 입자(미생물, 죽은 세포 등)를 섭취하는 endocytosis의 특수한 형태이다.==[^기출_중간_2022_35][^기출_중간_2023_11]
==면역세포 특이적인 현상이다.==

![[Cell Biology/출처/md converted/Chapter 13/_page_54_Figure_2.jpeg]]

## Phagocytosis와 Macropinocytosis의 차이

Phagocytosis는 목적과 메커니즘 모두에서 [[macropinocytosis|macropinocytosis]]와 구별된다.

### ==포유류의 두 가지 중요한 white blood cell 부류==:

1. ==**Macrophage**==
2. ==**Neutrophil**==

이들은 hemopoietic stem cell에서 발달하며, 침입하는 미생물을 섭취하여 감염으로부터 우리를 방어한다.
미생물 특유의 물질을 인식하는 receptor가 있고, 이에 더해
==**Opsonization**을 통한 식균작용을 수행함.==[^기출_중간_2023_11]
	==이는 항원에 항체가 결합하여 덩어리를 만들고, 항체를 인식하는 receptor에 의해 유도된 phagocytosis가 항원들을 한꺼번에 제거하는 것.==
![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260409185021.png]]

### 노화 및 사멸 세포의 제거

Macrophage는 다음을 제거하는 중요한 역할도 한다:
- 노화 세포 (senescent cell)
- Apoptosis로 죽은 세포

양적 측면에서 이것이 가장 중요하다. 예를 들어, 우리의 macrophage는 매일 각 사람에서 10^11개 이상의 노화된 red blood cell을 phagocytose한다.

## Phagosome의 크기

Phagosome의 직경은 섭취된 입자의 크기에 의해 결정되며, 이러한 입자는 phagocytic 세포 자체만큼 거의 클 수 있다.[^기출_중간_2023_11][^기출_중간_2025_26]

## Phagosome의 운명

==Phagosome은 endosome이 되어 lysosome과 융합하고, 섭취된 물질이 분해된다. ==:[^기출_중간_2023_11]
- 소화되지 않는 물질은 lysosome에 남아 **residual body**를 형성
- Residual body는 exocytosis로 세포에서 배출될 수 있음

일부 내재화된 plasma membrane 성분은 lysosome에 도달하지 않는다:
- Phagosome에서 transport vesicle로 회수됨
- Plasma membrane으로 반환됨


# ==메커니즘==

![[Cell Biology/출처/md converted/Chapter 13/_page_55_Picture_2.jpeg]]
[[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)#PIP-binding Domain을 통한 Protein Recruitment|메커니즘 별로 다른 PIP의 종류]]

1. ==Phagocytosis는 cargo-triggered process이다:==
- ==Cell-surface receptor의 활성화 필요==
- Receptor가 세포 내부로 신호 전달
- 입자는 먼저 phagocyte 표면에 결합해야 함
- 그러나 결합하는 모든 입자가 섭취되는 것은 아님
2. 이후 
	FcR clustering → Syk → ==**PIP5K 활성화== → ==PI(4,5)P₂ 생성**== → WASP → Arp2/3 → ==actin reorganization== → ==pseudopod== [^기출_중간_2023_11]
	동시에 Syk → ==PI3K== →==PIP₂ → PIP₃== → Rac1 추가 활성화 (양성 피드백)
	과정을 통해 PIP 생성
3. phosphoinositide 축적이 
	==PI(4,5)P₂ (cup 전체)==
  → WASP/Arp2/3 → ==actin branching → pseudopod 확장==
  
==PI(3,4,5)P₃ (cup 가장자리)==
  → Rac1/WAVE → ==추가 actin 중합 → cup이 타겟 감쌈==

tip에서 SHIP1 활성화
  ==→ PI(3,4,5)P₃ 소멸 → 신호 꺼짐 → actin depolymerization==
  ==→ closure → PI(3)P 생성 → maturation==
	
경로를 통해 actin polymerization,  depolymerization, maturation 조절하여 phagosome 생성 완료

### Phagocytic Receptor의 종류

Phagocyte는 세포의 phagocytic machinery와 기능적으로 연결된 다양한 cell-surface receptor를 가진다:

#### ==Fc Receptor==

항체가 병원균 공격에서 가장 잘 특성화된 trigger이다:
- 항체가 감염성 미생물(병원균) 표면에 결합
- 항체 분자가 병원균을 코팅
- Macrophage와 neutrophil 표면의 Fc receptor에 결합
- Receptor 활성화
- Phagocytic 세포가 pseudopod를 확장하여 입자를 둘러싸고 끝에서 융합하여 phagosome 형성

![[Cell Biology/출처/md converted/Chapter 13/_page_55_Picture_2.jpeg]]

### "Don't-eat-me" Signal

살아있는 세포는 "don't-eat-me" signal을 표시한다:
- Cell-surface 단백질 형태
- Macrophage 표면의 inhibitory receptor에 결합
- Inhibitory receptor가 tyrosine phosphatase를 recruit
- Phagocytosis를 시작하는 데 필요한 세포내 신호 전달 이벤트를 antagonize
- 국소적으로 phagocytic process 억제

Phagocytosis는 많은 다른 세포 과정과 같이 process를 활성화하는 양성 신호와 억제하는 음성 신호 사이의 균형에 달려 있다.

==Apoptotic 세포는:==
- =="Eat-me" signal 획득 (예: 외부로 노출된 phosphatidylserine)==
- =="Don't-eat-me" signal 상실==
- ==Macrophage에 의해 매우 빠르게 phagocytose됨==

## Membrane Dynamics

### [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|Phosphoinositide]]의 역할

Pseudopod extension과 phagosome formation은 actin polymerization과 reorganization에 의해 추진되며, 이는 forming phagosome 막의 특정 phosphoinositide 축적에 반응한다:[^기출_중간_2025_26]
![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260210003541.png]]
1. ==**PI(4,5)P2**==
   - ==Actin polymerization 자극==
   - ==Pseudopod formation 촉진==

1. ==**PI(3,4,5)P3**==
   - Base에서 actin filament depolymerize
   - ==Phagosome closure에 필요==
   - 막 invagination을 돕기 위해 actin network를 재형성하는 데도 기여할 수 있음

1. ==**PI(3)P==
- ==이후 endosome으로 mature되는 과정.==

### [[exocytosis_MOC|exocytosis]]==를 통한 막보충==
phagocytosis에서도 actin이 계속 올리니까 membrane을 연장시켜줘야함.

### Rho Family GTPase의 역할

Activated Rho GTPase와 그들의 activating Rho GEF가 pseudopod를 형성한다:
- Rho family GTPase 활성화
- Local PI kinase의 kinase activity 켬
- PI(4,5)P2 생성
- Actin polymerization 자극

- [[_endocytosis_MOC|Endocytosis]]
- [[macropinocytosis|Macropinocytosis]]
- [[../Lysosome/Lysosome_MOC|Lysosome]]
- [[../../24. The Innate and Adaptive Immune Systems/Macrophages|Macrophage]]
- [[../../18. Apoptosis/Apoptosis|Apoptosis]]

[^기출_중간_2022_35]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_35번|2022 중간 35번]] — Phagocytosis의 메커니즘(Fc receptor를 통한 opsonization, actin-mediated pseudopod 형성)이 정답 근거로 활용됨.
[^기출_중간_2023_11]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_11번|2023 중간 11번]] — ①번 선지: Phagosome은 형성 후 바로 소화가 시작된다 (틀림, phagosome은 lysosome과 융합하여 phagolysosome이 되어야 분해 시작); ②번 선지: Phagosome의 크기는 actin에 의해 결정되고 일정하게 유지된다 (틀림, phagosome 크기는 섭취된 입자 크기에 따라 달라짐); ③번 선지: Pseudopod의 확장에는 PI(3)P가 중요한 신호 역할을 한다 (틀림, pseudopod 확장에는 PI(4,5)P₂와 PI(3,4,5)P₃가 주요 신호); ④번 선지: Opsonization 과정으로 인해 phagocyte에서 파괴 작용이 없어질 수 있다 (틀림, opsonization은 파괴 억제가 아니라 phagocytosis를 촉진); ⑤번 선지: 박테리아나 큰 입자를 섭취하기 위한 특별한 endocytosis의 한 종류이다 (맞음, phagocytosis는 큰 입자를 섭취하는 특수 endocytosis, 정답).
[^기출_중간_2025_26]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_26번|2025 중간 26번]] — ①번 선지: Phagosome의 크기는 actin에 의해 결정되고 일정하게 유지된다 (틀림, phagosome 크기는 섭취된 입자 크기에 따라 결정); ②번 선지: Phagocytosis는 actin cytoskeleton의 재배열에 의존한다 (맞음, actin polymerization이 pseudopod 형성·phagosome 완성에 필수적, 정답); ③번 선지: Phagocytosis는 receptor-independent하고 항상 비특이적으로 일어난다 (틀림, 주로 Fc receptor·complement receptor 등 receptor-mediated); ④번 선지: Phagocytosis는 모든 세포에서 동등하게 일어나는 작은 분자를 분비하기 위한 기본 메커니즘이다 (틀림, 주로 professional phagocyte인 macrophage·neutrophil에서 수행, 분비가 아닌 분해 목적); ⑤번 선지: Phagocytosis는 주로 작은 용질 분자를 분비하기 위한 기본 메커니즘으로 이용된다 (틀림, phagocytosis는 큰 입자 분해 위한 내포작용, 분비 아님).