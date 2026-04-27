# Phosphatidylinositol(PI) and Phosphoinositides(PIPs)

==![[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)#==수업에서 언급된 PIP 종류==|수업에서 언급된 PIP 종류]]==
## ==개요==

Phosphoinositides (PIPs)는 membrane의 약 10% 미만을 차지[^1]하지만 중요한 regulatory function을 가진다.[^기출_중간_2022_22][^기출_중간_2023_3][^기출_중간_2025_2] 이들은 organelle과 membrane domain의 molecular marker로 작용하며, vesicle transport의 여러 단계를 조절한다.

## 구조와 생성

![[Cell Biology/출처/md converted/Chapter 13/_page_6_Figure_2.jpeg]]
PI(3,4,5) P3=phosphatidylinositol 3,4,5-trisphosphate[^2][^기출_중간_2023_3][^기출_중간_2025_2]
### Phosphatidylinositol (PI)
- Inositol sugar head group을 가진 phospholipid[^3][^기출_중간_2023_3][^기출_중간_2025_2]
- Head group의 ==3', 4', 5' position==에 ==free hydroxyl group== 존재

### Phosphoinositide (PIP) 생성
==Inositol ring의 hydroxyl group이 phosphorylation되어 다양한 PIP 생성==:
- **PI 3-kinase**: PI → PI(3)P
- **PI 4-kinase**: PI → PI(4)P  
- **PI 5-kinase**: PI(4)P → PI(4,5)P₂
- **추가 phosphorylation으로** PI(3,4)P₂, PI(3,5)P₂, PI(3,4,5)P₃ 등 생성
## ==명명법==
- 인산에스터 결합을 이루는 탄소가 1번. 여기부터 2,3,4,5,6
- 인산화되는 탄소의 번호를 괄호 안에 적고, PI에서부터 추가로 붙은 인산기 개수만큼 PI()Pn
- 읽는 법
	- "Phosphatidylinositol 3,4-**bis**phosphate"=PI(3,4)P₂
	- "Phosphatidiylinosito 3,4,5-**tris**phosphate"=PI(3,4,5)P₃
- tri, bi는 인산기가 연속적으로 결합해 있는 ATP, ADP 같은 것에 쓰임.
- PIP는 인산기가 연속 결합이 아니라 각기 다른 탄소에 결합했으므로 **tris**, **bis**를 씀.
## ==Compartment-specific Distribution==
각 organelle은 특정 PI와 PIP kinase 및 phosphatase를 가진다:
==모두== [[Asymmetry of the lipid bilayer|cytosolic leaflet에 위치함]]

### Distribution Pattern
- ==**Plasma membrane**: PI(4,5)P₂ enriched==
- ==**Early endosome**: PI(3)P enriched==
- ==**Late endosome**: PI(3)P와 PI(3,5)P₂==
- **Golgi apparatus**: PI(4)P
- **ER**: PI predominant

### ==Enzyme Localization==
- PI and PIP kinase와 PIP phosphatase의 distribution이 highly compartmentalized[^기출_중간_2023_3][^기출_중간_2025_2]
- 이들 enzyme의 distribution, regulation, local balance가 각 PIP species의 steady-state distribution 결정[^기출_중간_2023_3][^기출_중간_2025_2]

## PIP-binding Domain을 통한 Protein Recruitment

![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260210003541.png]]

많은 protein이 특정 PIP의 head group에 high specificity로 결합하는 domain 보유:
예를 들어, [[phagocytosis#Phosphoinositide의 역할|phagocytosis]]는 PI(4,5)P<sub>2</sub> , PI(3,4,5)P<sub>3</sub> 가 진행하기 위한 주요 Phosphatidiylinositides 신호로 작용함.
### ==수업에서 언급된 PIP 종류==
| 어느 메커니즘에서                                                                                              | 어떤 PIP                 | 어느 단백질과                             | 어떻게 작용                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Clathrin coat]]                                                                                      | PI(4,5)P₂              | [[AP2]]                             | [[AP2]]가 처음 membrane에 모집될 때 PI(4,5)P₂를 인식함.                                                                                                                                        |
| [[Endosomes maturation#==5.== ESCRT Protein Complex Intralumenal Vesicle 형성\|Intralumenal vesicle 형성]] | PI(3)P                 | [[ESCRT Protein Complex]] 중 ESCRT-0 | [[ESCRT Protein Complex]] 중 첫 단계 역할인ESCRT-0가 PI(3)P를 인식하여 메커니즘 시작                                                                                                                  |
| [[phagocytosis]]                                                                                       | PI(4,5)P₂, PI(3,4,5)P₃ | ~~WASP, Rac1/WAVE~~                 | PI(3)P에서 PI(4,5)P₂로 인산화 : actin reorganization.<br>PI(4,5)P₂에서 PI 3-kinase가 PI(3,4,5)P₃로 인산화 : cup 닫기<br>이후 PIP2,PIP3는 사라지고 PI(3)P가 남아 early phagosome으로 역할                        |
| [[Pinching-Off]]                                                                                       | PI(4,5)P₂              | dynamin                             | 메커니즘 첫단계에서 dynamin의 PH domain(PIP2 binding domain)이 cytosolic leaflet에서 PI(4,5)P₂와 결합                                                                                              |
| [[Rab Cycle#==Rab-associated domain formation==\|Rab5 associated domain formation]]                    | PI(3)P                 | Rab5 effectors                      | 1.  acitve Rab5가 **PI 3-kinase** activate → PI(3)P production<br>2. **PI(3)P**가 **Rab effector** (tethering protein 포함) binding stabilize<br>3. Rab-5 associated membrane patch 형성 |
