---
dg-publish: true
---
# Unfolded Protein Response

Unfolded protein response (UPR)는 ER lumen에 misfolded protein이 축적될 때 활성화되는 신호전달 경로이다. UPR은 ER의 protein-processing capacity를 증가시키고, 새로운 단백질 합성을 조절하며, 필요시 세포 사멸을 유도하여 ER homeostasis를 회복한다.

## UPR의 필요성

### ER Stress의 원인
ER stress는 다음과 같은 상황에서 발생한다:
- Misfolded protein의 과도한 축적
- 단백질 합성 속도가 folding capacity 초과
- Chaperone 부족
- 환경적 stress (heat, oxidative stress)
- 영양 결핍
- Viral infection

### Stress의 결과
ER stress가 해소되지 않으면:
- Chaperone이 포화됨
- Misfolded protein이 aggregate 형성
- ER function 손상
- Cellular dysfunction
- 최종적으로 cell death

## Three Parallel UPR Pathways

![[Cell Biology/출처/md converted/Chapter 12/_page_35_Figure_2.jpeg]]

UPR은 세 가지 독립적이면서 협력하는 경로로 구성된다. 각 경로는 ER membrane에 있는 transmembrane sensor protein에서 시작하여, 최종적으로 핵에서 전사인자를 활성화한다.

## 1. IRE1 Pathway

### Sensor Activation
![[Cell Biology/출처/md converted/Chapter 12/_page_36_Figure_2.jpeg]]

IRE1은 transmembrane protein kinase이자 endoribonuclease이다.

**Normal state:**
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]]가 IRE1의 lumenal domain에 결합
- IRE1이 inactive monomer로 유지
- Kinase와 ribonuclease activity 억제

**Stress condition:**
- BiP가 misfolded protein에 결합하기 위해 IRE1에서 dissociate
- Misfolded protein이 IRE1의 lumenal domain에 직접 결합
- IRE1 monomer들이 oligomerize
- Trans-autophosphorylation 발생
- Cytosolic ribonuclease domain 활성화

### Unique mRNA Splicing Mechanism

IRE1 pathway의 가장 독특한 특징은 <mark style="background:#fff88f">cytosolic mRNA를 splicing</mark>한다는 것이다. 이는 nuclear splicing과 완전히 독립적이며 spliceosome을 사용하지 않는다.

**Mechanism:**
1. Activated IRE1이 특정 mRNA의 두 위치를 인식
2. Endoribonuclease가 두 지점을 절단
3. Intron이 제거됨[^1]
4. RNA ligase가 남은 exon들을 연결
5. Spliced mRNA 생성

**결과:**
- Spliced mRNA가 active transcription factor를 encode
- 이 전사인자가 핵으로 들어감
- UPR target gene의 transcription 증가
- ER chaperone, [[ER-associated degradation|ERAD]] component, lipid synthesis enzyme 등 발현

### Evolutionary Conservation
IRE1 pathway는 yeast에서 처음 발견되었으며 모든 eukaryotic cell에 보존되어 있다. 이는 UPR의 가장 오래되고 필수적인 경로임을 시사한다.

## 2. PERK Pathway

### Sensor Activation
PERK도 transmembrane kinase이며 IRE1과 유사한 방식으로 활성화된다:
- BiP dissociation
- Oligomerization
- Trans-autophosphorylation

### Translational Control

PERK의 주요 target은 translation initiation factor eIF2α이다.

**Step 1: eIF2α Phosphorylation**
Activated PERK가 eIF2α를 인산화한다. 인산화된 eIF2α는 translation initiation을 억제한다.

**Step 2: Global Translation Attenuation**
대부분의 mRNA 번역이 감소한다. 이는 ER로 들어오는 새로운 단백질의 양을 줄여서 ER의 부담을 경감한다.

**Step 3: Selective Translation**
흥미롭게도, 일부 특정 mRNA는 eIF2α가 인산화된 상태에서 오히려 선호적으로 번역된다. 이 중 하나가 ATF4 transcription factor이다.

**Step 4: ATF4-Mediated Transcription**
번역된 ATF4가 핵으로 들어가서 UPR target gene을 활성화한다. 여기에는 antioxidant enzyme, amino acid metabolism enzyme, ERAD component 등이 포함된다.

### Dual Function
PERK pathway는 두 가지 시간 척도로 작동한다:
- **즉각적 효과**: Translation 억제로 ER load 감소
- **장기적 효과**: Transcription 활성화로 ER capacity 증가

## 3. ATF6 Pathway

### Latent Transcription Factor

ATF6는 ER membrane에 embedded된 전사인자이다. 이 독특한 구조 때문에 특별한 활성화 메커니즘이 필요하다.

**Normal state:**
- ATF6가 ER membrane에 anchored
- Transcription factor domain이 cytosol에 노출
- 하지만 핵으로 갈 수 없음

**Stress condition:**

**Step 1: ER to Golgi Transport**
ER stress가 발생하면 ATF6가 Golgi apparatus로 수송된다. 이 수송은 COPII vesicle을 통한 정상적인 ER-to-Golgi trafficking을 이용한다.

**Step 2: Proteolytic Cleavage**
Golgi membrane에 있는 Site-1 protease (S1P)와 Site-2 protease (S2P)가 순차적으로 ATF6를 절단한다.

1. S1P가 lumenal domain을 절단
2. S2P가 transmembrane domain을 절단
3. Cytosolic domain이 membrane에서 release

**Step 3: Nuclear Translocation**
Cleaved cytosolic domain이 핵으로 이동하여 active transcription factor로 작동한다.

**Step 4: Gene Activation**
ATF6가 UPR target gene을 활성화한다. 특히 ER chaperone과 ERAD component의 발현을 증가시킨다.

