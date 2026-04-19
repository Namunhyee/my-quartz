# Confocal Microscope

## 개요

Confocal microscope(공초점 현미경)는 [[deconvolution]]과 유사한 결과를 얻지만, 측정 전에 빛을 조작하는 방식으로 작동한다. 이는 디지털 기술이 아닌 <mark style="background:#fff88f">아날로그 기술</mark>이다. Confocal microscope의 광학적 세부사항은 복잡하지만, 기본 개념은 단순하며(Figure 9-24 참조), 그 결과는 기존 광학 현미경보다 훨씬 우수하다.
<mark style="background:#fff88f">150μm 깊이까지만 이미지를 얻을 수 있음.</mark>

## 작동 원리

### 기본 구성

Confocal microscope는 일반적으로 fluorescence optics(형광 광학계)와 함께 사용된다(Figure 9-10C 참조). 그러나 일반적인 방식처럼 전체 표본을 한 번에 조명하는 대신, <mark style="background:#fff88f">광학 시스템은 순간적으로 표본 내 특정 깊이의 단일 지점에 빛의 점을 집속</mark>한다.
![[Cell Biology/출처/md converted/Chapter 9/_page_16_Picture_2.jpeg]]
### Pinpoint Illumination(점 조명)
- **광원**: 일반적으로 pinhole(핀홀)을 통과한 laser 빛으로 제공
- **형광 수집**: 조명된 물질에서 방출된 형광이 적절한 light detector에 수집되어 이미지 생성
- **Confocal aperture**: Detector 앞에 pinhole aperture가 배치되며, 이는 조명 pinhole과 confocal(공초점) 위치에 있음[^기출_중간_2022_5]
  - 즉, 표본 내 조명된 지점에서 방출된 광선이 초점을 맞추는 정확한 위치에 있음
  - 따라서 표본의 이 지점에서 나온 빛은 이 aperture에 수렴하여 detector로 들어감
### Out-of-focus Light의 제거
- 표본의 초점이 맞지 않는 영역에서 방출된 빛은 pinhole aperture에서도 초점이 맞지 않음
- 따라서 이러한 빛은 detector에서 대부분 제외됨
- 이를 통해 out-of-focus blur(초점이 맞지 않는 흐릿함)가 제거되어 선명한 optical section(광학 절편)을 얻을 수 있음
### Scanning(주사) 과정
- Two-dimensional image를 구축하기 위해 초점 평면의 각 지점에서 데이터가 순차적으로 수집됨
- 한쪽에서 다른 쪽으로 일정한 pixel 패턴으로 field를 가로질러 scanning
- 데이터는 computer screen에 표시됨
## Three-dimensional Imaging(3차원 영상화)

서로 다른 깊이에서 촬영한 일련의 optical sections을 computer에 저장하면 three-dimensional image를 재구성할 수 있다(Movie 9.1 참조).
## [[deconvolution#해결 방법 두 가지 보완적 접근법|Deconvolution Methods와의 비교]]

### Confocal Microscopy의 장점
- **두꺼운 표본에 더 적합**: High levels of out-of-focus light가 있는 두꺼운 표본(150 μm)에 일반적으로 더 우수
- **사용 용이성**: Deconvolution systems보다 일반적으로 사용이 더 쉬움
- **빠른 결과**: 최종 optical sections을 빠르게 볼 수 있음

### Deconvolution의 장점
(강의노트상 표기. 실제론 'image deconvolution';computational approach)
- **Photon 수집 효율**: Deconvolution systems에 사용되는 CMOS cameras는 방출되는 거의 모든 photon을 수집하는 데 매우 효율적
- **약한 표본에 적합**: 너무 약하게 염색되었거나 confocal microscopy에 사용되는 밝은 빛으로 쉽게 손상되는 표본에서 상세한 three-dimensional images를 만드는 데 사용 가능[^기출_중간_2023_13]

## 제한사항

### 두께 제한
두 방법 모두 매우 두꺼운 표본을 다루는 데 한계가 있다:
- **Deconvolution methods**: 표본 깊이 약 40 μm 이상에서는 빠르게 효과가 떨어짐
- <mark style="background:#fff88f">**Confocal microscopes**: 최대 약 150 μm 깊이까지만 이미지를 얻을 수 있음</mark>[^기출_중간_2023_13]
## 그럼에도 noise 발생
1. 빛이 모이는 곳에서 가장 밝은 형광이 나오지만 <mark style="background:#fff88f">빛의 경로에 있는 시료에도 형광이 발생</mark>함. 이것이 핀홀의 가장자리로 소량 들어옴
2. out of focus 빛 중에[[STED(Stimulated Emission Depletion)#Point Spread Function의 이해|PSF]]의 꼬리부분에 해당하는 빛이 핀홀로 들어옴
3. out of focus 빛이 시료 내에서 산란, 굴절하며 핀홀로 들어옴

## ➡Multiphoton Microscopy가 대안![[Multiphoton Microscopy|h-50%]]


---

## Figure 설명

### Figure 9-24: Confocal Fluorescence Microscope
![[Cell Biology/출처/md converted/Chapter 9/_page_16_Picture_2.jpeg]]

**(A) 기본 구성도**
- Standard fluorescence microscope(Figure 9-10C 참조)와 유사한 광학 구성요소의 기본 배열
- 차이점: Laser를 사용하여 small pinhole을 조명하며, 그 이미지가 three-dimensional (3D) 표본의 단일 지점에 집속됨

**(B) 형광 방출**
- 표본의 이 focal point에서 방출된 형광이 두 번째 (confocal) pinhole에 집속됨

**(C) Out-of-focus light 제거**
- 표본의 다른 곳에서 방출된 빛은 pinhole에서 초점이 맞지 않음
- 따라서 최종 이미지에 기여하지 않음
- 표본을 가로질러 light beam을 scanning함으로써
- 정확한 초점 평면의 매우 선명한 two-dimensional image가 구축됨
- 표본의 다른 영역에서 나온 빛으로 인해 크게 저하되지 않음

**(D) 상업용 버전**
- Laser scanning confocal microscopes의 상업용 버전은 upright 및 inverted microscopes 모두에 구성 가능
- 표준 upright confocal microscope를 보여줌

---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "The Confocal Microscope Produces Optical Sections by Excluding Out-of-Focus Light"
- Related Figures: 9-24, 9-25, 9-26
- Related Movie: Movie 9.1

[^기출_중간_2022_5]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_5번|2022 중간 5번]] — 공초점 현미경의 핀홀(pinhole)을 통한 out-of-focus light 제거 및 optical section 형성 원리가 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2023_13]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_13번|2023 중간 13번]] — ④번 선지(정답): Confocal에서 사용하는 고에너지 단광자 빛(가시광선)은 조직에서 산란·흡수되어 250 μm 깊은 곳까지 침투 불가, 형광 들뜸 자체가 안 됨. Confocal microscope 최대 깊이 약 150 μm. ②번 오답: 더 강한 빛 사용은 광독성(phototoxicity) 및 광표백(photobleaching) 악화. ③번 오답: Deconvolution은 이미 얻어진 이미지의 blur를 수학적 처리로 제거하는 방법이며, 빛 자체가 깊이 도달하지 못하는 문제를 해결하지 못함.