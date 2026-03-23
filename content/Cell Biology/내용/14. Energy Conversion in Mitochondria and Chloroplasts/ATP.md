# ATP (Adenosine Triphosphate)

ATP는 세포 내 모든 에너지 요구 반응을 구동하는 **universal energy currency**이다.[^기출_기말_2023_1]

## 구조

ATP = Adenosine + 3개의 phosphate group (α, β, γ)  
- β-γ, α-β 사이의 결합: **phosphoanhydride bond** (고에너지 결합)

## 가수분해 반응과 자유에너지

$$\text{ATP} + H_2O \rightarrow \text{ADP} + P_i$$

- **표준 자유에너지 변화 (ΔG°)**: −30.5 kJ/mol
- **세포 내 실제 ΔG**: −46 ~ −54 kJ/mol
  - 세포 내 [ATP] >> [ADP], [Pi] 이기 때문에 실제 ΔG는 표준값보다 훨씬 더 음수

> "At much lower concentrations of ATP relative to ADP and phosphate, ΔG becomes zero. At this point, the reaction is at **equilibrium**." — Chapter 14

### ΔG vs ΔG°

$$\Delta G = \Delta G° + RT \ln \frac{[\text{ADP}][\text{P}_i]}{[\text{ATP}]}$$

- ΔG°는 평형 위치를 나타내고, **ΔG**는 반응이 평형으로부터 얼마나 떨어져 있는지를 나타낸다.
- 세포는 [ATP]/[ADP] 비율을 높게 유지함으로써 ΔG를 매우 음수로 유지 → ATP 가수분해 반응이 세포 내 반응을 구동할 수 있다.

## 세포 내 ATP 생산

| 경로 | 위치 | ATP 생산 방식 |
|------|------|--------------|
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Glycolysis/Glycolysis_MOC\|Glycolysis]] | 세포질 | Substrate-level phosphorylation |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/Citric Acid Cycle_MOC\|Citric Acid Cycle]] | 미토콘드리아 matrix | Substrate-level phosphorylation (GTP) |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Electron Transport Chain_MOC\|Oxidative Phosphorylation]] | 미토콘드리아 inner membrane | Chemiosmotic coupling |

## ATP Turnover

- 평균 성인은 하루 약 **50 kg**의 ATP를 소비 및 재생산
- 마라톤 선수는 수백 kg까지 증가
- ATP synthase는 초당 약 **400개**의 ATP 분자를 생산 (8,000 rpm으로 회전)

## UTP, GTP, CTP는 왜 쓰이지 않는가
예전 view에서는 에너지가 낮아서 못 쓴다고 했으나,
4가지 NTP를 다 쓰기에는 4가지에 해당하는 enzyme이 필요하기에  ATP만 사용하는 조상 원핵생물이 살아남았다는 것이 최근의 view

## 관련 개념

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Thermodynamics/Spontaneous and non-spontaneous reactions|Spontaneous and non-spontaneous reactions]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex V (ATP synthase)|Complex V (ATP synthase)]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/ATP synthesis|ATP synthesis]]
- [[Cell Biology/내용/16. The Cytoskeleton/310_Motor Proteins_MOC|Motor protein (kinesin, dynein, myosin)]] — ATP 가수분해를 기계적 일로 전환하는 분자 기계

[^기출_기말_2023_1]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_1번|2023 기말 1번]] — ATP의 에너지가 phosphoanhydride 결합의 "bond energy" 자체에서 오는 것이 아니라, 세포 내 [ATP]/[ADP] 비율 유지에 따른 ΔG 차이에서 비롯된다는 개념이 정답 근거로 활용됨. (정답 오류 표시 있음)
