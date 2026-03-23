# Citric Acid Cycle

## 개요

Citric Acid Cycle (TCA cycle, Krebs cycle)은 **미토콘드리아 matrix**에서 Acetyl CoA를 완전히 산화하여 NADH, FADH₂, GTP, CO₂를 생성하는 순환 대사 경로이다.[^기출_기말_2022_3][^기출_기말_2023_5][^기출_기말_2023_6][^기출_기말_2023_7][^기출_기말_2023_10][^기출_기말_2025_1]

> "The oxidation of acetyl CoA is carried out by the citric acid cycle, also called the Krebs cycle. This cycle produces CO₂ and more important saves a great deal of the bond energy released by this oxidation in the form of NADH." — Chapter 14

**위치**: 미토콘드리아 matrix

![[_page_7_Figure_2.jpeg]]
*Figure 14-10: 미토콘드리아에서의 에너지 변환 대사 요약.*

## 8단계 반응 개요

| Step | 효소 | Reactant | Product |
|------|------|----------|---------|
| 1 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 1 - citrate synthase\|Citrate synthase]] | Acetyl CoA + OAA | Citrate |
| 2 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 2 - aconitase\|Aconitase]] | Citrate | Isocitrate |
| 3 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 3 - isocitrate dehydrogenase\|Isocitrate dehydrogenase]] | Isocitrate | α-Ketoglutarate + CO₂ + **NADH** |
| 4 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 4 - alpha-ketoglutarate dehydrogenase\|α-Ketoglutarate dehydrogenase]] | α-Ketoglutarate | Succinyl CoA + CO₂ + **NADH** |
| 5 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 5 - succinyl CoA synthetase\|Succinyl CoA synthetase]] | Succinyl CoA | Succinate + **GTP** |
| 6 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 6 - succinate dehydrogenase\|Succinate dehydrogenase]] | Succinate | Fumarate + **FADH₂** |
| 7 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 7 - fumarase\|Fumarase]] | Fumarate | Malate |
| 8 | [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/step 8 - malate dehydrogenase\|Malate dehydrogenase]] | Malate | Oxaloacetate + **NADH** |

## Net Products (Acetyl CoA 1분자, 1 turn 기준)

| 분자 | 수량 |
|------|------|
| NADH | **3** (Step 3, 4, 8) |
| FADH₂ | **1** (Step 6) |
| GTP | **1** (Step 5) |
| CO₂ | **2** |

교과서 Table 14-3:
> "2 acetyl CoA → 6 NADH + 2 FADH₂ + 2 GTP" (2 turns for 1 glucose)

## 특이점: Succinate Dehydrogenase

Step 6의 **succinate dehydrogenase**는 미토콘드리아 inner membrane에 embedded 되어 있으며, ETC의 Complex II로도 기능한다.

> "There is an unusual additional respiratory chain complex that is an important component of the citric acid cycle, where it is known as succinate dehydrogenase." — Chapter 14

→ [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex II (Succinate dehydrogenase)|Complex II (Succinate dehydrogenase)]]

## 조절

| 효소 | 억제 | 활성화 |
|------|------|--------|
| Citrate synthase | NADH, Succinyl CoA, Citrate, ATP | |
| Isocitrate dehydrogenase | NADH, ATP | ADP |
| α-KG dehydrogenase | NADH, Succinyl CoA | |

## 관련 개념

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/pyruvate oxidation|Pyruvate oxidation]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Electron Transport Chain_MOC|Electron Transport Chain_MOC]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Net result of energy metabolism|Net result of energy metabolism]]

[^기출_기말_2022_3]: [[Cell Biology/기출 DB/기말고사/2022년/final_2022_3번|2022 기말 3번]] — TCA cycle 중간체(α-KG, Succinate, Fumarate, Malate, OAA) 발생 순서 문항. 선지 미복기.
[^기출_기말_2023_5]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_5번|2023 기말 5번]] — TCA cycle 중간체 작용 순서(α-ketoglutarate→succinate→malate = C→B→A)가 정답 ⑤의 근거로 활용됨.
[^기출_기말_2023_6]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_6번|2023 기말 6번]] — TCA cycle 효소 작용 순서(Aconitase→Succinate dehydrogenase→Fumarase = C→B→A)가 정답 ⑤의 근거로 활용됨.
[^기출_기말_2023_7]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_7번|2023 기말 7번]] — TCA cycle 2회전에서 총 NADH 6개 생성(3 NADH/turn × 2), pyruvate oxidation 2 NADH, glycolysis 2 NADH → 총 10 NADH가 정답 ④의 근거로 활용됨.
[^기출_기말_2023_10]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_10번|2023 기말 10번]] — Caprylic acid(C8)의 β-oxidation 산물 4 acetyl-CoA가 TCA cycle 4회전을 거치며 NADH 12개가 생성된다는 내용이 정답 근거로 활용됨.
[^기출_기말_2025_1]: [[Cell Biology/기출 DB/기말고사/2025년/final_2025_1번|2025 기말 1번]] — ③번 선지: TCA cycle 반응 자체에 O₂가 직접 참여하는 단계는 없음(O₂는 ETC Complex IV에서만 사용됨) → "TCA cycle이 O₂가 없으면 회로 자체가 중단된다"는 틀린 설명.
