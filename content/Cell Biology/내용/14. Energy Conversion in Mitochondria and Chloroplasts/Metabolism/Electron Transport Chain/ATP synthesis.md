# ATP Synthesis

## ATP Hydrolysis의 자유에너지 변화

ATP는 세포의 보편적 에너지 화폐이다. ATP의 유용성은 **가수분해 반응이 매우 비자발적인 평형으로부터 멀리 유지된다**는 데 있다.

$$\text{ATP} + \text{H}_2\text{O} \rightarrow \text{ADP} + P_i \quad \Delta G^\circ = -30.5 \text{ kJ/mol}$$

그러나 세포 내 실제 조건(ATP가 ADP, Pᵢ보다 훨씬 높은 농도)에서는:
$$\Delta G \approx -46 \sim -54 \text{ kJ/mol}$$

![[_page_26_Figure_4.jpeg]]
*Figure 14-30: ATP 가수분해 반응의 자유에너지와 평형 간 관계.*

- **ΔG** (실제 자유에너지 변화) = ΔG° + RT ln([ADP][Pᵢ]/[ATP])
- 세포는 높은 [ATP]/([ADP]·[Pᵢ]) 비율을 유지하여 ATP hydrolysis를 **평형에서 매우 멀리** 유지
- 이 큰 음수의 ΔG가 많은 세포 반응을 driving하는 원동력

---

## 산화적 인산화에서의 ATP 생산

### NADH, FADH₂로부터 ATP 수율 (산화적 인산화)

| 전자 공여체 | 원천 | ATP yield (pair당) |
|------------|------|-------------------|
| **NADH** (미토콘드리아) | Citric acid cycle, pyruvate oxidation 등 | **~2.5 ATP** |
| **FADH₂** / NADH (세포질) | Succinate dehydrogenase, glycolysis | **~1.5 ATP** |

- FADH₂와 cytosolic NADH는 Complex I을 우회하므로 더 적은 ATP 생산

### Glucose 1분자 완전 산화 시 총 ATP

| 단계 | 위치 | 생산물 |
|------|------|--------|
| Glycolysis | 세포질 | 2 ATP + 2 NADH |
| Pyruvate oxidation | 미토콘드리아 matrix | 2 NADH |
| Citric acid cycle | 미토콘드리아 matrix | 6 NADH + 2 FADH₂ + 2 GTP |
| **산화적 인산화** | 미토콘드리아 inner membrane | **~26 ATP** |
| **합계** | | **~30 ATP** |

### Palmitoyl CoA 1분자 산화 시 → [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Net result of energy metabolism|Net result of energy metabolism 참조]]

---

## 하루 ATP 회전량

- 일반 성인: 하루 **~50 kg** ATP 회전
- 마라톤 선수: 수백 kg까지 증가
- 즉, ATP 분자 자체는 재사용 — 합성·가수분해 사이클을 수천 번 반복

---

## Proton-motive force와 ATP synthesis 연결

[[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Chemiosmotic coupling|Chemiosmotic coupling]]에서 설명하듯, ETC가 형성한 electrochemical proton gradient (~180 mV)가 [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex V (ATP synthase)|ATP synthase]]를 구동한다.

- ΔG for H⁺ translocation = 구동력
- ΔG for ATP synthesis = 피구동 반응
- 두 반응이 allosteric coupling을 통해 연결

---

## ATP/ADP Transport

![[Cell Biology/출처/md converted/Chapter 14/_page_30_Figure_6.jpeg]]
*Figure 14-35: ADP/ATP carrier protein. Matrix의 ATP를 intermembrane space로 내보내고, ADP를 matrix 안으로 수입.*

- **ADP/ATP carrier protein** (mitochondrial carrier family): inner membrane 통해 ATP와 ADP를 교환
  - ATP⁴⁻ → matrix 밖으로 (electrochemical gradient에 의해 구동: ATP가 더 음전하)
  - ADP³⁻ → matrix 안으로
- 합성된 ATP가 세포질로 빠져나가 에너지 수요 충족

---

## 관련 노트

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex V (ATP synthase)|Complex V (ATP synthase)]] — 분자 구조와 rotary catalysis 메커니즘
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Chemiosmotic coupling|Chemiosmotic coupling]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Net result of energy metabolism|Net result of energy metabolism]]
