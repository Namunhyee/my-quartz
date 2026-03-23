# Lipid Anchor

Lipid anchor는 protein을 membrane에 부착시키는 covalently attached lipid group이다. 이러한 protein은 cytosol에서 수용성 protein으로 만들어진 후, ==lipid group의 공유 결합으로 membrane에 anchored된다.==
==신호를 받아 lipid와 결합이 형성되어 기능하는 단백질들이 많다==
## Lipid Anchor의 종류

### 1. Fatty Acid Anchor(3번째 것)

![[Cell Biology/출처/md converted/Chapter 10/_page_14_Figure_1.jpeg]]

Fatty acid chain을 통한 membrane attachment는 두 가지 형태가 있다:

#### ==Myristoyl Anchor==

**구조:**
- 14-carbon saturated fatty acid chain (myristic acid)
- ==Amide linkage==를 통해 ==N-terminal glycine==에 부착

**부착 시기:**
- Ribosome에서 protein 합성 중
- N-terminal amino group에 myristic acid 추가

**예시:**
- Src family의 모든 cytoplasmic protein tyrosine kinase
- 이 방식으로 myristoylated됨

#### ==**Palmitoyl Anchor**==

**구조:**
- 16-carbon saturated fatty acid chain (palmitic acid)
- ==Thioester linkage(황)를 통해 cysteine에 부착==

**특성:**
- 두 번째 lipid modification으로 종종 사용됨
- Single lipid anchor만으로는 membrane attachment가 강하지 않음

**예시:**
- 대부분의 Src kinase에서
- Myristic acid와 palmitic acid 모두 부착됨

**동적 조절:**
1. Extracellular signal에 반응하여 palmitic acid 부착
2. Kinase를 plasma membrane으로 모집하는데 도움
3. Signaling pathway가 꺼지면
4. Palmitic acid 제거
5. Kinase가 cytosol로 돌아감

### 2. ==Prenyl Anchor(3번째 것)==

![[Cell Biology/출처/md converted/Chapter 10/_page_14_Figure_1.jpeg]]

**구조:**
- Prenyl chain (==farnesyl 또는 더 긴 geranylgeranyl chain==)
- ==Thio**ether** linkage를 통해 cysteine residue에 부착==[^기출_중간_2023_20][^기출_중간_2022_16]
- Cysteine는 처음에 protein의 C-terminus로부터 4번째 residue에 위치
#### <mark style="background:#fff88f">2주차 형성평가</mark>
![[_page_1_Figure_25.jpeg]]
MKD(mevalonate kinase deficiency)라는 병은 mevalonate kinase에 돌연변이가 발생해 farnesyl을 만들어낼 수 없게 된다. MKD의 발병 원인을 추론하라

> [!NOTE] Title
> **Mevalonate Kinase의 역할:**
> 
Mevalonate Kinase는 Mevalonate → Mevalonate-5-phosphate 반응을 촉진하는 효소로, **이소프레노이드(Isoprenoid) 합성 경로**의 핵심 단계에 관여한다. 이 경로를 통해 **Farnesyl pyrophosphate** 및 **Geranylgeranyl pyrophosphate**가 생성된다.
**HIDS 발병 원리 (Lipid anchor 관점):**
1. Mevalonate Kinase 기능 상실 → Isoprenoid 합성 불가
2. Farnesyl 및 Geranylgeranyl 그룹 생성 불가
3. [[Cell Biology/내용/10. Membrane Structure/Structures in membrane/Lipid anchor|Lipid anchor]] 중 **Farnesylation** 및 **Geranylgeranylation** 불가
4. Ras, Rho, Rab 등 **신호전달 단백질**들이 세포막에 **결합(anchoring)하지 못함**[^기출_중간_2023_20_②]
5. 단백질이 세포막에 고정되지 않아 활성 형태(GTP-결합 상태)로의 전환 및 **신호 전달 불가**[^기출_중간_2023_20_⑤]
6. 특히 면역세포의 신호전달 이상 → **염증 반응 과활성화** → HIDS 증상(주기적 발열, 염증)







# ~~[[GPI Anchor]]~~

### 구조와 형성

![[Cell Biology/출처/md converted/Chapter 10/_page_12_Picture_7.jpeg]]

