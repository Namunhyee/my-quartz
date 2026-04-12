# 세포생물학 10과 — Membrane Structure 정리본 (2주차)

> 슬라이드 기반 핵심 정리 | 관련 노트: [[000_Ch10_Membrane Structure_정리본]] · [[001_Chapter10_MOC]]

---

## 1. Membrane Structure 개요 (슬라이드 1)

[[Major lipids in cell membrane]] · [[Lipid bilayer]] 참조

세포막은 **phospholipid bilayer**를 기본 골격으로 한다.

### 주요 구성 성분

| 성분 | 역할 |
|------|------|
| **[[Phospholipid]]** | bilayer의 기본 골격 형성 (cylinder-shaped → bilayer 자발 형성) |
| **[[Cholesterol]]** | 막 유동성 완충 조절 (고온: 유동성 ↓ / 저온: 결정화 방지) |
| **[[Glycolipid]]** | noncytosolic leaflet에만 분포; 세포 인식·신호 수용체 역할 |
| **[[Membrane protein]]** | 막 기능 담당; 전체 genome 단백질의 약 30% |

**Protein : Lipid 질량비 ≈ 1 : 1** → protein 1개당 약 50개의 lipid molecule

---

## 2. Amphiphilic Molecules (슬라이드 2)

[[Amphiphilic molecule]] · [[Micelle]] 참조

### Phospholipid의 구조

- **Hydrophilic head**: phosphate + head group (charged/polar) → 물과 전정기적 상호작용 및 수소결합
- **Hydrophobic tail**: 2개의 fatty acid hydrocarbon chain → 물과 favorable interaction 불가

### 수용액에서의 자발적 배열 — Hydrophobic Effect

물속에서 hydrophobic tail이 노출되면 인접 water molecule이 **icelike cage** 구조로 재배열 → entropic free energy 증가 → 자발적 clustering

| 분자 모양 | 형성 구조 | 예시 |
|----------|---------|------|
| **Cone-shaped** (head > tail) | **Micelle** | Detergent |
| **Cylinder-shaped** (head ≈ tail) | **Lipid bilayer** | Phospholipid |

### Self-sealing 특성

Bilayer에 tear 발생 → free edge에서 hydrophobic tail 노출 (energetically unfavorable) → 자발적으로 닫혀 **sealed compartment** 형성 → 생명의 compartmentalization 기반

---

## 3. Lipid Bilayer Properties (슬라이드 3)

[[Fluidity of a lipid bilayer]] · [[Asymmetry of the lipid bilayer]] 참조

### 3.1 유동성 (Fluidity)

지질 분자의 4가지 운동:

1. **Lateral diffusion** — 같은 monolayer 내에서 빠른 위치 교환 (~10⁷/sec)
2. **Rotational diffusion** — 긴 축 중심 회전
3. **Flexion** — 꼬리 부분의 유연한 굽힘
4. **Flip-flop** — 반대편 monolayer로 이동 (수 시간 단위; hydrophilic head가 hydrophobic core 통과 필요 → 매우 드묾)

#### Phase transition 온도를 낮추는 조건 (유동성 증가)

- Hydrocarbon chain이 **짧을 때** (van der Waals 상호작용 감소)
- Chain에 **cis-double bond** 존재 시 → kink 형성 → chain packing 방해

#### Cholesterol의 역할 (유동성 완충)

| 조건 | 효과 |
|------|------|
| **고온** | Hydrocarbon chain 이동성 억제 → mobility ↓, permeability ↓ |
| **저온** | 결정화(crystallization) 방지 → fluid 상태 유지 |

→ Cholesterol은 **체온 완충제**: 막이 너무 딱딱해지거나 너무 유동적이 되는 것 모두 방지

#### 온도 적응 (단세포 생물)

온도 하락 시 → cis-double bond를 더 많이 가진 fatty acid 합성 → 유동성 저하 방지

#### 막단백질 이동성 실험적 증명

- **Frye-Edidin Experiment (1970)**: 마우스(초록 형광) + 인간(빨강 형광) 세포 융합 → 37°C, 40분 후 완전 혼합 → **막단백질의 lateral diffusion** 확인
- **FRAP** (Fluorescence Recovery After Photobleaching): lateral diffusion rate 정량 측정

---

### 3.2 비대칭성 (Asymmetry)

Human RBC의 lipid 비대칭 분포:

| Leaflet | 주요 지질 |
|---------|---------|
| **Noncytosolic (outer)** | PC (Phosphatidylcholine), SM (Sphingomyelin), Glycolipid |
| **Cytosolic (inner)** | PE (Phosphatidylethanolamine), **PS (Phosphatidylserine)** |

- **PS**: 유일하게 net negative charge → cytosolic leaflet 집중
- **Glycolipid**: noncytosolic monolayer에만 독점 분포 (가장 극단적 asymmetry)
  - Golgi lumen에서 sugar group 추가 → 세포 외부와 topologically equivalent → plasma membrane 전달 시 cell surface 노출

#### Flippase & Scramblase

- **Flippase (ATP 필요)**: PS, PE를 outer → inner leaflet으로 능동 수송 → asymmetry 유지
- **Scramblase**: 양방향 무작위 flip-flop → asymmetry 파괴

#### Apoptosis와 PS 노출

1. Flippase 비활성화
2. PS → outer (extracellular) monolayer로 translocation
3. Cell surface에 PS 노출 → **eat-me signal**
4. Macrophage가 인식 → phagocytosis (정상 apoptosis)

---

