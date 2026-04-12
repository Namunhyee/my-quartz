# Chapter 10: Membrane Structure 정리본

## 이번 강의 범위

1. 세포막 구성 성분 (Lipids: Phospholipid, Cholesterol, Glycolipid)
2. Amphiphilic molecule과 bilayer 형성
3. Lipid bilayer 특성 (Fluidity, Asymmetry)
4. Membrane protein (Integral / Peripheral, α-helix / β-barrel)
5. Hydropathy plot
6. Raft domain

---

## 1. 세포막 구성 성분 개요

[[Major lipids in cell membrane]] · [[Lipid bilayer]] 참조

세포막은 **phospholipid bilayer**를 기본 골격으로 하며, 다음 네 가지 주요 성분으로 구성된다.

| 성분 | 특징 |
|------|------|
| **Phospholipid** | 가장 풍부한 지질. Polar head + 2개 hydrophobic tail. Bilayer의 기본 구조 제공 |
| **Cholesterol** | Rigid ring 구조. 단일 hydroxyl group. Fluidity 조절, permeability barrier 강화 |
| **Glycolipid** | Sugar 포함. Noncytosolic monolayer에만 존재. Cell recognition 기능 |
| **Membrane protein** | 막 기능 대부분 수행. 전형적 plasma membrane = mass의 약 50% |

- **Protein : Lipid Mass Ratio = 1 : 1** (단, protein 1분자당 약 50개의 lipid)
- 동물 genome에서 약 **30%**가 membrane protein을 encode

### 막 면적 비율 (진핵세포 내)

| 소기관 | 막 면적 비율 |
|--------|------------|
| **ER** | 50~60% |
| **Mitochondria** | 20~30% |
| **Golgi apparatus** | 7% |
| **Plasma membrane** | 2~5% |

---

## 2. Amphiphilic Molecule과 Bilayer 형성

[[Amphiphilic molecule]] · [[Phospholipid]] · [[Lipid bilayer]] 참조

![[Cell Biology/출처/md converted/Chapter 10/_page_4_Figure_6.jpeg]]
*Fig 1. Amphiphilic molecule의 구조와 수용액에서 자발적으로 형성하는 구조 (micelle vs bilayer)*

**Amphiphilic molecule**은 **hydrophilic head**(polar/charged)와 **hydrophobic tail**(nonpolar)을 모두 갖는 분자이다.

- **Hydrophobic effect**: 소수성 분자가 물에 노출되면 인접 물 분자가 icelike cage로 재배열 → free energy 증가 (entropic cost). 이를 최소화하기 위해 소수성 부분끼리 cluster 형성.
- Phospholipid는 **cylinder-shaped** → 수용액에서 자발적으로 **lipid bilayer** 형성
- Detergent 등 cone-shaped 분자 → **micelle** 형성

### Self-sealing 특성

![[Cell Biology/출처/md converted/Chapter 10/_page_5_Figure_8.jpeg]]
*Fig 2. Phospholipid bilayer의 self-sealing: free edge가 energetically unfavorable하여 자발적으로 sealed compartment 형성*

1. Bilayer에 tear 발생 → free edge (hydrophobic tail 물 노출) → energetically unfavorable
2. Lipid가 자발적으로 재배열하여 free edge 제거
3. **결과**: Sealed compartment 형성 → 세포의 기본 단위 성립

---

## 3. Lipid Bilayer의 특성

### 3-1. Fluidity (유동성)

[[Fluidity of a lipid bilayer]] · [[Cholesterol]] 참조

![[Cell Biology/출처/md converted/Chapter 10/_page_6_Figure_1.jpeg]]
*Fig 3. Lipid molecule의 운동 유형 (lateral diffusion, rotational diffusion, flexion, flip-flop)*

Lipid bilayer는 **2차원 fluid**이다. 개별 lipid molecule의 운동:

| 운동 유형 | 속도 | 특징 |
|-----------|------|------|
| **Lateral diffusion** | ~10⁷ times/sec | Monolayer 내 측면 이동. 가장 빠름 |
| **Rotational diffusion** | 빠름 | 긴 축 중심 회전 |
| **Flexion** | 빠름 | 꼬리 유연 운동 |
| **Flip-flop** | 수 시간 척도 | 한 monolayer → 반대편. 매우 드묾. Hydrophilic head가 hydrophobic core 통과 필요 → energetically disfavored |

