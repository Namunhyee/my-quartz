# Secretory Proteins Processing

## 개요

많은 secretory protein들은 inactive precursor 형태로 합성되어 [[secretory pathway|secretory vesicle]]이 형성되고 성숙하는 과정에서 proteolytic cleavage를 거쳐 활성화된다. 이러한 processing은 세포를 보호하고 단백질의 기능을 적절한 시기와 장소에서 발휘하도록 조절한다.

## Precursor Protein의 종류

### Pre-pro-protein
가장 복잡한 형태의 precursor로, 두 단계의 processing을 거친다.

**구성:**
1. **Pre-peptide (Signal peptide)**
   - [[Sorting Signal#ER Signal Sequence|ER signal sequence]]
   - ER로의 translocation 직후 제거됨
   - Signal peptidase에 의한 cleavage

2. **Pro-peptide**
   - Protein의 N-terminal에 위치
   - 나중에 secretory pathway에서 제거됨
   - 단백질 folding이나 inactive 상태 유지에 관여

### Polyprotein
여러 개의 활성 peptide를 하나의 polypeptide chain에 포함한다.

**유형:**

1. **Multiple copies of same peptide**
   - 동일한 signaling molecule의 여러 copy
   - 효율적인 생산

1. **Multiple different peptides**
   - 하나의 polyprotein에서 여러 종류의 peptide 생산
   - 세포 특이적 processing으로 다른 최종 산물
   - 다른 세포로 옮겨가며 다른 enzyme에 의해 다음 processing step을 밟을 수 있음

![[Pasted image 20260210215431.png]]
*Figure 13-44: Proopiomelanocortin <font color="#ff0000">polyprotein</font>의 processing pathway. 동일한 precursor가 서로 다른 세포에서 다른 processing enzyme에 의해 다른 최종 산물을 생성한다.*

## Processing이 일어나는 장소

### 1. ER Lumen
- **Signal peptide 제거**
  - Co-translational processing
  - Signal peptidase에 의함
  - [[Sorting Signal#Signal Peptide Cleavage|즉각적인 제거]]

### 2. Golgi Apparatus
- **일부 pro-peptide 제거**
- **Initial proteolytic cleavage**
- 초기 활성화 시작

### 3. Secretory Vesicle
- **주요 processing 장소**
- **Vesicle 성숙 과정에서 진행**
- Acidic pH가 protease 활성화에 유리

### 4. Extracellular Space
- **최종 activation**
- **일부 단백질의 경우**
- 분비 후 processing

## Proteolytic Cleavage의 메커니즘

### Cleavage Site의 특징

**공통 인식 서열:**
- **Paired basic amino acids**
  - Lys-Arg, Lys-Lys
  - Arg-Lys, Arg-Arg
  - Specific protease (furin-like)가 인식

**예시: Proinsulin → Insulin**
```
Proinsulin:
  B chain - C peptide - A chain
          ↓ cleavage at Arg-Arg
  B chain + C peptide + A chain
          ↓ C peptide 제거
  Active insulin (B chain + A chain, disulfide bonded)
```

### Processing Enzyme

#### Proprotein Convertase (PC)
- **Furin family**
- TGN과 secretory vesicle에서 활성
- Paired basic amino acid 인식
- Ca²⁺-dependent

#### Carboxypeptidase
- **Trimming enzyme**
- Basic amino acid 제거
- Final product 생성

#### Other Protease
- Tissue-specific enzyme
- 특정 substrate에 특화

## Processing의 조절

### Acidification
**V-type ATPase의 역할:**
- Secretory vesicle의 pH 감소
- Proenzyme (zymogen) 활성화
- pH-dependent conformational change

### Compartmentalization
**적절한 장소에서만 processing:**
- Inactive precursor는 ER과 Golgi를 안전하게 통과
- Secretory vesicle에서 활성화
- 세포 내부 손상 방지

### Cell-type Specific Processing

동일한 precursor가 다른 세포에서 다른 최종 산물을 생성할 수 있다.

**Proopiomelanocortin의 예:**

**Anterior pituitary:**
- Corticotropin (ACTH)
- β-lipotropin

**Intermediate pituitary:**
- α-MSH (from ACTH)
- γ-lipotropin (from β-lipotropin)
- β-MSH
- β-endorphin

**이유:**
- 각 세포 타입이 다른 processing enzyme 발현
- 다른 농도의 enzyme
- 다른 조절 메커니즘

## Processing의 생물학적 의의

### 1. 보호 기능

**세포 보호:**
- Hydrolytic enzyme의 premature activation 방지
- 세포 내부에서 단백질 활성 차단
- 적절한 구획에서만 활성화

**예시: Digestive enzyme**
- Pepsinogen → Pepsin (stomach)
- Trypsinogen → Trypsin (small intestine)
- Secretory vesicle이나 extracellular space에서만 활성

### 2. 크기 제한 극복

**짧은 peptide의 합성:**
- Enkephalin (5 amino acid) 같은 짧은 neuropeptide
- Co-translational ER entry에 필요한 최소 길이 미달
- Polyprotein으로 합성 후 cleavage

### 3. 효율적 조절

**다중 조절 지점:**
- 유전자 발현 수준
- Processing enzyme 활성
- Vesicle trafficking 조절
- 최종 activation 조절

### 4. 다양성 생성

**하나의 유전자에서 여러 산물:**
- Alternative processing
- Tissue-specific enzyme
- 경제적인 유전자 사용

## 특수한 Processing 사례

### Collagen Processing
- [[Sorting Signal#Post-translational Modifications|Proline과 lysine의 hydroxylation]]
- Pro-collagen에서 N-과 C-terminal propeptide 제거
- Extracellular space에서 최종 assembly

### Protein Hormone
- Proinsulin → Insulin + C-peptide
- C-peptide는 진단 마커로 사용

### Blood Clotting Factor
- Cascade activation
- 연쇄적 proteolytic activation
- 빠른 반응 가능

## 병리학적 측면

### Processing 결함
- **Impaired activation**
  - 기능 상실
  - 질병 유발

- **Premature activation**
  - 세포 손상
  - Tissue damage

### Therapeutic Application
- **Protease inhibitor 개발**
  - 과도한 활성 억제
  - 질병 치료

- **Proprotein convertase inhibitor**
  - 특정 processing 차단
  - 질병 조절

## 요약

Secretory protein의 proteolytic processing은 단백질이 적절한 시간과 장소에서 활성을 발휘하도록 하는 중요한 조절 메커니즘이다. Pre-pro-protein이나 polyprotein 형태로 합성된 단백질들은 secretory pathway를 통과하면서 단계적으로 processing되며, 특히 secretory vesicle의 acidic 환경에서 주요 활성화가 일어난다. 이러한 processing은 세포를 보호하고, 짧은 peptide의 합성을 가능하게 하며, 하나의 precursor에서 다양한 최종 산물을 만들어낼 수 있게 한다.
