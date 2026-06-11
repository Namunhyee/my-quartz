# Net Result of Energy Metabolism

## A. Glucose 1분자 완전 산화

### 각 단계별 산물

| 경로                                                                                                                                                    | 위치     | NADH   | FADH₂ | ATP/GTP |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ----- | ------- |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Glycolysis/Glycolysis_MOC\|Glycolysis]]                           | 세포질    | 2      | 0     | 2 (net) |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/pyruvate oxidation\|Pyruvate oxidation]](×2)                      | matrix | 2      | 0     | 0       |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Citric Acid Cycle/Citric Acid Cycle_MOC\|Citric Acid Cycle]] (×2) | matrix | 6      | 2     | 2 (GTP) |
| **Total**                                                                                                                                             |        | **10** | **2** | **4**   |

교과서 원문:
> - Cytosol (glycolysis): 1 glucose → 2 pyruvate + 2 NADH + 2 ATP
> - Mitochondrion: 2 pyruvate → 2 acetyl CoA + 2 NADH
> - 2 acetyl CoA → 6 NADH + 2 FADH₂ + 2 GTP
> - Net result in mitochondrion: 2 pyruvate → 8 NADH + 2 FADH₂ + 2 GTP

### ATP 계산 (Oxidative Phosphorylation 포함)

| 전자 공여체 | 수량 | ATP/unit | ATP |
|------------|------|----------|-----|
| NADH (미토콘드리아) | 8 | 2.5 | 20 |
| NADH (세포질, shuttle) | 2 | 1.5 | 3 |
| FADH₂ | 2 | 1.5 | 3 |
| Substrate-level ATP | — | — | 4 |
| **Total** | | | **~30 ATP** |

> "We can calculate that the complete oxidation of one molecule of glucose—starting with glycolysis and ending with oxidative phosphorylation gives a net yield of about **30 molecules of ATP**." — Chapter 14

---
### 강의노트에서의 ATP 계산


|                  | NADH / H+ pumping | FADH2 / H+ pumping | Total H+ pumping | Mito. ATP synthesis |
| ---------------- | ----------------- | ------------------ | ---------------- | ------------------- |
| glucose          | 10 / 60           | 2 / 8              | 68               | 34-36               |
| caporic acid(C6) | 11 / 66           | 5 / 20             | 86               | 43-45               |
NADH 1분자 - 6 protons pumping - 3ATP 생성
FADH2 1분자 - 4 protons pumping - 2ATP 생성
## B. Palmitoyl CoA 1분자 완전 산화

Palmitate (C16:0 포화지방산)의 활성화 형태인 **Palmitoyl CoA** (이미 CoA와 결합된 상태).

### Beta-oxidation (교과서 Table 14-3)

> 1 palmitoyl CoA → **8 acetyl CoA** + **7 NADH** + **7 FADH₂**

- 7 사이클 (cycles = 16/2 − 1 = 7)
- 활성화 비용: **−2 ATP** (palmitoyl CoA 생성 시 ATP → AMP)

### Citric Acid Cycle (8 acetyl CoA × 1 turn)

> 8 acetyl CoA → **24 NADH** + **8 FADH₂** + **8 GTP**

### Net Result (교과서)

> Net result in mitochondrion: 1 palmitoyl CoA → **31 NADH** + **15 FADH₂** + **8 GTP**

### ATP 계산

| 전자 공여체 | 수량 | ATP/unit | ATP |
|------------|------|----------|-----|
| NADH (미토콘드리아) | 31 | 2.5 | 77.5 |
| FADH₂ | 15 | 1.5 | 22.5 |
| GTP (substrate-level) | 8 | 1 | 8 |
| 활성화 비용 | — | — | −2 |
| **Total** | | | **~106 ATP** |

---

## 지방 vs 포도당 에너지 밀도 비교

| 기질 | 분자량 | Net ATP | ATP/g (대략) |
|------|--------|---------|-------------|
| Glucose | 180 g/mol | ~30 ATP | 낮음 |
| Palmitate | 256 g/mol | ~106 ATP | 높음 (~2.4배) |

지방이 탄수화물보다 **에너지 밀도가 높은** 이유: 탄소가 더 환원되어 있어 더 많은 전자(NADH, FADH₂)를 제공.

## 관련 개념

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Electron Transport Chain_MOC|Electron Transport Chain_MOC]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/ATP synthesis|ATP synthesis]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/ATP|ATP]]
