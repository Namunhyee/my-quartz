# Proton Pumping

## 개요

Proton pumping은 전자전달 에너지를 이용하여 H⁺를 미토콘드리아 matrix에서 crista space로 내보내는 과정이다.[^기출_기말_2022_13][^기출_기말_2023_11]

## 메커니즘의 원리

각 respiratory complex는 전자 전달과 연동된 conformational change를 통해 H⁺를 vectorial하게 이동시킨다.

![[Cell Biology/출처/md converted/Chapter 14/_page_24_Picture_2.jpeg]]
*Figure 14-29: H⁺ pumping의 일반 모델. 세 가지 conformation 전환으로 proton을 한 방향으로만 이동.*

### 3개의 Conformation 필요

1. H⁺에 대한 **높은 친화도** → matrix 쪽에서 H⁺ 획득
2. **에너지 입력** (전자 전달) → conformation 변화
3. H⁺에 대한 **낮은 친화도** → crista space 쪽으로 H⁺ 방출

### Proton Wire

단백질 내부에서 H⁺가 이동하는 경로:

> "Proton-translocating proteins contain so-called proton wires, which are rows of polar or ionic side chains or water molecules spaced at short distances, so that the protons can jump from one to the next." — Chapter 14

![[Cell Biology/출처/md converted/Chapter 14/_page_23_Picture_8.jpeg]]
*Figure 14-28: 물과 단백질에서의 proton 이동 비교. Proton wire를 통한 이동은 40배 빠름.*

- 극성/이온성 아미노산 잔기 (Asp, Glu, Ser, Thr)와 trapped water molecules
- Grotthuss mechanism: proton이 물 분자 사이를 뛰어다님

## 각 Complex의 Proton 이동량 (전자 1쌍 기준)

| Complex | Proton 이동 (H⁺/2e⁻) |
|---------|---------------------|
| Complex I | **4** |
| Complex II | **0** (proton pump 아님) |
| Complex III | **4** (Q cycle 포함) |
| Complex IV | **2** |

총 NADH 1분자 산화 시 (2e⁻ 기준): 4 + 4 + 2 = **10 H⁺** pumping

## Quinone을 통한 Vectorial Proton Transfer

Ubiquinone이 proton을 matrix에서 획득하고 crista space에서 방출하는 과정도 proton pumping에 기여:

![[Cell Biology/출처/md converted/Chapter 14/_page_19_Figure_6.jpeg]]
*Figure 14-21: Quinone을 통한 directional proton transfer 메커니즘.*

- Complex I에서 QH₂ 형성: matrix의 H⁺ 2개 흡수
- Complex III에 결합: crista space로 H⁺ 2개 방출

## 관련 개념

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Chemiosmotic coupling|Chemiosmotic coupling]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex I (NADH dehydrogenase)|Complex I]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex III (cytochrome c reductase)|Complex III]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex IV (cytochrome c oxidase)|Complex IV]]

[^기출_기말_2022_13]: [[Cell Biology/기출 DB/기말고사/2022년/final_2022_13번|2022 기말 13번]] — Complex I, III, IV가 전자 전달과 연동하여 H⁺를 matrix에서 IMS로 펌핑하며, ATP synthase는 이 H⁺가 역류할 때 ATP를 합성한다는 내용이 정답 근거로 활용됨.
[^기출_기말_2023_11]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_11번|2023 기말 11번]] — Complex I·III·IV 각각의 H⁺ 펌핑 원리(conformational change, Q cycle, vectorial proton transfer)와 내막의 비대칭 구조에 의한 단방향성이 서술형 답안의 핵심 내용.
