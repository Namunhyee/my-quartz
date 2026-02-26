---
dg-publish: true
---
# Multipass Transmembrane Protein Processing

## 개요
**Multipass transmembrane proteins**는 lipid bilayer를 여러 번 관통하는 단백질로, polypeptide chain이 hydrophobic α-helix 형태의 [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane Segment]]를 통해 막을 반복적으로 가로지른다. 이러한 단백질들은 [[Endoplasmic Reticulum|ER]] 막에 삽입되며, 복잡한 topology를 갖는다.

## Multipass 막단백질의 구조적 특징

Multipass 막단백질은:
- 하나 이상의 hydrophobic [[Transmembrane Protein Insertion#Transmembrane segment(막관통 구간)란?|Transmembrane Segment]]를 포함
- 각 transmembrane segment는 막을 가로지르는 α-helix로 존재
- [[Transporter]]와 [[Channel]] 같은 중요한 단백질들이 이 범주에 속함

![[Cell Biology/출처/md converted/Chapter 12/_page_28_Picture_2.jpeg]]

## 막 삽입 메커니즘

### 1단계: 초기 합성 및 [[SRP]] 인식
- Ribosome에서 단백질 합성이 시작된다
- 첫 번째 hydrophobic segment가 ribosome에서 나올 때, [[SRP|SRP]]가 이를 [[Sorting Signal#Signal Sequences|signal sequence]]로 인식
- SRP가 ribosome을 SRP receptor를 통해 ER 막의 [[Sec61 complex|Sec61 complex(=translocator)]]로 유도

### 2단계: 첫 번째 Transmembrane Segment 삽입

![[Cell Biology/출처/md converted/Chapter 12/_page_27_Picture_2.jpeg]]

첫 번째 transmembrane segment의 방향 결정은 다음 요인들에 의해 결정된다:
- N-말단 domain의 길이와 folding 상태
- Transmembrane segment 주변의 charged amino acid 분포
- Transmembrane segment의 길이

**두 가지 가능한 방향**:
1. **N-말단이 cytosolic 면에 유지**: N-말단 domain이 길거나 folded인 경우, 또는 N-말단 쪽에 positively charged amino acid가 많은 경우
2. **C-말단이 cytosolic 면에 유지**: C-말단 쪽에 positively charged amino acid가 많은 경우

### 3단계: 첫 번째 Segment에 의한 Topology 고정

첫 번째 transmembrane segment가 막에 삽입되면:
- 이 삽입이 단백질의 **topology**를 효과적으로 고정
- 이후 나머지 단백질의 topology가 결정됨
- Ribosome과 Sec61 translocator의 밀접한 결합으로 인해, 각 hydrophobic segment는 lipid bilayer로의 접근을 제공하는 [[Sec61 complex#Lateral gate|Lateral Gate]]에 매우 가깝게 나타남

### 4단계: 후속 Transmembrane Segment의 순차적 삽입

![[Cell Biology/출처/md converted/Chapter 12/_page_28_Picture_2.jpeg]]

**가장 단순한 경우**:
- 새로 나타난 hydrophobic segment가 lateral gate와 결합
- 가장 최근에 삽입된 transmembrane segment와 **반대 방향**으로 lateral gate에 결합
- Lipid bilayer로 삽입

이 과정이 모든 transmembrane segment가 삽입될 때까지 계속된다.

## 특수한 경우: 부분적으로 Hydrophobic인 Segment

일부 multipass 단백질의 transmembrane segment는:
- 부분적으로만 hydrophobic
- 단독으로는 lipid bilayer에서 안정적이지 않음
- 이전에 삽입된 transmembrane segment와 **상호작용**하여 삽입 가능

**기능적 중요성**:
- 막 내부에 hydrophilic 부분을 포함하는 multipass membrane protein 생성 가능
- [[Transporter]]와 [[Channel]] 같은 중요한 단백질에 필수적
- 이들 단백질은 막 내부에 hydrophilic channel을 형성해야 함

## Topology 유지 메커니즘

### Contextual Interpretation
- 각 새로운 hydrophobic segment는 이전 부분의 topology와 특성을 기반으로 해석됨
- 첫 번째 transmembrane segment의 방향이 나머지 전체 topology를 결정

### Hydrophilic Loop의 처리
- Transmembrane segment 사이의 hydrophilic sequence는:
  - 이전 transmembrane segment의 방향에 따라 cytosol로 합성되거나
  - [[Sec61 complex]]를 통해 통과됨

## Membrane Protein Asymmetry

![[Cell Biology/출처/md converted/Chapter 12/_page_11_Figure_9.jpeg]]

**중요한 원칙**:
- Membrane protein은 항상 ER의 cytosolic 면에서 삽입됨
- 동일한 polypeptide chain의 모든 복사본이 lipid bilayer에서 **동일한 orientation**을 가짐
- 한 면에 노출된 protein domain은 다른 면에 노출된 것과 다름

**Asymmetry의 유지**:
- 이 asymmetry는 ER에서 다른 세포 막으로 단백질을 수송하는 많은 membrane budding 및 fusion 과정 동안 유지됨
- ER 막에 새로 합성된 단백질이 삽입되는 방식이 다른 모든 막에서의 단백질 orientation을 결정

## 관련 개념
- [[Transmembrane Protein Insertion]]
- [[Sec61 complex|Sec61 Translocator]]
- [[Sec61 complex#Lateral gate|Lateral Gate]]
- [[Membrane Protein Topology]]
- [[Single-pass Transmembrane Protein]]
- [[Channel]]
- [[Transporter]]

## 요약
Multipass membrane protein은 여러 hydrophobic segment를 통해 막을 반복적으로 가로지른다. 첫 번째 transmembrane segment의 삽입이 전체 단백질의 topology를 고정시키며, 후속 segment들은 Sec61 translocator의 lateral gate를 통해 순차적으로 반대 방향으로 삽입된다. 이 programmed insertion은 동일한 단백질의 모든 복사본이 막에서 동일한 orientation을 갖도록 보장하며, 이는 모든 cellular membrane에서 유지되는 asymmetry를 생성한다.
