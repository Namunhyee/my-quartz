## 개요
강한 background fluorescence(배경 형광)는 out-of-focus 분자들이 방출하거나 산란시킨 빛 때문에 발생하며, 이는 관심 있는 특정 분자의 형광을 가려버리는 경향이 있다. 이 문제는 **total internal reflection fluorescence (TIRF) microscopy**라는 특수한 광학 기술을 사용하여 해결할 수 있다.

## TIRF의 원리

### Total Internal Reflection
**기본 메커니즘**: TIRF microscope에서 laser light는 total internal reflection이 발생하는 정확한 임계각으로 cover-slip 표면에 비춘다.

**Total internal reflection 때문에**:
- 빛이 sample로 들어가지 않음
- 대부분의 형광 분자들은 조명되지 않음

### Evanescent Field
**전자기 에너지 확장**:
- Total internal reflection에도 불구하고 전자기 에너지는 evanescent field로 확장됨
- Cover slip 표면 너머 매우 짧은 거리까지만 표본으로 연장
- Cover slip에 부착되었거나 표면에 매우 가까운 분자들만 여기됨

**결과**: 이 분자들이 형광을 발할 때, 방출된 빛은 더 이상 overlying molecules의 out-of-focus light와 경쟁하지 않으므로 검출 가능

### Figure 9-38: TIRF Microscopy

![[_page_24_Figure_9.jpeg]]

#### (A) TIRF의 광학적 원리
**Excitatory laser light**:
- Cover-slip 표면을 critical angle로 조명
- Glass-water interface에서 모든 빛이 반사됨
**Evanescent wave**:
- 일부 전자기 에너지가 interface를 가로질러 짧은 거리로 확장
- Cover slip에 부착되었거나 표면에 매우 가까운 분자들만 여기
- 약 **200 nm** 깊이까지만 효과적

