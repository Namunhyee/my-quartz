# Protein Disulfide Isomerase (PDI)

Protein disulfide isomerase (PDI)는 [[Endoplasmic Reticulum]] lumen에 위치하는 효소이다. PDI는 newly synthesized protein의 [[Disulfide bond formation]]을 촉매하고 잘못 형성된 disulfide bond를 재배열하여 올바른 protein folding을 돕는다.

## PDI의 구조적 특징

### ER Resident Protein으로서의 특성

PDI는 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/ER|ER]]에 영구적으로 상주하는 protein이다:

**ER retention 메커니즘:**
- PDI는 C-terminus에 4개 amino acid로 구성된 **ER retention signal**을 포함
- 이 signal sequence는 KDEL (Lys-Asp-Glu-Leu)이다
- KDEL sequence가 protein을 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/ER|ER]]에 retention시킴
- 만약 PDI가 실수로 [[Golgi apparatus_MOC|Golgi apparatus_MOC]]로 이동하면, KDEL receptor가 이를 인식하여 다시 ER로 회수함

### 활성 부위의 구조

PDI는 자체적으로 **intramolecular disulfide bond**를 보유한다:

**활성 부위:**
- PDI의 두 cysteine residue 사이에 형성된 disulfide bond
- 이 disulfide bond가 catalytic activity의 핵심
- Substrate protein으로부터 전자를 받아들일 수 있는 구조
- 산화-환원 반응을 reversible하게 수행 가능

## PDI의 작용 메커니즘

### Disulfide Bond 형성 반응

![[Cell Biology/출처/md converted/Chapter 12/_page_30_Figure_6.jpeg]]

PDI는 substrate protein의 free sulfhydryl (SH) group을 산화시켜 disulfide (S–S) bond를 형성한다.

**반응의 단계별 과정:**

**1단계: Substrate 인식**
- PDI가 newly translocated protein의 free cysteine (–SH group)을 인식
- 이러한 protein은 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/Protein translocation into ER|ER로 translocation]]된 직후
- Protein이 아직 완전히 fold되지 않은 상태

**2단계: 전자 전달 (Electron Transfer)**
- PDI 내부의 disulfide bond가 substrate protein의 한 free sulfhydryl group으로부터 전자를 받음
- 이 과정에서 PDI의 disulfide bond가 깨짐 (reduced)
- 동시에 PDI와 substrate 사이에 **intermolecular mixed disulfide bond** 형성
- 이는 PDI와 substrate가 일시적으로 covalent bond로 연결됨을 의미

**3단계: Disulfide Bond 완성**
- Substrate protein의 두 번째 free sulfhydryl group이 전자를 기부
- 이 전자가 PDI-substrate 사이의 mixed disulfide bond로 전달됨
- 결과:
  - Substrate protein 내에 **intramolecular disulfide bond** 형성 (산화된 상태)
  - PDI는 substrate로부터 분리되어 **reduced form**이 됨 (두 개의 free –SH group)

**4단계: PDI의 재산화 (Recycling)**
- Reduced PDI는 다른 ER enzyme에 의해 reoxidize됨
- PDI 내부에 다시 disulfide bond가 형성됨
- 이제 PDI는 다음 substrate에 작용할 준비 완료

### Disulfide Bond 재배열 반응

PDI의 중요한 기능 중 하나는 잘못 형성된 disulfide bond를 수정하는 것이다.

**문제 상황:**
- 많은 protein이 여러 개의 cysteine residue 포함
- Protein folding 과정에서 cysteine끼리 잘못 pairing될 수 있음
- 예: Cysteine 1과 4가 연결되어야 하는데, 1과 3이 먼저 연결됨

**PDI의 해결책:**
1. PDI가 incorrectly formed disulfide bond를 인식
2. PDI의 catalytic cysteine이 잘못된 disulfide bond를 공격
3. 잘못된 disulfide bond가 깨지면서 PDI와 mixed disulfide 형성
4. Protein이 부분적으로 unfold되어 올바른 cysteine끼리 접근 가능
5. 올바른 cysteine pair 사이에 새로운 disulfide bond 형성
6. PDI가 분리되면서 correctly folded protein 생성

