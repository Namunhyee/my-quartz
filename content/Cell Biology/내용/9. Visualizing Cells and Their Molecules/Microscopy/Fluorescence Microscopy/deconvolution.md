---
dg-publish: true
---
# Deconvolution

## 복잡한 3차원 객체의 Optical Microscope Imaging

### 배경 및 문제점

#### 기존 광학 현미경의 한계

일반 광학 현미경의 경우, 조직을 얇은 sections(절편)으로 잘라서 검사해야 한다:
- Section이 얇을수록 이미지가 더 선명함
- 그러나 sectioning 시 **세 번째 차원에 대한 정보가 손실됨**

#### 근본적인 문제들

**1. 3차원 구조 파악의 어려움**
- 세포나 조직의 three-dimensional architecture(3차원 구조)를 어떻게 파악할 것인가?
- Sections으로 먼저 자를 수 없는 표본의 microscopic structure를 어떻게 볼 것인가?

**2. Out-of-focus Blur 문제**

Optical microscope가 three-dimensional specimen 내의 특정 focal plane(초점 평면)에 초점을 맞출 때:
- 초점 평면 위아래의 표본의 다른 모든 부분도 조명됨
- 이러한 영역에서 발생하는 빛이 out-of-focus blur로 이미지에 기여함

**문제점**:
- 이미지를 상세히 해석하기 매우 어려움
- 미세한 이미지 구조가 out-of-focus light에 의해 가려질 수 있음

### [[Confocal Microscope#deconvolution 해결 방법 두 가지 보완적 접근법 Deconvolution Methods와의 비교|해결 방법: 두 가지 보완적 접근법]]

복잡한 three-dimensional 구조를 다루기 위한 **두 가지 서로 다르지만 보완적인 접근법**:

1. <mark style="background:#fff88f">**Computational approach(계산적 접근)** → Image deconvolution</mark>
2. **Optical approach(광학적 접근)** → [[Confocal Microscope|Confocal microscopy]]

#### 공통 목표

두 방법 모두 다음을 가능하게 한다:
- 두꺼운 표본에서 선택한 평면에 초점을 맞춤
- 그 평면 위아래의 out-of-focus 영역에서 나오는 빛을 제거
- 따라서 선명하고 얇은 **optical section(광학 절편)** 확보

#### Three-dimensional Image 재구성

- 서로 다른 깊이에서 촬영한 일련의 optical sections을 computer에 저장
- Three-dimensional image를 재구성 가능 (Movie 9.1 참조)

**비유**:
- 현미경 관찰자를 위해 CT scanner가 방사선 전문의를 위해 하는 것과 동일한 작업
- 두 기계 모두 온전한 구조의 내부에 대한 상세한 sectional views 제공

## Image Deconvolution의 원리

### Computational Approach

Image deconvolution은 종종 **computational approach**라고 불린다.

### [[Stimulated Emission Depletion#Point Spread Function의 이해|Point Spread Function(PSF)]]의 이해

#### 기본 개념

빛의 파동 특성 때문에:
- Microscope lens system은 점 광원의 이미지를 작은 흐릿한 disc로 생성 (Figure 9-4 참조)
- 점 광원이 focal plane 위나 아래에 있으면 blurring이 증가

