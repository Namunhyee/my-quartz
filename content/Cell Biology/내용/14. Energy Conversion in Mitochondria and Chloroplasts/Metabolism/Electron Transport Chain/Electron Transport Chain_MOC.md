# Electron Transport Chain

## 개요

Electron Transport Chain (ETC, 전자전달계) = **Respiratory chain**은 미토콘드리아 inner membrane의 crista에 위치하며, NADH와 FADH₂의 전자를 O₂로 전달하면서 proton gradient를 형성하는 계이다.

> "The respiratory chain is embedded in the crista membrane portion of the inner mitochondrial membrane. It contains three respiratory enzyme complexes through which electrons pass on their way from NADH to O₂." — Chapter 14

![[Cell Biology/출처/md converted/Chapter 14/_page_17_Figure_2.jpeg]]
*Figure 14-18: 미토콘드리아 전자전달계의 세 proton pump와 전자 경로.*

## 구성 요소

| Complex | 이름 | 역할 | Proton pumping |
|---------|------|------|---------------|
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex I (NADH dehydrogenase)\|Complex I]] | NADH dehydrogenase | NADH → ubiquinone | **4 H⁺/e⁻** |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex II (Succinate dehydrogenase)\|Complex II]] | Succinate dehydrogenase | Succinate → ubiquinone | **없음** |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex III (cytochrome c reductase)\|Complex III]] | Cytochrome c reductase | Ubiquinol → cytochrome c | **2 H⁺/e⁻** |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex IV (cytochrome c oxidase)\|Complex IV]] | Cytochrome c oxidase | Cytochrome c → O₂ | **1 H⁺/e⁻** |
| [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex V (ATP synthase)\|Complex V]] | ATP synthase | H⁺ gradient → ATP | (역방향: ATP 합성) |

## 전자 흐름 경로

```
NADH
  → Complex I
      → Ubiquinone (Q) ← Complex II (succinate에서도)
          → Complex III
              → Cytochrome c
                  → Complex IV
                      → O₂ + 4H⁺ → 2 H₂O
```

## Mobile Electron Carriers

- **Ubiquinone (Coenzyme Q, Q)**: 지질 이중층 내에서 자유롭게 이동. Complex I 또는 II에서 Complex III로 전자 운반
- **Cytochrome c**: crista space의 작은 수용성 단백질. Complex III에서 Complex IV로 전자 운반 (1개씩)

## Redox Potential과 에너지

![[Cell Biology/출처/md converted/Chapter 14/_page_18_Picture_2.jpeg]]
*Figure 14-19: 전자전달계를 따라 증가하는 Redox potential.*

- NADH (E'₀ = −320 mV) → O₂ (E'₀ = +820 mV)
- ΔE'₀ = 1140 mV → 전자 2개당 ΔG° ≈ −219 kJ/mol
- 이 에너지가 세 단계에서 proton pumping에 사용됨

## Supercomplex 형성

![[Cell Biology/출처/md converted/Chapter 14/_page_23_Picture_2.jpeg]]
*Figure 14-27: 소 심장 미토콘드리아의 respiratory-chain supercomplex.*

세 proton pump (Complex I, III, IV)는 crista membrane에서 **supercomplex**를 형성:
- 전자 전달 효율 향상
- 위험한 redox 부반응 방지
- **Cardiolipin** 및 특수 단백질에 의존

## 내용 목차

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Chemiosmotic coupling|Chemiosmotic coupling]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/proton pumping|Proton pumping]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex I (NADH dehydrogenase)|Complex I (NADH dehydrogenase)]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex II (Succinate dehydrogenase)|Complex II (Succinate dehydrogenase)]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex III (cytochrome c reductase)|Complex III (cytochrome c reductase)]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex IV (cytochrome c oxidase)|Complex IV (cytochrome c oxidase)]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/Complex V (ATP synthase)|Complex V (ATP synthase)]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Electron Transport Chain/ATP synthesis|ATP synthesis]]
