# ESCRT Protein Complex

**ESCRT (Endosomal Sorting Complexes Required for Transport) 단백질 복합체**는 multivesicular body에서<font color="#245bdb"> intralumenal vesicle 형성을 매개하는 일련의 세포질 단백질 복합체</font>이다.[^기출_중간_2022_34]

## ESCRT 복합체의 종류

네 가지 ESCRT 복합체가 순차적으로 결합한다:
- **ESCRT-0**
- **ESCRT-I**
- **ESCRT-II**
- **ESCRT-III**

## Intralumenal Vesicle 형성

![[Cell Biology/출처/md converted/Chapter 13/_page_47_Picture_9.jpeg]]

### 목적

| 목적         | 내용                           |
| ---------- | ---------------------------- |
| 신호 종결      | 수용체를 cytoplasm에서 격리          |
| 효율적 분해     | 막단백질을 lumen에 노출              |
| 운명 결정      | recycling vs. degradation 분리 |
| Exosome으로써 | 세포 간 정보 전달                   |
### Cargo 선택
Multivesicular body로 분류하려면:
- 하나 또는 여러 개의 **ubiquitin tag** 필요
- 막 단백질의 cytosolic domain에 추가됨

### ESCRT의 순차적 작용

![[Cell Biology/출처/md converted/Chapter 13/_page_48_Picture_2.jpeg]]
1. signal에 의해 receptor 활성화
   - 활성화되면서 conformational change나 phosphrylated -> E3 ligase가 uniquitin 부착
1. ==**ESCRT-0**==
   - ==**Ubiquitin tag**를 인식, **PI(3)P** 인식==
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

### ==Ubiquitin 제거==

**==Intralumenal vesicle이 닫히기 전에**:==
- ==Ubiquitin marker가 제거됨==
- ==세포질로 반환되어 재사용됨==

## ==막 굴곡의 방향==

ESCRT 기계가 추진하는 막의 내부 budding은:
- Endosome 막에서 intralumenal vesicle을 형성하기 위해
- ==막의 cytosolic 표면에서 멀어지는 방향으로 budding이 발생==
- ==이는 [[Clathrin coat|Clathrin Coat]]와는 반대 방향==

## [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)|PI(3)P]]의 역할

Multivesicular body로의 막 invagination은 lipid kinase에도 의존한다:
- [[Phosphatidylinositol(PI) and Phosphoinositides(PIPs)#Phosphatidylinositol (PI)|Phosphatidylinositol]]을 phosphorylate하여 **PI(3)P** 생성
- ==PI(3)P는 ESCRT 복합체에 대한 추가 docking site 역할==

### ESCRT 막 결합의 요구사항

==Docking과 vesicle invagination을 위해 ESCRT 복합체는 둘 다 필요:==
- ==PI(3)P==
- ==Ubiquitylated cargo 단백질의 존재==


## 관련 주제

- [[Endosomes maturation|Endosome 성숙]]
- [[_endocytosis_MOC|Endocytosis]]
- [[../Lysosome/Lysosome_MOC|Lysosome]]
- [[../../17. The Cell Cycle/Cytokinesis|Cytokinesis]]
- [[../../23. Pathogens and Infection/Virus entry|Virus 진입]]

[^기출_중간_2022_34]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_34번|2022 중간 34번]] — ESCRT-0→I→II→III 순차적 작용과 ubiquitin tag를 통한 cargo 선별, intralumenal vesicle 형성 메커니즘이 정답 근거로 활용됨.
[^기출_중간_2025_29]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_29번|2025 중간 29번]] — ①번 선지: PI(4,5)P₂가 ESCRT 복합체의 도킹을 위한 역할을 한다 (틀림, ESCRT docking은 PI(3)P 의존적, endosome에 PI(3)P 풍부); ⑤번 선지: MVB(multivesicular body)의 내부 소포(ILV)에는 ligand/수용체 복합체가 감싸져 lysosome 방향으로 진행된다 (맞음, ESCRT가 ubiquitinated receptor/ligand를 ILV로 격리 → MVB → lysosome 분해, 정답).