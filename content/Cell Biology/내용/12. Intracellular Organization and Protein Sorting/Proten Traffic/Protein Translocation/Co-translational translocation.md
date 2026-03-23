# 과정
## transporting polypeptide into translocator
[[SRP]]와 [[SRP receptor]]는 ribosome을 [[Endoplasmic Reticulum]] membrane으로 안내한다. Ribosome이 [[Sec61 complex|translocator]]와 결합하면, 성장하는 polypeptide chain이 만들어지는 동안 membrane을 가로질러 threading된다.

![[_page_21_Picture_6.jpeg]]

*Figure 12-20: ER signal sequence와 SRP가 ribosome을 ER membrane으로 향하게 하는 방법. [[SRP]]와 [[SRP receptor]]가 협력하여 작동한다. 
1. SRP detects the signal ^d3e123
	- ==SRP는 노출된 [[Sorting Signal#Signal Sequences|ER signal sequence]]와 ribosome 모두에 결합하여 [[SRP#^2f59af|translation을 느리게 한다.]]==[^기출_중간_2023_26]
2. SRP finds the docking site
	- ==ER membrane의 SRP receptor는 동물 세포에서 두 개의 서로 다른 polypeptide chain으로 구성되며, SRP-ribosome complex에 결합하여 [[Sec61 complex|translocator]]로 향하게 한다.==
3. Handoff to the translocator
	- ==SRP(SRP receptor와 complex를 이룬)가 ribosome의 결합 부위에서 멀어지고, 이 위치는 ER membrane의 translocator가 차지하게 된다.==
	- ==SRP는 signal sequence를 방출하고, 이것이 translocator에 삽입되어 lipid bilayer를 가로지르는 polypeptide chain 전달을 시작한다.==
4. Recycling for the next round
	- ==SRP와 SRP receptor는 서로 분리되어 다음 라운드의 단백질 targeting을 위해 재활용된다.==
	- SRP와 SRP receptor는 GTP binding domain을 갖는데,
		- sequence binding으로 일어난 conformational change-> GTP bound SRP와 GTP bound SRP Receptor의 결합을 가능하게 한다.
		-  ==GTP hydrolysis energy는 여기에 이용된다.==
			- ER membrane과 연결 후 오직 signal sequence만 분리하도록
			- 그 이후에 즉시 SRP와 SRP receptor의 분리가 일어남.
	- 그럼에도 ribosome과 transocator는 구조적으로 밀봉되었다 볼 정도로 서로 부착되어있음

### 에너지 요구사항
리보솜의 ER membrane binding 이후 추가 에너지가 필요하지 않다. 성장하는 chain이 갈 수 있는 유일한 경로는 membrane을 가로지르는 것이기 때문이다.

### Membrand bound Polyribosomes
![[Cell Biology/출처/md converted/Chapter 12/_page_22_Figure_2.jpeg]]
#### Figure 12-21 ==Free and membrane-bound polyribosomes.==
전자현미경 이미지가 ER surface에 놓인 나선형의 polyribosome을 보여줌
- ==All ribosomes originate from the same pool.==[^기출_중간_2025_9]
- ==polypeptide가 ER signal sequence를 가지고 있으면 SRP가 이를 인식하고 ER membrane으로 가져옴.==[^기출_중간_2025_9]
- ==하나의 mRNA에 여러 ribosome이 연달아 연결된 상태로 translocator에 붙은 상태로 번역을 진행한다.==
- ==protein synthesis가 끝나고 ribosome subunits는 분해되어 다시 cytosol의 common pool로 돌아간다.==
### ==Signal 부착 이후 과정==
- Signal sequence가 [[Sec61 complex#Lateral gate|lateral gate]]을 통해 막에 고정
- 단백질 사슬은 계속 밀려들어옴
	-  ER 막에 있는 [[sequential use of cleaved ER signal and TM segment during membrane protein insertion#^a298a8|Signal peptidase]]가 신호서열과 본체 단백질 사이의 연결부위를 자름 ^47ed92
	- Transmembrane protein이 될 chain은 소수성 Stop-transfer sequence와 start-transfersequence가 lateral gate의 공간에 들어가 박힌다. 대부분 잘리지 않음.([[sequential use of cleaved ER signal and TM segment during membrane protein insertion|잘리는 예외]])
- 수용성 단백질(분비 단백질)은 ER lumen에서 folding
- Transmembrane protein은 막으로 삽입

[^기출_중간_2025_9]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_9번|2025 중간 9번]] — ③ 정답: ER 결합 리보솜과 자유 리보솜은 구조적으로 동일하며, 번역하는 mRNA의 signal peptide 유무에 따라 ER에 결합하거나 세포질에 존재. ① 틀림: 구조적으로 동일. ② 틀림: ER 결합 리보솜은 분비/막 단백질 합성. ④ 틀림: 추가 소단위 없음. ⑤ 틀림: 모든 세포에 존재.

