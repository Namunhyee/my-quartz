# Stimulated Emission Depletion (STED) Microscopy
## 개요
STED microscopy는 point spread function의 크기를 줄여 [[diffraction limit|회절 한계]]를 극복하는 superresolution 기술이다. 약 20 nm의 resolution을 달성할 수 있어, conventional light microscopy보다 약 10배 향상된 성능을 보인다.
## Point Spread Function의 이해
### 기본 개념
[[deconvolution#Point Spread Function(PSF)의 이해|Point spread function]]은 lens에 의해 점 광원이 초점을 맞출 때 형성되는 three-dimensional blurred image 내 빛 강도의 분포다. Diffraction effects 때문에 점 광원과 동일하게 imaging되는 대신, 이미지는 Gaussian distribution에 의해 대략적으로 설명되는 강도 분포를 가지며, 이것이 lens system의 resolution을 결정한다.

## Figure 9-29: Point Spread Function과 Resolution
![[_page_19_Figure_2.jpeg]]
**(A) 3D Blurring**: 점 광원이 lens system으로 초점을 맞출 때, diffraction effects로 인해 점으로 imaging되지 않고 모든 차원에서 blurred됨. Point spread function이 elongated(길쭉한) 형태이므로, XY축에서의 resolution이 Z축보다 우수함을 의미함.
**(B) Gaussian Distribution**: 이미지 평면에서 빛의 분포가 Gaussian distribution에 근사함. 이상적 조건에서 half-maximum에서의 width는 약 200 nm.
**(C) Resolution Limit**: 약 200 nm 떨어진 두 개의 별도 점 광원은 이미지에서 여전히 별도 객체로 구별 가능함. 이보다 가까우면 이미지가 겹쳐서 분해 불가능.

## STED의 원리
### Resolution 제한 극복
두 점이 half-maximum height의 distribution width보다 가까우면 이미지가 너무 많이 겹쳐 분해하기 어렵다. Fluorescence microscopy에서 excitation light는 objective lens에 의해 specimen의 한 지점에 초점을 맞추고, lens는 beam이 ground state에서 excited state로 올린 형광 분자가 방출하는 photons를 포착한다.
### 핵심 전략
**Resolution 향상 방법**: Excitation spot의 blurred periphery에 있는 모든 형광 분자들을 ground state나 정상적으로 형광을 내지 않는 state로 다시 전환하고, 매우 center에 있는 분자들만 기록되도록 남겨두는 것이다.

## Figure 9-30: Point Spread Function 크기 감소를 통한 Superresolution
![[_page_19_Figure_6.jpeg]]

**(A) Normal Focused Beam**: 정상적인 focused beam of excitatory light의 크기
**(B) Doughnut-shaped Depletion Beam**: 극도로 강한 superimposed laser beam이 다른 파장이며 torus(도넛) 모양으로, specimen의 모든 곳에서 emitted fluorescence를 depletion시킴. 단, beam의 정중앙은 제외.[^기출_중간_2023_14]
**(C) Reduced Point Spread Function**: Beam center에서 effective point spread function의 width 감소
**작동 원리**: Specimen을 scanning하면서 이 작은 point spread function이 STED(stimulated emission depletion) microscopy라 불리는 과정으로 선명한 이미지를 만듦.
**(D) Nuclear Pore STED Microscopy**: STED microscopy를 사용하여 nuclear pore 구조 검사. 고정된 nuclear envelope 샘플을 indirect immunofluorescence로 염색하여 다양한 nuclear pore components에 대한 antibodies 사용. Membrane ring proteins(Figure 12-55 참조)는 red로 염색되고, pore center에 fibrils를 형성하는 FG repeat proteins는 green으로 염색됨.
**(E) Enlargement**: Boxed region의 확대는 membrane ring proteins의 명확한 eightfold symmetry와 약 20 nm resolution의 central fibrillar region을 보여줌.
## STED의 작동 메커니즘
### Photoswitchable Fluorescent Probes
**필수 요구사항**: 사용되는 fluorescent probes는 photoswitchable이어야 함. 즉, 서로 다른 파장의 빛으로 emission을 가역적으로 켜고 끌 수 있어야 함.
### Scanning Process
Specimen을 이러한 laser 배열로 scan하면서, fluorescent 분자들이 켜지고 꺼지며, 각 위치에서 작은 point spread function이 기록됨. [[Confocal Microscope]]와 유사한 방식으로 scan하지만, 유사하지만 <mark style="background:#fff88f">매우 가까이 있는 분자들이 두 가지 다른 states(형광을 내는 것과 어두운 것) 중 하나에 있도록 보장하기 때문에 회절 한계를 극복함.</mark>
### Resolution 달성
**생물학적 표본에서**: 20 nm의 resolutions가 달성되었음 (Figure 9-30 참조)

## STED의 특징

### 주요 장점
1. **높은 Resolution**: 약 20 nm까지 도달 가능
2. **생물학적 표본 적용**: Biological specimens에서 실제로 구현 가능
3. **Confocal과 유사**: 기존 [[Confocal Microscope|confocal microscopy]]와 유사한 scanning 방식
4. **직접적 관찰**: Image reconstruction이 비교적 직관적

### 요구사항
1. **Photoswitchable Probes**: 특수한 형광 probes 필요
2. **고강도 Laser**: 매우 밝은 depletion laser 필요
3. **복잡한 광학 시스템**: Doughnut-shaped beam 생성을 위한 정교한 optics
4. **Scanning 시간**: Point-by-point scanning으로 시간 소요

## 다른 Superresolution 기술과 비교
**vs [[Structured Illumination Microscopy]]**: SIM은 모든 형광 dyes 사용 가능, 더 빠름, 하지만 resolution이 100 nm로 제한. STED는 20 nm까지 가능하지만 특수 probes 필요.

**vs PALM/STORM**: 유사한 resolution(~20 nm) 달성하지만 다른 원리 사용. PALM/STORM은 single-molecule localization 기반, STED는 point spread function 축소 기반.

**vs [[Confocal Microscope]]**: Confocal은 회절 한계 내(~200 nm), STED는 이를 10배 초과하여 극복.

## 응용 분야

### Nuclear Structure
**Nuclear Pores**: Eightfold symmetry와 central channel 구조 (Figure 9-30D, E)
**Chromatin Organization**: 회절 한계 이하의 chromatin structures
**Nuclear Bodies**: Cajal bodies, PML bodies 등의 상세 구조

### Membrane Structures
**Synaptic Vesicles**: Vesicle distribution과 organization
**Membrane Proteins**: Receptor clustering과 organization
**Lipid Rafts**: Membrane domain organization

### Cytoskeletal Details
**Microtubules**: 개별 protofilaments
**Actin Filaments**: Branching points와 organization
**Intermediate Filaments**: Filament bundling과 interactions

## 기술적 고려사항

### Laser Systems
**Excitation Laser**: Appropriate wavelength로 형광 분자 여기
**Depletion Laser**: 매우 높은 강도, doughnut shape 형성
**Alignment**: 두 beams의 정확한 정렬이 중요

### Photoswitchable Probes
**특성**: Efficient switching, 높은 photostability
**선택**: 적절한 excitation/depletion wavelengths
**Brightness**: 충분한 photon emission

### Imaging Parameters
**Laser Power**: Depletion laser 강도 최적화
**Dwell Time**: 각 pixel에서의 scanning 시간
**Pixel Size**: Desired resolution에 맞춘 sampling

## 광손상 고려사항
**High Laser Intensity**: Depletion laser의 높은 강도로 인한 phototoxicity 가능
**Photobleaching**: 반복적인 switching으로 형광 분자 손상
**완화 전략**: Laser power 최적화, 적절한 probes 선택, 빠른 scanning

## 요약
**핵심 원리**: Doughnut-shaped depletion laser로 point spread function의 effective 크기를 줄여 [[diffraction limit|회절 한계]] 극복
**Resolution**: 약 20 nm (conventional의 10배 향상)
**주요 특징**: Photoswitchable probes 필요, confocal과 유사한 scanning, 직접적 이미지 형성
**응용**: Nuclear pores, synaptic structures, membrane organization, cytoskeletal details
**한계**: 특수 probes 필요, 높은 laser intensity, 상대적으로 느린 imaging

---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "Superresolution Fluorescence Techniques Can Overcome Diffraction-limited Resolution", Related Figures: 9-29, 9-30, 12-55, Related concepts: [[deconvolution]], [[Structured Illumination Microscopy]], [[Confocal Microscope]]

[^기출_중간_2023_14]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_14번|2023 중간 14번]] — STED는 여기 레이저(excitation beam)와 도넛 모양의 depletion 레이저를 동시에 사용하여 point spread function의 크기를 줄여 회절 한계를 극복한다는 원리가 정답 근거(선지 ⑤)로 활용됨.