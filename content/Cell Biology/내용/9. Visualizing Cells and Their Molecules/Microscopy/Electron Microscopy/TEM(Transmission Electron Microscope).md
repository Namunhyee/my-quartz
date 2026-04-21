# Transmission Electron Microscope (TEM)
## 개요
Transmission electron microscope는 electron beam을 specimen을 통과시켜 이미지를 형성하는 현미경이다.[^기출_중간_2021_미상A] Overall design이 inverted light microscope와 유사하지만 훨씬 크며, 약 0.05 nm의 실용적 분해능을 달성할 수 있어 light microscope보다 200배 이상 향상된 성능을 보인다.

## TEM의 기본 설계
### 전체 구조
**크기**: 약 2 m 높이의 원통형 column
**Light microscope와의 유사성**: Overall design이 inverted light microscope와 유사 (Figure 9-40)
### Figure 9-40: Light Microscope와 TEM 비교
![[Cell Biology/출처/md converted/Chapter 9/_page_26_Picture_2.jpeg]]

**공통 설계 원리 강조**:
- **Light microscope**: Glass lenses 사용
- **Electron microscope**: Magnetic coils (electromagnetic lenses) 사용 — 광학현미경과 기본 설계는 유사하나 렌즈 구조 등 핵심 구성요소가 다르다.[^기출_중간_2022_10][^기출_중간_2025_32]
**Electron microscope 요구사항**:
- Specimen을 vacuum에 배치해야 함
- 약 2 m 높은 원통형 column
## <mark style="background:#fff88f">TEM의 분해능</mark>
d= λ/2NA
d: 구분 가능한 최소거리  
λ: 빛의 파장  
NA: 렌즈의 빛 모음 정도
### 이론적 한계
드브로이 파장: λ = h/mv, 즉 전자의 파장은 속도(v)에 반비례한다 — 속도가 빠를수록 파장이 짧아져 해상도가 향상된다.[^기출_중간_2022_10][^기출_중간_2025_32]
회절 한계(diffraction limit)는 광학현미경에만 국한되지 않고 전자현미경에도 적용된다 — 다만 전자의 파장이 매우 짧아 그 한계가 극히 낮을 뿐이다.[^기출_중간_2022_10][^기출_중간_2025_32]
**Electron 파장**: <mark style="background:#fff88f">100-300 keV accelerating voltage에서 0.0037 nm.</mark>
가시광선 대비 10만배 짧음
**이론적 resolution**: <mark style="background:#fff88f">약 0.002 nm (파장의 약 절반)</mark>[^기출_중간_2022_10][^기출_중간_2025_32]
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
### 1. ==구면수차 (Spherical Aberration)==
- 구면수차는 렌즈 중심을 통과하는 전자와 주변부를 통과하는 전자가 서로 다른 초점에 모이는 현상
- <mark style="background:#fff88f">주변부 전자의 굴절 과다</mark> 때문에 발생 
- 고해상도 관찰에서 가장 큰 해상도 제한 요인 중 하나로 작용한다.
### 2. ==색수차 (Chromatic Aberration)==
- 색수차는 에너지가 서로 다른 전자들이 서로 다른 위치에 초점을 형성하는 현상 
- <mark style="background:#fff88f">전자빔의 에너지 불균일성, 파장의 차이</mark> 때문에 발생
- 가속 전압의 안정성과 전자 에너지 분산이 중요한 영향을 미친다.
## <mark style="background:#fff88f">전자 산란</mark>
### 중금속 염색의 의미
생체 시료의 대비를 높이기 위해 **Osmium tetroxide**, **Uranyl acetate**, **Lead citrate** 같은 중금속을 사용한다.
- 중금속은 원자 번호가 매우 크다.
- 전자를 강하게 산란시킨다.
- 그 결과 영상에서 더 뚜렷한 대비를 만든다.
즉,
**핵전하 ↑ → 전자 산란 ↑ → 영상 대비 ↑**[^기출_중간_2022_10][^기출_중간_2025_32]
### <mark style="background:#fff88f">BF(명시야), DF(암시야)</mark>
#### ① ==BF (Bright Field, 명시야)==
- 직접 통과한 전자(산란되지 않은 전자)를 이용해 영상을 만든다.
- ==전자를 많이 산란시키는 부분은 전자가 덜 도달하므로 **어둡게 보인다.**==
- 중금속이 붙은 부위가 어둡게 보이는 이유가 여기에 있다.
→ 생체 시료에서 가장 흔히 사용하는 방식이다.
#### ② ==DF (Dark Field, 암시야)==
- 산란된 전자만을 이용해 영상을 만든다.
- ==전자를 많이 산란시키는 부분이 **밝게 보인다.**==
→ BF와 대비가 반대로 형성된다.
## Figure 9-39: Electron Microscope의 Resolution
![[Cell Biology/출처/md converted/Chapter 9/_page_25_Figure_9.jpeg]]
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



---

## 참고 문헌
Chapter 9: Visualizing Cells and Their Molecules, Section: "The Electron Microscope Resolves the Fine Structure of the Cell", Related Figures: 9-39, 9-40, Related concepts: [[Cryo EM_Biological Specimen Preparation for Electron Microscopy]]

[^기출_중간_2021_미상A]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상A번|2021 중간 미상A번]] — TEM의 정의(electron beam을 시료에 투과시켜 이미지 형성)가 여러 현미경 정의 문항에서 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2022_10]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_10번|2022 중간 10번]] — 100,000 V 가속 전압에서 전자의 파장은 0.004 nm이며, 이론적 분해능은 파장의 약 절반인 ~0.002 nm라는 내용이 정답 근거(선지 ③)로 활용됨. 선지 ①(파장 ∝ 속도) 오답 근거: 드브로이 식에 의해 파장 ∝ 1/속도. 선지 ②(회절 한계는 광학현미경에만) 오답 근거: 전자현미경에도 적용, 다만 파장이 짧아 한계가 극히 낮음. 선지 ④(중금속 염색 후 전자빔 쉽게 통과) 오답 근거: 중금속은 전자를 강하게 산란시켜 더 어둡게 보임.
[^기출_중간_2023_15]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_15번|2023 중간 15번]] — TEM 시료는 전자의 낮은 투과력 때문에 25-100 nm로 매우 얇게 절단해야 한다는 내용이 정답 근거(선지 ③)로 활용됨. 선지 ①(SEM 내부 관찰) 오답 근거: SEM은 표면 관찰, 내부는 TEM. 선지 ②(생물 조직 어둡게 나타남) 오답 근거: 낮은 원자번호(C,H,O,N)로 전자 산란 적어 밝게 나타남 → 중금속 염색 필요. 선지 ④(속도 줄이면 파장 짧아짐) 오답 근거: 속도 높일수록 파장 짧아짐. 선지 ⑤(급속동결 시 물 결정화) 오답 근거: vitrification은 결정화 방지.
[^기출_중간_2025_32]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_32번|2025 중간 32번]] — 전자현미경의 이론적 해상도 ~0.002nm라는 선지 ③이 정답. 선지 ①(파장 ∝ 속도) ②(회절 한계 광학현미경에만) ④(중금속 염색 후 전자빔 통과 용이) ⑤(EM 구조 = 광학현미경 + 크기만 큼) 모두 오답.