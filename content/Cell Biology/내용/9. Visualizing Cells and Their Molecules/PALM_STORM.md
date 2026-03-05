# PALM/STORM

## 개요
PALM (Photoactivated Localization Microscopy)과 STORM (Stochastic Optical Reconstruction Microscopy)은 [[SMLM (Single-Molecule Localization Microscopy)]]의 두 가지 주요 방법으로, 동일한 일반 원리를 공유하지만 서로 다른 형광 probes를 사용한다. 두 방법 모두 약 20 nm의 resolution을 달성할 수 있다.

## PALM과 STORM의 차이

### PALM (Photoactivated Localization Microscopy)
**원래 사용**: Photoswitchable fluorescent proteins
**특징**: Genetically encoded, 살아있는 세포에서 사용 가능
**개발**: 형광 단백질의 photoswitching 특성 활용

### STORM (Stochastic Optical Reconstruction Microscopy)  
**원래 사용**: Photoswitchable dyes
**특징**: 화학적 염료, 일반적으로 더 밝음
**개발**: 합성 photoswitchable dyes의 특성 활용

### 현재 상황
**일반 원리는 동일**: 두 방법 모두 sequential activation과 localization 사용
**Probes 교환 가능**: STORM은 이제 photoswitchable fluorescent proteins도 사용 가능, PALM도 photoswitchable dyes 사용 가능
**용어**: 일반적으로 [[Cell Biology/내용/9. Visualizing Cells and Their Molecules/# SMLM (Single-Molecule Localization Microscopy)|single-molecule localization microscopy (SMLM)]]로 통칭

## Figure 9-33: 여러 구조의 Multicolor Imaging
![[_page_21_Figure_10.jpeg]]

### (A) *Escherichia coli* Cells - STORM
**표본**: 최근 분열한 두 개의 *E. coli* cells
**Resolution**: 약 20 nm
**사용된 세 가지 Switchable Fluorescent Labels**:
- **Membrane**: 녹색으로 표지
- **DNA molecules**: 파란색으로 표지 (최근 분리됨)
- **Chromosome ends**: 두 개의 밝은 흰색 점으로 보임 (복제된 chromosomes의 ends)

**의의**: 단일 세포 내에서 여러 구조를 동시에 superresolution으로 가시화

### (B) Nerve Cell - Multi-color SMLM
**구조**: Axon의 cytoskeletal framework
**Periodicity**: 약 190 nm 주기 (diffraction limit 바로 아래)

**관찰된 구조**:
- **Actin**: 빨간색으로 표지, axon 둘레를 감싸는 균일한 간격의 ring-like structures
- **Spectrin**: 파란색으로 표지, actin rings 사이에 유사하게 간격을 둔 structures

**생물학적 의의**: 이 주기적인 actin-spectrin cytoskeletal framework는 nerve cells의 길고 얇은 axons를 지지하는 데 도움을 준다.

**기술적 의의**: 이러한 이미지들은 새로운 매우 빠르게 switching하고 극도로 밝은 형광 probes의 개발에 크게 의존한다.

## PALM/STORM의 작동 원리

### Sequential Activation
1. **Sparse Subset Activation**: 한 번에 소수의 분리된 분자들만 활성화
2. **Imaging**: 각 활성화된 분자가 수천 개의 photons 방출
3. **Bleaching**: 형광이 quench됨
4. **Repetition**: 과정을 수만~수십만 번 반복

### Localization
**각 분자의 위치**: Blurred image의 수학적 중심 계산
**정밀도**: 일반적으로 10-20 nm
**누적**: 모든 위치를 하나의 superresolution 이미지로 결합

### Multicolor Imaging
**여러 Probes**: 서로 다른 색상의 photoswitchable labels
**동시 또는 순차적**: Channel에 따라 imaging 방식 선택
**색상 분리**: Spectral properties나 sequential activation으로 구분

## PALM/STORM의 주요 특징

### 1. Multicolor Capability
**여러 구조 동시 가시화**: Figure 9-33A의 membrane, DNA, chromosome ends
**Color Coding**: 각 구조를 다른 색으로 구분
**Complex Systems**: 여러 단백질 간 상호작용 연구

### 2. 생물학적 구조 연구
**Periodic Structures**: Figure 9-33B의 actin-spectrin cytoskeleton
**Nanoscale Organization**: Diffraction limit 이하의 patterns
**Molecular Architecture**: Protein complexes의 상세 배열

### 3. Probe의 다양성
**Fluorescent Proteins**: PALM에서 주로 사용, genetically encoded
**Chemical Dyes**: STORM에서 주로 사용, 더 밝고 안정적
**현재**: 두 방법 모두 양쪽 probe types 사용 가능

## PALM/STORM의 장점

### 1. 극도로 높은 Resolution
**~20 nm**: Conventional microscopy의 10배 향상
**실제 크기**: Molecular dimensions을 정확히 반영
**Periodic Patterns**: 190 nm 주기도 명확히 분해 (Figure 9-33B)

### 2. Multicolor Imaging
**여러 Targets**: 동시에 여러 분자 종류 관찰
**Colocalization**: 분자들의 공간적 관계
**Interaction Studies**: Protein-protein interactions

### 3. Quantitative Analysis
**Molecule Counting**: 개별 분자 수 정량
**Stoichiometry**: Complex 내 분자 비율
**Clustering**: Spatial distribution patterns

### 4. Wide-field Imaging
**넓은 영역**: 한 번에 큰 영역 관찰 가능
**Multiple Cells**: 여러 세포 동시 분석
**Statistics**: 더 많은 데이터 수집

## PALM/STORM의 한계

### 1. 긴 Acquisition Time
**수분~수시간**: 수만~수십만 frames 필요
**Live Cell 제약**: 동적 과정 관찰 어려움
**Photobleaching**: 장시간 노출로 인한 손상

### 2. 특수 Probes 필요
**Photoswitchable Properties**: 특수한 switching 특성 필요
**밝기와 안정성**: 충분한 photon 수와 안정성
**비용**: 특수 probes는 비쌀 수 있음

### 3. Dense Labeling 요구
**충분한 밀도**: Nyquist criterion 만족 필요
**균일한 분포**: 불균일하면 artifacts 발생
**Labeling Efficiency**: 높은 효율 필요

### 4. 2D 제약 (기본)
**주로 2D**: 표준 PALM/STORM은 2D
**3D 변형 존재**: 특수 설정으로 3D 가능하지만 복잡
**Z-resolution**: XY보다 Z 방향 resolution 낮음

## 기술적 발전

### Improved Probes
**더 밝은 Dyes**: 더 많은 photons per switching cycle
**빠른 Switching**: 더 짧은 acquisition time
**안정성**: Reduced photobleaching, 더 많은 cycles

### 3D PALM/STORM
**Astigmatism**: Cylindrical lens로 z-information
**Biplane**: 두 focal planes 동시 imaging
**PSF Engineering**: Engineered point spread functions

### Live-cell PALM/STORM
**빠른 Variants**: Reduced frame numbers
**Lower Light Levels**: Phototoxicity 감소
**Dynamic Processes**: 일부 동적 과정 관찰 가능

## 응용 분야

### Bacterial Cell Biology
***E. coli* Structure**: Membrane, nucleoid, chromosome organization (Figure 9-33A)
**Division Machinery**: FtsZ ring, division proteins
**Flagellar Motors**: Nanoscale architecture

### Neuroscience
**Synaptic Proteins**: Receptor organization, scaffolding proteins
**Axonal Cytoskeleton**: Actin-spectrin periodic structure (Figure 9-33B)
**Dendritic Spines**: Morphology와 protein distribution

### Membrane Biology
**Receptor Clustering**: Nanoscale domains
**Lipid Rafts**: Organization과 dynamics
**Membrane Proteins**: Oligomerization states

### Nuclear Organization
**Chromatin Structure**: Nanoscale packaging
**Transcription Sites**: RNA polymerase clusters
**Nuclear Bodies**: PML bodies, Cajal bodies

## 데이터 분석

### Localization Analysis
**Precision Calculation**: Localization uncertainty
**Drift Correction**: Long acquisition 중 stage drift 보정
**Artifact Removal**: 잘못된 localizations 제거

### Cluster Analysis
**Ripley's K-function**: Spatial clustering 분석
**DBSCAN**: Density-based clustering
**Pair Correlation**: Molecular interactions

### Quantification
**Molecule Counting**: 각 구조의 분자 수
**Density Maps**: Spatial distribution
**Colocalization**: 여러 species 간 관계

## 실험적 고려사항

### Sample Preparation
**고정**: 일반적으로 fixed samples 사용
**Labeling Density**: 충분한 probe 밀도
**Mounting Medium**: Appropriate imaging buffer

### Imaging Parameters
**Laser Powers**: Activation과 excitation 최적화
**Frame Rate**: Detection sensitivity와 균형
**Total Frames**: 충분한 molecules 검출

### Image Reconstruction
**Localization Algorithms**: Gaussian fitting, maximum likelihood
**Filtering**: Background, precision-based filtering
**Rendering**: Final image generation parameters

## PALM/STORM vs 다른 기술

**vs [[Structured Illumination Microscopy|SIM]]**: SIM은 ~100 nm, 빠름 (~초-분), 모든 dyes. PALM/STORM은 ~20 nm이지만 느림 (~분-시간), 특수 probes.

**vs [[Stimulated Emission Depletion|STED]]**: 둘 다 ~20 nm. STED는 scanning 기반, 비교적 빠름. PALM/STORM은 wide-field, 느리지만 더 넓은 영역.

**vs [[Cell Biology/내용/9. Visualizing Cells and Their Molecules/# SMLM (Single-Molecule Localization Microscopy)]]**: PALM/STORM은 SMLM의 specific implementations. SMLM은 더 넓은 umbrella term.

## 요약
**핵심 원리**: Photoswitchable labels의 sequential activation과 single-molecule localization으로 [[deconvolution|회절 한계]] 극복
**PALM**: 원래 photoswitchable fluorescent proteins 사용
**STORM**: 원래 photoswitchable dyes 사용
**현재**: 두 방법 모두 양쪽 probe types 사용 가능, 일반적으로 [[Cell Biology/내용/9. Visualizing Cells and Their Molecules/# SMLM (Single-Molecule Localization Microscopy)]]로 통칭
**Resolution**: 약 20 nm
**주요 장점**: Multicolor imaging, wide-field, quantitative analysis
**주요 한계**: 긴 acquisition time, 특수 probes 필요, 주로 fixed samples
**응용**: Bacterial cell structure, neuronal cytoskeleton, membrane organization, nuclear architecture

---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "Single-Molecule Localization Microscopy Also Delivers Superresolution", Related Figures: 9-33, Related concepts: [[SMLM (Single-Molecule Localization Microscopy)]], [[deconvolution]], [[Structured Illumination Microscopy]], [[Stimulated Emission Depletion]]