**Glycosylphosphatidylinositol (GPI) anchor:** 8번
- Protein을 noncytosolic surface에 부착
- Oligosaccharide linker를 통해
- Outer monolayer의 phosphatidylinositol에 연결

**형성 과정:**
1. Protein이 처음 ER에서 만들어지고 삽입됨
2. C-terminus에 single transmembrane segment 보유 (예시 4와 유사)
3. ER에 있는 동안
4. Protein의 transmembrane segment가 cleaved off
5. GPI anchor가 추가됨
6. Protein이 ER membrane의 noncytosolic surface에만 anchor로 결합된 채로 남음
7. Transport vesicle이 결국 protein을 plasma membrane으로 전달

### 위치

GPI-anchored protein은:
- 오직 세포 표면에 노출됨
- Plasma membrane의 noncytosolic surface에 위치
- Lipid bilayer를 통과하지 않음

## 일시적 Membrane Association

많은 protein이 membrane에 일시적으로 부착한다:

### 1. Peripheral Membrane Protein

Classical peripheral membrane protein:
- Regulated protein-protein interaction으로 membrane과 결합
- Relatively gentle extraction procedure로 방출 가능:
  - 매우 높거나 낮은 ionic strength 용액
  - 극단적 pH
- Protein-protein interaction은 방해하지만 lipid bilayer는 intact 유지

### 2. Conformational Change를 통한 전환

일부 protein은 soluble과 membrane protein 사이를 전환한다:
- Conformational change가 hydrophobic peptide 노출
- 또는 covalently attached lipid anchor 노출

**[[Rab Cycle|Rab Protein Family]] 예:**
- [[Rab Cycle|Intracellular membrane traffic 조절하는 small GTPase]]
- 결합된 nucleotide에 따라 switch

**GDP-bound state:**
- Cytosol에서 가용성
- 종종 GDP dissociation inhibitor (GDI)에 결합하여 안정화

**GTP-bound state:**
- Lipid anchor가 노출됨
- Membrane에 tether됨

**결과:**
- 한 순간에는 membrane protein
- 다음 순간에는 soluble protein
- 이러한 highly dynamic interaction이 membrane 기능의 repertoire를 크게 확장

## Functional Significance

Lipid anchor를 통한 membrane association은 protein 기능을 반영한다:

### Signaling Protein

**Intracellular signaling protein:**
- Plasma membrane의 cytosolic half에 결합
- 하나 이상의 covalently attached lipid group으로
- Fatty acid chain 또는 prenyl group 사용

**신호 전달 조절:**
- Cell-surface receptor가 extracellular signal molecule에 결합
- Large protein complex가 receptor의 cytosolic domain에 형성
- Corral에서 escape하기 더 어려워짐
- Corralling이 signaling complex 집중에 도움
- Signaling process의 속도와 효율 증가

### Membrane Protein Localization

Lipid anchor의 선택은 protein의 기능과 localization을 결정한다:
- 한쪽 면에서만 기능하는 protein
- 그 쪽 lipid monolayer 또는 protein domain에만 독점적으로 결합

## 관련 개념
- [[Membrane protein]]
- [[Lipid bilayer]]
- [[Raft domain]]
- [[Restricting domain of membrane protein]]
- [[Cortical cytoskeleton]]


[^기출_중간_2023_20]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_20번|2023 중간 20번]] — Prenyl anchor: farnesyl/geranylgeranyl chain이 cysteine에 thioether 결합으로 부착되어 막에 고정 (전반적 맥락)
[^기출_중간_2022_16]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_16번|2022 중간 16번]] — Mevalonate kinase 저해 시 farnesyl group 합성이 억제되어 단백질의 prenylation(막 부착)이 불가능해진다는 내용이 출제됨. (서술형)
[^기출_중간_2023_20_②]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_20번|2023 중간 20번]] — ②번 선지: farnesyl group 없으면 Ras 등 신호전달 단백질이 세포막에 결합(anchoring)하지 못해 활성 발휘 불가 (정답)
[^기출_중간_2023_20_⑤]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_20번|2023 중간 20번]] — ⑤번 선지: GTP 전환 불가가 직접 원인이 아님 — 막 결합이 불가하여 GEF 접근 자체가 불가 (오답)