# Fluorescent Protein Tagging in Living Cells

## Fluorescent Proteins의 변화

### 기존 방식의 한계
**지금까지 논의된 모든 형광 분자들**:
- 세포 외부에서 만들어짐
- 인위적으로 세포 내로 도입되어야 함

### 새로운 패러다임
**본질적으로 형광을 띠는 단백질 분자를 암호화하는 유전자 사용**:
- 외부 분자 도입 없이 자체 가시적 tags와 labels 생성
- 생물과 세포주가 스스로 만드는 표지
- 이러한 "cellular exhibitionists(세포 전시자)"는 빛나는 형광색으로 내부 작용을 표시

### 형광 발현 메커니즘

#### 초기 단계
**번역 직후**:
- 새로 번역된 단백질은 형광을 띠지 않음
#### 성숙 과정
**시간**: 약 1시간 이내 (일부 alleles는 더 짧거나 길 수 있음)

**과정**:
1. 일부 아미노산들이 self-catalyzed post-translational modification(자가 촉매 번역 후 변형) 거침
2. 효율적인 fluorochrome 생성
3. Barrel-like protein(통 모양 단백질) 내부에 보호됨[^기출_중간_2022_6]
4. 청색광으로 적절히 조명하면 녹색으로 형광 발광[^기출_중간_2023_6]

### ~~GFP의 구조~~

#### Figure 9-16: Green Fluorescent Protein (GFP)
![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260305162204.png]]

**(A) GFP의 구조적 특징**
- 개략적 구조도
- **11개의 β-strands**가 barrel의 staves(세로판)를 형성
- **Active chromophore(활성 발색단)**가 barrel 내부에 묻혀 있음 (진한 녹색으로 표시)
- 구조: PDB code 1EMA

**(B) Chromophore의 형성 과정**
- 두 아미노산 잔기의 측쇄로부터 번역 후 형성:
  - **Tyrosine(티로신)**
  - **Serine(세린)**
- **Protein backbone**에서 시작
- 일련의 **autocatalytic steps(자가 촉매 단계)**를 거침
- **Mature GFP fluorophore(성숙한 GFP 발색단)** 생성[^기출_중간_2021_6]


## GFP의 주요 응용

### 1. Reporter Molecule로서의 사용

#### 기본 원리
**방법**:
- GFP-coding sequence를 관심 유전자의 promoter의 transcriptional control 하에 배치
- Transgenic organism 생성
**효과**:
- 살아있는 생물에서 유전자의 expression pattern을 직접 시각적으로 확인 가능.
- 특정 promoter 아래 유전자가 발현 됐는지 여부를 판별 가능(단백질에 gfp가 연결된 건 아님. 독립적 단백질임)

#### Figure 9-17: Reporter Molecules로서의 Fluorescent Proteins![[Cell Biology/출처/md converted/Chapter 9/_page_11_Picture_2.jpeg]]
<mark style="background:#fff88f">(A) 초파리 실험 예시</mark>
**실험 설계**:
- Recombinant DNA techniques 사용
- <mark style="background:#fff88f">GFP 유전자를 초파리 promoter에 연결</mark>
- 특수한 neurons 세트에서만 활성화되는 promoter 사용
![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260312165002.png]]
**수업내용(?)** : 엽록소 빨간색 염색
녹색 형광 염색은 mitochondrian protein에 붙은 gfp
### 2. Organelle Targeting

#### Peptide Location Signal 추가

