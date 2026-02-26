# ESCRT Protein Complex

**ESCRT (Endosomal Sorting Complexes Required for Transport) 단백질 복합체**는 multivesicular body에서<font color="#245bdb"> intralumenal vesicle 형성을 매개하는 일련의 세포질 단백질 복합체</font>이다.

## ESCRT 복합체의 종류

네 가지 ESCRT 복합체가 순차적으로 결합한다:
- **ESCRT-0**
- **ESCRT-I**
- **ESCRT-II**
- **ESCRT-III**

## Intralumenal Vesicle 형성

![[Cell Biology/출처/md converted/Chapter 13/_page_47_Picture_9.jpeg]]

### 목적

|목적|내용|
|---|---|
|신호 종결|수용체를 cytoplasm에서 격리|
|효율적 분해|막단백질을 lumen에 노출|
|운명 결정|recycling vs. degradation 분리|
|Exosome|세포 간 정보 전달|
### Cargo 선택
Multivesicular body로 분류하려면:
- 하나 또는 여러 개의 **ubiquitin tag** 필요
- 막 단백질의 cytosolic domain에 추가됨

### ESCRT의 순차적 작용

![[Cell Biology/출처/md converted/Chapter 13/_page_48_Picture_2.jpeg]]
1. signal에 의해 receptor 활성화
   - 활성화되면서 conformational change나 phosphrylated -> E3 ligase가 uniquitin 부착
1. **ESCRT-0**
   - Ubiquitin tag를 인식
   - 막에 처음으로 결합
   - Cargo 단백질을 다음 ESCRT로 전달

2. **ESCRT-I**
   - ESCRT-0로부터 cargo 받음
   - ESCRT-II로 전달

3. **ESCRT-II**
   - Cargo를 막의 특정 영역에 농축
   - ESCRT-III를 recruit

4. **ESCRT-III**
   - 막에서 큰 multimeric assembly 형성
   - 막을 bend시킴
   - Invagination을 매개

### Ubiquitin 제거

Intralumenal vesicle이 닫히기 전에:
- Ubiquitin marker가 제거됨
- 세포질로 반환되어 재사용됨

## 막 굴곡의 방향

ESCRT 기계가 추진하는 막의 내부 budding은:
- Endosome 막에서 intralumenal vesicle을 형성하기 위해
- 막의 cytosolic 표면에서 멀어지는 방향으로 budding이 발생

## PI(3)P의 역할

Multivesicular body로의 막 invagination은 lipid kinase에도 의존한다:
- [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)#Phosphatidylinositol (PI)|Phosphatidylinositol]]을 phosphorylate하여 PI(3)P 생성
- PI(3)P는 ESCRT 복합체에 대한 추가 docking site 역할

### ESCRT 막 결합의 요구사항

Docking과 vesicle invagination을 위해 ESCRT 복합체는 둘 다 필요:
- PI(3)P
- Ubiquitylated cargo 단백질의 존재

## 보존된 메커니즘

![[Cell Biology/출처/md converted/Chapter 13/_page_48_Figure_9.jpeg]]

ESCRT 기계는 세 가지 topologically equivalent한 과정에서 사용된다:

### 1. Multivesicular Body 형성

Endosome에서:
- Ubiquitylated 막 단백질을 intralumenal vesicle로 sorting
- [[#Signaling Receptor Down-regulation|Signaling receptor down-regulation]]에 중요

### 2. 동물 세포 Cytokinesis

세포 분열 중:
- Abscission (마지막 막 분리) 단계에 필요
- 두 딸세포를 최종적으로 분리

### 3. Virus Budding

일부 enveloped virus:
- 숙주 ESCRT 기계를 hijack
- 세포에서 budding하는 데 사용
- 예: HIV

### Topological Equivalence

세 과정 모두:
- 막의 cytosolic 표면에서 멀어지는 방향으로 membrane deformation
- ESCRT 복합체가 동일한 기본 메커니즘 사용

## ESCRT의 기원

ESCRT 복합체는 유사한 구성요소에서 유래된 것으로 생각된다:
- Archaea에서 cytokinesis 중 세포 막 deformation을 매개

## Signaling Receptor Down-regulation

### 정상 기능

ESCRT 기능이 정상일 때:
- 활성화된 receptor가 endocytosis에 의해 down-regulate됨
- Multivesicular body로 packaging됨
- Receptor signaling이 종료됨

### ESCRT 결함의 결과

ESCRT 기능이 손상된 mutant 세포:
- 활성화된 receptor가 endocytosis와 multivesicular body로의 packaging에 의해 down-regulate될 수 없음
- 여전히 활성화된 receptor가 prolonged signaling을 매개
- 통제되지 않는 세포 증식으로 이어질 수 있음
- 암으로 이어질 수 있음

## Cargo 격리 메커니즘

![[Cell Biology/출처/md converted/Chapter 13/_page_48_Picture_2.jpeg]]

복잡한 일련의 binding 이벤트:
- Ubiquitylated 막 단백질 (예: 신호 수용체와 그 ligand)을 한 ESCRT 복합체에서 다음으로 순차적으로 전달
- 결국 그들을 bud into the lumen of the endosome하는 막 영역에 농축

미해결 질문:
- Cargo 분자가 vesicle로 어떻게 shepherd되는지
- ESCRT 복합체 자체를 포함하지 않고 vesicle이 어떻게 형성되는지

## ESCRT 복합체의 동적 특성

ESCRT 복합체는:
- 세포질에서 가용성
- 필요에 따라 순차적으로 막으로 recruit됨
- Vesicle이 pinch off되면 세포질로 다시 방출됨

## 다른 Virus의 Budding

SARS-CoV-2 (COVID-19를 일으키는 virus):
- ER와 Golgi apparatus 사이의 vesicular tubular cluster로 budding
- Secretory pathway를 사용하여 세포를 떠남
- 막을 cytosol에서 멀어지게 deform하지만 ESCRT 기계를 사용하는 것으로 보이지 않음
- 대신 virus 단백질이 잘 이해되지 않은 메커니즘으로 budding을 촉진한다고 생각됨

## 관련 주제

- [[Endosomes maturation|Endosome 성숙]]
- [[endocytosis_MOC|Endocytosis]]
- [[../Lysosome/Lysosome_MOC|Lysosome]]
- [[../../17. The Cell Cycle/Cytokinesis|Cytokinesis]]
- [[../../23. Pathogens and Infection/Virus entry|Virus 진입]]