# Beta-oxidation

## 개요

Beta-oxidation(베타 산화)은 **지방산**을 미토콘드리아에서 분해하여 Acetyl CoA, NADH, FADH₂를 생성하는 과정이다.[^기출_기말_2022_4][^기출_기말_2023_9][^기출_기말_2023_10][^기출_기말_2025_8][^기출_기말_2025_9]

**위치**: 미토콘드리아 matrix (포유류에서 초장쇄 지방산의 경우 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Peroxisome/000_Peroxisome_MOC|퍼옥시솜]]에서도 β-산화 수행)

> "Mitochondria can use pyruvate, fatty acids, as well as other substrates as fuel." — Chapter 14

## 진입 전 활성화

지방산은 먼저 세포질에서 CoA와 결합해 **Acyl CoA**로 활성화되어야 한다:
- ATP → AMP + PPᵢ (2 ATP에 해당하는 에너지 소비)
- **Carnitine shuttle**: Long-chain acyl CoA는 carnitine과 결합하여 inner membrane을 통과

→ 자세한 내용: [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Thermodynamics/Substrate activation|Substrate activation]]

## 4단계 반복 사이클

각 사이클마다 탄소 2개(Acetyl CoA)가 떨어져 나간다:

| Step | 효소 | 반응 |
|------|------|------|
| 1 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/beta-oxidation/1. Acyl CoA dehydrogenase\|Acyl CoA dehydrogenase]] | Acyl CoA → trans-Enoyl CoA + **FADH₂** |
| 2 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/beta-oxidation/2. Enoyl CoA hydratase\|Enoyl CoA hydratase]] | trans-Enoyl CoA + H₂O → L-3-Hydroxyacyl CoA |
| 3 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/beta-oxidation/3. Hydroxyacyl CoA dehydrogenase\|Hydroxyacyl CoA dehydrogenase]] | L-3-Hydroxyacyl CoA + NAD⁺ → 3-Ketoacyl CoA + **NADH** |
| 4 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/beta-oxidation/4. B-Ketothiolase\|β-Ketothiolase]] | 3-Ketoacyl CoA + CoA → Acetyl CoA + (Acyl CoA 탄소 2개 단축) |

## Net Result: 탄소 수에 따른 계산

**일반식** (짝수 포화 지방산, n개 탄소):
- Cycles 수 = **(n/2) − 1**
- Acetyl CoA = **n/2**
- NADH = **(n/2) − 1**
- FADH₂ = **(n/2) − 1**

**예시: Palmitoyl CoA (C16, n=16)**

교과서 Table 14-3:
> "1 palmitoyl CoA → **8 acetyl CoA** + **7 NADH** + **7 FADH₂**"

계산:
- Cycles = (16/2) − 1 = **7**
- Acetyl CoA = 16/2 = **8**
- NADH = 7, FADH₂ = 7

**예시: Lauroyl CoA (C12, n=12)**
- Cycles = 5
- Acetyl CoA = 6, NADH = 5, FADH₂ = 5

## 전체 Net Result (Palmitoyl CoA)

| 산물 | 수량 |
|------|------|
| Acetyl CoA | 8 (→ Citric Acid Cycle으로) |
| NADH | 7 (→ ETC Complex I) |
| FADH₂ | 7 (→ ETC Complex II/III) |
| 활성화 비용 | −2 ATP 상당 |

## 관련 개념

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/Citric Acid Cycle_MOC|Citric Acid Cycle_MOC]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Net result of energy metabolism|Net result of energy metabolism]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Electron Transport Chain_MOC|Electron Transport Chain_MOC]]

[^기출_기말_2022_4]: [[Cell Biology/기출 DB/기말고사/2022년/final_2022_4번|2022 기말 4번]] — 부티르산(C4) β-oxidation 생성물(2GTP + 3FADH₂ + 7NADH + 4CO₂) 계산 문항. 선지 미복기.
[^기출_기말_2023_9]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_9번|2023 기말 9번]] — β-oxidation 4단계 중 ③번 반응(L-3-hydroxyacyl-CoA→3-ketoacyl-CoA)을 촉매하는 효소가 Hydroxyacyl CoA dehydrogenase(NADH 생성)임이 정답 ③의 근거로 활용됨.
[^기출_기말_2023_10]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_10번|2023 기말 10번]] — Caprylic acid(C8 포화 지방산)의 β-oxidation 4회전에서 NADH 4개, TCA cycle 4회전에서 NADH 12개 생성(총 16~17 NADH)이 정답 근거로 활용됨.
[^기출_기말_2025_8]: [[Cell Biology/기출 DB/기말고사/2025년/final_2025_8번|2025 기말 8번]] — 카프로산(C6) β-oxidation만으로 Acetyl-CoA 생성 시 NADH/FADH₂ 수 계산 (2회전 → 2 NADH + 2 FADH₂) 정답 ① 근거.
[^기출_기말_2025_9]: [[Cell Biology/기출 DB/기말고사/2025년/final_2025_9번|2025 기말 9번]] — 카프로산(C6) 완전 산화 시 NADH/FADH₂ 수 계산 (β-oxidation + TCA cycle → 11 NADH + 5 FADH₂) 정답 ③ 근거.
