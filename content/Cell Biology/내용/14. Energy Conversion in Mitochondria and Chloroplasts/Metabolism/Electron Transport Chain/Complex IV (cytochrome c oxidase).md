---
dg-publish: true
---
# Complex IV — Cytochrome c Oxidase

## 개요

**Cytochrome c oxidase** (Complex IV)는 ETC의 마지막 complex로, cytochrome c로부터 전자를 받아 **O₂를 물(H₂O)로 환원**시키는 반응을 촉매한다. 동시에 세 번째 proton pump로 기능한다.

- **위치**: 미토콘드리아 crista membrane
- **Proton pumping**: **1 H⁺/electron** (allosteric conformational change)
- **세포 전체 산소 소모의 약 90%** 담당

---

## 구조

![[Cell Biology/출처/md converted/Chapter 14/_page_22_Figure_2.jpeg]]
*Figure 14-24: Cytochrome c oxidase 구조. ~13개 소단위, 총 ~204,000 dalton. 기능적 core (Subunit I, II, III)가 색으로 표시됨.*

- **~13개의 단백질 소단위** (세포 종류에 따라 다름), 총 ~204,000 dalton
- 기능적 core를 이루는 3개의 핵심 소단위는 **미토콘드리아 genome에 의해 encoding**됨:

| 소단위 | 역할 |
|--------|------|
| **Subunit I** (green) | Heme a 및 heme a₃ 포함. bimetallic center 구성 |
| **Subunit II** (purple) | Copper ions (Cu_A) 포함. Cytochrome c로부터 전자 수용 |
| **Subunit III** (blue) | 구조적 역할 |

**전자 운반 cofactor**: 2개의 copper ion (Cu_A, Cu_B) + 2개의 heme (a, a₃)

---

## 반응 메커니즘

![[Cell Biology/출처/md converted/Chapter 14/_page_23_Picture_8.jpeg]]
*Figure 14-25: Cytochrome c oxidase에서 O₂와 전자의 반응. 전자 경로와 bimetallic center가 표시됨.*

### 전자 흐름
```
Cytochrome c (crista space)
    ↓  (1개씩)
Cu_A (copper ions, Subunit II)
    ↓
Heme a (Subunit I) → 전자를 queue처럼 일시 저장
    ↓
Bimetallic center: Heme a₃ + Cu_B (Subunit I)
    ↓
O₂ → 2 H₂O
```

### O₂ 환원 (bimetallic center)
- O₂가 **heme a₃과 Cu_B 사이**에 clamped되어 완전히 4개의 전자를 받을 때까지 유지
- **4 cytochrome c → 4 electrons** + **4 H⁺ (matrix)** → **1 O₂ → 2 H₂O**
- 위험한 superoxide radical (O₂•⁻) 형성 없이 안전하게 환원

### Proton pumping
- 동시에 **4개의 proton을 추가로 matrix에서 crista space로 펌핑**
- Allosteric conformational change에 의해 구동 (→ [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/proton pumping|Proton pumping 참조]])

### 전체 반응 요약
$$4\,\text{Cyt }c_{\text{red}} + \text{O}_2 + 8\text{H}^+_{\text{matrix}} \rightarrow 4\,\text{Cyt }c_{\text{ox}} + 2\text{H}_2\text{O} + 4\text{H}^+_{\text{crista space}}$$

---

## Cyanide 독성

**Cyanide (CN⁻)** 는 cytochrome c oxidase의 heme iron에 O₂보다 훨씬 강하게 결합하여 효소를 억제 → 미토콘드리아 ATP 생산 급감 → 치명적

---

## 진화적 중요성

- O₂를 최종 전자 수용체로 이용하는 것은 **혐기성 대사보다 훨씬 많은 에너지** 획득 가능
- 세포가 O₂를 직접 안전하게 다룰 수 있는 복잡한 화학이 필요했으며, Complex IV가 그 역할을 함
- 다세포 생물의 등장에 필수적인 에너지원을 제공
