# Complex V — ATP Synthase

## 개요

**ATP synthase** (Complex V, F₁F₀ ATP synthase, F-type ATPase)는 미토콘드리아 inner membrane에 내장된 **회전형 분자 기계(nanomachine)**로, electrochemical proton gradient의 에너지를 이용해 ADP + Pᵢ → ATP를 합성한다.[^기출_기말_2022_14][^기출_기말_2023_8]

- **위치**: 미토콘드리아 crista membrane (matrix 쪽으로 F₁ head가 돌출)
- **구성**: ~23개 이상 단백질 소단위, 총 ~600,000 dalton
- **회전 속도**: ~8,000 RPM → 회전당 3 ATP, 즉 **~400 ATP/second**
- 양방향 작동 가능: 정방향(ATP 합성) / 역방향(ATP 가수분해 → proton pumping)

---

## 구조

![[Cell Biology/출처/md converted/Chapter 14/_page_27_Picture_2.jpeg]]
*Figure 14-31: F₁F₀ ATP synthase 구조. F₀ 막 부분(rotor ring, a subunit)과 F₁ 촉매 head, stator stalk, rotor stalk로 구성.*

### 두 주요 부분

| 부분 | 위치 | 구성 | 역할 |
|------|------|------|------|
| **F₀** | 막 내 | c subunit ring (rotor) + a subunit (stator) | Proton 통로, 회전 발생 |
| **F₁** | Matrix 쪽 돌출 | 3α + 3β + γ (rotor stalk) + δ + ε | ATP 합성 촉매 |

### Rotor (회전부)
- **c subunit ring**: F₀에 위치. 각 c subunit은 2개의 막관통 α-helix가 헤어핀 형태. 가운데 glutamate/aspartate가 **proton 결합 부위**
- **γ subunit (rotor stalk)**: c ring에 연결되어 F₁ head 내부에서 회전하는 축

### Stator (고정부)
- **3α + 3β**: 교대로 배열되어 catalytic head 형성. β subunit 3개에 각각 **catalytic nucleotide-binding site**
- **Peripheral stalk (stator stalk)**: head를 고정하여 함께 돌지 않도록 함

---

## 작동 메커니즘: Rotary Catalysis

### Proton 경로
![[Cell Biology/출처/md converted/Chapter 14/_page_28_Picture_9.jpeg]]
*Figure 14-32: F₀ rotor ring. 각 c subunit에 proton 결합 부위(glutamate, 노란색)가 있다.*

1. Crista space의 H⁺가 **a subunit의 첫 번째 half-channel**을 통해 c subunit의 결합부위에 결합
2. H⁺를 실은 c subunit이 ring을 따라 **한 바퀴 회전**
3. a subunit의 **양전하 arginine**이 H⁺를 밀어내 **두 번째 half-channel**을 통해 matrix로 방출
4. 이 directional proton flow가 rotor ring을 turbine처럼 회전시킴

### ATP 합성 (Binding Change Mechanism)
- γ subunit(rotor stalk)가 F₁ head 안에서 **camshaft**처럼 회전
- 3개의 β subunit이 순서대로 conformational change 유발:
  1. **개방형**: ADP + Pᵢ 결합
  2. **폐쇄형**: ADP + Pᵢ → **ATP** 형성 (high affinity)
  3. **방출형**: ATP 방출 (low affinity)
- **1회전 = 3 ATP 합성**

### ATP당 필요한 proton 수
= (c subunit 수) / 3

| 생물체 | c subunit 수 | ATP당 H⁺ |
|--------|-------------|----------|
| 포유류 미토콘드리아 | **8** | ~2.7 |
| 효모 미토콘드리아 | 10 | ~3.3 |
| 세균/고세균 | 11–13 | ~3.7–4.3 |
| 식물 엽록체 | 14 | ~4.7 |
| 일부 남세균 | 15 | ~5 |

→ 포유류 미토콘드리아는 **high gear** (적은 c subunit → proton 절약) : 상대적으로 낮은 proton 공급에 최적화

---

## Cristae에서의 배열

![[Cell Biology/출처/md converted/Chapter 14/_page_29_Figure_7.jpeg]]
*Figure 14-33: Cristae ridge를 따라 dimers row를 형성하는 ATP synthase.*

![[Cell Biology/출처/md converted/Chapter 14/_page_29_Picture_2.jpeg]]
*Figure 14-34: Cristae ridge의 ATP synthase dimer rows가 proton "sink"를 형성하여 효율적 ATP 생산에 기여.*

- ATP synthase는 cristae ridge를 따라 **dimer rows** 형성
- Dimer rows가 고곡률 막 구조(cristae)를 유도·안정화
- Proton pump들이 pumping한 H⁺는 crista space에 농축 → ATP synthase dimer row로 신속 확산 (**proton sink** 효과)
- Cristae 구조가 없으면 cellular respiration 절반 감소

---

## 역방향 작동 (ATP 가수분해 → Proton pumping)

- ATP가 부족하거나 proton gradient 유지가 필요한 상황에서 역방향 작동
- 무산소 대사하는 세균에서 ATP hydrolysis를 통해 plasma membrane에 proton gradient 유지 → 영양소 수송, 편모 회전 등에 사용
- [[Cell Biology/내용/13. Intracellular Membrane Traffic/Lysosome/Lysosome_MOC|**V-type ATPase**]] (세포 소기관 산성화)도 유사한 구조이며 항상 ATP 가수분해 방향으로 작동

---

## 관련 노트

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/ATP synthesis|ATP synthesis]] — ATP 합성의 에너지론과 세포에서의 의미
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Chemiosmotic coupling|Chemiosmotic coupling]] — Proton gradient와 ATP synthesis 연계

[^기출_기말_2022_14]: [[Cell Biology/기출 DB/기말고사/2022년/final_2022_14번|2022 기말 14번]] — ATP synthase의 F₀/F₁ 구조(c-ring rotor, γ subunit 회전, β subunit 촉매)와 역방향(ATP 가수분해→H⁺ 펌핑) 작동 가역성이 정답 ⑤의 근거로 활용됨.
[^기출_기말_2023_8]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_8번|2023 기말 8번]] — ATP synthase(Complex V)가 IMS→matrix H⁺ 농도차를 이용해 ATP를 합성한다는 선지 ⑤가 옳다고 확인됨.
