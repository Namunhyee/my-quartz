# Phagocytosis

**Phagocytosis** ("cell eating")는 세포가 **phagosome**이라고 불리는 큰 endocytic vesicle을 사용하여 큰 입자(미생물, 죽은 세포 등)를 섭취하는 endocytosis의 특수한 형태이다.

![[Cell Biology/출처/md converted/Chapter 13/_page_54_Figure_2.jpeg]]

## Phagocytosis와 Macropinocytosis의 차이

Phagocytosis는 목적과 메커니즘 모두에서 [[macropinocytosis|macropinocytosis]]와 구별된다.

## 원생동물에서의 Phagocytosis

원생동물에서 phagocytosis는 먹이 섭취의 한 형태이다:
- 큰 입자가 phagosome으로 흡수됨
- Lysosome에서 끝남
- 소화 과정의 생성물이 세포질로 전달되어 음식으로 사용됨

## 다세포 생물에서의 Phagocytosis

다세포 동물에서는 소수의 세포만이 큰 입자를 효율적으로 섭취할 수 있다:
- 동물의 장에서 extracellular process가 음식 입자를 분해함
- 세포는 가수분해의 작은 생성물을 가져옴

### Professional Phagocyte

다세포 동물에서 phagocytosis는 주로 **전문적 phagocyte**라고 불리는 특화된 세포에 의해 수행된다:

#### 포유류의 두 가지 중요한 white blood cell 부류:

1. **Macrophage**
2. **Neutrophil**

이들은 hemopoietic stem cell에서 발달하며, 침입하는 미생물을 섭취하여 감염으로부터 우리를 방어한다.
미생물 특유의 물질을 인식하는 receptor가 있고, 이에 더해
**Opsonization**을 통한 식균작용을 수행함.
	이는 항원에 항체가 결합하여 덩어리를 만들고, 항체를 인식하는 receptor에 의해 유도된 phagocytosis가 항원들을 한꺼번에 제거하는 것.
	![[Cell Biology/출처/md converted/Chapter 13/_page_45_Picture_2.jpeg]]

### 노화 및 사멸 세포의 제거

Macrophage는 다음을 제거하는 중요한 역할도 한다:
- 노화 세포 (senescent cell)
- Apoptosis로 죽은 세포

양적 측면에서 이것이 가장 중요하다. 예를 들어, 우리의 macrophage는 매일 각 사람에서 10^11개 이상의 노화된 red blood cell을 phagocytose한다.

## Phagosome의 크기

Phagosome의 직경은 섭취된 입자의 크기에 의해 결정되며, 이러한 입자는 phagocytic 세포 자체만큼 거의 클 수 있다.

## Phagosome의 운명

Phagosome은 lysosome과 융합하고, 섭취된 물질이 분해된다:
- 소화되지 않는 물질은 lysosome에 남아 **residual body**를 형성
- Residual body는 exocytosis로 세포에서 배출될 수 있음

일부 내재화된 plasma membrane 성분은 lysosome에 도달하지 않는다:
- Phagosome에서 transport vesicle로 회수됨
- Plasma membrane으로 반환됨


# 메커니즘
## Cargo Recognition으로 시작

![[Cell Biology/출처/md converted/Chapter 13/_page_55_Picture_2.jpeg]]

1. Phagocytosis는 cargo-triggered process이다:
- Cell-surface receptor의 활성화 필요
- Receptor가 세포 내부로 신호 전달
- 입자는 먼저 phagocyte 표면에 결합해야 함
- 그러나 결합하는 모든 입자가 섭취되는 것은 아님
2. 이후 
	FcR clustering → Syk → **PIP5K 활성화 → <font color="#ff0000">PIP₂ 생성</font>** → WASP → Arp2/3 → actin → pseudopod
	동시에 Syk → PI3K →<font color="#ff0000"> PIP₂ → PIP₃</font> → Rac1 추가 활성화 (양성 피드백)
	과정을 통해 PIP 생성
3. phosphoinositide 축적이 
	```
	PIP₂ (cup 전체)
  → WASP/Arp2/3 → actin branching → pseudopod 확장
  
PIP₃ (cup 가장자리)
  → Rac1/WAVE → 추가 actin 중합 → cup이 타겟 감쌈

tip에서 SHIP1 활성화
  → PIP₃ 소멸 → 신호 꺼짐 → actin depolymerization
  → closure → PI(3)P 생성 → maturation
	```
	경로를 통해 actin polymerization,  depolymerization, maturation 조절하여 phagosome 생성 완료

