# Complex II — Succinate Dehydrogenase

## 개요

**Succinate dehydrogenase** (Complex II)는 [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/Citric Acid Cycle_MOC|Citric Acid Cycle]]의 한 단계(succinate → fumarate)를 촉매하는 동시에, 전자를 [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Electron Transport Chain_MOC|ETC]]에 공급하는 이중 역할을 가진 유일한 효소이다.[^기출_기말_2023_8]

- **위치**: 미토콘드리아 crista membrane에 embedded
- **기능**: succinate 산화 시 포획한 전자를 ubiquinone으로 전달
- **Proton pumping**: **없음** — 직접적인 proton-motive force 기여 없음

---

## 구조

![[_page_22_Figure_8.jpeg]]
*Figure 14-26: Succinate dehydrogenase 구조. Sdh1(FAD 포함), Sdh2(3개의 iron-sulfur cluster), 막 내 구성요소(heme 포함) 4개 소단위로 구성.*

4개의 소단위로 구성:

| 소단위 | 특징 |
|--------|------|
| **Sdh1** | 공유결합된 **FAD** cofactor 포함. Succinate로부터 직접 전자 수용 |
| **Sdh2** | 3개의 **iron-sulfur cluster** 포함 → ubiquinone으로 전자 전달 |
| 막 구성요소 (2개) | 기능 불명의 heme 포함 |

---

## 반응 메커니즘

```
Succinate (matrix)
    ↓  [Sdh1의 FAD가 전자 수용]
FADH₂
    ↓  [3개의 iron-sulfur cluster를 통해]
Ubiquinone (Q)
    ↓
Ubiquinol (QH₂) → Complex III로 이동
```

- Succinate → Fumarate: [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/Citric Acid Cycle_MOC|Citric Acid Cycle step 6]]
- **FAD**가 NAD+가 아닌 직접적인 전자 수용체로 작용 → NADH를 거치지 않음
- 따라서 Complex I을 **우회**하여 ubiquinone pool에 진입

---

## ETC에서의 위치

- Complex I (NADH dehydrogenase)과 마찬가지로 electrons를 ubiquinone으로 전달하기 때문에 "Complex II"로 명명됨
- FADH₂ 경유 경로이므로 **proton pumping 없음** → NADH보다 적은 ATP 생산
  - FADH₂: ~1.5 ATP per electron pair (vs. NADH ~2.5 ATP)

> 참고: Fatty acid oxidation의 [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/beta-oxidation/beta-oxidation_MOC|β-oxidation]] step 1에서도 FADH₂가 생성되어 마찬가지로 ubiquinone으로 직접 전달됨.

---

## 질환과의 관련성

- 다른 3개의 respiratory complex와 달리, Complex II의 활성 감소를 유발하는 돌연변이는 **특정 유형의 암(cancer)**과 연관됨[^기출_기말_2025_22]
- Assembly factor 결손 돌연변이도 Complex II 결함을 일으킬 수 있음

[^기출_기말_2025_22]: [[Cell Biology/기출 DB/기말고사/2025년/final_2025_22번|2025 기말 22번]] — Complex II의 이중 역할(TCA cycle 효소 + ETC 구성 요소) 및 기능 상실 시 ATP 합성 급감 원인 설명.
[^기출_기말_2023_8]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_8번|2023 기말 8번]] — ③번 선지: Complex II(succinate dehydrogenase)는 FADH₂로부터 전자를 전달받는다 → 옳음.
