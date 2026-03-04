# Lipid Bilayer Synthesis

Lipid bilayer synthesis는 세포막의 성장과 유지를 위해 필수적인 과정이다. ER은 세포의 거의 모든 주요 lipid class를 합성하는 중심 장소이며, 이렇게 합성된 lipid는 새로운 세포막 생산에 사용된다.

## ER에서의 Lipid 합성

### 합성 장소
ER membrane은 phospholipid와 cholesterol을 포함한 세포의 주요 lipid를 합성하는 장소이다. 합성에 관여하는 모든 효소는 ER membrane에 위치하며, 이들의 active site는 cytosol을 향하고 있다. 이러한 배치는 모든 필요한 대사물질이 cytosol에 존재하기 때문에 가능하다.

### Phospholipid 합성 경로

![[Cell Biology/출처/md converted/Chapter 12/_page_37_Figure_2.jpeg]]

Phospholipid 합성은 cytosolic leaflet에서만 일어난다. 주요 phospholipid인 phosphatidylcholine의 합성 과정은 다음과 같다:

#### Step 1: Fatty Acid 전달
Cytosol에서 합성된 fatty acid는 물에 녹지 않으므로 fatty acid binding protein이 이들을 ER로 운반한다. 이 binding protein은 fatty acid를 감싸서 수용액 환경인 cytosol을 통과할 수 있게 한다.

#### Step 2: Fatty Acid 활성화와 부착
ER membrane에 도착한 fatty acid는 먼저 CoA와 결합하여 활성화된다. Acyl transferase가 두 개의 activated fatty acid를 glycerol phosphate에 순차적으로 부착하여 phosphatidic acid를 생성한다.

#### Step 3: Membrane 통합
Phosphatidic acid는 충분히 소수성이어서 lipid bilayer에 남아있을 수 있다. Fatty acid binding protein이 이를 bilayer로부터 추출할 수 없다. 따라서 이 단계가 ER lipid bilayer를 실제로 확장시키는 단계이다.

#### Step 4: Head Group 수정
이후 단계들은 새로 형성된 lipid molecule의 head group을 결정한다. 이 단계들은 bilayer의 화학적 성질을 결정하지만, net membrane growth를 일으키지는 않는다.

## 다른 Phospholipid의 합성

동일한 방식으로 다른 주요 membrane phospholipid들도 합성된다:
- Phosphatidylethanolamine
- Phosphatidylserine
- [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|Phosphatidylinositol (PI)]] - minor phospholipid이지만 signaling에 중요

모든 합성은 cytosolic leaflet에서 일어나며, 동일한 기본 메커니즘을 따른다.

## Cholesterol과 Ceramide 합성

### Cholesterol
ER은 cholesterol도 생산한다.[^기출_중간_2021_12] Cholesterol은 membrane의 유동성과 구조에 중요한 역할을 한다.

### Ceramide
![[Cell Biology/출처/md converted/Chapter 12/_page_38_Figure_2.jpeg]]

Ceramide는 다음 과정을 거쳐 합성된다:

1. Serine과 fatty acid가 condensation되어 amino alcohol인 sphingosine 형성
2. 두 번째 fatty acid가 covalently 부착되어 ceramide 완성

Ceramide는 [[Golgi apparatus_MOC|Golgi apparatus]]로 export되어 두 가지 lipid의 전구체로 사용된다:
- **Glycosphingolipids** (glycolipids): oligosaccharide가 ceramide에 부착 ^462610
- **Sphingomyelin**: phosphocholine이 부착

Golgi apparatus에서 이 lipid들을 합성하는 효소들은 active site가 Golgi lumen을 향하고 있다. 따라서 glycolipid와 sphingomyelin은 이들을 포함하는 lipid bilayer의 noncytosolic leaflet에만 제한된다.

## Membrane 확장의 비대칭성