### Phagocytic Receptor의 종류

Phagocyte는 세포의 phagocytic machinery와 기능적으로 연결된 다양한 cell-surface receptor를 가진다:

#### 1. Fc Receptor

항체가 병원균 공격에서 가장 잘 특성화된 trigger이다:
- 항체가 감염성 미생물(병원균) 표면에 결합
- 항체 분자가 병원균을 코팅
- Macrophage와 neutrophil 표면의 Fc receptor에 결합
- Receptor 활성화
- Phagocytic 세포가 pseudopod를 확장하여 입자를 둘러싸고 끝에서 융합하여 phagosome 형성

![[Cell Biology/출처/md converted/Chapter 13/_page_55_Picture_2.jpeg]]

#### 2. Complement Receptor

Complement 성분을 인식하며, 항체와 협력하여 미생물을 파괴 대상으로 지정한다.

#### 3. Pattern Recognition Receptor

특정 병원균 표면의 oligosaccharide를 직접 인식한다.

#### 4. Phosphatidylserine Receptor

Apoptosis로 죽은 세포를 인식한다:
- Apoptotic 세포는 plasma membrane의 인지질 비대칭 분포 상실
- 부정적으로 charged phosphatidylserine이 정상적으로 lipid bilayer의 cytosolic leaflet에 국한됨
- 이제 세포 외부에 노출됨
- 죽은 세포의 phagocytosis를 trigger하는 데 도움

#### 5. 비특이적 Phagocytosis

Macrophage는 다양한 무생물 입자도 phagocytose한다:
- 유리 또는 latex bead
- Asbestos fiber
- 그러나 자신의 몸에서 살아있는 세포는 phagocytose하지 않음

### "Don't-eat-me" Signal

살아있는 세포는 "don't-eat-me" signal을 표시한다:
- Cell-surface 단백질 형태
- Macrophage 표면의 inhibitory receptor에 결합
- Inhibitory receptor가 tyrosine phosphatase를 recruit
- Phagocytosis를 시작하는 데 필요한 세포내 신호 전달 이벤트를 antagonize
- 국소적으로 phagocytic process 억제

Phagocytosis는 많은 다른 세포 과정과 같이 process를 활성화하는 양성 신호와 억제하는 음성 신호 사이의 균형에 달려 있다.

Apoptotic 세포는:
- "Eat-me" signal 획득 (예: 외부로 노출된 phosphatidylserine)
- "Don't-eat-me" signal 상실
- Macrophage에 의해 매우 빠르게 phagocytose됨

## Membrane Dynamics

![[Cell Biology/출처/md converted/Chapter 13/_page_55_Picture_2.jpeg]]

### Phosphoinositide의 역할

Pseudopod extension과 phagosome formation은 actin polymerization과 reorganization에 의해 추진되며, 이는 forming phagosome 막의 특정 phosphoinositide 축적에 반응한다:

1. **PI(4,5)P2**
   - Actin polymerization 자극
   - Pseudopod formation 촉진

2. **PI(3,4,5)P3**
   - Base에서 actin filament depolymerize
   - Phagosome closure에 필요
   - 막 invagination을 돕기 위해 actin network를 재형성하는 데도 기여할 수 있음

### Rho Family GTPase의 역할

Activated Rho GTPase와 그들의 activating Rho GEF가 pseudopod를 형성한다:
- Rho family GTPase 활성화
- Local PI kinase의 kinase activity 켬
- PI(4,5)P2 생성
- Actin polymerization 자극
## 병원균의 회피 메커니즘

일부 병원성 세균은 phagosome-lysosome 융합을 방지하는 정교한 메커니즘을 진화시켰다.

### 예: Legionella pneumophila

Legionnaires' disease를 일으키는 세균:
- Rab-modifying 효소를 숙주에 주입
- 특정 Rab 단백질이 막 traffic을 잘못 유도하게 함
- Phagosome-lysosome 융합 방지
- 세균이 lysosomal degradation을 피함
- 수정된 phagosome에 남아 세포내 병원균으로 성장하고 분열
- 숙주의 adaptive immune system으로부터 보호됨
## 관련 주제

- [[endocytosis_MOC|Endocytosis]]
- [[macropinocytosis|Macropinocytosis]]
- [[../Lysosome/Lysosome_MOC|Lysosome]]
- [[../../24. The Innate and Adaptive Immune Systems/Macrophages|Macrophage]]
- [[../../18. Apoptosis/Apoptosis|Apoptosis]]