**Bidirectional activity:**
- PDI는 **oxidoreductase**로 분류됨
- Forward reaction: Oxidation (disulfide bond 형성)
- Reverse reaction: Reduction (disulfide bond 분해)
- 이 양방향 활성이 trial-and-error 방식의 올바른 folding을 가능하게 함

### 반응의 에너지 고려사항

**Thermodynamic driving force:**
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/ER|ER]] lumen은 **oxidizing environment** 유지
- 이는 disulfide bond 형성을 thermodynamically favorable하게 만듦
- Cytosol과는 대조적 (cytosol은 reducing environment)

**재산화 시스템:**
- Reduced PDI는 다른 ER enzyme (Ero1 등)에 의해 reoxidize됨
- 최종적으로 전자는 molecular oxygen (O₂)으로 전달됨
- 이 electron transfer chain이 continuous PDI cycling 지원

## PDI Family

ER lumen은 PDI의 단일 형태만 포함하지 않고 여러 related enzyme을 포함한다.

### PDI Family Member의 다양성

**구조적 공통점:**
- 모든 PDI family member는 catalytic domain 포함
- 이 domain은 characteristic Cys-X-X-Cys motif 보유 (X는 임의의 amino acid)
- 이 motif의 두 cysteine이 reversible disulfide bond 형성

**기능적 특화:**
각 PDI family member는 특정 역할에 specialized됨:

**1. Classical PDI (PDIA1):**
- 가장 abundant한 PDI family member
- General disulfide bond formation과 isomerization
- 많은 substrate protein과 상호작용

**2. Oxidation-specialized PDI members:**
- 주로 disulfide bond formation에 특화
- Newly synthesized protein의 초기 oxidation 담당
- Substrate specificity가 다양

**3. Reduction-specialized PDI members:**
- 주로 disulfide bond breakage에 특화
- Misfolded protein의 완전한 unfolding에 중요
- [[ER-associated degradation|ERAD]] (ER-associated degradation)에서 핵심 역할

**ERAD에서의 역할:**
- Misfolded protein은 degradation을 위해 cytosol로 export되어야 함
- 이 과정을 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Degradation/ERAD|retrotranslocation]] 또는 ERAD라고 함
- Reduction-specialized PDI가 모든 disulfide bond를 break함
- 완전히 unfolded된 linear polypeptide chain만이 좁은 translocation channel 통과 가능
- Cytosol로 나온 후 proteasome에서 degradation됨

### PDI와 다른 Chaperone의 협력

PDI는 단독으로 작용하지 않고 다른 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/Chaperones in ER|ER chaperone]]과 협력한다.

**BiP와의 협력:**
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]] (Binding Protein)는 hsp70 family chaperone
- BiP는 unfolded polypeptide chain의 hydrophobic region 인식
- PDI는 동일한 protein의 cysteine residue에서 작용
- 두 chaperone이 함께 protein이 올바르게 fold되도록 도움

**Calnexin/Calreticulin과의 협력:**
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Modification/N-linked glycosylation|Glycosylated protein]]의 경우
- Calnexin (membrane-bound)과 Calreticulin (soluble)이 incompletely folded glycoprotein 인식
- **ERp57**이라는 specialized PDI family member가 이들과 협력
- ERp57은 calnexin/calreticulin과 complex 형성
- ERp57이 bound glycoprotein의 disulfide bond를 catalyze
- Free sulfhydryl group 인식 → incomplete disulfide bond formation의 지표
- Protein이 올바르게 fold될 때까지 [[Endoplasmic Reticulum|ER]]에 retention

**Coordination의 중요성:**
- Multiple chaperone system이 protein folding의 different aspect 감시
- BiP: Hydrophobic exposure 체크
- PDI/ERp57: Disulfide bond status 체크
- Calnexin/Calreticulin: Glycosylation status와 overall folding 체크
- 이러한 multi-layered quality control이 오직 properly folded protein만 ER 탈출 보장

## PDI의 생물학적 중요성

### Protein Stability 향상

Disulfide bond는 protein structure를 significantly stabilize한다:

