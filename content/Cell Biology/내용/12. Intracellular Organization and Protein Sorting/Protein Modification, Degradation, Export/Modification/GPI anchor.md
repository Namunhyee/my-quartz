---
dg-publish: true
---
# GPI Anchor

## 개요
**Glycosylphosphatidylinositol (GPI) anchor**는 일부 plasma membrane 단백질이 막에 부착되는 특별한 방식이다. 이 단백질들은 C-말단에 공유결합으로 연결된 GPI anchor를 통해 막의 외부 표면에 부착된다.

## GPI Anchor의 구조



GPI anchor는 다음과 같은 구성 요소로 이루어진 복잡한 glycolipid 구조이다:
![[Pasted image 20260204122435.png]]
- **Inositol**: lipid에 부착되어 있으며, 이로부터 GPI anchor의 이름이 유래
- **Glucosamine**: Inositol에 연결
- **3개의 Mannose**: sugar chain 형성
- **Phosphoethanolamine**: terminal mannose에 연결되어 단백질 부착을 위한 amino group 제공
- **Lipid 부분**: 막에 anchor를 고정

## GPI Anchor 부착 메커니즘

### 1단계: 초기 단백질 합성 및 ER Signal Sequence 인식
- GPI-anchored protein은 N-말단에 [[Sorting Signal#Signal Sequences|ER signal sequence]]를 가지고 합성된다
- 이 signal sequence가 단백질을 [[Endoplasmic Reticulum|ER]]로 유도한다
- [[Co-translational translocation#^47ed92|Signal peptidase]]가 signal sequence를 제거한다

### 2단계: ER 막 통합
- 단백질은 single-pass transmembrane protein처럼 ER 막에 통합된다
- C-말단 근처의 **hydrophobic sequence** (15-20개 amino acid)이 단백질을 막에 고정
- 나머지 단백질 부분은 ER lumen에 위치

### 3단계: Transamidase에 의한 GPI anchor 부착
단백질 합성 완료 직후 (1분 이내), **transamidase** enzyme complex가 다음과 같은 반응을 촉매한다:

1. **절단 반응**: C-말단 hydrophobic sequence를 단백질에서 제거
2. **부착 반응**: 미리 조립된 GPI intermediate를 새로운 C-말단에 동시에 부착

이 반응은 ER에서 일어나며, GPI intermediate의 phosphoethanolamine에 있는 amino group이 단백질의 새로운 C-말단과 **amide bond**[^1]를 형성한다.
![[Cell Biology/출처/md converted/Chapter 12/_page_30_Picture_2.jpeg]]
### 4단계: 막 부착 유지
- 공유결합으로 연결된 lipid anchor로 인해 단백질은 막에 결합된 상태를 유지
- 모든 amino acid가 처음에는 ER의 lumenal 면에 노출
- 최종적으로 plasma membrane의 외부 표면에 노출

## GPI Anchor 부착 신호

단백질이 GPI anchor를 받기 위해서는 특정 signal이 필요하다:
- C-말단 hydrophobic sequence
- 이 sequence에 인접한 ER lumenal 면의 몇 개 amino acid
- 이 signal을 다른 단백질에 추가하면, 그 단백질도 GPI anchor modification을 받는다

## 기능적 의미

### 1. 막으로부터의 방출
- Plasma membrane의 특정 **phospholipase**가 활성화되면 GPI anchor가 절단될 수 있다
- 이를 통해 단백질이 soluble form으로 세포에서 방출된다
- **예**: Trypanosome parasite는 면역계 공격 시 이 mechanism을 사용하여 GPI-anchored surface protein coat을 벗겨낸다

### 2. 막 Domain으로의 구획화
- GPI anchor는 일부 plasma membrane 단백질을 specialized domain으로 유도한다
- [[Raft domain|Lipid Rafts]]과 같은 구조에 단백질을 laterally segregate
- 다른 membrane protein과의 spatial separation 제공

## 관련 개념
- [[Transmembrane Protein Insertion]]
- [[ER Protein Processing]]
- [[Membrane Protein Topology]]
- [[Lipid Rafts]]
- [[Plasma Membrane]]

## 요약
GPI anchor는 단백질을 막에 부착하는 독특한 방법이다. ER에서 transamidase가 단백질의 C-말단 hydrophobic sequence를 절단하고 동시에 미리 조립된 GPI intermediate를 부착한다. 이를 통해 단백질은 covalent lipid anchor를 통해 막에 결합되며, 필요시 방출되거나 특정 membrane domain으로 구획화될 수 있다.

[^1]: **아마이드 결합(Amide bond)**은 하나의 아미노산에 있는 **카복실기($-COOH$)**와 다른 아미노산의 **아미노기($-NH_2$)**가 반응하여 물 분자($H_2O$) 하나가 빠져나오면서 형성되는 화학 결합입니다.
	
	생물학에서는 단백질을 구성하는 기본 결합이기 때문에 **펩타이드 결합(Peptide bond)**이라고도 부릅니다.
	
	---
	
	### 1. 화학적 구조
	
	아마이드 결합은 특징적인 **$-CONH-$** 구조를 가집니다.
	
	- **카보닐기($C=O$):** 탄소와 산소가 이중 결합을 하고 있습니다.
	    
	- **아미노기($N-H$):** 질소와 수소가 결합되어 있습니다.
	    
	- 이 두 기가 서로 연결되어 탄소-질소($C-N$) 단일 결합을 형성합니다.
	    
	
	$$R_1-COOH + R_2-NH_2 \rightarrow R_1-CONH-R_2 + H_2O$$