### Similarity to SREBP
이 activation mechanism은 cholesterol biosynthesis를 조절하는 SREBP의 활성화와 매우 유사하다. 둘 다 regulated intramembrane proteolysis (RIP)를 사용한다.

## Target Gene의 중복과 특이성

### Common Targets
세 pathway가 활성화하는 유전자들이 부분적으로 겹친다:
- ER chaperone (BiP, PDI, calnexin 등)
- ERAD component
- Protein translocation machinery
- Lipid synthesis enzyme (ER membrane 확장용)

### Pathway-Specific Targets
각 pathway는 고유한 target도 가진다:

**IRE1:**
- ER expansion
- Lipid synthesis
- Phospholipid biosynthesis

**PERK:**
- Antioxidant response
- Amino acid metabolism
- Apoptosis regulators

**ATF6:**
- ER quality control
- Protein secretion
- XBP1 (IRE1 pathway component)

### Coordinated Response
세 pathway가 동시에 활성화되면 종합적이고 강력한 adaptive response가 일어난다. 이는 단일 pathway보다 훨씬 효과적으로 ER homeostasis를 회복한다.

## Physiological UPR

UPR은 병리적 상황뿐만 아니라 정상적인 생리적 과정에서도 사용된다.

### Insulin Production in β Cells
식사 후 혈당이 상승하면 pancreatic β cell은 대량의 insulin을 생산해야 한다. 이때 ER의 부담이 급격히 증가한다.

**Adaptive response:**
- PERK의 부분적 활성화
- eIF2α의 transient phosphorylation
- Insulin synthesis rate 조절
- ER overload 방지
- 적절한 insulin 분비 유지

### B Cell Differentiation
B cell이 plasma cell로 분화하면 antibody를 대량 생산하기 시작한다. 이를 위해서는 ER의 극적인 확장이 필요하다.

**Preparatory response:**
- IRE1 활성화
- XBP1 mRNA splicing
- ER chaperone과 membrane 대량 생산
- ER content의 dramatic increase
- Antibody secretion capacity 확보

이러한 예들은 UPR이 단순히 stress response가 아니라, 세포의 정상적인 adaptation mechanism임을 보여준다.

## Chronic UPR과 Apoptosis

### Persistent Activation의 결과
만약 ER stress가 해소되지 않으면:
- UPR signaling이 지속됨
- 특히 PERK pathway의 prolonged activation
- Pro-apoptotic gene 활성화
- Cell death pathway 진입

### Cell Death Decision
세포는 다음 기준으로 생존과 사멸을 결정한다:

**Short-term UPR → Survival:**
- Adaptation 성공
- ER homeostasis 회복
- 정상 기능 재개

**Prolonged UPR → Death:**
- Adaptation 실패
- Irreversible damage
- Apoptosis 유도

### Rationale
Multicellular organism의 관점에서 보면, 지속적으로 dysfunction을 보이는 세포를 제거하는 것이 더 안전하다. 이런 세포가 계속 존재하면 주변 세포와 비정상적인 상호작용을 하거나 organism 전체에 해를 끼칠 수 있다.

### PERK-Mediated Apoptosis
**Mechanism:**
1. Prolonged eIF2α phosphorylation
2. Sustained ATF4 translation
3. CHOP (C/EBP homologous protein) induction
4. Pro-apoptotic protein upregulation
5. Mitochondrial apoptosis pathway activation
6. Cell death

## Negative Feedback과 Termination

### UPR의 자기 제한
UPR이 성공적으로 작동하면:
- Misfolded protein 감소
- ER stress 완화
- Sensor protein의 inactivation
- UPR signaling 감소

### Phosphatase Expression
UPR은 자신을 종료시키는 factor도 유도한다:
- GADD34 (Growth arrest and DNA damage-inducible protein 34)
- Protein phosphatase 1 (PP1)과 결합
- eIF2α 탈인산화
- Translation 회복

### 적절한 Timing
너무 빨리 UPR을 끄면 문제가 해결되기 전에 adaptation이 중단된다. 너무 늦게 끄면 불필요한 에너지 소비와 potential cell death risk가 있다. Negative feedback mechanism이 이러한 timing을 최적화한다.

## ~~질병과의 연관~~

### Metabolic Diseases

**Diabetes:**
- β cell의 chronic ER stress
- UPR dysregulation
- Cell death (특히 PERK pathway dysfunction)
- Insulin deficiency

### Neurodegenerative Diseases

**Alzheimer's, Parkinson's:**
- Protein misfolding
- Chronic ER stress
- Prolonged UPR activation
- Neuronal death

### Cancer

**Solid tumors:**
- Hypoxia로 인한 ER stress
- UPR activation이 survival 촉진
- Angiogenesis와 metastasis 지원
- Chemotherapy resistance
- Therapeutic target으로 주목

## 관련 개념
- [[Quality control of ER protein folding]]
- [[Glycosylation-Based Monitoring]]
- [[Mannosidase Timer]]
- [[ER-associated degradation]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP]]
- [[Protein folding in ER]]
- [[ER stress]]

[^1]: ### 1. 왜 인트론이 남은 채로 나갔나요?
	
	보통의 mRNA는 핵 내에서 Spliceosome에 의해 인트론이 제거되어야만 핵공 복합체(NPC)를 통과할 수 있는 '통행증'을 얻습니다. 하지만 **XBP1 mRNA**는 구조적으로 매우 특이한 루프(Loop) 형태의 인트론을 가지고 있어, 일반적인 핵 내 Splicing 기작을 회피하도록 설계되어 있습니다.
	
	이 미성숙한 상태의 mRNA는 일단 세포질로 **수출(Export)**됩니다. 하지만 이 상태에서는 번역이 제대로 일어나지 않거나, 비활성 상태의 단백질만을 생산하게 됩니다.