**방법**:
- GFP에 [[Sorting Signal#Signal Sequences의 예시|peptide location signal]] 추가
- 특정 세포 compartment로 directing

**표적 예시**:
- **Endoplasmic reticulum(소포체)**
- **Mitochondrion(미토콘드리아)** (Figure 9-25B 참조)

**효과**:
- 해당 organelles를 "밝혀서" 살아있는 상태에서 관찰 가능
- 실시간 dynamics 추적

### 3. GFP Fusion Protein

#### 생성 방법

**삽입 위치**:
- GFP DNA-coding sequence를 다른 단백질의 coding sequence 시작 또는 끝에 삽입

**결과물**:
- **Chimeric product(키메라 산물)** 생성
- 원래 단백질 + 새로운 GFP domain 부착
![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260305172013.png]]
#### <mark style="background:#fff88f">기능적 특성</mark>

**대부분의 경우**:
- GFP fusion protein이 원래 단백질과 **동일한 방식으로 작동**[^기출_중간_2022_6][^기출_중간_2023_6]
- Genetically encoded fluorescence를 통해:
  - 위치 (Location) 직접 표시
  - 활동 (Activities) 직접 표시

**기능적 동등성 증명**:
- <mark style="background:#fff88f">GFP fusion protein이 untagged protein과 기능적으로 동등함을 증명해야함.</mark>
- **방법 예시**: 해당 단백질이 결핍된 mutant를 rescue하는 데 사용
## GFP Tagging의 의의

**GFP tagging은** 단백질에 GFP domain을 붙인 <font color="#ff0000">GFP fusion protein</font>을 만드는 방법
- <mark style="background:#fff88f">살아있는 생물</mark>에서 단백질의 **distribution(분포)** 표시하는 가장 명확한 방법
- 살아있는 생물에서 단백질의 **dynamics(역학)** 표시하는 가장 명백한 방법
- 가장 확실한 (most unequivocal) 방법

### 주요 장점
1. **비침습적**
   - 외부 분자 도입 불필요
   - 세포의 자연스러운 과정 이용

2. **실시간 관찰**
   - 살아있는 세포에서 직접 관찰
   - 동적 과정 추적 가능(GFP_fusion)

3. **유전적으로 암호화됨**
   - 안정적 발현
   - 세대 간 전달 가능

4. **다양한 응용**
   - Reporter molecule
   - Organelle marker
   - Fusion protein

## 추가 응용: Protein Dynamics 연구

GFP와 그 변이형들은 다음 장에서 설명될 추가 기술들에 활용:
- 단백질이 세포 내 어디에 위치하는지 확인
- **Kinetic properties(동역학적 특성)** 밝혀내기
- 다른 분자들과의 **상호작용** 파악

이러한 기술들은 다음 섹션에서 상세히 설명됨.

---

## 요약

### 핵심 개념

**Fluorescent protein tagging**은:
- 살아있는 세포와 생물에서 개별 단백질을 형광으로 표지하는기술
- 외부 염료 도입 없이 유전적으로 암호화된 형광 사용
### 주요 기술
1. **Reporter 시스템**
   - 유전자 발현 패턴 시각화
   - 살아있는 생물에서 실시간 관찰

1. **Fusion proteins**
   - 단백질 위치와 dynamics 추적
   - 기능적 동등성 유지
   - GFP tagging 기술의 결과물.

### 영향

- 세포 생물학 연구 방법의 혁명
- 살아있는 시스템에서의 실시간 분자 추적
- 동적 세포 과정의 이해 증진

---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "Individual Proteins Can Be Fluorescently Tagged in Living Cells and Organisms"
- Related Figures: 9-16, 9-17, 9-18, 9-25B
- Related Movie: Movie 16.8
- Related topics: [[001_Protein Dynamics]], [[FRET]], [[FRAP]]

[^기출_중간_2021_6]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_6번|2021 중간 6번]] — GFP chromophore는 Ser65-Tyr66-Gly67의 자가 촉매적 번역 후 변형으로 형성되며, 분자 산소(O₂)만 필요하고 다른 효소 불필요하다는 메커니즘이 출제됨. (※ 이 노트에는 Tyr과 Ser만 수록; Gly67과 O₂ 요구성은 미수록)
[^기출_중간_2022_6]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_6번|2022 중간 6번]] — ②번 선지(정답): A 단백질은 ER에 머무르는 단백질로 역할 수행 후 분해됨 — GFP fusion protein이 처음에는 ER에서 형광이 보이다가 사라진 것은 단백질 자체(ERAD/proteasomal 분해)에 의한 소실. ①번 오답: 처음에는 형광이 보였으므로 GFP 작동 정상. ④번 오답: GFP fusion protein은 ER 이탈 후에도 형광이 보여야 하므로 이동 후 관찰 불가는 설명이 안 됨. ⑤번 오답: GFP는 직접 형광을 발하므로 secondary antibody 불필요.
[^기출_중간_2023_6]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_6번|2023 중간 6번]] — GFP 융합 단백질을 관찰하려면 형광현미경이 필요하며, 위상차 현미경(phase contrast)으로는 GFP 형광을 볼 수 없다는 내용이 정답 근거(선지 ②)로 활용됨.