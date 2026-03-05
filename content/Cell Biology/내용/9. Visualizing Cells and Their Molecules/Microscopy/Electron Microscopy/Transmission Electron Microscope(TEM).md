# Transmission Electron Microscope (TEM)
## 개요
Transmission electron microscope는 electron beam을 specimen을 통과시켜 이미지를 형성하는 현미경이다.[^기출_중간_2021_미상A] Overall design이 inverted light microscope와 유사하지만 훨씬 크며, 약 0.05 nm의 실용적 분해능을 달성할 수 있어 light microscope보다 200배 이상 향상된 성능을 보인다.

## TEM의 기본 설계
### 전체 구조
**크기**: 약 2 m 높이의 원통형 column
**Light microscope와의 유사성**: Overall design이 inverted light microscope와 유사 (Figure 9-40)
### Figure 9-40: Light Microscope와 TEM 비교
![[_page_26_Picture_2.jpeg]]

**공통 설계 원리 강조**:
- **Light microscope**: Glass lenses 사용
- **Electron microscope**: Magnetic coils (electromagnetic lenses) 사용
**Electron microscope 요구사항**:
- Specimen을 vacuum에 배치해야 함
- 약 2 m 높은 원통형 column
## <mark style="background:#fff88f">TEM의 분해능</mark>
d= λ/2NA
d: 구분 가능한 최소거리  
λ: 빛의 파장  
NA: 렌즈의 빛 모음 정도
### 이론적 한계
**Electron 파장**: <mark style="background:#fff88f">100-300 keV accelerating voltage에서 0.0037 nm.</mark>
가시광선 대비 10만배 짧음
**이론적 resolution**: <mark style="background:#fff88f">약 0.002 nm (파장의 약 절반)</mark>[^기출_중간_2022_10]
**이는 100,000배**: Conventional light microscope보다 향상
### 실용적 한계
**Electron lens aberrations**: Glass lens보다 correction이 훨씬 어려움
**결과**: <mark style="background:#fff88f">실용적 resolving power는 약 0.05 nm</mark> (0.5 Å)로 제한
### 생물학적 표본의 한계
**일반적 effective resolution**: 1 nm (10 Å)로 제한
**제한 요인**:
- Specimen preparation 문제
- <mark style="background:#fff88f"><font color="#000000">Contrast 한계</font></mark>
- Radiation damage
**성능**: 여전히 light microscope보다 약 200배 향상
## <mark style="background:#fff88f">수차(Aberration)</mark>
전자빔이 이상적인 경로로 집속되지 못해 영상이 왜곡되거나 해상도가 저하되는 현상
### 1. 구면수차 (Spherical Aberration)
- 구면수차는 렌즈 중심을 통과하는 전자와 주변부를 통과하는 전자가 서로 다른 초점에 모이는 현상
- 전자렌즈의 자기장이 이상적인 포물면 형태가 아니기 때문에 발생 
- 고해상도 관찰에서 가장 큰 해상도 제한 요인 중 하나로 작용한다.
### 2. 색수차 (Chromatic Aberration)
- 색수차는 에너지가 서로 다른 전자들이 서로 다른 위치에 초점을 형성하는 현상 
- 전자총에서 발생하는 에너지 분포나 시료 통과 과정에서의 에너지 손실 때문에 발생
- 가속 전압의 안정성과 전자 에너지 분산이 중요한 영향을 미친다.
## <mark style="background:#fff88f">전자 산란</mark>
### 중금속 염색의 의미
생체 시료의 대비를 높이기 위해 **Osmium tetroxide**, **Uranyl acetate**, **Lead citrate** 같은 중금속을 사용한다.
- 중금속은 원자 번호가 매우 크다.
- 전자를 강하게 산란시킨다.
- 그 결과 영상에서 더 뚜렷한 대비를 만든다.
즉,  
**핵전하 ↑ → 전자 산란 ↑ → 영상 대비 ↑**
### <mark style="background:#fff88f">BF(명시야), DF(암시야)</mark>
#### ① BF (Bright Field, 명시야)
- 직접 통과한 전자(산란되지 않은 전자)를 이용해 영상을 만든다.
- 전자를 많이 산란시키는 부분은 전자가 덜 도달하므로 **어둡게 보인다.**
- 중금속이 붙은 부위가 어둡게 보이는 이유가 여기에 있다.
→ 생체 시료에서 가장 흔히 사용하는 방식이다.
#### ② DF (Dark Field, 암시야)
- 산란된 전자만을 이용해 영상을 만든다.
- 전자를 많이 산란시키는 부분이 **밝게 보인다.**
→ BF와 대비가 반대로 형성된다.
## Figure 9-39: Electron Microscope의 Resolution
![[_page_25_Figure_9.jpeg]]
**표본**: Monolayer of graphene
**성취**: Individual carbon atoms를 bright spots로 분해
**원자 간 거리**: 0.14 nm (1.4 Å)
**의의**: 
- 이러한 resolution은 특별히 제작된 transmission electron microscope에서만 달성 가능
- 모든 lens aberrations가 신중히 correction된 상태
- Optimal specimens 필요
- 대부분의 conventional biological specimens에서는 거의 달성되지 않음
**Graphene 특성**:
- 단일 isolated atomic plane of graphite
- Carbon nanotubes의 기초
- 육각형 격자 구조의 탄소 원자들


