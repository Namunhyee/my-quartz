# SMLM (Single-Molecule Localization Microscopy)

## 개요
Single-molecule localization microscopy는 개별 형광 분자의 정확한 위치를 결정하여 [[deconvolution|회절 한계]]를 극복하는 superresolution 기술이다. 약 20 nm의 resolution을 달성할 수 있어, conventional light microscopy보다 약 10배 향상된 성능을 보인다.

## 기본 원리

### Single Molecule Imaging
단일 형광 분자가 이미지화되면, 약 200 nm 직경의 circular blurry disc로 나타난다. 그러나 충분한 photons가 이미지에 기여했다면, disc-like image의 정확한 수학적 중심을 매우 정확하게 결정할 수 있으며, 종종 몇 nanometers 이내로 형광 분자의 위치를 파악할 수 있다.

### 근접 분자 문제
표본에 많은 수의 인접한 형광 분자들이 포함되어 있을 때, 각각이 blurry, overlapping point spread functions를 이미지에 기여하여 어느 한 분자의 정확한 위치를 확인하는 것이 불가능해진다.

### 해결책: Sequential Activation
이 한계를 우회하는 방법은 매우 적은 수의 명확히 분리된 분자들만 한 번에 활발히 형광을 내도록 배치하는 것이다. 각각의 정확한 위치를 계산한 후, 후속 분자 세트들을 검사할 수 있다.

## Figure 9-31: Single Fluorescent Molecules의 정확한 위치 결정
![[_page_20_Figure_6.jpeg]]

**원리**: 단일 형광 분자의 blurred image의 정확한 수학적 중심 결정은 이미지에 기여하는 photons가 많을수록 더 정확해진다.