**Point spread function(점 확산 함수)**:
- 점 광원의 이 흐릿한 이미지를 point spread function이라고 함
- Figure 9-29 참조
![[Chapter 9.pdf#page=20&selection=52,0,52,69|w-30% h-30%]]

#### PSF를 이용한 Image 형성 이해

복잡한 객체의 이미지는 다음과 같이 생각할 수 있다:
1. Three-dimensional specimen의 각 점을 해당하는 blurred disc로 교체
2. 결과적으로 전체적으로 흐릿한(blurred) 이미지 생성

### Deconvolution 과정

#### 기본 원리

Computer program이 다음을 수행:
1. 특정 현미경에서 점 광원의 측정된 point spread function 사용
2. 이미지에 대한 blurring의 효과가 무엇이었을지 결정
3. 동등한 "deblurring" (deconvolution) 적용
4. 흐릿한 three-dimensional image를 일련의 깨끗한 optical sections으로 변환

#### 제약사항

- Diffraction limit(회절 한계)에 의해 여전히 제약됨
	-> 없는 정보를 만들어내지 못한다는 뜻.
- 그러나 <mark style="background:#fff88f">out-of-focus blur를 효과적으로 제거</mark>하여 각 광학 절편을 선명하게 만듦

### Figure 9-23: Image Deconvolution 예시
![[Chapter 9.pdf#page=16&selection=74,0,74,31|h-35%]]

#### 실험 대상
*Caenorhabditis elegans* embryo(배아)의 light micrograph

#### 염색
- Microtubules: 녹색 형광 표지
- Mitochondria: 빨간색 형광 표지  
- DNA: 파란색 형광 표지

#### 결과 비교

**(A) Deconvolution 전**
- 특정 초점 수준의 세부 사항이 표본의 out-of-focus levels에서 나온 빛으로 인해 흐릿함

**(B) Deconvolution 후**
- Three-dimensional stack of images의 deconvolution 후
- 동일한 초점 수준의 optical section이 훨씬 더 선명한 이미지를 보여줌
- 더 많은 contrast와 훨씬 감소된 blurring

## Image Deconvolution의 장단점

### 장점

1. **완전한 photon 수집**
   - Deconvolution systems에 사용되는 CMOS cameras는 방출되는 거의 모든 photon을 수집하는 데 매우 효율적

2. **약한 표본에 적합**
   - 너무 약하게 염색된 표본에서도 상세한 three-dimensional images 생성 가능
   - Confocal microscopy에 사용되는 밝은 빛으로 쉽게 손상되는 표본에 적합

3. **낮은 광 노출**
   - 살아있는 세포를 장시간 관찰할 때 광 손상 최소화

### 단점 및 한계

#### 두께 제한
- 표본 깊이 <mark style="background:#fff88f">**약 40 μm 이상**</mark>에서는 빠르게 효과가 떨어짐
- 이는 <mark style="background:#fff88f">confocal microscope(약 150 μm)</mark>보다 더 제한적

#### Confocal Microscopy와의 비교

**[[Confocal Microscope|Confocal microscopy]]가 더 나은 경우**:
- High levels of out-of-focus light가 있는 두꺼운 표본(150 μm)
- 사용이 더 쉬움
- 최종 optical sections을 빠르게 볼 수 있음

**Deconvolution이 더 나은 경우**:
- 약하게 염색된 표본
- 밝은 빛에 민감한 표본
- 높은 photon 수집 효율이 필요한 경우

## 의료 영상과의 유사성

### CT Scanner와의 비교

Image deconvolution과 confocal microscopy가 현미경 관찰자를 위해 하는 것:
= CT (Computed Tomography) scanner가 방사선 전문의를 위해 하는 것

**공통점**:
- 온전한 구조의 내부에 대한 상세한 sectional views 제공
- 서로 다른 수단을 통해 동일한 목적 달성

### 재구성 원리

두 기술 모두:
1. 여러 각도/깊이에서 데이터 수집
2. Computer를 사용하여 three-dimensional 정보 재구성
3. 내부 구조의 상세한 단면도 생성

## 요약

### 핵심 개념

**Image deconvolution**은:
- Computational method(계산적 방법)
- Point spread function을 이용하여 blur 제거
- 여러 깊이의 이미지를 선명한 optical sections으로 변환

### 주요 특징

1. **비파괴적**: 빛을 측정한 후 computer processing으로 처리
2. **효율적 photon 수집**: CMOS cameras 사용
3. **약한 신호에 강함**: 낮은 광량에서도 작동
4. **제한된 두께**: 약 40 μm까지 효과적

### 응용 분야

- 살아있는 세포의 three-dimensional imaging
- 약하게 염색된 표본의 고해상도 imaging
- 광 손상에 민감한 표본의 장기 관찰
- 세포 내 organelles와 구조의 3D 재구성

---

## Figure 설명

### Figure 9-23: Image Deconvolution

**(A) Deconvolution 전의 Light Micrograph**
- **표본**: *Caenorhabditis elegans* embryo
- **염색**:
  - Microtubules: 녹색 형광 표지
  - Mitochondria: 빨간색 형광 표지
  - DNA: 파란색 형광 표지
- **문제점**: 특정 초점 수준의 세부 사항이 표본의 out-of-focus levels에서 나온 빛으로 인해 흐릿함

**(B) Deconvolution 후**
- Three-dimensional stack of images의 deconvolution 수행
- 동일한 초점 수준의 optical section
- **개선사항**:
  - 훨씬 더 선명한 이미지
  - 더 많은 contrast
  - 훨씬 감소된 blurring

**출처**: D. Sage et al., *Methods* 115:28-41, 2017, doi 10.1016/j.ymeth.2016.12.015. With permission from Elsevier.

### Figure 9-29: Point Spread Function (추가 참조)

Point spread function이 lens의 resolution을 결정한다:

**(A) 3D Blurring**
- 점 광원이 lens system으로 초점을 맞출 때
- Diffraction effects로 인해 점으로 imaging되지 않고 모든 차원에서 흐릿해짐
- Point spread function이 elongated(길쭉한) 형태
- **의미**: XY축에서의 resolution이 Z축보다 우수

**(B) Gaussian Distribution**
- 이미지 평면에서 빛의 분포가 Gaussian distribution에 근사
- 이상적인 조건에서 half-maximum에서의 width는 약 200 nm

**(C) Resolution Limit**
- 약 200 nm 떨어진 두 개의 별도 점 광원
- 이미지에서 여전히 별도의 객체로 구별 가능
- 이보다 가까우면 이미지가 겹쳐서 분해 불가능

---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "Imaging of Complex Three-dimensional Objects Is Possible with the Optical Microscope"
- Related Figures: 9-4, 9-23, 9-29
- Related Movie: Movie 9.1
- 관련 기술: [[Confocal Microscope]]