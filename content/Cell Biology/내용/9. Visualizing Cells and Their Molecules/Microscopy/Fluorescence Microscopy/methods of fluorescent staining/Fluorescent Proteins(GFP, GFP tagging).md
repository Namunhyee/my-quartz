# Fluorescent Protein Tagging in Living Cells

## 개요

세포 구조는 생명 주기 동안 끊임없이 변화한다. 가장 안정적인 구조조차도 조립, 분해, 재조직화되어야 하며, 다른 구조들은 분자 규모에서 빠르게 변화, 이동, 재조직화된다. 복잡하고 고도로 조직화된 분자 기계들이 세포의 구성 요소들을 이동시키며, 핵 안팎, 세포소기관 간, 그리고 세포 안팎의 이동을 제어한다.

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

## Green Fluorescent Protein (GFP)

### 발견 및 기원

**출처**: 
- 해파리 *Aequorea victoria*에서 분리
- 세포 생물학자들이 사용하는 가장 중요한 형광 단백질

**유전적 특성**:
- 단일 유전자로 암호화
- Cloning하여 다른 종의 세포에 도입 가능

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

### GFP의 구조

#### Figure 9-16: Green Fluorescent Protein (GFP)
![[Chapter 9.pdf#page=11&selection=109,0,109,11|h-35%]]

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

## GFP 변이형 개발

### Site-directed Mutagenesis

원래 유전자 서열에 대한 광범위한 site-directed mutagenesis 수행:

**결과**:
- 다양한 생물에서 효과적으로 사용 가능한 multiple variants 생성
  - 동물 (Animals)
  - 식물 (Plants)
  - 곰팡이 (Fungi)
  - 미생물 (Microbes)

**개선 사항**:
1. **Fluorescence efficiency(형광 효율)** 향상
2. **흡수 및 방출 스펙트럼** 변경

### 색상 범위의 확장

**청록색 계열**:
- Blue-green spectrum
- **Blue Fluorescent Protein (BFP)**

**적색 계열**:
- Far visible red spectrum
- **Red Fluorescent Protein (RFP)**

**추가 발견**:
- 산호 등에서 관련 형광 단백질 발견
- Red region으로 범위 추가 확장

## GFP의 주요 응용

### 1. Reporter Molecule로서의 사용

#### 기본 원리

**방법**:
- GFP-coding sequence를 관심 유전자의 promoter의 transcriptional control 하에 배치
- Transgenic organism 생성

**효과**:
- 살아있는 생물에서 유전자의 expression pattern을 직접 시각적으로 확인 가능

#### Figure 9-17: Reporter Molecules로서의 Fluorescent Proteins
![[Chapter 9.pdf#page=12&selection=48,0,48,12|h-70%]]
**(A) 초파리 실험 예시**

**실험 설계**:
- Recombinant DNA techniques 사용
- GFP 유전자를 초파리 promoter에 연결
- 특수한 neurons 세트에서만 활성화되는 promoter 사용

**관찰 결과**:
- 살아있는 초파리 배아의 형광 현미경 이미지
- **약 20개의 neurons** 표시
- 각 neuron의 특징:
  - 긴 projections (axons와 dendrites) 보유
  - 다른 (비형광) 세포들과 통신
  - 동물 표면 바로 아래에 위치
  - 즉각적인 환경 감지 가능

**(B) 다중 형광 단백질 변이형**

**실험 방법**:
- 세 가지 형광 단백질 사용: red, yellow, cyan
- 살아있는 초파리 배아의 neurons에서 무작위 발현
- **Genetic constructs 배열**:
  - 강한 청색광 펄스가 세 형광 단백질 중 하나를 neuronal cells에서 무작위로 활성화
  - Plasma membrane으로 targeting

**장점**:
- **비침습적 세포 라벨링 타이밍 제어**
- 시간 경과에 따라 개별 세포 행동 추적 가능
- 개별 감각 neurons의 모든 dendrites 세밀한 디테일 명확히 표시

**추가 관찰**:
- 창백한 점들의 선: cuticle의 denticles 띠의 autofluorescence
- 배아의 segments를 정의 (Figure 21-24 참조)

### 2. Organelle Targeting

#### Peptide Location Signal 추가

**방법**:
- GFP에 peptide location signal 추가
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
![[Ch9.pdf#page=18]]
#### 기능적 특성

**대부분의 경우**:
- GFP fusion protein이 원래 단백질과 **동일한 방식으로 작동**
- Genetically encoded fluorescence를 통해:
  - 위치 (Location) 직접 표시
  - 활동 (Activities) 직접 표시

**기능적 동등성 증명**:
- GFP fusion protein이 untagged protein과 기능적으로 동등함을 증명 가능
- **방법 예시**: 해당 단백질이 결핍된 mutant를 rescue하는 데 사용

#### Figure 9-18: GFP-tagged Proteins
>[!multi-column]
>>[!blank-container] 
>>![[Cell Biology/출처/md converted/Chapter 9/_page_11_Picture_7.jpeg]]
>
>>[!blank-container] 
>>**실험 예시: EB3 단백질**
>> **시스템**:
>> 
>> - 배양된 포유류 세포
>> - **EB3 발현**: plus-end tracking protein
>>- **GFP-derived blue fluorescent protein (BFP)**에 융합
 >> **EB3의 특성**:
>>- 성장하는 microtubules의 plus ends와 결합
>>- Figure 16-49 참조
>>
>> **관찰 결과**:
>> - Dynamics를 실시간 추적 가능
>> - 세포 주변을 밝게 빠르게 이동하는 것처럼 보임 ("zoom brightly around the cell")

## GFP Tagging의 의의

### 최고의 방법론

**GFP tagging은**:
- 살아있는 생물에서 단백질의 **distribution(분포)** 표시하는 가장 명확한 방법
- 살아있는 생물에서 단백질의 **dynamics(역학)** 표시하는 가장 명백한 방법
- 가장 확실한 (most unequivocal) 방법

**참고 자료**: Movie 16.8

### 주요 장점

1. **비침습적**
   - 외부 분자 도입 불필요
   - 세포의 자연스러운 과정 이용

2. **실시간 관찰**
   - 살아있는 세포에서 직접 관찰
   - 동적 과정 추적 가능

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
- 살아있는 세포와 생물에서 개별 단백질을 형광으로 표지하는 혁명적 기술
- 외부 염료 도입 없이 유전적으로 암호화된 형광 사용

### 주요 기술

1. **GFP 및 변이형**
   - 자가 촉매 형광 발색단 형성
   - 다양한 색상 스펙트럼

2. **Reporter 시스템**
   - 유전자 발현 패턴 시각화
   - 살아있는 생물에서 실시간 관찰

3. **Fusion proteins**
   - 단백질 위치와 dynamics 추적
   - 기능적 동등성 유지

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
[^기출_중간_2022_6]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_6번|2022 중간 6번]] — GFP-tagged 단백질이 산성 세포소기관(예: 라이소솜, pH ~5)으로 이동하면 낮은 pH에 의한 chromophore의 protonation으로 형광이 소광된다는 내용이 정답 근거(선지 ④)로 활용됨. (※ 산성 pH에서의 형광 소광 메커니즘은 이 노트에 직접 수록되지 않음)
[^기출_중간_2023_6]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_6번|2023 중간 6번]] — GFP 융합 단백질을 관찰하려면 형광현미경이 필요하며, 위상차 현미경(phase contrast)으로는 GFP 형광을 볼 수 없다는 내용이 정답 근거(선지 ②)로 활용됨.