- **예외**: [[Cholesterol]]은 단일 hydroxyl group만 통과하면 되므로 flip-flop이 빠름
- Membrane fluidity 실험 검증: **FRAP** 기법으로 정량 측정 가능
- Mouse-human 세포 fusion 실험: membrane protein이 퍼져나감 → lateral diffusion 실험적 검증

![[Cell Biology/출처/md converted/Chapter 10/_page_25_Picture_2.jpeg]]
*Fig 4. 인간-마우스 세포 융합 실험: membrane protein의 diffusion 확인*

#### Fluidity 결정 요인

| 요인 | 효과 |
|------|------|
| Hydrocarbon chain이 **짧을수록** | Phase transition 온도 낮아짐 → 유동성 증가 |
| **cis-Double bond** 증가 | Chain에 kink 생성 → packing 방해 → 유동성 증가. Bilayer가 더 얇아짐 |
| **Cholesterol** (고온 시) | Hydrocarbon chain 첫 CH₂ group의 mobility 감소 → 과유동성 억제 |
| **Cholesterol** (저온 시) | Hydrocarbon chain의 결정화(crystallization) 방지 → freeze 억제 |

> **중요**: Cholesterol은 온도에 따라 역할이 다름. "온도에 상관없이 경화를 차단한다"는 틀림.

#### 온도 적응 (bacteria, yeast 등 단세포 생물)

- 온도가 **하락**할 때: cis-double bond가 많은 fatty acid를 더 많이 합성 → bilayer fluidity 유지
- Membrane lipid의 **fatty acid 조성(길이, 포화정도)**을 조절하여 상대적으로 일정한 유동성 유지

![[Cell Biology/출처/md converted/Chapter 10/_page_6_Figure_8.jpeg]]
*Fig 5. cis-double bond가 hydrocarbon chain의 packing에 미치는 영향 (kink 형성, 얇아진 bilayer)*

---

### 3-2. Asymmetry (비대칭성)

[[Asymmetry of the lipid bilayer]] 참조

![[Cell Biology/출처/md converted/Chapter 10/_page_9_Figure_7.jpeg]]
*Fig 6. Human red blood cell membrane의 phospholipid 비대칭 분포*

Lipid bilayer의 두 monolayer는 **지질 조성이 현저히 다르다.**

#### Human Red Blood Cell 예

| Monolayer | 지질 |
|-----------|------|
| **Outer (noncytosolic)** | Phosphatidylcholine (choline), Sphingomyelin (choline) |
| **Inner (cytosolic)** | Phosphatidylethanolamine, Phosphatidylserine |

- **Charge 차이**: Negatively charged phosphatidylserine이 inner monolayer에 집중 → inner monolayer에 **net negative charge** 존재
- **Glycolipid**: 가장 극단적인 asymmetry → **noncytosolic monolayer에서만 독점적으로 발견**
  - Golgi lumen에서 sugar group 추가 (세포 외부와 topologically equivalent) → plasma membrane 전달 시 cell surface에 노출
- **Cholesterol**: 양쪽 monolayer에 대략 균등하게 분포

#### Asymmetry 생성 메커니즘

- Glycolipid: Golgi apparatus lumen에서 합성 → noncytosolic 면에 위치
- Phospholipid: **Flippase**와 **Scramblase** (phospholipid translocator)가 monolayer 간 이동 촉매

#### Apoptosis와 Asymmetry — Live vs Dead Cell 구별

- **정상 세포**: Phosphatidylserine이 **inner (cytosolic) monolayer에만** 위치
- **Apoptosis** 시: Flippase 비활성화 → phosphatidylserine이 **outer monolayer로 translocation**
- Cell surface에 노출된 PS → macrophage에 **eat-me signal** 전달 → phagocytosis 유도
- **PS translocation이 실패할 경우**: eat-me signal 미노출 → macrophage 인식 불가 → 세포 rupture → DNA·단백질 누출 → autoantibody 결합 → **자가면역 반응** 유발

---

## 4. Membrane Protein

[[Membrane protein]] · [[α-helical Conformation in Membrane Proteins]] · [[β-Barrels Forming Large Channels]] 참조

![[Cell Biology/출처/md converted/Chapter 10/_page_12_Picture_7.jpeg]]
*Fig 7. Membrane protein이 lipid bilayer와 결합하는 다양한 방식 (1~10)*

### 결합 방식

