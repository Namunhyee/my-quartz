# Quality Control of ER Protein Folding

ER protein folding quality control은 ER에서 합성되는 단백질이 올바르게 접히는지를 감시하고, 잘못 접힌 단백질을 선별하여 제거하는 통합적인 시스템이다. 이 시스템은 여러 chaperone, folding enzyme, 그리고 degradation machinery가 협력하여 작동한다.

## Quality Control의 필요성

ER는 수천 개의 서로 다른 단백질을 동시에 처리해야 하며, 높은 단백질 농도로 인해 aggregation 위험이 항상 존재한다. Co-translational folding과 post-translational folding이 동시에 일어나고, 복잡한 oligomeric assembly와 disulfide bond 형성이 필요하다. 만약 quality control이 실패하면 misfolded protein이 축적되어 ER stress를 유발하고, 결국 cellular dysfunction과 cell death로 이어질 수 있다.

## Quality Control 시스템의 구성

### ==1. 감시 메커니즘==

ER은 세 가지 독립적인 감시 시스템을 통해 단백질의 folding 상태를 확인한다:

- **[[Glycosylation-Based Monitoring]]**: ==N-linked oligosaccharide의 glucose를 제거하고 재부착하여 folding 상태를 표시==한다. [[Calnexin and Calreticulin]]이 이 표지를 인식한다.

- **Hydrophobic region 감시**: [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]]가 노출된 hydrophobic sequence를 인식한다. 올바르게 접힌 단백질은 hydrophobic core가 내부에 매립되어 있지만, 잘못 접힌 단백질은 이러한 영역이 노출되어 있다.
	- ==[[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]]는 정상상태에서는 단백질의 접힘을 돕고,==
	- ==스트레스 상태에서는 misfolded protein을 붙잡아둔다.==
		- ==이때  너무 오래 ER에 머무른 단백질은== [[Mannosidase Timer|mannose trimming]]에 의해 [[ER-associated degradation|ERAD]]로 ==타겟팅된다.==

- **Free sulfhydryl 감시**: ERp57 chaperone이 짝짓기되지 않은 cysteine을 인식하여 불완전한 [[Disulfide bond formation]]을 표시한다.

### 2. ==시간 기반 선별==

[[Mannosidase Timer]]는 단백질이 ER에서 머무는 시간을 측정한다. 단백질이 오래 머물수록 ER-resident mannosidase가 terminal mannose를 제거하여 trimmed oligosaccharide를 생성한다. 이 trimmed oligosaccharide는 degradation signal로 작용하여 해당 단백질을 [[ER-associated degradation]]으로 보낸다.

### 3. ==UPR== 적응 반응

단백질 misfolding이 과도하게 축적되면 [[Unfolded Protein Response]]가 활성화된다. UPR은 ER의 protein-processing capacity를 증가시키고, 새로운 단백질 합성을 일시적으로 감소시키며, [[ER-associated degradation|ERAD]] 기능을 강화한다.

## ==Quality Control Cycle==

![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

단백질이 ER로 들어온 후 거치는 단계는 다음과 같다:

### Checkpoint 1: Initial Glycosylation
모든 glycoprotein은 N-linked oligosaccharide를 부착받는다. 이것이 quality control의 시작점이다.

### Checkpoint 2: [[Glycosylation-Based Monitoring]]
ER glucosidase가 2개의 glucose를 제거하여 monoglucosylated oligosaccharide를 만든다. 이것이 [[Calnexin and Calreticulin]]을 recruit하는 신호가 된다.

### Checkpoint 3: Folding Assessment
Glucosyl transferase가 단백질의 folding 상태를 평가한다. 올바르게 접혔으면 glucose를 제거된 상태로 유지하지만, 불완전하게 접혔으면 glucose를 다시 부착한다.

### Checkpoint 4: [[Mannosidase Timer]]
단백질이 오래 머물면 mannosidase가 mannose를 제거한다. 빠르게 접히는 단백질은 이 단계 전에 ER을 빠져나가지만, 느리게 접히는 단백질은 mannose trimming을 받아 ERAD로 향한다.

## 결과 경로

### 성공: ER Export
다음 조건을 만족하는 단백질은 ER을 빠져나간다:
- 올바른 tertiary structure 형성
- 정확한 disulfide bond 배치
- 완전한 oligomeric assembly
- 시간 제한 내 folding 완료

이러한 단백질은 [[Golgi apparatus_MOC|Golgi apparatus]]로 수송되어 추가 processing을 받고 최종 목적지로 향한다.

### 실패: [[ER-associated degradation]]
다음 조건을 보이는 단백질은 ERAD로 향한다:
- 지속적인 misfolding
- Trimmed oligosaccharides
- Assembly 실패
- 시간 제한 초과

이러한 단백질은 retrotranslocation을 통해 cytosol로 이동하고, proteasome에서 분해된다.

## 다중 센서의 통합

### 병렬 감시
여러 시스템이 동시에 작동한다:
- Glycan-based system ([[Calnexin and Calreticulin|calnexin/calreticulin]])
- Hydrophobic-based system ([[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP#5. Quality Control Sensor|BiP]])
- Disulfide-based system ([[Calnexin and Calreticulin#3. ERp57과의 협력|ERp57]])
- [[Mannosidase Timer|Time-based system]] (mannosidase)

### 중복성과 특이성
이러한 중복성은 glycosylated protein과 non-glycosylated protein 모두를 감시할 수 있게 한다. 각 센서는 서로 다른 folding defect를 인식하므로, 다양한 문제에 맞춤형 대응이 가능하다.

## 질병과의 연관

### α1-Antitrypsin Deficiency
Misfolded α1-antitrypsin이 quality control에 의해 ER에 retention되어 분비가 불충분해진다. 이는 폐와 간 질환을 유발한다.

### Cystic Fibrosis (ΔF508-CFTR)
Misfolded [[CFTR]] channel이 ERAD에 의해 과도하게 분해되어 functional protein이 부족해진다. 이로 인해 chloride transport defect가 발생한다.

### Protein Aggregation Diseases
Quality control이 실패하면 misfolded protein이 ER이나 downstream compartment에서 aggregate를 형성하여 cellular toxicity를 유발한다. Alzheimer's disease, Parkinson's disease, prion disease 등이 이에 해당한다.

## 관련 개념
- [[Glycosylation-Based Monitoring]]
- [[Mannosidase Timer]]
- [[Unfolded Protein Response]]
- [[Calnexin and Calreticulin]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP]]
- [[ER-associated degradation]]
- [[Protein folding in ER]]
- [[Disulfide bond formation]]
