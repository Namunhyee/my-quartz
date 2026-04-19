# Direct Sorting in TGN

## 개요

Trans Golgi Network (TGN)은 [[Sorting Signal#Golgi Apparatus|Golgi apparatus]]를 통과한 단백질들이 최종 목적지로 가기 위해 분류되는 주요 sorting station이다. TGN에서 단백질들은 서로 다른 transport vesicle로 선별되어 plasma membrane의 여러 domain, endosome, 또는 [[secretory pathway|secretory vesicle]]로 전달된다.

![[Cell Biology/출처/md converted/Chapter 13/_page_28_Figure_2.jpeg]]
*Figure 13-38: TGN에서의 protein sorting pathway들. M6P를 가진 lysosomal protein, regulated secretion을 위한 protein, 그리고 constitutive secretion을 위한 protein이 서로 다른 vesicle로 분류된다.*

## TGN에서의 주요 Sorting Pathway

### 1. [[Lysosomal hydrolase|Lysosomal Protein]] Pathway

**M6P (Mannose 6-Phosphate) system:**

#### ==M6P Tag의 부착==

![[Cell Biology/출처/md converted/Chapter 13/_page_29_Figure_8.jpeg]]
*Figure 13-40: Lysosomal hydrolase의 M6P tagging과 transport. Cis Golgi network에서 M6P가 부착되고, TGN에서 M6P receptor에 의해 선별된다.*

**과정:**

1. ==**Cis Golgi Network에서 recognition**==
   - GlcNAc phosphotransferase가 lysosomal hydrolase 인식
   - Signal patch (특정 아미노산 cluster) 인식
   - High-mannose N-linked oligosaccharide에 작용

2. **Two-step modification**
   - Step 1: GlcNAc-1-phosphate 전달
   - Step 2: GlcNAc 제거
   - 결과: Exposed M6P

3. **Multiple M6P groups**
   - 각 hydrolase는 여러 개의 oligosaccharide 보유
   - 여러 개의 M6P tag 획득
   - M6P receptor에 대한 high affinity 제공

#### ==TGN에서 Sorting==

**M6P Receptor의 기능:**

```
TGN (pH 6.5-6.7):
- M6P receptor가 M6P에 강하게 결합
- Clathrin adaptor protein에 결합
- Clathrin-coated vesicle로 packaging

Early endosome (pH 6.0):
- pH 감소로 receptor에서 hydrolase 해리
- Hydrolase는 late endosome으로 진행
- Receptor는 retromer-coated vesicle로 TGN 복귀
```

==**pH-dependent binding:**==
- ==TGN: 높은 친화도==
- ==Endosome: 낮은 친화도==
- ==일방향 transport 보장==

### 2. [[secretory pathway#Regulated Secretory Pathway|Regulated Secretory Pathway]]
==signal 필요.==

### 3. [[secretory pathway#Constitutive Secretory Pathway|Constitutive Secretory Pathway]] (Default Pathway)

#### ==Default Mechanism==

**특징:**
- ==**Signal 불필요**==
- ==**자동 포장**==
- ==**지속적 작동**==

**포함되는 cargo:**
1. Specific sorting signal이 없는 protein
2. ER에서 escape한 protein
3. 재활용되지 않은 protein

**Unpolarized cell:**
- 모든 non-sorted protein이 이 경로
- Plasma membrane으로 직접 전달

==**Polarized cell:**==
- ==Apical 또는 basolateral domain 선택 필요==
- ==최소한 한 방향은 specific signal 필요==

## ==극성 세포에서의 Direct Sorting (main)==

### Epithelial Cell의 Polarization

![[Cell Biology/출처/md converted/Chapter 13/_page_38_Figure_2.jpeg]]
*Figure 13-49: ==극성 상피세포에서의 단백질 분류. (A) Direct pathway에서 TGN에서 직접 분류.== (B) Indirect pathway에서는 일단 한 쪽으로 보낸 후 [[direct sorting in TGN#Indirect Pathway (Transcytosis)|transcytosis]].*


### ==Indirect Pathway (Transcytosis)==

==일부 경우에는 모든 protein이 먼저 한 domain으로 전달된 후, 잘못된 것들이 endocytosis를 통해 회수되어 올바른 domain으로 재전달된다. (존재는 하지만 메인 아님)==

**예시: Hepatocyte**
- 일부 apical protein이 먼저 basolateral로
- Endocytosis로 회수
- Early endosome 경유
- Apical domain으로 재전달
- Signal이 두 단계 모두에서 작용

## 요약

TGN에서의 direct sorting은 단백질들을 최종 목적지로 정확히 전달하기 위한 핵심 과정이다. M6P system은 lysosomal protein을 선별하고, aggregation은 regulated secretion을 위한 단백질을 모으며, default pathway는 나머지를 plasma membrane으로 보낸다. 극성 세포에서는 lipid raft와 basolateral sorting signal이 apical과 basolateral domain으로의 선택적 전달을 가능하게 한다. 이러한 정밀한 sorting은 여러 종류의 signal, receptor, coat protein의 조합을 통해 달성된다.