### 초기 비대칭성
Phospholipid 합성이 ER lipid bilayer의 cytosolic leaflet에서만 일어나므로, 처음에는 한쪽 leaflet만 확장된다. 하지만 ER membrane은 두 leaflet에서 다른 phospholipid들이 거의 동등하게 분포되어 있다.
![[Cell Biology/출처/md converted/Chapter 12/_page_38_Figure_2.jpeg]]
### [[Scramblase]]의 역할
이 대칭적 분포는 scramblase라는 phospholipid translocator에 의해 달성된다.[^기출_중간_2021_23][^기출_중간_2023_28] Scramblase는 새로 형성된 phospholipid molecule 일부를 cytosolic leaflet에서 lumenal leaflet로 전달한다.

### 다른 Organelle로의 전달
ER에서 합성된 lipid는 transport vesicle을 통해 다른 organelle로 전달된다. Plasma membrane과 Golgi apparatus, lysosome, endosome의 membrane은 모두 ER로부터 [[003_Vesicular Transport|vesicular transport]]를 통해 전달된 lipid로 구성된다.

## Membrane의 특이성 유지

서로 다른 organelle membrane들이 ER로부터 lipid를 공급받지만, 각각의 membrane은 독특한 lipid composition을 유지한다. 이는 세 가지 메커니즘으로 달성된다:

### 1. 선택적 Vesicular Transport
Transport vesicle이 출발 organelle과 다른 lipid composition을 가질 수 있다. 이는 특정 lipid subset만 목적지로 전달한다.

### 2. Head Group 수정
Organelle membrane의 단백질이 특정 lipid의 head group을 수정하여 정체성을 변경할 수 있다. 예를 들어 Golgi에서 ceramide로부터 sphingomyelin을 생산한다.

### 3. [[Flippase]]
Flippase는 특정 phospholipid를 membrane의 한쪽 leaflet에서 다른쪽으로 이동시킨다. 이는 membrane asymmetry를 확립하고 유지하는 데 중요하다.

## Mitochondria와 Plastid의 Lipid 획득

### 특별한 전달 메커니즘
Mitochondria와 plastid는 ER과 vesicular transport로 소통하지 않으므로, 성장을 위해 ER로부터 lipid를 수입하는 다른 메커니즘이 필요하다.

### [[Selective lipid transfer at contact site]]
이들 organelle은 [[Selective lipid transfer at contact site]]를 통해 ER로부터 lipid를 획득한다. ER과 이들 organelle 사이의 junction에서 lipid transfer protein이 개별 lipid molecule을 운반한다.

## 생리적 중요성

### Membrane Growth
세포가 분열하려면 membrane을 두 배로 만들어야 한다. ER에서의 지속적인 lipid 합성이 이를 가능하게 한다.

### Organelle Identity
각 organelle의 독특한 lipid composition은 그 organelle의 정체성과 기능적 특성에 기여한다.

### Protein Function
Membrane lipid composition은 그 membrane에 위치한 protein의 기능에 영향을 미친다. 특정 lipid는 특정 protein의 활성을 조절할 수 있다.

## 관련 개념
- [[Scramblase]]
- [[Flippase]]
- [[Selective lipid transfer at contact site]]
- [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|Phosphoinositide signaling]]
- [[Lipid bilayer|ER membrane structure]]

[^기출_중간_2021_12]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_12번|2021 중간 12번]] — ER membrane에 cholesterol이 적은 이유: ER에서 합성된 cholesterol은 빠르게 plasma membrane, 골지체 등으로 수송되어 ER에 낮게 유지됨. ER은 단백질 삽입·수송의 관문으로서 얇고 유동적인 막이 필요하기 때문. 복기 불완전. (선지 미복기)
[^기출_중간_2021_23]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_23번|2021 중간 23번]] — Scramblase(ER, ATP 비의존, 양방향, 비특이적)와 Flippase(plasma membrane, ATP 의존, 단방향, PS·PE 특이적)의 역할 및 ER막과 plasma membrane의 인지질 비대칭성 차이가 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2023_28]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_28번|2023 중간 28번]] — Flippase(outer→inner, ATP 의존, PS·PE 특이), Floppase(inner→outer, ATP 의존, PC·SM 특이), Scramblase(양방향, ATP 비의존, 비특이)를 빈칸으로 묻는 단답형. 복기 불완전. (선지 미복기)