## TEM의 장점
### 1. 매우 높은 Resolution
**0.05-1 nm**: 생물학적 표본에서 실용적 범위
**Atomic resolution**: 최적 조건에서 개별 원자 가시화 가능 (Figure 9-39)
### 2. 광범위한 Magnification
**범위**: 수천 배에서 수백만 배
**유연성**: 다양한 크기의 structures 관찰
### 3. 구조적 세부사항
**Ultrastructure**: 세포 소기관의 내부 구조
**Macromolecules**: 대형 분자 복합체
**Membranes**: Membrane 구조 상세
### 4. 성숙한 기술
**잘 확립됨**: 수십 년의 발전
**표준화**: 준비와 imaging 프로토콜
**광범위한 응용**: 다양한 생물학적 시스템

## TEM의 한계
### 1. Specimen 제약
**고정 필요**: 살아있는 세포 관찰 불가
**Thin sections**: 매우 얇은 sections 필요 (25-100 nm)[^기출_중간_2023_15]
**복잡한 준비**: [[Cryo EM_Biological Specimen Preparation for Electron Microscopy|복잡한 준비 과정]]
### 2. Radiation Damage
**Electron beam damage**: 고에너지 electrons가 생물학적 재료 손상
**누적 효과**: 장시간 노출로 구조 변형
**Low-dose 필요**: 손상 최소화를 위한 낮은 electron dose
### 3. Contrast 문제
**Low contrast**: 생물학적 재료는 본질적으로 낮은 contrast
**Heavy metal staining 필요**: Contrast 향상을 위한 추가 단계
**Artifacts**: Staining 과정에서 발생 가능
### 4. 2D Projection
**3D 정보 손실**: Thin section은 2D 이미지
**해결책**: Tomography나 serial sectioning 필요
**복잡성**: 3D reconstruction은 복잡하고 시간 소요

## TEM vs 다른 Microscopy 기술
**vs Light Microscopy**:
- TEM: ~0.05-1 nm resolution, 고정 표본만
- Light: ~200 nm, 살아있는 세포 가능
**vs [[Confocal Microscope]]**:
- TEM: 훨씬 높은 resolution, 2D sections
- Confocal: 3D optical sections, 살아있는 세포
**vs SEM** (다음 섹션):
- TEM: Transmission, 내부 구조
- SEM: Surface scanning, 3D 표면

## 응용 분야
### 세포 생물학
**Organelles**: Mitochondria, ER, Golgi의 ultrastructure
**Cytoskeleton**: Filaments, microtubules의 상세 구조
**Membranes**: 이중층 구조, membrane junctions
### 바이러스학
**Virus structure**: Capsid architecture, envelope
**Viral assembly**: 조립 중간 단계
**Host-virus interactions**: 세포 내 바이러스
### 재료 과학
**Nanomaterials**: Carbon nanotubes, graphene (Figure 9-39)
**Crystals**: Crystal structure와 defects
**Composites**: Material interfaces
### 병리학
**Disease diagnosis**: Tissue abnormalities
**Ultrastructural pathology**: 세포 수준 질병 변화
**Infectious agents**: Bacteria, viruses 식별

## 기술적 고려사항
### Accelerating Voltage
**일반적 범위**: 80-300 kV
**높은 voltage**: 더 짧은 파장, 더 나은 resolution, 더 깊은 penetration
**낮은 voltage**: 적은 radiation damage, 생물학적 표본에 적합
### Specimen Thickness
**최적**: 50-100 nm for biological specimens
**너무 두꺼움**: Electron scattering 증가, resolution 감소
**너무 얇음**: 구조적 맥락 손실
### Electron Dose
**Trade-off**: Resolution vs radiation damage
**Low-dose imaging**: Damage 최소화하지만 noise 증가
**Cryo-EM**: 매우 낮은 dose 사용 가능

## 요약
**핵심 원리**: Electron beam을 specimen을 통과시켜 매우 높은 resolution 이미지 생성
**Resolution**: 약 0.05-1 nm (생물학적 표본), atomic resolution 가능 (최적 조건)
**설계**: Inverted light microscope와 유사하지만 magnetic lenses와 vacuum 사용
**주요 장점**: 극도로 높은 resolution, ultrastructure 가시화, 성숙한 기술
**주요 한계**: 고정 표본만, 복잡한 준비, radiation damage, 2D projection
**응용**: Cell biology, virology, materials science, pathology

---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "The Electron Microscope Resolves the Fine Structure of the Cell", Related Figures: 9-39, 9-40, Related concepts: [[Cryo EM_Biological Specimen Preparation for Electron Microscopy]]

[^기출_중간_2021_미상A]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상A번|2021 중간 미상A번]] — TEM의 정의(electron beam을 시료에 투과시켜 이미지 형성)가 여러 현미경 정의 문항에서 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2022_10]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_10번|2022 중간 10번]] — 100,000 V 가속 전압에서 전자의 파장은 0.004 nm이며, 이론적 분해능은 파장의 약 절반인 ~0.002 nm라는 내용이 정답 근거(선지 ③)로 활용됨.
[^기출_중간_2023_15]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_15번|2023 중간 15번]] — TEM 시료는 전자의 낮은 투과력 때문에 25-100 nm로 매우 얇게 절단해야 한다는 내용이 정답 근거(선지 ③)로 활용됨.