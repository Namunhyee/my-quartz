# Structured Illumination Microscopy (SIM)

## 개요
[[diffraction limit|회절 한계]]를 극복하는 첫 번째 **superresolution** 접근법으로, 약 100 nm의 resolution을 가진 [[000_Fluorescence Microscopy(형광현미경)#Fluorescent dyes(형광염료)|fluorescence imaging]] 방법이다. <mark style="background:#fff88f">이는 conventional bright-field microscopy의 약 2배 resolution에 해당</mark>한다. <mark style="background:#fff88f">광학현미경에 속함</mark>.

## 회절 한계의 극복
[[optical microscope|Light microscopy]]의 변형들은 모두 classic [[diffraction limit]]에 의해 제약받아 약 0.2 μm(200 nm)까지만 분해능을 가진다(Figure 9-5 참조). 그러나 여러 접근법들이 빛의 회절로 인한 한계를 우회하며, 일부는 10 nm 정도의 작은 객체까지 성공적으로 분해할 수 있어 20배의 놀라운 개선을 이뤘다.

## SIM의 원리

### 기본 개념
SIM은 grated 또는 structured pattern의 빛으로 sample을 조명하여 회절 한계를 극복한다. Microscope의 물리적 설정과 작동은 상당히 복잡하지만, 일반적인 원리는 **moiré pattern**(모아레 패턴) 생성과 유사하게 생각할 수 있다.

### Moiré Pattern(모아레 패턴)
Moiré pattern은 서로 다른 각도나 mesh 크기를 가진 두 grids를 겹쳐 만든 interference pattern이다. 조명 grid와 sample features가 결합되어 interference pattern을 만들며, <mark style="background:#fff88f">여기서 grid spacing보다 작은 features가 더 큰 patterns로 변환된다</mark>.

## <mark style="background:#fff88f">Figure 9-27: Structured Illumination Microscopy 원리</mark>
![[_page_18_Figure_2.jpeg]]

**(A) 미지의 구조로부터의 pattern**: 원래 구조의 pattern을 보여줌
**(B) 정의된 grid pattern**: 알려진 grid pattern
**(C) Moiré pattern**: 이 둘을 결합하면 resulting moiré pattern이 A(원래 pattern)에서 쉽게 보이는 것보다 더 많은 정보를 포함함

**원리**: 알려진 pattern(B)이 더 높은 spatial frequencies를 가지면 더 나은 resolution을 얻을 수 있음. 그러나 광학적으로 생성할 수 있는 spatial patterns도 회절 제한을 받기 때문에,<mark style="background:rgba(5, 117, 197, 0.2)"> SIM은 resolution을 약 2배 정도만 개선할 수 있다.</mark>
![[Pasted image 20260130230233.png]]
## 작동 메커니즘

### Image Acquisition
Classical limit을 넘어서는 원래 features가 optical system에 의해 imaging될 수 있도록 변환됨. Computer image processing은 이들을 classical limit의 2배까지 resolution을 가진 이미지로 복원할 수 있다.

### ~~Grid Illumination 과정~~
**문제**: Grid의 dark stripes에 있는 sample 부분은 조명되지 않아 imaging되지 않음
**해결**: Imaging을 여러 번(일반적으로 3번) 반복. 각 이미지 사이에 grid를 grid spacing의 일부만큼 이동시킴

**방향성 고려**: Interference effect는 grid bars 방향에 가까운 image components에서 가장 강함. 따라서 모든 방향에서 동등한 enhancement를 얻기 위해 전체 과정을 grid pattern을 일련의 각도로 회전시키며 반복함.

**최종 단계**: 이 모든 개별 이미지들을 computer로 수학적으로 결합하여 enhanced superresolution image 생성

## SIM의 특징

### 다양성 (Versatility)
**주요 장점**: 어떤 fluorescent dye나 protein과도 사용 가능
**3D 데이터**: 연속적인 focal planes에서 캡처한 SIM images를 결합하여 three-dimensional data sets 생성 가능

### Resolution
**개선 정도**: Conventional light microscopy 대비 약 2배 향상
**한계**: 광학적으로 생성 가능한 spatial patterns도 회절 제한을 받음

## Figure 9-28: SIM을 이용한 3D 데이터 생성
![[_page_18_Figure_6.jpeg]]

**표본**: Maize cell의 pachytene 단계 meiotic chromosomes의 three-dimensional projections
**염색**: Synaptonemal complexes의 paired lateral elements를 보여줌

**(A) Conventional Fluorescence Microscopy**: Chromosome set이 cohesin에 대한 fluorescent antibody로 염색됨. 두 lateral elements 사이의 거리가 약 200 nm(회절 한계)이기 때문에 각 complex를 구성하는 두 lateral elements가 분해되지 않음.

**(B) 3D SIM Image**: 향상된 resolution으로 각 lateral element(약 100 nm 폭)를 명확히 분해할 수 있으며, 각 개별 쌍의 두 chromosomes가 서로 coil하는 것을 볼 수 있음.

**(C) 색상 추적**: 전체 nucleus에 대한 complete three-dimensional data set이 가능하므로, 각 개별 chromosome 쌍의 경로를 추적하고 인위적으로 다른 색상을 할당할 수 있음.
## 다른 Superresolution 기술과 비교
**vs [[Confocal Microscope]]**: Confocal은 회절 한계 내(200 nm), SIM은 약 100 nm resolution
**vs [[STED(Stimulated Emission Depletion)|STED]]**: STED는 약 20 nm resolution 가능하지만 특수한 photoswitchable probes 필요
**vs PALM/STORM**: 이들도 약 20 nm resolution이지만 더 긴 acquisition time과 특수 probes 필요

## 응용 분야
**Chromosome Structure**: Meiotic chromosomes의 synaptonemal complexes (Figure 9-28)
**Cell Biology**: 회절 한계보다 작지만 10 nm까지는 아닌 구조들
**Live Cell Imaging**: 다른 superresolution 기술보다 빠른 imaging
**Tissue Imaging**: 두꺼운 표본에서 3D reconstruction

## 기술적 고려사항
**Grid Pattern**: 적절한 spatial frequency 선택
**각도와 위상**: 여러 각도와 위상에서 imaging 필요
**Computational Power**: 복잡한 image reconstruction 알고리즘
**Illumination 균일성**: 균일한 grid pattern 조명 필요

## 요약
**핵심 원리**: Structured illumination과 moiré effect를 이용하여 [[diffraction limit|회절 한계]] 극복, 약 2배 resolution 향상
**주요 특징**: 모든 fluorescent probes 사용 가능, 3D imaging 가능, 살아있는 세포에 적용 가능
**Resolution**: 약 100 nm (conventional의 2배)
**응용**: Chromosome structure, subcellular organelles, living cell dynamics
**한계**: 제한된 resolution 향상, 복잡한 image processing, photobleaching

---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "Superresolution Fluorescence Techniques Can Overcome Diffraction-limited Resolution", Related Figures: 9-27, 9-28, Related concepts: [[deconvolution]], [[Confocal Microscope]]