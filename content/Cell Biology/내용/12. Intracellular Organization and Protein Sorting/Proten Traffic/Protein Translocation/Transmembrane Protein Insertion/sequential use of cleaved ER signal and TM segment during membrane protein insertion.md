# Sequential Use of Cleaved ER Signal and TM Segment During Membrane Protein Insertion

## 개요
많은 Transmembrane Protein들은 <mark style="background:#fff88f">ER의 lumenal 면에 비교적 큰 N-말단 domain을 가진다</mark>. 이러한 단백질들은 **절단되는 [[Sorting Signal#signal sequence|ER signal sequence]]**와 **[[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]] (TM segment)**를 순차적으로 사용하여 막에 올바르게 삽입된다.

## 이중 Signal 시스템의 필요성

![[Cell Biology/출처/md converted/Chapter 12/_page_27_Picture_2.jpeg]]

### 문제 상황
- N-말단 lumenal domain이 큰 경우
- 단일 [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]]만으로는 N-말단 전체를 lumen으로 이동시키기 어려움

### 해결책
- N-말단 [[Sorting Signal#signal sequence|ER signal sequence]]로 초기 translocation 개시
- 내부 [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]]로 membrane insertion 완성

## 막 삽입 메커니즘의 단계적 과정(N-말단 lumenal domain이 큰 경우)

### 1단계: ER Signal Sequence에 의한 초기 인식

![[Cell Biology/출처/md converted/Chapter 12/_page_27_Picture_2.jpeg]]

**Secretory protein과 동일한 과정**:
1. N-말단 [[Sorting Signal#signal sequence|ER signal sequence]]가 ribosome에서 나타남
2. [[SRP|SRP]]가 signal sequence를 인식
3. SRP가 SRP receptor를 통해 ribosome을 [[Sec61 complex|Sec61 translocator]]로 유도
4. Signal sequence가 Sec61 translocator의 central channel에 삽입

### 2단계: N-말단 Domain의 Translocation

**Secretory protein과 유사**:
- Signal sequence가 Sec61 translocator를 열음
- N-말단 domain이 Sec61의 channel을 통해 ER lumen으로 translocation 시작
- Mature polypeptide의 N-말단이 signal sequence에 의해 ER lumen에 위치하도록 확정

### 3단계: Signal Sequence의 절단

![[Cell Biology/출처/md converted/Chapter 12/_page_19_Picture_2.jpeg]]

! 위 이미지는 secretory protein 가공 과정을 보여주지만 signal peptidase의 역할을 동일 !
**Signal peptidase에 의한 절단**:
- ER 막에 위치한 signal peptidase가 signal sequence를 인식
- Polypeptide chain이 완성되기 전에 signal sequence를 절단
- 절단된 signal sequence는:
  - 막 내부로 lateral movement
  - ER 막과 cytosol의 다른 protease에 의해 amino acid로 빠르게 분해됨

### 4단계: [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]]의 출현

**Translocation 정지의 시작점**:
- Polypeptide의 hydrophobic segment가 ribosome에서 나타남
- 이 segment가 Sec61 translocator로 들어감
- Sec61 translocator의 [[Sec61 complex#Lateral gate|lateral gate]]에 삽입됨


### 5단계: [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]]의 막 통합

![[Cell Biology/출처/md converted/Chapter 12/_page_27_Picture_2.jpeg]]

**Translocation 종료 메커니즘**:
1. Hydrophobic segment가 lateral gate를 통해 lipid bilayer로 접근
2. Hydrophobic segment는 aqueous channel보다 막에서 더 안정적임
3. Lateral gate를 통해 channel을 **laterally exit**
4. ==**Translocation이 정지됨**==
==<mark style="background:#fff88f">이를 전이 정지(stop-transfer)라고 부름</mark>==

### 6단계: C-말단 Domain 합성

**Cytosolic 면에서의 완성**:
- [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]]가 lipid bilayer에 고정된 후
- 단백질의 나머지 부분은 ER 막의 cytosolic 면에서 합성됨
- Translation이 종료될 때까지 계속됨

## Membrane Protein Topology의 확립

### Domain 위치 결정

**최종 topology**:
- **N-말단 domain**: ER lumen (나중에 cell exterior 또는 organelle lumen)
- **[[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane segment]]**: Lipid bilayer에 α-helix로 존재
- **C-말단 domain**: Cytosol

### Topology 유지

![[Cell Biology/출처/md converted/Chapter 12/_page_11_Figure_9.jpeg]]

**Programmed insertion**:
- Membrane protein은 항상 ER의 cytosolic 면에서 삽입됨
- 이 방식으로 삽입된 단백질은 동일한 orientation을 유지
- 모든 후속 membrane transport 과정에서 topology가 보존됨

## 다른 막 삽입 경로와의 비교

### [[Transmembrane Protein Insertion#Figure 12-26|Single-pass Transmembrane Protein]] (단일 TM segment만 사용)
- Transmembrane segment 자체가 signal sequence로 작용
- N-말단이 짧거나 cytosol에 위치
- Cleavable signal sequence 불필요

### [[Multipass Transmembrane Protein Processing]] (여러 TM segment)
- 첫 번째 segment insertion 방식은 유사
- 후속 segment들이 순차적으로 추가됨

### 본 경로의 특징
- 큰 N-말단 lumenal domain에 최적화
- Signal sequence와 transmembrane segment의 기능 분리
- 복잡한 protein topology 생성 가능

## 기능적 의의

### 단백질 다양성
- 다양한 크기의 lumenal domain 수용 가능
- 복잡한 extracellular structure 형성 가능

### Quality Control
- Signal sequence cleavage가 올바른 insertion의 지표
- 잘못 삽입된 단백질은 [[ER-associated degradation|ERAD]] 경로로 분해

### 진화적 유연성
- Secretory protein과 membrane protein 사이의 evolutionary transition 용이
- Modular signal system

## 관련 개념
- [[Transmembrane Protein Insertion]]
- [[Sorting Signal#signal sequence|ER signal sequence]]
- [[Sec61 complex]]
- [[sequential use of cleaved ER signal and TM segment during membrane protein insertion#^a298a8|Signal peptidase]]
- [[Sec61 complex#Lateral gate|lateral gate]]
- [[Single-pass Transmembrane Protein]]
- [[Membrane Protein Topology]]

## 요약
큰 N-말단 lumenal domain을 가진 membrane protein은 cleavable ER signal sequence와 transmembrane segment를 순차적으로 사용한다. N-말단 signal sequence가 초기 translocation을 개시하고 절단된 후, 내부 transmembrane segment가 Sec61 translocator의 lateral gate를 통해 lipid bilayer로 들어가 translocation을 정지시킨다. 이 mechanism은 두 signal의 기능을 분리하여 복잡한 membrane protein의 정확한 topology 확립을 가능하게 한다.
