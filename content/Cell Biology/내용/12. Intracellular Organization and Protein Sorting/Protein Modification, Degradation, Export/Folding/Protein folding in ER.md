# Protein Folding in ER

ER lumen으로 translocation된 단백질은 unfolded polypeptide chain 상태로 들어와 올바른 3차원 구조로 접혀야 한다. 이 과정은 ER lumen의 여러 chaperone과 folding enzyme의 도움을 받는다.

## ER의 Folding Environment

### 산화 환경
- Cytosol보다 더 산화된 환경
- [[Disulfide bond formation]] 촉진
- Protein disulfide isomerase (PDI) 활성에 필수

### 고농도의 Folding Machinery
- **Chaperones**: 단백질 aggregation 방지
- **Folding catalysts**: 특정 반응 촉매
- **Quality control factors**: Folding 상태 감시

## 주요 Chaperone Systems

### 1. BiP (Binding Protein)
**특성:**
- Hsp70 family member
- Major component of ER folding machinery
- ER resident protein (KDEL retention signal)

**메커니즘:**
![[Cell Biology/출처/md converted/Chapter 12/_page_46_Figure_6.jpeg]]

1. **Recognition**: Exposed hydrophobic sequences에 결합
2. **Prevention of aggregation**: 단백질 aggregation 방지
3. **Retention**: 불완전하게 조립된 oligomeric complex를 ER에 유지
4. **ATP-dependent cycle**:
   - ATP 결합 → Low affinity state
   - ATP 가수분해 → High affinity state
   - ADP 방출 → Substrate 방출, 재결합 기회

**역할:**
- Post-translational translocation에서 pulling motor
- Co-translational translocation의 보조
- Unfolded protein의 일시적 결합
- Protein aggregation 방지

### 2. Calnexin and Calreticulin
- Ca²⁺-dependent lectin chaperones
- Glycoprotein 특화
- [[Calnexin and Calreticulin]] 참조

### 3. ERp57
- [[Protein disulfide isomerase|PDI]] family member
- Calnexin/calreticulin과 협력
- Free sulfhydryl 그룹 인식
- [[Disulfide bond formation]] 보조

## Folding Catalysts

### 1. Protein Disulfide Isomerase (PDI)
**기능:**
- Disulfide bond 형성 촉매
- Incorrect disulfide bond 재배열
- Oxidoreductase 활성 (양방향)

**상세 메커니즘:**
- [[Disulfide bond formation]] 참조

### 2. Peptidyl-prolyl Isomerase
- Proline 잔기의 cis-trans isomerization 촉매
- Slow folding step 가속화
- Rate-limiting step 해결

## [[Quality control of ER protein folding|Quality Control System]]

### 1. [[Glycosylation-Based Monitoring|Glycosylation-Based Monitoring]]
![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

**System components:**
- [[Oligosaccharides]]: Folding 상태 표지
- Glucosidase: Glucose 제거
- [[Glucosyl transferase]]: Glucose 재부착
- [[Calnexin and Calreticulin]]: 불완전한 단백질 인식

**Quality check cycle:**
1. N-linked oligosaccharide 부착
2. 2개의 glucose 제거
3. Calnexin/calreticulin 결합->접힐 때 까지 붙잡고 ER 밖으로 못나가게 함.
4. Folding 시도
5. Glucose 제거 및 방출(잘 접힌 경우)
6. Folding 상태 평가:
   - Properly folded → Export
   - Incompletely folded → glucosyl transferase에 의해 Glucose 재부착, cycle 반복

### 2. Time-Based Monitoring
**Mannosidase system:**
- ER에서 머무는 시간 측정
- Terminal mannose 천천히 제거
- Trimmed oligosaccharide = degradation signal

**Timer mechanism:**
- 빠른 folding → ER 빠져나감
- 느린 folding → Mannose trimming
- 과도한 retention → [[ER-associated degradation]]

## Folding 실패와 대응

### 1. ER-Associated Degradation (ERAD)
**Trigger:**
- Prolonged ER retention
- Trimmed oligosaccharides
- Persistent unfolded regions

**Process:**
![[Cell Biology/출처/md converted/Chapter 12/_page_34_Picture_2.jpeg]]

1. Misfolded protein 인식
2. ER-to-cytosol retrotranslocation
3. Deglycosylation
4. Ubiquitylation
5. Proteasomal degradation

### 2. Unfolded Protein Response (UPR)
**Trigger:**
- Misfolded protein 축적
- ER capacity 초과

**Response:**
![[Cell Biology/출처/md converted/Chapter 12/_page_35_Figure_2.jpeg]]
![[Cell Biology/출처/md converted/Chapter 12/_page_36_Figure_2.jpeg]]

**세 가지 pathway:**
1. **IRE1 pathway**: mRNA splicing으로 전사인자 활성화
2. **PERK pathway**: Translation 감소, 선택적 전사인자 번역
3. **ATF6 pathway**: Proteolytic cleavage로 전사인자 방출

**결과:**
- ER chaperone 증가
- ERAD machinery 증가
- ER export factor 증가
- ER expansion
- 지속적 stress → Apoptosis

## Folding의 시공간적 조절

### Co-translational Folding
- Translocation 중 folding 시작
- Domain-by-domain folding
- Chaperone이 early folding intermediate 포획

### Post-translational Folding
- Complete polypeptide chain 후 folding
- Multiple chaperone의 순차적 작용
- Complex protein의 경우 더 긴 시간 필요

### Compartment-Specific Folding
- ER lumen의 산화 환경
- High Ca²⁺ concentration
- Abundant chaperones
- Specialized folding catalysts

## 생리적 중요성

### 1. Protein Quality
- 올바르게 접힌 단백질만 ER 통과
- Functional protein 생산 보장
- Misfolded protein의 독성 방지

### 2. Cell Homeostasis
- ER capacity와 demand 균형
- Adaptive response to stress
- Cell survival vs. apoptosis 결정

### 3. Secretory Pathway Integrity
- Downstream organelle 보호
- Functional complex assembly
- Proper trafficking 보장

## 관련 개념
- [[Disulfide bond formation]]
- [[Glycosylation]]
- [[Oligosaccharides]]
- [[Calnexin and Calreticulin]]
- [[ER-associated degradation]]
- [[Unfolded Protein Response]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP]]
- [[Protein disulfide isomerase]]