| 유형 | 설명 | 예시 번호 |
|------|------|----------|
| **Single-pass transmembrane** | 단일 α-helix로 bilayer 횡단 | 1 |
| **Multipass transmembrane** | 다중 α-helix로 bilayer 횡단 | 2 |
| **β-barrel transmembrane** | Rolled-up β sheet로 bilayer 횡단 | 5 |
| **Lipid-anchored (cytosolic)** | Amphiphilic α-helix 또는 fatty acid/prenyl chain으로 고정 | 6, 7 |
| **GPI-anchored (noncytosolic)** | Oligosaccharide linker를 통해 phosphatidylinositol에 부착 | 8 |
| **Membrane-associated** | 다른 membrane protein과 noncovalent interaction으로 결합 | 9, 10 |

### Transmembrane α-Helix 구조

- 약 **20-30개의 소수성 아미노산**으로 구성
- Peptide bond 자체는 친수성 → **연속적 소수성 배치**로 lipid 환경에 삽입 가능
- **[[Hydropathy plot]]**에서 positive값(+)으로 확인 가능
- **Pore 형성 시 amphiphilic helix**: 한쪽 면은 친수성 (pore 안쪽), 반대쪽은 소수성 (lipid 접촉)
  - 이때 **모든 아미노산이 소수성일 필요 없음** → hydropathy plot으로 TM 개수 측정 불가
- 여러 helix가 인접할 때도 맞닿는 면은 소수성일 필요 없음

![[Cell Biology/출처/md converted/Chapter 10/_page_16_Figure_7.jpeg]]
*Fig 8. 여러 TM α-helix가 모여 기능하는 예: domain/protein이 유동적으로 움직이다가 신호를 받아 결합*

### Transmembrane β-Barrel 구조

![[Cell Biology/출처/md converted/Chapter 10/_page_17_Picture_2.jpeg]]
*Fig 9. β-barrel transmembrane protein (porin 등) - 주로 박테리아, 미토콘드리아에 존재*

- Multiple β-strand가 rolled-up β sheet (β barrel) 형성
- 막 횡단에 **10개 이하의 아미노산**으로 충분 (extended β strand)
- 격번 아미노산의 side chain만 소수성이면 됨
- **Porin** 등에서 발견 (주로 박테리아, 미토콘드리아)

### Glycosylation

![[Cell Biology/출처/md converted/Chapter 10/_page_19_Figure_2.jpeg]]
*Fig 10. Carbohydrate layer (glycocalyx): glycolipid와 glycoprotein의 oligosaccharide가 cell surface를 덮음*

- Sugar residue가 **ER과 Golgi lumen**에서 추가 (oligosaccharyl transferase에 의해 asparagine으로)
- **Oligosaccharide chain이 항상 membrane의 noncytosolic side에 존재**
- Disulfide bond도 noncytosolic surface에만 위치
- Cytosol은 **reducing environment** → cytosolic domain의 sulfhydryl group은 disulfide bond 형성 안 함

### 이동성 제한

- Membrane protein은 lateral diffusion과 rotational diffusion이 가능하지만,
- 세포는 특정 membrane protein을 **고정시키거나 특정 domain에 국한**시키는 방법을 보유
  - [[Restricting domain of membrane protein]] 참조 (cortical cytoskeleton 등)

---

## 5. Hydropathy Plot

[[Hydropathy plot]] 참조

**Hydropathy plot**: Protein의 amino acid sequence로부터 membrane-spanning segment를 예측하는 방법

### 원리

1. 고정 크기의 segment(보통 10-20 AA)를 polypeptide chain을 따라 이동시키며
2. 각 segment를 **nonpolar solvent → 물**로 transfer하는 free energy 계산
3. **Positive값** = transfer에 free energy 필요 = 해당 segment가 **hydrophobic** (TM 영역 예측)

### 예시

| 단백질 | TM helix 수 | Hydropathy plot 특징 |
|--------|------------|----------------------|
| **Glycophorin** | 1개 | Peak 1개 |
| **Bacteriorhodopsin** | 7개 | Peak 7개 |

### 한계

| 상황 | 이유 | 결과 |
|------|------|------|
| **β-barrel** | 10개 이하 AA로 막 횡단 가능, 격번 AA만 소수성이면 됨 | Peak 식별 불가 |
| **여러 helix가 인접** (끼어있는 helix) | 모든 AA가 소수성일 필요 없음 | TM 개수 측정 불가 |
| **Partial membrane insertion** | Bilayer를 완전히 span하지 않는 region 존재 | 식별 불가 |