## 4. Membrane Proteins (슬라이드 4)

[[Membrane protein]] · [[α-helical Conformation in Membrane Proteins]] · [[β-Barrels Forming Large Channels]] · [[Hydropathy plot]] 참조

### 4.1 막단백질 분류

**Transmembrane (Integral) protein:**

| 유형 | 구조 | 특징 |
|------|------|------|
| **Single-pass** | 단일 α-helix TM domain | 약 20-30개의 연속 소수성 AA |
| **Multipass** | Multiple α-helix | 7-pass (Bacteriorhodopsin 등) |
| **β-barrel** | Rolled-up β-sheet | 외막 채널 형성; ~10개 이하 AA로 막 통과 |

**Peripheral protein (Lipid-anchored / Membrane-associated):**

- Amphipathic α-helix로 cytosolic monolayer 부착
- Covalent lipid chain ([[Lipid anchor]]: fatty acid, prenyl group)
- GPI anchor (oligosaccharide linker → noncytosolic surface)
- 다른 막단백질과의 noncovalent interaction으로 간접 결합

### 4.2 Hydropathy Plot

TM 영역 예측 방법:

1. 고정 크기 segment (보통 10-20 AA)를 polypeptide chain 따라 이동
2. 각 segment를 nonpolar solvent → 물로 transfer하는 데 필요한 **free energy 계산**
3. **Positive value** = hydrophobic segment (물로 transfer에 에너지 필요)
4. Peak 위치 = TM segment 위치

**예시:**
- **Glycophorin**: peak 1개 → single TM α-helix
- **Bacteriorhodopsin**: peak 7개 → 7-pass TM α-helix

**한계:**
- **β-barrel 식별 불가** — β strand로 막 통과 시 10개 이하 AA로 충분, 격번 AA만 소수성 → 명확한 peak 미형성
- Partial membrane insertion segment 식별 불가 (e.g., Aquaporin의 halfway-spanning helix)

### 4.3 Glycosylation (당화)

- Sugar residue가 **ER과 Golgi lumen**에서 **asparagine**으로 추가 (N-linked glycosylation; Oligosaccharyltransferase 촉매)
- **Oligosaccharide chain은 항상 noncytosolic side에만 존재**
- Disulfide bond도 noncytosolic surface에서만 형성
- **Cytosol = reducing environment** → SH group을 reduced form 유지 → cytosolic domain에서 disulfide bond 형성 안 됨

---

## 5. Raft Domain (슬라이드 5)

[[Raft domain]] 참조

### 5.1 Lipid Raft 형성 원리

Artificial bilayer 실험:
- PC + SM (1:1) → 균일한 bilayer
- PC + SM + **Cholesterol** (1:1:1) → **두 개의 phase 분리** → Cholesterol이 sphingolipid-rich ordered phase 안정화

### 5.2 Lipid Raft 구성 성분

- **Cholesterol** 농축
- **Sphingolipid** 농축
- **Glycolipid** 농축
- **GPI-anchored protein** 농축
- 일부 transmembrane protein

**Sphingolipid가 raft에 집중되는 이유:**
- 포화 탄화수소 사슬 → 직선형 구조 → 밀착 packing 가능
- Cholesterol과 소수성 결합이 좋음
- van der Waals 상호작용으로 raft 형성 유리

### 5.3 Lipid Raft의 특성

| 특성 | 내용 |
|------|------|
| **일시적 (Transient)** | 필요에 따라 형성/해체 |
| **동적 (Dynamic)** | Protein-protein interaction으로 조절 |
| **작은 규모 (Nanoscale)** | 수 nm ~ 수백 nm |
| **기능 특화** | 특정 cellular process 조직화 |

### 5.4 기능

1. **신호전달 (Cell Signaling)**: signaling protein 집중 → extracellular signal의 intracellular signal 변환 효율화
2. **Membrane Traffic**: vesicle에서 protein 조직화 및 transport 촉진
3. **Cell Adhesion**: GPI-anchored protein localization 조절

---

## 핵심 정리 요약

| 주제 | 핵심 내용 |
|------|---------|
| 세포막 구성 | Phospholipid bilayer + Cholesterol + Glycolipid + Membrane protein |
| Amphiphilic 원리 | Hydrophobic effect → cone-shaped → micelle / cylinder-shaped → bilayer |
| 유동성 조절 | Fatty acid 불포화도·길이 + Cholesterol (고온: 유동성↓ / 저온: 결정화↓) |
| Asymmetry | Outer: PC, SM, Glycolipid / Inner: PE, PS (net negative charge) |
| Integral protein | α-helix TM domain (20-30 AA); Hydropathy plot으로 예측 |
| Peripheral protein | 표면 결합; noncovalent interaction |
| Lipid raft | Cholesterol + Sphingolipid 풍부; 신호전달 플랫폼 |

---

## 관련 노트

- [[Phospholipid]] · [[Cholesterol]] · [[Glycolipid]] · [[Major lipids in cell membrane]]
- [[Amphiphilic molecule]] · [[Micelle]] · [[Lipid bilayer]]
- [[Fluidity of a lipid bilayer]] · [[Asymmetry of the lipid bilayer]]
- [[Membrane protein]] · [[Hydropathy plot]] · [[Lipid anchor]]
- [[α-helical Conformation in Membrane Proteins]] · [[β-Barrels Forming Large Channels]]
- [[Raft domain]] · [[Lipid droplet]]
- [[Cortical cytoskeleton]] · [[Restricting domain of membrane protein]] · [[Membrane bending protein]]