#### (B) Clathrin-coated Pit 형성 추적
**실험 시스템**:
- *Arabidopsis* root cell의 plasma membrane 표면 이미지
- Clathrin adaptor protein이 [[Fluorescent Protein Tagging in Living Cells#Green Fluorescent Protein (GFP)|GFP]]로 tagged
**관찰**:
- 개별 clathrin-coated pits를 시간에 따라 추적 가능
- Pit의 형성과 subsequent endocytosis 관찰

#### (C) 개별 Pit의 시간 경과
**B에서 링으로 표시된 pit의 1초 간격 이미지**:
- Pit의 출현
- Plasma membrane에서의 endocytosis에 의한 제거
- 전체 과정이 약 **10초** 소요

## TIRF의 특징

### 제한된 깊이
**현재 기술**:
- 세포 표면 아래 약 **200 nm** 층으로 제한
- 매우 얇은 영역만 관찰 가능
**이유**:
- Evanescent wave의 침투 깊이가 매우 짧음
- Exponentially decay함

### 응용 가능 영역
**세포 표면 근처 구조**:
- Plasma membrane proteins
- Membrane-associated processes
- Cell adhesion molecules
- Receptor dynamics

## TIRF의 주요 응용

### 1. Single Motor Proteins
**극적인 실험 예시**:
- 단일 motor proteins의 imaging
- Microtubules를 따라 이동하는 motor proteins
- Actin filaments를 따라 이동하는 motor proteins
**장점**:
- 개별 분자 수준의 관찰
- 이동 속도와 방향 정밀 측정
- Step size 측정 가능

### 2. Membrane Dynamics
**Receptor trafficking**:
- 세포막에서의 receptor 이동
- Clustering 형성
- Lateral diffusion
**Endocytosis/Exocytosis**:
- Clathrin-coated pit 형성 (Figure 9-38B, C)
- Vesicle fusion
- Membrane recycling

### 3. Cell-Substrate Interactions
**Focal adhesions**:
- Adhesion complex 형성
- Cell migration 중 adhesion dynamics
- Force transmission

### 4. Single-Molecule Studies
**DNA-protein interactions**:
- DNA replication
- Transcription
- DNA repair
**Enzyme kinetics**:
- 단일 효소 분자의 활성
- Substrate binding/release
- Catalytic cycles

## 변형 기술: Highly Inclined Laminated Optical Sheet
### HILO Microscopy
**원리**: 
- TIRF는 아니지만 유사한 접근
- 입사광의 각도를 줄임
- Cover slip에 거의 평행하게 조명
**장점**:
- 세포 내부 더 깊이 검사 가능
- 200 nm 이상의 깊이
- 균일하지는 않지만 더 넓은 영역 관찰
**유용성**:
- 식물 세포와 같이 outer wall이 있는 세포
- 곰팡이 세포
- 두꺼운 표본

## TIRF의 장점
### 1. 극도로 낮은 Background
**최소화된 배경 형광**:
- Out-of-focus light 거의 완전 제거
- 매우 높은 signal-to-noise ratio[^기출_중간_2022_9]
- Single-molecule detection 가능
### 2. 높은 시간 해상도
**빠른 Imaging**:
- 낮은 background로 인해 짧은 exposure time
- 빠른 동적 과정 추적
- Video rate imaging 가능
### 3. 광표백 최소화
**제한된 조명**:
- 표면 근처 분자들만 조명
- 세포 내부 형광 단백질 보존
- 장시간 관찰 가능
### 4. 광독성 감소
**세포 손상 최소화**:
- 제한된 영역만 조명
- 세포 전체에 대한 빛 노출 감소
- 살아있는 세포 장기 관찰

## 제한사항
### 1. 깊이 제한
**얕은 침투**:
- 약 200 nm로 제한
- 세포 내부 깊은 곳 관찰 불가
- 표면 현상에만 국한
### 2. 특수 장비 필요
**기술적 요구사항**:
- 정밀한 각도 제어
- 고품질 optics
- 특수 objective lens
- Laser illumination system
### 3. 샘플 준비
**Cover slip 의존성**:
- 세포가 cover slip에 부착되어야 함
- Floating cells는 관찰 어려움
- 조직 절편은 적용 불가

## TIRF vs 다른 현미경 기술
### vs [[Confocal Microscope]]
**Confocal**:
- [[Confocal Microscope#Three-dimensional Imaging(3차원 영상화)|3D imaging]] 가능
- 더 깊은 침투 (수십 μm)
- Out-of-focus light를 pinhole로 제거
**TIRF**:
- 표면만 (200 nm)
- 더 낮은 background
- Single-molecule sensitivity

### vs Wide-field Fluorescence
**Wide-field**:
- 전체 시편 조명
- 높은 background
- 깊이 전체 관찰
**TIRF**:
- 표면만 조명
- 극도로 낮은 background
- 표면 현상에 특화

### vs [[FRAP]]
**공통점**:
- 살아있는 세포 dynamics 연구
- 형광 단백질 사용
**차이점**:
- TIRF: 공간 선택성 (표면)
- FRAP: 시간 선택성 (photobleaching)

## 실험적 고려사항

### 임계각 최적화
**각도 조절**:
- Total internal reflection을 위한 정확한 각도
- 너무 얕으면: 빛이 투과
- 너무 가파르면: 조명 영역 감소
### Objective Lens
**고 numerical aperture 필요**:
- 일반적으로 NA > 1.4
- Oil-immersion objective
- TIRF-specific objectives
### Illumination System
**Laser 요구사항**:
- 안정적인 laser source
- 적절한 파장
- 균일한 조명

## 기술적 발전
### Improved Illumination
**다양한 조명 방식**:
- Through-the-objective TIRF
- Prism-based TIRF
- Variable angle TIRF
### Multi-color TIRF
**동시 다중 색상**:
- 여러 형광 단백질 동시 관찰
- Protein-protein interactions
- Complex dynamics
### Super-resolution TIRF
**TIRF와 superresolution 결합**:
- [[FRET|PALM]]/STORM과 조합
- 표면에서 nanometer resolution
- Single-molecule localization

## 생물학적 응용 예시
### Membrane Protein Trafficking
**Receptor dynamics**:
- EGFR internalization
- GPCR signaling
- Ion channel gating
### Cytoskeletal Dynamics
**Actin polymerization**:
- 세포 가장자리에서의 actin dynamics
- Lamellipodium formation
- Cell migration
### Vesicle Fusion
**Exocytosis**:
- Synaptic vesicle fusion
- Hormone secretion
- Neurotransmitter release
### Cell Adhesion
**Focal adhesion dynamics**:
- Integrin clustering
- Adhesion assembly/disassembly
- Force generation

## 데이터 분석
### Single-Molecule Tracking
**분석 방법**:
- Particle tracking algorithms
- Trajectory analysis
- Diffusion coefficient 계산
### Quantification
**측정 가능한 parameters**:
- Molecule count
- Dwell time
- Binding kinetics
- Diffusion rates

## 요약

**핵심 원리**: Total internal reflection으로 evanescent wave 생성, cover slip 표면 근처(~200 nm)만 조명, 극도로 낮은 background

**주요 특징**: Single-molecule sensitivity, 높은 시간 해상도, 최소 광표백, 표면 현상에 특화

**주요 응용**: Motor proteins imaging, Membrane dynamics, Endocytosis/exocytosis, Cell-substrate interactions, Single-molecule studies

**제한사항**: 깊이 제한(200 nm), 특수 장비 필요, Cover slip 의존성

**생물학적 의의**: Membrane trafficking, Cytoskeletal dynamics, Vesicle fusion, Cell adhesion, Molecular motors

---

## 참고 문헌
- Chapter 9: Visualizing Cells and Their Molecules, Section: "Single Molecules Can Be Visualized by Total Internal Reflection Fluorescence Microscopy"
- Related Figures: 9-38
- Related techniques: [[Confocal Microscope]], [[FRAP]], [[Fluorescent Protein Tagging in Living Cells]]

[^기출_중간_2022_9]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_9번|2022 중간 9번]] — TIRF는 evanescent wave로 cover slip 표면 ~100-200 nm 범위만 조명하여 out-of-focus background를 거의 완전히 제거함으로써 매우 높은 S/N ratio를 달성한다는 특성이 정답 근거(선지 ④)로 활용됨.