![[Cell Biology/출처/md converted/Chapter 10/_page_16_Picture_9.jpeg]]
*Fig 11. Aquaporin water channel의 short α-helix: bilayer를 halfway만 span (hydropathy plot으로 식별 불가)*

---

## 6. Raft Domain

[[Raft domain]] 참조

![[Cell Biology/출처/md converted/Chapter 10/_page_8_Figure_1.jpeg]]
*Fig 12. Artificial bilayer에서의 lateral phase separation: (A) PC:SM=1:1 균일, (B) PC:SM:Cholesterol=1:1:1 → 2상 분리*

**Lipid raft (raft domain)**: Plasma membrane의 specialized domain. **Cholesterol + sphingolipid**가 풍부하게 집중된 영역.

### 구성 성분

- **[[Cholesterol]]** 농축
- **Sphingolipid** 농축 (sphingomyelin 포함)
- **[[Glycolipid]]** 농축
- **GPI-anchored protein** 농축
- 일부 transmembrane protein

### 형성 원리

- Sphingolipid의 특성: 긴 포화 hydrocarbon chain, head group에서 강력한 수소결합 → **cholesterol과 소수성 결합에 유리**
- Cholesterol + sphingolipid가 cluster → phase separation → raft domain 형성
- 살아있는 세포에서는 **일시적이고 동적인** 방식으로 형성/해체

### 기능

1. **Cell signaling**: Signal transduction에 필요한 protein 집중 → extracellular signal의 intracellular signal로의 효율적 변환
2. **Membrane traffic**: Vesicle 형성 시 특정 protein 조직화 및 집중
3. **Cell adhesion**: GPI-anchored protein의 localization

---

## 7. 주요 지질 조성 비교

[[Phospholipid]] · [[Major lipids in cell membrane]] 참조

| 막 종류 | Cholesterol | Phosphatidylethanolamine | Phosphatidylserine | Phosphatidylcholine | Sphingomyelin | Glycolipid |
|---------|-------------|--------------------------|-------------------|---------------------|---------------|------------|
| 간세포 plasma membrane | 17% | 7% | 4% | 24% | 19% | 7% |
| Red blood cell plasma membrane | 23% | 18% | 7% | 17% | 18% | 3% |
| Myelin | 22% | 15% | 9% | 10% | 8% | **28%** |
| Mitochondrion | **3%** | 28% | 2% | **44%** | 0% | Trace |
| ER | 6% | 17% | 5% | 40% | 5% | Trace |
| **E. coli (bacteria)** | **0%** | **70%** | Trace | 0% | 0% | 0% |

- **박테리아**: Cholesterol 없음. E. coli는 phosphatidylethanolamine 70%로 단일 지질 우세
- **미토콘드리아**: Cholesterol 극히 낮음 (3%). Sphingomyelin 없음
- **Myelin**: Glycolipid 28%로 높음 (신경 전기 절연 특화)

---

## 전체 비교 요약

| 항목 | Phospholipid | Cholesterol | Glycolipid |
|------|-------------|-------------|------------|
| 비율 | 가장 풍부 | 진핵세포 plasma membrane에 高 | 소량 |
| 위치 | 양쪽 monolayer | 양쪽 균등 | **Noncytosolic monolayer만** |
| 기능 | Bilayer 형성, fluidity 조절, 신호 | Fluidity 조절, permeability 강화, raft | Cell recognition, 보호, 신호 |
| 골격 | Glycerol 또는 sphingosine | Steroid ring | Sphingosine (동물) |

| 특성 | α-Helix TM | β-Barrel TM |
|------|------------|-------------|
| AA 수 | **20-30개** 소수성 연속 | **10개 이하** (격번 소수성) |
| 발견 위치 | 진핵세포 포함 모든 세포 | 주로 박테리아, 미토콘드리아 |
| Hydropathy plot | Peak로 예측 가능 | **Peak 형성 안 함 → 예측 불가** |
| 예시 | Glycophorin, Bacteriorhodopsin | Porin |

| Fluidity 조절 요인 | 유동성 증가 | 유동성 감소 |
|-------------------|-----------|-----------|
| Chain 길이 | 짧을수록 | 길수록 |
| Unsaturation (cis-double bond) | 많을수록 (kink) | 없을수록 |
| Cholesterol (고온) | — | Mobility 감소 |
| Cholesterol (저온) | Freeze 방지 (결정화 억제) | — |
