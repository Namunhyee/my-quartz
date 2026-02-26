---
dg-publish: true
---
# ER-Associated Degradation (ERAD)

ER-associated degradation (ERAD)은 misfolded되거나 unassembled 단백질을 ER에서 cytosol로 retrotranslocation하여 proteasome에서 분해하는 quality control mechanism이다.

## 개요

### 필요성
- Chaperone의 도움에도 불구하고 일부 단백질은 올바르게 접히지 못함
- Misfolded protein의 축적은 ER stress와 세포 독성 유발
- Unassembled subunit도 제거 필요

### 기본 원리
- Misfolded protein을 ER에서 제거
- Cytosol의 proteasome으로 분해
- ER의 protein-processing capacity 유지

## ERAD 메커니즘

### 1. Substrate Recognition
![[Cell Biology/출처/md converted/Chapter 12/_page_34_Picture_2.jpeg]]

**Recognition signals:**
- Trimmed N-linked oligosaccharides (reduced mannose)
- Exposed hydrophobic regions
- Free sulfhydryl groups
- Unassembled oligomeric subunits

**Recognition factors:**

#### Lectins
- ER-lumenal lectin이 trimmed oligosaccharide 인식
- Binding site on membrane-embedded translocator
- Substrate를 retrotranslocation machinery로 guide

#### Chaperones
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]], [[Calnexin and Calreticulin]]
- Unfolded protein과 상호작용 유지
- Aggregation 방지
- ERAD machinery로 전달

#### Disulfide Isomerases
- [[Protein disulfide isomerase|PDI]] family members
- Disulfide bond 환원
- Polypeptide의 complete unfolding
- Linear chain이 translocator 통과 가능

### 2. Retrotranslocation

**Translocator complexes:**
- Multiple translocator 존재
- E3 ubiquitin ligase를 항상 포함
- Different subsets of misfolded protein 처리
- ER membrane에 embedded

**Mechanism:**
1. **Recognition**: Misfolded protein이 translocator complex와 결합
2. **Unfolding**: Chaperone와 disulfide isomerase가 단백질 unfold
3. **Threading**: Unfolded polypeptide가 translocator channel 통과
4. **Export**: Cytosol로 이동

### 3. Ubiquitylation
**E3 ubiquitin ligase:**
- Translocator complex의 일부
- Emerging polypeptide에 polyubiquitin 부착
- Cytosol 측면에서 작용

**Function of ubiquitin:**
- Proteasome recognition signal
- Backsliding into ER 방지
- AAA-ATPase의 binding handle

### 4. Extraction
**AAA-ATPase:** ^95a85b
- Hexameric ATPase complex
- Ubiquitylated substrate 인식
- ATP hydrolysis로 pulling force 제공

**Process:**
- Polypeptide를 translocator에서 완전히 추출
- Cytosol로 pulling
- Unfolded state 유지

### 5. Deglycosylation
**N-glycanase:**
- Cytosolic enzyme
- N-linked oligosaccharide를 *en bloc* 제거
- Retrotranslocation 후 작용

### 6. Proteasomal Degradation
- Polyubiquitin tag가 proteasome으로 guide
- Proteasome에서 peptide로 분해
- Amino acid 재활용

## Substrate Selection Mechanism

### Time-Based Selection
**Mannosidase timer:**
![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

1. 단백질이 ER에서 folding 시도
2. Mannosidase가 천천히 terminal mannose 제거
3. Trimmed oligosaccharide 생성
4. ERAD lectin이 인식

**Discrimination:**
- **Fast folding**: Mannosidase 작용 전 ER 빠져나감 → 생존
- **Slow folding**: Mannose trimming 발생 → ERAD로 향함

### State-Based Selection
**Folding intermediates vs. Misfolded:**
- **Folding intermediate**: 
  - Temporary unfolded region
  - Chaperone와 일시적 상호작용
  - 결국 properly fold될 가능성
  
- **Misfolded protein**:
  - Persistent unfolded region
  - Prolonged chaperone binding
  - Mannose trimming
  - ERAD로 routing

## Multiple ERAD Pathways

### Pathway Diversity
**Different translocator complexes:**
- 다양한 E3 ubiquitin ligase 포함
- Different substrate specificity
- Misfolding의 다양한 형태 처리

**Substrate classes:**
- **ERAD-L** (Lumen): Soluble lumenal protein
- **ERAD-M** (Membrane): Membrane protein with lumenal defect
- **ERAD-C** (Cytosol): Membrane protein with cytosolic defect

### Membrane Protein ERAD
**특별한 고려사항:**
- Lateral exit from ER membrane
- Lipid bilayer 내에서 translocator engagement
- Transmembrane domain의 extraction

## 생리적 역할

### 1. Quality Control
- Defective protein 제거
- Only functional protein이 secretory pathway 진입
- Downstream organelle 보호

### 2. ER Capacity Maintenance
- Misfolded protein의 축적 방지
- ER lumen space 확보
- Chaperone availability 유지

### 3. Regulatory Degradation
- Short-lived regulatory protein 분해
- Metabolic enzyme의 feedback regulation
- Signal transduction component 조절

## Pathological Implications

### 1. Genetic Diseases
**ΔF508-CFTR:**
- Cystic fibrosis의 원인
- Misfolded CFTR channel
- ERAD에 의해 과도하게 분해
- 일부 functional activity는 유지

### 2. Protein Aggregation Diseases
- ER quality control 실패
- Aggregate formation
- Cell toxicity
- Neurodegenerative disease

### 3. Viral Exploitation
- 일부 virus가 ERAD hijack
- MHC class I molecule을 degradation
- Immune evasion

## ERAD와 UPR의 연결

### Coordinated Response
**UPR activation:**
- Misfolded protein 축적
- IRE1, PERK, ATF6 경로 활성화

**ERAD upregulation:**
- ERAD component의 transcription 증가
- Degradation capacity 향상
- ER stress 완화

### Feedback Loop
- ERAD 증가 → Misfolded protein 감소 → UPR 감소
- Persistent stress → Sustained UPR → Apoptosis

## 실험적 접근

### Cell-Free System
- Microsome으로 ERAD 재구성
- Individual component의 역할 분석
- Mechanism 규명

### Genetic Approaches
- ERAD component knockout
- Substrate accumulation 관찰
- Pathway dissection

## 관련 개념
- [[Protein folding in ER]]
- [[Oligosaccharides]]
- [[Unfolded protein response]]
- [[Mannosidase]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP]]
- [[Calnexin and Calreticulin]]
- [[Ubiquitin-proteasome system]]
