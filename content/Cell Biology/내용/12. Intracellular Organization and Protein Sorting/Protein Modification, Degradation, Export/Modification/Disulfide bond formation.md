# Disulfide Bond Formation

Disulfide bond (S–S bond)는 두 개의 cysteine residue의 sulfhydryl (SH) group 사이에 형성되는 공유 결합이다. 이 결합은 protein을 안정화시켜 혹독하고 가변적이며 chaperone이 없는 세포 외 환경을 더 잘 견딜 수 있게 한다.

## ER에서의 Disulfide Bond 형성

Disulfide bond는 주로 [[Endoplasmic Reticulum]] lumen에서 형성된다. Extracellular space 또는 secretory와 endocytic pathway의 organelle lumen에 노출되는 protein domain의 거의 모든 cysteine은 disulfide bond를 형성한다.
![[Cell Biology/출처/md converted/Chapter 12/_page_30_Figure_6.jpeg]]
### Protein Disulfide Isomerase (PDI)

**Protein disulfide isomerase (PDI)**는 ER resident protein으로, free sulfhydryl group을 산화시켜 disulfide bond를 형성하는 반응을 촉매한다.

#### [[Protein disulfide isomerase|PDI의 메커니즘]]

![[Cell Biology/출처/md converted/Chapter 12/_page_30_Figure_6.jpeg]]

위 그림은 ER에서 disulfide bond가 형성되는 과정을 보여준다.

**단계별 과정:**

1. **초기 상태:**
   - Substrate protein이 free sulfhydryl (SH) group을 가진 cysteine 포함
   - PDI가 intramolecular disulfide bond 보유

2. **전자 전달:**
   - PDI의 disulfide bond가 substrate protein의 free sulfhydryl group으로부터 전자를 받음
   - 이 과정에서 PDI와 substrate 사이에 intermolecular mixed disulfide bond 형성

3. **Disulfide bond 형성:**
   - Substrate의 두 번째 free sulfhydryl group이 전자를 mixed disulfide bond에 기부
   - 결과: Substrate protein이 산화됨 (disulfide bond 형성)
   - PDI는 환원됨 (reduced state)

4. **PDI의 재산화:**
   - 다른 ER enzyme이 reduced PDI를 reoxidize함 (그림에 표시 안 됨)
   - PDI가 다음 cycle을 위해 준비됨

### Disulfide Bond의 재배열 (Rearrangement)

Protein이 종종 여러 개의 cysteine을 포함하기 때문에, 처음에는 잘못 pairing될 수 있다. PDI는 이 문제를 해결한다:

**기능:**
- PDI는 protein의 disulfide bond를 올바르게 folding될 때까지 재배열 (rearrange)함
- 이는 PDI enzyme이 역방향으로 작동하여 immature protein의 잘못 paired된 disulfide를 reduce할 수 있기 때문

**Bidirectional activity:**
- PDI는 **oxidoreductase**로 분류됨
- Client protein에서 disulfide bond의 형성 또는 분해를 모두 촉매 가능

### PDI Family

ER lumen은 PDI family의 여러 member를 포함한다:

**특화된 기능:**
- 일부는 disulfide bond를 reducing하는데 특화됨
- 이는 misfolded protein을 완전히 unfold하는데 사용됨
- Unfold된 protein은 degradation을 위해 cytosol로 retrotranslocation됨

## ER Lumen의 Oxidizing Environment

Disulfide bond 형성은 ER lumen의 **oxidizing environment** 유지에 의존한다.

### Cytosol과의 대조

**Cytosol:**
- **Reducing environment** 유지
- Cytosol에 노출된 domain에서는 disulfide bond가 매우 드물게 형성됨
- Cytosolic domain의 sulfhydryl group은 정상적으로 disulfide bond 형성 안 함
- Reducing environment가 이러한 group을 reduced (–SH) form으로 유지

**ER Lumen:**
- **Oxidizing environment**
- Disulfide bond 형성에 유리

## 생물학적 중요성

### Protein 안정화

Disulfide bond는 folded state of protein을 안정화시킨다:

**이점:**
1. Protein이 harsh extracellular environment를 더 잘 견딜 수 있음
2. Variable condition에 대한 저항성
3. Chaperone-free environment에서의 안정성

### Transmembrane Protein에서의 분포

![[Cell Biology/출처/md converted/Chapter 10/_page_18_Figure_7.jpeg]]

동물 세포의 대부분의 transmembrane protein은 [[N-linked glycosylation]]됨:
- Oligosaccharide chain과 disulfide bond가 모두 membrane의 noncytosolic surface에 위치
- Sulfhydryl group이 disulfide bond 형성 (intrachain 또는 interchain)
- Cytosolic domain의 sulfhydryl group은 정상적으로 disulfide bond 형성 안 함

### [[Quality control of ER protein folding|Quality Control]]에서의 역할

Disulfide bond 형성과 재배열은 [[Protein folding in ER]] quality control의 일부이다:

**BiP와의 협력:**
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]] (hsp70 family chaperone)와 함께 작동
- Incompletely folded protein 감지
- Protein이 올바르게 fold될 때까지 ER에 retention

**Calnexin/Calreticulin과의 협력:**
- 일부 ER chaperone (ERp57)은 calnexin 및 calreticulin과 협력
- Free sulfhydryl group 인식 (incomplete disulfide bond formation의 신호)
- Incompletely folded protein을 ER에 retain

### Secreted Protein에서의 중요성

Secreted protein과 extracellular domain을 가진 protein의 경우:
- Disulfide bond가 구조적 안정성 제공
- Proteolytic degradation에 대한 저항성 증가
- Functional conformation 유지

## 관련 개념
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Membrane-enclosed Organelles/ER/ER|Endoplasmic Reticulum]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]]
- [[N-linked glycosylation]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/Protein folding in ER|Protein Folding in ER]]
