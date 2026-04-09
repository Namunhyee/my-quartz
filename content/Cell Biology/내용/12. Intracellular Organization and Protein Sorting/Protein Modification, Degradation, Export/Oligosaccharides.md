# Oligosaccharides

Oligosaccharide는 단백질 [[Glycosylation]]에서 단백질에 부착되는 탄수화물 사슬이다. ER과 Golgi에서 protein modification의 핵심 구성요소이다.

## [[N-linked glycosylation|N-linked Oligosaccharides]]

### Precursor Oligosaccharide 구조
**조성:**
- 총 14개의 sugar 잔기
  - N-acetylglucosamine (GlcNAc): 2개
  - Mannose (Man): 9개
  - Glucose (Glc): 3개

**Core region:**
- 5개의 sugar로 구성
- 많은 glycoprotein에서 보존됨
- Golgi에서의 광범위한 trimming 후에도 남아있음

### 합성과 Transfer
![[Cell Biology/출처/md converted/Chapter 12/_page_32_Figure_2.jpeg]]

**합성 위치:**
1. **Cytosol 측면** (ER membrane):
   - Sugar가 하나씩 dolichol에 추가
   - Nucleotide (UDP 또는 GDP)-sugar intermediate가 donor로 작용
   - (Man)₅(GlcNAc)₂까지 합성

2. **ER lumen 측면**:
   - Lipid-linked oligosaccharide가 flip됨
   - Dolichol-P-glucose와 dolichol-P-mannose로부터 나머지 sugar 추가
   - 완성된 14-sugar oligosaccharide 형성

**Transfer to protein:**
- Oligosaccharyl transferase가 완전한 oligosaccharide를 한 번에 transfer
- Target: Asparagine 잔기 (Asn-X-Ser/Thr sequence)
- 단백질이 ER로 들어오는 즉시 발생

## Oligosaccharide의 기능

### 1. Protein Folding Monitor
![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

**Glucose trimming과 folding:**
1. **Initial trimming**: ER glucosidase가 2개의 glucose 제거 → 1개의 terminal glucose 남음
2. **Recognition**: Singly glucosylated oligosaccharide를 [[Calnexin and Calreticulin]]이 인식
3. **Final glucose removal**: Glucosidase가 마지막 glucose 제거
4. **Quality check**: 
   - 올바르게 접혔으면 → ER 빠져나감
   - 불완전하게 접혔으면 → Glucosyl transferase가 glucose 재부착

**Glucosyl transferase의 역할:**
- 불완전하게 접힌 단백질을 선택적으로 인식
- Terminal glucose를 UDP-glucose로부터 transfer
- 단백질의 calnexin/calreticulin과의 재결합 유도
- 완전히 접힐 때까지 cycle 반복

### 2. Degradation Signal
**[[Mannosidase Timer|Mannose trimming]]:**
- ER-resident mannosidase가 천천히 terminal mannose 제거
- 단백질이 ER에서 보낸 시간을 측정하는 timer
- Trimmed oligosaccharide는 degradation signal로 인식됨

**Mechanism:**
- 빠르게 접히는 단백질: Mannosidase가 작용하기 전에 ER 빠져나감
- 느리게 접히는 단백질: Mannose가 제거됨 → ERAD로 향함
- ER lumen의 lectin이 trimmed oligosaccharide 인식

### 3. Tag System
Oligosaccharide는 단백질의 상태를 표시하는 tag로 작용:

**상태 표시:**
- **Newly synthesized**: 2 glucose 잔기
- **Folding intermediate**: 1 glucose 잔기
- **Properly folded**: 0 glucose 잔기
- **Misfolded/long retention**: Reduced mannose 수

## O-linked Oligosaccharide

### 특징
- ==Serine, threonine==의 hydroxyl 그룹에 부착
- N-linked보다 덜 흔함
- 첫 번째 sugar는 ER에서 추가
- 이후 처리는 Golgi에서

### Glycosphingolipids
- Ceramide에 oligosaccharide 추가
- Golgi에서 형성
- Plasma membrane의 noncytosolic leaflet에 위치

## Processing 경로

### ER에서:
1. Precursor oligosaccharide transfer
2. Glucose trimming (2개 제거)
3. Quality control cycle (glucose 추가/제거)
4. Mannose trimming (느린 과정)

### Golgi에서:
- 광범위한 modification
- Extension
- Trimming
- 다양한 oligosaccharide 구조 생성

## 생물학적 중요성

### Essential functions:
- Protein folding quality control
- Protein stability
- 세포 인식과 signaling
- 면역 반응
- Protein trafficking

### Clinical relevance:
- Glycosylation defect는 심각한 질병 유발
- Congenital disorders of glycosylation (CDG)
- 신경계, 간, 신장 이상

## 관련 개념
- [[Glycosylation]]
- [[Calnexin and Calreticulin]]
- [[Protein folding in ER]]
- [[ER-associated degradation]]
- [[Dolichol]]
- [[Glucosyl transferase]]
- [[Mannosidase]]
