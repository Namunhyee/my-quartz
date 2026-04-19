# AFM (Atomic Force Microscopy, 원자력 현미경)

AFM은 나노스케일에서 표면의 형태와 <mark style="background:#fff88f">물성(Topology·마찰·정전 상호 작용·도전률·자력 등의 재질 특성을 Image화)</mark>을 측정하는 주사탐침현미경(SPM) 기술

![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260305204124.png]]
## 기본 구조

**주요 구성요소:**

- <mark style="background:#fff88f">캔틸레버(Cantilever)</mark>: 끝이 뾰족한 미세한 탐침이 달린 작은 팔
- <mark style="background:#fff88f">탐침(Tip)</mark>: 캔틸레버 끝의 날카로운 침, 곡률반경은 수~수십 나노미터
- <mark style="background:#fff88f">레이저 검출 시스템</mark>: 캔틸레버의 미세한 움직임을 감지. 
	- Laser를 캔틸래버 위에 조사하고 레이저의 반사광을 <mark style="background:#fff88f">photodiode(detector)로 측정</mark>
- 압전 스캐너: 시료를 나노미터 정밀도로 3차원 이동
- 피드백 시스템: 탐침-시료 간 거리를 일정하게 유지

## 작동 원리

**1. 힘 감지** 탐침이 시료 표면에 접근하면 <mark style="background:#fff88f">원자 간 상호작용력</mark>(반데르발스력, 정전기력 등)이 작용합니다. 이 힘에 의해 캔틸레버가 휘어지며, 레이저 빔이 캔틸레버 뒷면에서 반사되어 포토다이오드에 도달합니다. 캔틸레버의 굽힘 정도를 통해 힘의 크기를 측정합니다.

**2. 표면 스캔** 압전 스캐너가 시료를 x-y 방향으로 이동시키면서, 피드백 시스템이 탐침-시료 간 힘(또는 거리)을 일정하게 유지합니다. 이때 z 방향의 움직임을 기록하여 표면 형상을 매핑합니다.

## 응용

- <mark style="background:#fff88f">생물학적 시료 (DNA, 단백질, 세포) 관찰</mark>
- ![[Cell Biology/출처/md converted/클립보드 이미지 자료/Pasted image 20260305204124.png]]<mark style="background:#fff88f">사진</mark>
<mark style="background:#fff88f">	DNA 가는 선</mark>
<mark style="background:#fff88f">	MUTs 밝은 점</mark>
<mark style="background:#fff88f">	DNA damage가 있는 부분에만 MUTs 단백질이 검출됨</mark>

**해상도:** 수직 방향 0.1nm, 수평 방향 1nm 수준의 초고해상도