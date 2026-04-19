# homotypic fusion vs heterotypic fusion

## 개요

Membrane fusion은 두 가지 category로 분류된다: homotypic fusion과 heterotypic fusion. 이 구분은 fuse하는 membrane의 origin에 기반한다.

## Heterotypic Fusion

### 정의
**Heterotypic fusion**은 서로 다른 compartment의 membrane이 fusion하는 과정이다.

### 특징

**일반적인 vesicle transport**:
- Transport vesicle이 target membrane과 fusion
- 두 membrane은 서로 다른 origin
- 예: ER vesicle이 Golgi membrane과 fusion

**SNARE pairing**:
- **v-SNARE**: Vesicle membrane
- **t-SNARE**: Target membrane
- Asymmetrical interaction
- Complementary SNARE set 필요

### 예시
- COPII vesicle → Golgi cisterna
- Secretory vesicle → Plasma membrane
- Endocytic vesicle → Early endosome
- Late endosome → Lysosome

## Homotypic Fusion

![[Cell Biology/출처/md converted/Chapter 13/_page_18_Figure_9.jpeg]]

### 정의
**Homotypic fusion**은 같은 compartment의 membrane끼리 fusion하는 과정이다.

### 특징

**Symmetrical SNARE interaction**:
- 양쪽 membrane에 v-SNARE와 t-SNARE **모두** 존재
- Matching SNARE가 서로 interact
- Symmetrical configuration

### Mechanism

1. **Initial state**:
   - 두 identical membrane
   - 각각 v-SNARE와 t-SNARE set 보유

2. **NSF action**:
   - NSF가 양쪽 membrane의 SNARE pair 분리
   - Cis-SNARE complex disassembly

3. **Cross-interaction**:
   - 분리된 SNARE가 adjacent membrane의 것과 interact
   - v-SNARE (membrane A) ↔ t-SNARE (membrane B)
   - t-SNARE (membrane A) ↔ v-SNARE (membrane B)

4. **Membrane fusion**:
   - Trans-SNARE complex 형성
   - Membrane fusion
   - One continuous compartment 생성

5. **Further growth**:
   - Compartment가 같은 종류의 vesicle과 계속 fusion
   - Matching SNARE display하는 vesicle만 fusion
   - Compartment size 증가

### 예시

**ER-derived vesicle fusion**:
- [[Transportation from the ER Through the Golgi Apparatus_MOC#Vesicular tubular cluster|Vesicular tubular cluster]] 형성
- Multiple COPII vesicle이 서로 fusion
- Convoluted structure 생성

**Endosome fusion**:
- Early endosome끼리 fusion
- Larger endosome 형성
- Homotypic fusion으로 endosome 성장

**Yeast vacuole fusion**:
- Mother cell의 vacuole에서 유래한 vesicle
- Bud에서 서로 fusion
- New vacuole 형성

## Rab Protein의 역할

Homotypic fusion에서 Rab protein은 중요한 조절 역할:

### Extent Control
- Rab protein이 homotypic fusion 정도 조절
- Compartment의 size regulation
- Appropriate compartment size 유지

### Example: Yeast Vacuole

Yeast cell이 bud 형성 시:
1. Mother cell vacuole에서 vesicle derive
2. Vesicle이 bud로 이동
3. Bud에서 서로 homotypic fusion
4. New vacuole 형성

**필요 조건**:
- v-SNARE와 t-SNARE 모두 필요
- 어느 vesicle이 어떤 SNARE 가지는지는 중요하지 않음
- Homotypic nature로 인한 symmetry

## Experimental Evidence

### Genetic Studies

Yeast vacuole fusion 실험:
- Strain A: Defective alkaline phosphatase (Pase)
- Strain B: Defective protease (pro-Pase → Pase conversion 불가)
- 두 strain의 vesicle fusion → active Pase 생성

**SNARE deletion experiment**:
- Vacuolar v-SNARE, t-SNARE, 또는 both 제거
- 다양한 combination의 vesicle fusion test
- 결과: Both v-SNARE와 t-SNARE 필요
- 어느 vesicle에 어떤 SNARE 있는지는 무관

### Implications
- Homotypic fusion도 SNARE 필요
- 하지만 distribution이 asymmetric할 필요 없음
- Functional redundancy

## Functional Significance

### Compartment Growth
- Homotypic fusion으로 compartment 성장
- Multiple small vesicle → larger organelle
- Efficient organelle assembly

### Organelle Maintenance
- Continuous fusion과 fission cycle
- Dynamic equilibrium
- Organelle size와 number 조절

### Selective Fusion
- Matching SNARE set만 fusion
- Compartment identity 유지
- Inappropriate fusion 방지

## 관련 내용

- [[Vesicle Fusion by SNARE_MOC|Vesicle fusion mechanism]]
- [[SNARE|SNARE protein]]
- [[Transportation from the ER Through the Golgi Apparatus_MOC#Vesicular tubular cluster|Vesicular tubular cluster formation]]
- [[Transportation Mechanism_MOC#Rab Cycle|Rab protein regulation]]