**Covalent cross-linking:**
- Disulfide bond는 covalent bond이므로 매우 강함
- Non-covalent interaction (hydrogen bond, van der Waals force)보다 훨씬 stable
- Protein의 folded conformation을 고정시킴

**Extracellular environment에서의 이점:**
- Secreted protein과 cell surface protein은 harsh environment에 노출
- Variable pH, temperature, ionic strength
- Proteolytic enzyme의 존재
- Chaperone의 부재
- Disulfide bond가 이러한 조건에서 protein integrity 유지

### Quality Control에서의 역할

PDI는 [[Quality control of ER protein folding|quality control system]]의 핵심 구성요소이다:

**Folding checkpoint:**
- PDI가 disulfide bond의 올바른 형성을 확인
- Incorrectly paired disulfide가 있으면 재배열
- 올바른 disulfide pattern이 형성될 때까지 protein folding 지속

**Retention mechanism:**
- Incompletely oxidized protein (free –SH group 보유)은 ER에 retained
- PDI와 다른 chaperone이 이러한 protein 인식
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Proten Traffic/ER to Golgi transport|ER-to-Golgi transport]]가 차단됨
- 오직 fully oxidized protein만 Golgi로 진행

**ERAD pathway:**
- Persistently misfolded protein은 결국 degradation 대상
- Reduction-specialized PDI member가 disulfide bond를 completely reduce
- Unfolded protein이 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Degradation/ERAD|retrotranslocation machinery]]를 통해 cytosol로 export
- Cytosolic proteasome에서 degradation

### 특정 Protein Type에서의 중요성

**Immunoglobulin (Antibody):**
- Multiple disulfide bond 포함 (intrachain과 interchain 모두)
- PDI가 heavy chain과 light chain 사이의 정확한 disulfide bond 형성 촉매
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/ER|Plasma cell]]의 ER에 특히 많은 PDI 존재

**Insulin:**
- Proinsulin은 세 개의 disulfide bond 포함
- PDI가 이들의 정확한 formation 보장
- Processing 후 mature insulin이 두 개의 disulfide bond로 A와 B chain 연결

**Extracellular matrix protein:**
- Collagen 등은 많은 disulfide bond 보유
- PDI가 올바른 cross-linking 촉매
- Structural integrity에 필수적

**[[Cell Biology/내용/10. Membrane Structure/Proteins that associated with membrane/Membrane protein|Membrane protein]]:**
- Transmembrane protein의 extracellular/lumenal domain
- Receptor, channel, transporter 등
- Disulfide bond가 functional domain의 proper folding 보장

## PDI 활성의 조절

### ER Stress Response

[[Unfolded protein response|Unfolded protein response (UPR)]] 동안 PDI 발현이 증가한다:

**Transcriptional upregulation:**
- Misfolded protein이 ER에 축적되면 UPR 활성화
- UPR이 ER chaperone과 folding enzyme의 transcription 유도
- PDI gene도 upregulate됨
- 증가된 PDI가 더 많은 protein folding capacity 제공

**Stress adaptation:**
- High secretory demand를 가진 cell (plasma cell, pancreatic β cell)
- 이러한 cell은 constitutively high PDI level 유지
- PDI upregulation이 cell이 increased protein load 대처하도록 도움

### Redox State 의존성

PDI activity는 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/ER|ER]] lumen의 redox state에 의존한다:

**Oxidizing environment 유지:**
- ER lumen은 cytosol보다 훨씬 oxidizing
- GSH/GSSG (glutathione) ratio가 cytosol과 다름
- 이 oxidizing environment가 disulfide bond formation을 favor

**Ero1 system:**
- Ero1 (ER oxidoreductin 1)이 PDI를 reoxidize
- Ero1 자체는 molecular oxygen (O₂)에 electron transfer
- 이 pathway가 continuous disulfide bond formation 지원
- Ero1 activity가 regulated되어 over-oxidation 방지

## 관련 개념
- [[Disulfide bond formation]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]]
- [[Unfolded protein response]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Modification/N-linked glycosylation|N-linked Glycosylation]]
- [[Cell Biology/내용/10. Membrane Structure/Proteins that associated with membrane/Membrane protein|Membrane Protein]]
