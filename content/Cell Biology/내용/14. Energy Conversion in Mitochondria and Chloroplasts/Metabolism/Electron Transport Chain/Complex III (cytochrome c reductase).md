# Complex III — Cytochrome c Reductase

## 개요

**Cytochrome c reductase** (Complex III, cytochrome b-c₁ complex)는 ETC의 두 번째 proton pump이다.[^기출_기말_2023_11][^기출_기말_2023_12] Ubiquinol(QH₂)로부터 전자를 받아 soluble carrier protein인 **cytochrome c**로 전달하며, **Q cycle** 메커니즘을 통해 proton을 crista space로 방출한다.

- **위치**: 미토콘드리아 crista membrane
- **Proton pumping**: **2 H⁺/electron** (Q cycle 통해)

---

## 구조

![[Cell Biology/출처/md converted/Chapter 14/_page_20_Figure_2.jpeg]]
*Figure 14-22: Cytochrome c reductase 구조. 두 개의 동일한 240,000 dalton 단량체로 이루어진 dimer이며, 세 핵심 소단위가 색으로 표시됨.*

포유류에서 **11개의 서로 다른 단백질**로 구성된 **dimer** (총 240,000 dalton × 2):

촉매 core를 이루는 3개의 핵심 소단위:

| 소단위 | 특징 |
|--------|------|
| **Cytochrome b** | 두 개의 heme (b_L, b_H) 포함. Q cycle에서 두 번째 전자 경로 담당 |
| **Cytochrome c₁** | heme c₁ 포함. 전자를 cytochrome c로 전달 |
| **Rieske protein** | Fe₂S₂ iron-sulfur cluster 포함. QH₂로부터 첫 번째 전자를 받아 cytochrome c₁로 전달 |

---

## 반응 메커니즘: Q Cycle

Q cycle은 proton pumping을 두 배로 늘리기 위한 정교한 메커니즘이다.

![[Cell Biology/출처/md converted/Chapter 14/_page_21_Figure_2.jpeg]]
*Figure 14-23: Cytochrome c reductase의 두 단계 Q cycle 메커니즘.*

### Step 1
1. NADH dehydrogenase에 의해 환원된 **QH₂ (blue)** 가 Complex III의 crista side에 결합
2. QH₂ 산화 → 2개의 proton이 crista space로 방출, 2개의 전자 분리
3. **전자 1**: iron-sulfur cluster → heme c₁ → 막 표면의 **cytochrome c** (1번째)로 전달
4. **전자 2**: heme b_L → heme b_H → matrix side에 결합된 **ubiquinone (red Q)** 로 전달 → matrix에서 H⁺ 1개 흡수하여 **ubisemiquinone (red QH•)** 형성

### Step 2
1. 두 번째 **QH₂ (blue)** 가 결합, 마찬가지로 2 proton → crista space
2. **전자 1**: 두 번째 **cytochrome c** (2번째)로 전달
3. **전자 2**: ubisemiquinone (red QH•)를 완전 환원 → matrix에서 H⁺ 1개 더 흡수 → **QH₂ (red)** 로 지질 이중층에 방출

### 결과
- QH₂ 1분자 산화 시: **2 proton** directional 방출 (crista space) + **2 proton** 추가 방출 = 총 **4 H⁺** pumping
- 동시에 **2개의 cytochrome c**를 환원 (각 1 전자씩)
- 즉, NADH dehydrogenase에서 cytochrome c로 전자 1개 이동 시마다 **2 H⁺**가 crista space로 펌핑됨

---

## Cytochrome c로의 전자 전달

- Cytochrome c는 crista space의 **작고 수용성인 단백질**
- 전자를 **1개씩** 운반
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex IV (cytochrome c oxidase)|Complex IV]]로 전자를 넘겨줌

---

## 진화적 보존성

Cytochrome c reductase는 세균부터 미토콘드리아, 엽록체까지 **구조와 기능이 고도로 보존**되어 있다. 엽록체의 **cytochrome b₆-f complex**가 기능적·구조적 등가물이며, 동일한 Q cycle을 사용한다.

[^기출_기말_2023_11]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_11번|2023 기말 11번]] — Complex III의 Q cycle(Qo site에서 QH₂ 산화 시 H⁺를 IMS로 방출, 2H⁺/e⁻ 펌핑)이 H⁺ 배출 원리의 핵심으로 서술형 답안에 활용됨.
[^기출_기말_2023_12]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_12번|2023 기말 12번]] — Antimycin A가 Complex III의 Qi site에 결합하여 QH₂→cytochrome c 전자전달을 차단하고, 결과적으로 Complex IV에 전자 공급이 없어져 산소 소비가 감소한다는 서술형 풀이의 핵심 내용.
