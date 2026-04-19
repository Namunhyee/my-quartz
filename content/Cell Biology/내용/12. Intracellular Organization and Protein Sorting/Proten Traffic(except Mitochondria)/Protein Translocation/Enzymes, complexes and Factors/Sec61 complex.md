# Sec61 complex

단백질 translocation의 핵심 translocator로, bacteria에서 eukaryotic cell까지 고도로 보존되어 있다.

## 구조

### ~~기본 구성~~
- 3개의 subunit로 구성
- 10개의 α helix가 중앙 channel을 둘러싸고 있음
- Bacteria에서 eukaryotic cell까지 고도로 보존됨

### Figure 12-22 Structure of the Sec61 translocator.

![[Cell Biology/출처/md converted/Chapter 12/_page_23_Picture_2.jpeg]]

*Figure 12-22A: Archaeon Methanococcus jannaschii의 Sec61 translocator 구조(SecY translocator). Sec61 α subunit는 inverted repeat 구조를 가지며 파란색과 주황색으로 pseudosymmetry를 나타낸다. 두 개의 작은 β와 γ subunit는 회색으로 표시된다.*
- Sec61 α subunit의 일부 영역은 cytosol로 돌출되어 단백질 translocation 중에 ribosome에 결합
- 보라색 짧은 helix: translocator가 닫혀 있을 때 pore를 막는 plug를 형성 → translocator가 열릴 때 밖으로 이동

![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260202213921.png]]

### Channel과 plug
- ==Channel은 translocator가 유휴 상태일 때 유지하는 짧은 α helix에 의해 막혀 있다==
- [[Endoplasmic Reticulum]]에서 Ca2+와 같은 이온 누출 방지를 위해 channel을 닫아 둠
- Translocation 중에 plug가 밖으로 이동 → polypeptide가 channel을 통과

위 이미지는 [[Sorting Signal#Signal Sequences|signal sequence]]가 [[SRP]]에서부터 translocator인 Sec61로 넘겨진 후.

*Figure 12-22B: Sec61/SecY translocator의 닫힌 상태와 기능적으로 활성인 상태의 모델. 활성 상태에서 단백질 chain은 translocator의 중앙 channel을 통해 membrane을 가로질러 translocation하거나 lateral gate를 통해 lipid bilayer로 sideways로 이동할 수 있다.*

### ==Lateral gate==
- Sec61/SecY translocator는 membrane을 향한 측면 개구부(lateral gate)를 가짐
- 활성 상태에서 단백질 chain은:
	- 중앙 channel을 통해 membrane을 가로질러 이동, 또는
	- Lateral gate를 통해 lipid bilayer로 측면 이동

#### Flexibility
==central channel을 통한 [[001_Protein Translocation|translocation]]과 lateral gate를 통한 이동으로 **translocation**과 **integeration**(embedding protein into the membrane)을 선택적으로 다룰 수 있다.==

## Signal sequence 인식
전체 과정은 [[Co-translational translocation]] 참조

### ~~Proofreading 기능~~
- [[Sec61 complex]]는 signal sequence를 포함하는 단백질에 대해서만 열림
- 이 인식 능력이 [[Endoplasmic Reticulum]]을 위해 진정으로 의도된 단백질만 들어갈 수 있도록 proofreading 단계 제공

### Signal sequence 결합
![[Cell Biology/출처/md converted/Chapter 12/_page_24_Figure_2.jpeg]]

*Figure 12-23A: Signal sequence가 Sec61 translocator를 여는 과정. Signal sequence가 lateral gate에 삽입되기 전후의 Sec61 translocator 단면. ==Signal sequence 삽입으로 translocator의 중앙 channel이 넓어지고 plug가 이 channel에서 밖으로 이동한다==. 따라서 이제 membrane을 가로지르는 연속적인 경로가 명확해진다(점선).*

- Cryo-EM 구조: signal sequence는 N-terminus가 cytosol을 향하도록 [[Sec61 complex#Lateral gate|lateral gate]](seam)에 wedge됨
- Lateral gate에서 signal sequence 삽입 → 중앙 channel 확장 + plug 방출
![[Cell Biology/출처/md converted/Chapter 12/_page_21_Picture_6.jpeg]]
### Polypeptide 수용
- Open translocator는 signal sequence를 따르는 polypeptide segment를 channel 내부에 쉽게 수용
- Hydrophobic한 signal sequence는 membrane에서 절단되어 빠르게 분해되기 전에 lateral gate를 통해 측면으로 membrane에 빠져나감

## Ribosome과의 상호작용

*Figure 12-23B: Signal sequence에 의해 열린 Sec61 translocator에 결합된 translating ribosome의 단면. Ribosome(녹색)이 Sec61 translocator(파란색)에 결합되어 있고 signal sequence(빨간색)에 의해 열려 있다. Translocating polypeptide가 large ribosomal subunit 내의 tunnel과 Sec61 translocator를 통과하는 것으로 표시된다.*

- Signal sequence가 [[Sec61 complex]]를 열고 polypeptide를 channel에 threading한 후, translocation은 translation과 동시에 계속 발생
- ==Translocation 중에 ribosomal large subunit 내부의 polypeptide tunnel이 [[Sec61 complex]] 내의 channel과 정렬된다==
- 이 구성이 ribosome의 peptidyl-transferase center에서 15nm 떨어진 [[Endoplasmic Reticulum]] lumen까지 연속적인 polypeptide 경로 제공

## Translocation 종료
- Translation 종료 → polypeptide의 C-terminus가 ribosome에서 방출되고 [[Sec61 complex]]를 통해 미끄러짐
- Plug가 다시 channel을 닫음
- ==전체 [[Endoplasmic Reticulum]] import 과정은 polypeptide가 fold할 기회를 갖기 전에 co-translationally 발생한다.==

## 관련 개념
- [[001_Protein Translocation]]
- [[Co-translational translocation]]
- [[Sorting Signal#Signal Sequences|ER signal sequence]]
- [[SRP]]
- [[SRP receptor]]
