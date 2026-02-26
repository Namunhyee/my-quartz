---
dg-publish: true
---
## ER로 유입되는 단백질에서 Signal sequence가 최초로 발견됨

ER은 합성되고 있는 동안 세포질에서 선택된 단백질들을 포획한다. 이러한 단백질들은 두 가지 유형이 있다:

- **Transmembrane protein**: ER membrane에 내장되는 단백질
- **Water-soluble protein**: ER membrane을 완전히 가로질러 ER lumen으로 이동하는 단백질

이러한 단백질 중 일부는 ER에서 기능하지만, 많은 단백질들은 다른 organelle, plasma membrane에 위치하거나 세포 외부로 분비되도록 운명지어져 있다. 이러한 단백질들은 이후의 운명과 관계없이 모두 초기에 [[Sorting Signal#Signal Sequences|ER signal sequence]]에 의해 ER membrane으로 향하게 된다.

## Signal hypothesis의 실험적 근거
[[Sorting Signal]]과 signal sequence 전략은 먼저 ER membrane을 가로질러 translocation되는 분비형 수용성 단백질에서 발견되었다.

### 핵심 실험 (Cell-free system)
세포에서 추출한 cytosol에 분비 단백질을 암호화하는 mRNA를 첨가하는 실험이 수행되었다:

**실험 1: Rough microsomes[^1] 없이**
- Cytosol의 ribosome이 mRNA를 정상 분비 단백질보다 약간 더 큰 단백질로 번역함
**실험 2: Rough ER에서 유래한 microsomes와 함께**
- 정확한 크기의 단백질이 생산되었고
- Microsome 내부에 위치함

**대조 실험: Cytosolic protein을 암호화하는 mRNA**
- Rough microsome의 존재 여부와 관계없이 정확한 크기의 산물 생산

![[Cell Biology/출처/md converted/Chapter 12/_page_19_Picture_2.jpeg]]
Figure 12-18: Signal hypothesis의 실험적 근거. 시험관에서 cytosol을 분비 단백질을 암호화하는 mRNA와 혼합한다. 두 가지 버전의 반응이 수행된다: 하나는 ER에서 유래한 rough microsome이 없고, 다른 하나는 포함한다. 두 반응 모두에서 cytosol의 ribosome이 mRNA를 번역하여 단백질을 생산한다. Microsome이 없는 반응에서 생산된 단백질은 microsome을 포함한 반응에서 생산된 단백질보다 약간 더 컸다. 이 크기 차이는 microsome을 포함한 반응에서만 선택적으로 제거되는 N-terminus의 작은 단백질 segment 때문인 것으로 밝혀졌다. 추가 분석 결과 microsome 존재하에 생산된 단백질은 microsome lumen에 위치해 있었다.
여기서 하늘색 구멍이 <mark style="background:#40a9ff">translocator</mark>


## Signal hypothesis 제안

이러한 관찰 결과를 설명하기 위해 **signal hypothesis**가 정식화되었다:

### 주요 개념

1. **Signal sequence의 존재**
    - 분비 단백질의 mRNA는 최종 분비되는 단백질보다 큰 단백질을 암호화
    - 추가 polypeptide는 분비 단백질을 ER membrane으로 향하게 하는 signal sequence
2. **Signal sequence의 제거**
    - Signal sequence가 기능을 완수한 후
    - Polypeptide chain이 완성되기 전에
    - ER membrane의 **signal peptidase**에 의해 절단됨

### Translocation 과정
#### ER signal sequence가 ribosome에서 나타날 때
1. Signal sequence가 ribosome을 ER membrane의 [[001_Protein Translocation|translocator]]로 향하게 함
2. Translocator가 membrane을 가로지르는 pore를 형성
3. Polypeptide가 이 pore를 통해 translocation됨

#### Translation 중:
- Signal peptidase가 translocator와 밀접하게 연관되어 있음
- Translation 중에 signal sequence를 절단함
- 합성 완료 직후 성숙 단백질이 ER lumen으로 방출됨

#### Translocator의 특성:
- Ribosome이 결합할 때까지 닫혀 있음
- ER membrane의 투과성 장벽을 항상 유지

## 실험의 중요성

### Cell-free system의 장점
이러한 실험들은 ER import와 같은 복잡한 세포 과정이 mRNA, cytosol, microsome과 같은 필수 세포 구성요소를 함께 혼합하여 cell-free system에서 재구성될 수 있음을 보여준다.

### 방법론적 기여
- 구성 요소를 다양한 방식으로 조합함으로써
- mRNA를 직접 서열분석할 수 있기 훨씬 전에
- 분비 단백질에 signal sequence의 존재를 추론할 수 있었음

### 후속 연구의 토대
이 cell-free system의 조작 용이성은 ER import를 담당하는 molecular machinery의 다양한 구성요소를 식별하고, 정제하고, 연구하는 데 필수불가결했다.

**유사한 시스템이 이후 확립됨:**
- Nucleus 내외로의 단백질 수송
- Mitochondria와 chloroplast로의 단백질 import
- [[003_Vesicular Transport]]

## 관련 개념

- [[Sorting Signal]]
- [[001_Protein Translocation]]
- Microsome
- Cell-free system
- Co-translational translocation

[^1]: Rough microsome(조면 마이크로솜) : 세포 생물학 연구를 위해 세포를 파쇄했을 때, 조면소포체(Rough ER)가 조각나면서 스스로 말려 형성된 작은 주머니 모양의 소낭
