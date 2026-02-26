# Confocal Microscope

## 개요

Confocal microscope(공초점 현미경)는 [[deconvolution]]과 유사한 결과를 얻지만, 측정 전에 빛을 조작하는 방식으로 작동한다. 이는 디지털 기술이 아닌 <mark style="background:#fff88f">아날로그 기술</mark>이다. Confocal microscope의 광학적 세부사항은 복잡하지만, 기본 개념은 단순하며(Figure 9-24 참조), 그 결과는 기존 광학 현미경보다 훨씬 우수하다.

## 작동 원리

### 기본 구성

Confocal microscope는 일반적으로 fluorescence optics(형광 광학계)와 함께 사용된다(Figure 9-10C 참조). 그러나 일반적인 방식처럼 전체 표본을 한 번에 조명하는 대신, 광학 시스템은 순간적으로 표본 내 특정 깊이의 단일 지점에 빛의 점을 집속한다.
![[Chapter 9.pdf#page=17&selection=65,0,65,11|h-30%]]
### Pinpoint Illumination(점 조명)

- **광원**: 일반적으로 pinhole(핀홀)을 통과한 laser 빛으로 제공
- **형광 수집**: 조명된 물질에서 방출된 형광이 적절한 light detector에 수집되어 이미지 생성
- **Confocal aperture**: Detector 앞에 pinhole aperture가 배치되며, 이는 조명 pinhole과 confocal(공초점) 위치에 있음
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

### 실제 구현

[[Confocal Microscope#Figure 9-24 Confocal Fluorescence Microscope|Figure 9-24]]에는 표시되지 않았지만, scanning은 일반적으로 다음과 같이 수행된다:
- Dichroic (beam-splitting) mirror와 objective lens 사이에 배치된 oscillating mirror(진동 거울)로 beam을 편향
- 조명 spot과 detector의 confocal pinhole이 엄격하게 정렬된 상태를 유지
- 디자인의 변형으로 video rate(비디오 속도)로 빠른 데이터 수집 가능

## 응용 분야

Confocal microscope는 다음과 같은 다양한 구조 해상에 사용되어 왔다:
- Cytoskeletal fibers의 networks
- Organelles의 dynamics(역학)
- Nucleus 내 chromosomes와 genes의 배열

## Three-dimensional Imaging(3차원 영상화)

서로 다른 깊이에서 촬영한 일련의 optical sections을 computer에 저장하면 three-dimensional image를 재구성할 수 있다(Movie 9.1 참조).

### Figure 9-25: Confocal Microscopy의 응용 예시

**Figure 9-25A**: 육식성 수생 식물 *Utricularia gibba*의 정교한 컵 모양 포획기
- Cell walls용 fluorescent label을 사용한 452개의 개별 confocal images stack을 조합하여 이미지 생성

**Figure 9-25B**: Optical sections의 stack에서 객체 재구성 가능
- 훨씬 다른 규모에서 단일 살아있는 yeast cell의 mitochondrial compartment의 복잡한 분기 구조를 보여줌

## [[deconvolution#해결 방법 두 가지 보완적 접근법|Deconvolution Methods와의 비교]]

### Confocal Microscopy의 장점
- **두꺼운 표본에 더 적합**: High levels of out-of-focus light가 있는 두꺼운 표본에 일반적으로 더 우수
- **사용 용이성**: Deconvolution systems보다 일반적으로 사용이 더 쉬움
- **빠른 결과**: 최종 optical sections을 빠르게 볼 수 있음

### Deconvolution의 장점
- **Photon 수집 효율**: Deconvolution systems에 사용되는 CMOS cameras는 방출되는 거의 모든 photon을 수집하는 데 매우 효율적
- **약한 표본에 적합**: 너무 약하게 염색되었거나 confocal microscopy에 사용되는 밝은 빛으로 쉽게 손상되는 표본에서 상세한 three-dimensional images를 만드는 데 사용 가능

## 제한사항

### 두께 제한
두 방법 모두 매우 두꺼운 표본을 다루는 데 한계가 있다:
- **Deconvolution methods**: 표본 깊이 약 40 μm 이상에서는 빠르게 효과가 떨어짐
- <mark style="background:#fff88f">**Confocal microscopes**: 최대 약 150 μm 깊이까지만 이미지를 얻을 수 있음</mark>

## ➡Multiphoton Microscopy가 대안![[Multiphoton Microscopy|h-50%]]


---

## Figure 설명

### Figure 9-24: Confocal Fluorescence Microscope

> [!scheme] Fig. 9-24
![[Chapter 9.pdf#page=17&selection=65,0,65,11|h-30%]]

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

### Figure 9-25: Confocal Fluorescence Microscopy의 3D 데이터

**(A) *Utricularia gibba* 포획기**
- 육식성 수생 식물의 정교한 컵 모양 trap
- Cell walls용 fluorescent label을 사용한 452개의 개별 confocal images stack을 조합하여 이미지 제작

**(B) 3D 재구성**
- Optical sections의 stack에서 객체 재구성 가능
- 단일 살아있는 yeast cell의 mitochondrial compartment의 복잡한 분기 구조
- 훨씬 다른 규모에서의 예시

### Figure 9-26: Multiphoton Imaging

살아있는 마우스 뇌 피질 내부 거의 0.5 mm를 볼 수 있다:
- **기술**: Two-photon effect
  - Fluorochrome이 single high-energy photon 대신 두 개의 coincident infrared photons로 여기될 수 있음
- **사용된 염료**: Calcium 농도에 따라 형광이 변하는 dye
- **관찰 내용**: 
  - Dendritic spines(빨간색)의 active synapses(노란색) 표시
  - 시간의 함수로 변화 (각 이미지 사이에 하루 간격)
- **장점**:
  - Infrared laser light가 visible light보다 살아있는 세포에 덜 손상
  - 더 깊이 침투하여 현미경 관찰자가 살아있는 조직 내부를 더 깊이 들여다볼 수 있음

---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "The Confocal Microscope Produces Optical Sections by Excluding Out-of-Focus Light"
- Related Figures: 9-24, 9-25, 9-26
- Related Movie: Movie 9.1