**Point spread function**: [[deconvolution#Point Spread Function(PSF)의 이해|텍스트에서 설명된]] point spread function은 molecular image의 크기가 약 200 nm 직경이 되도록 지시하지만, 매우 밝은 표본에서는 그 중심의 위치를 nanometer 이내로 정확히 찾을 수 있다.

## SMLM의 작동 메커니즘

### Photoswitchable Labels 사용

^c7bd0d

실제로 이는 lasers를 사용하여 [[Photoactivation#^48987e|switchable fluorescent labels]]가 포함된 표본에서 sparse subset의 형광 분자들을 순차적으로 전환함으로써 달성할 수 있다. 현재 수백 가지의 그러한 labels가 있으며, 세 가지 클래스로 나뉜다:(이 세가지 종류 모두 쓰긴 한다고 함)
1. **Photoactivated labels**: 예를 들어 dark에서 green으로 전환
2. **Photoconvertible labels**: 예를 들어 green에서 red로 전환  
3. **Photoswitchable labels**: 앞뒤로 전환

### Activation Process
Labels는 예를 들어 near-ultraviolet light로 조명하여 활성화되며, 이는
#### <font color="#0070c0">Isolation</font>
<mark style="background:#fff88f">작은 subset의 분자들</mark>을 수정하여 다른 파장의 excitation beam에 노출될 때 형광을 내도록 한다. 이들은 switching off하여 형광을 quenching하기 전에 excitation에 반응하여 각각 수천 개의 photons를 방출하며, switching process는 수만 또는 수십만 번까지 반복될 수 있어 
#### <font color="#0070c0">Localization</font>
<mark style="background:#fff88f">단일 분자 세트의 정확한 좌표를 결정할 수 있다.</mark>

### <font color="#0070c0">Image Reconstruction</font>
전체 세트를 결합하여 계산된 <mark style="background:#fff88f">각 개별 분자의 위치가 정확히 표시된 이미지로 디지털 표시</mark>할 수 있다.

## Figure 9-32: Single-Molecule Localization Microscopy (SMLM)
![[Cell Biology/출처/md converted/Chapter 9/_page_21_Figure_3.jpeg]]
### (A) SMLM의 원리
**가상의 표본에서**: Sparse subsets의 형광 분자들이 개별적으로 짧게 켜진 후 bleached됨. 이러한 모든 잘 분리된 분자들의 정확한 위치를 점진적으로 함께 추가하여 superresolution에서 이미지로 구축할 수 있다.

**Sequential cycles**: 활성화와 bleaching의 연속적인 cycles가 잘 분리된 단일 형광 분자를 검출할 수 있게 함

**Image building**: 수만 개의 연속적인 작은 분자 그룹들의 위치가 map에 추가됨에 따라 형광 구조의 superresolution 이미지가 구축됨
![[Pasted image 20260305212402.png]]
### (B) TIRF와 PALM/STORM 비교
세포의 일부에서 microtubules가 형광으로 표지되어 TIRF microscope(왼쪽)와 superresolution PALM microscope(오른쪽)에서 이미지화됨.

**왼쪽 ([[TIRF(Total Internal Reflection Fluorescence Microscopy)|TIRF]])**: 각 microtubule의 직경이 blurred diffraction-limited image에서 250 nm
**오른쪽 (PALM;SMLM의 한 종류)**: 각 microtubule의 직경이 이제 실제 크기인 약 25 nm와 유사함

## SMLM의 주요 특징

### 1. <mark style="background:#fff88f">극도로 높은 Resolution</mark>
**20 nm까지 도달**: Conventional light microscopy의 10배 향상
**실제 크기 반영**: 25 nm microtubule이 25 nm로 보임 (250 nm가 아님)

### 2. Sequential Activation 의존
**시간 소요**: 수만~수십만 번의 activation cycles 필요
**Photon 수집**: 각 분자당 수천 개의 photons

### 3. Computational Intensity
**정확한 위치 계산**: 각 단일 분자의 수학적 중심 계산
**Image reconstruction**: 수만 개의 위치를 하나의 이미지로 결합

## SMLM의 장점
1. **높은 Resolution**: ~20 nm (10배 향상)
2. **정확한 위치 정보**: Nanometer 수준의 정밀도
3. **실제 크기 반영**: True molecular dimensions 가시화
4. **정량적 분석**: 개별 분자 counting 가능

## SMLM의 한계
1. **긴 Acquisition Time**: 수만~수십만 번의 cycles
2. **특수 Labels**: [[# SMLM (Single-Molecule Localization Microscopy)#^c7bd0d|Photoswitchable probes]] 필요
3. **Dense Labeling 필요**: 충분한 분자 밀도
4. **Live Cell 어려움**: 긴 시간으로 인한 제약

## 기술적 요구사항

### <mark style="background:#fff88f">Photoswitchable Labels</mark>
**다양한 Labels**: 수백 가지 사용 가능
**세 가지 클래스**: Photoactivated, photoconvertible, photoswitchable
**높은 Photon Yield**: 분자당 수천 개의 photons 방출

### Imaging System
**고감도 Detection**: 단일 분자 감지
**정밀한 Control**: Activation과 excitation의 정확한 타이밍
**Stable System**: 긴 acquisition 동안 안정성

### Computational Resources
**Large Data Sets**: 수만~수십만 개의 이미지
**복잡한 Algorithms**: 분자 위치 계산
**Image Reconstruction**: 최종 superresolution 이미지 생성


## 다른 Superresolution 기술과 비교
**vs [[SIM(Structured Illumination Microscopy)]]**: SIM은 더 빠르고(초-분 단위) 모든 dyes 사용 가능하지만 100 nm 제한. SMLM은 20 nm까지 가능하지만 분-시간 단위 소요.

**vs [[STED(Stimulated Emission Depletion)]]**: 둘 다 ~20 nm resolution. STED는 point-by-point scanning, SMLM은 wide-field imaging 후 reconstruction.

**vs [[Confocal Microscope]]**: Confocal은 ~200 nm, 빠름, 3D 가능. SMLM은 ~20 nm이지만 느리고 주로 2D (단, 3D 가능한 변형도 있음).

---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "Single-Molecule Localization Microscopy Also Delivers Superresolution", Related Figures: 9-31, 9-32, Related concepts: [[deconvolution]], [[SIM(Structured Illumination Microscopy)]], [[STED(Stimulated Emission Depletion)]], [[Confocal Microscope]]