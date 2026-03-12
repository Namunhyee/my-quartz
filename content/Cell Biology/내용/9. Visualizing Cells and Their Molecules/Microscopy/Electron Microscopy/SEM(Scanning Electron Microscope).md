# Scanning Electron Microscope (SEM)

## 개요
Scanning electron microscope (SEM)는 specimen 표면의 three-dimensional structure의 이미지를 직접 생성한다. SEM은 일반적으로 transmission electron microscope보다 더 작고, 단순하며, 저렴하다.

## SEM의 기본 원리

### TEM과의 차이
**TEM**: Specimen을 통과한 electrons를 사용하여 이미지 형성
**SEM**: Specimen 표면에서 scattered 또는 emitted된 electrons를 사용

### 작동 방식
Specimen을 heavy metal layer로 coating하거나 rapidly frozen한 후, cooled specimen stage에 coating하여 microscope에서 검사한다.

## Figure 9-45: Scanning Electron Microscope
![[_page_29_Picture_2.jpeg]]

## 작동원리
## 전자빔의 생성과 주사 과정
### (1) Electron gun
- <mark style="background:#fff88f">1차 전자(primary electron)</mark>를 방출한다.
### (2) Condenser lens
- 전자빔을 집속하여 가는 빔으로 만든다.
### (3) Beam deflector (scan coil)
- 전자빔을 좌우·상하로 주사하여 시료 표면을 raster 방식으로 스캔한다.
### (4) Objective lens
- 최종적으로 전자빔을 시료 표면에 정확히 집속한다.
- 
→ 이 과정을 통해 전자빔이 시료 표면의 한 점씩 순차적으로 조사된다.


**결과**: SEM은 0.5 nm에서 10 nm 사이의 resolution으로 three-dimensional objects의 striking images 생성 (instrument 종류에 따라)

## 3. 시료-전자 상호작용
전자빔이 시료에 충돌하면 여러 신호가 발생한다.
### (1) <mark style="background:#fff88f">Secondary electron (SE)</mark>
- 1차전자가 충돌하여 해당 부분이 이온화되며 전자 방출
- 1차 전자가 시료의 원자와 상호작용하여 방출된 저에너지 전자
- 주로 표면에서 발생
- 표면 형상(topography) 관찰에 가장 중요

→ 표면의 굴곡이 클수록 신호 차이가 커져 입체감 있는 영상 형성
### (2) <mark style="background:#fff88f">Backscattered electron (BSE)</mark>
- 1차 전자가 원자핵에 의해 큰 각도로 산란되어 되돌아온 전자
- 원자번호(atomic number)가 클수록 산란 확률 증가

→ 조성 대비(compositional contrast) 형성에 유리

## 4. 검출과 영상 형성
- Detector가 SE 또는 BSE를 수집한다.
- 각 위치에서 검출된 신호 강도를 전기적 신호로 변환한다.
- Scan generator와 동기화하여 모니터 화면에 영상으로 표시한다.

→ 한 점의 밝기는 해당 위치에서 검출된 전자 신호 세기에 비례한다.

## SEM의 특징
### 1. Depth of Field
**큰 depth of field**: Objects가 near와 far 모두 field of view에서 선명하게 이미지화됨
**3D appearance**: Surface angle이 beam에 대해 상대적이므로 electron scattering 양이 달라져 highlights와 shadows 생성
### 2. Surface Imaging
**표면만 관찰**: <mark style="background:#fff88f">내부 구조는 볼 수 없음</mark>
**해상도**: 약 10 nm (standard SEM)
**결과**: 주로 whole cells과 tissues 연구에 사용됨 (subcellular organelles보다)

## Figure 9-46: SEM의 다양한 Magnifications
![[_page_29_Figure_6.jpeg]]
## SEM vs 다른 Microscopy 기술

**vs [[TEM(Transmission Electron Microscope)|TEM]]**:
- SEM: Surface, 3D, ~10 nm (standard)
- TEM: Internal structure, 2D sections, ~0.05-1 nm

**vs Light Microscopy**:
- SEM: Higher resolution, 3D surface, 고정만
- Light: 살아있는 세포, 낮은 resolution

**vs [[Confocal Microscope]]**:
- SEM: Surface detail, electron microscopy
- Confocal: Internal 3D, fluorescence, 살아있는 세포

---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "The Electron Microscope Resolves the Fine Structure of the Cell", Related Figures: 9-45, 9-46, 9-47, Related concepts: [[TEM(Transmission Electron Microscope)]], [[Cryo EM_Biological Specimen Preparation for Electron Microscopy]]