# Biological Specimen Preparation for Electron Microscopy

## 1. 왜 생체 시료는 특별한 준비가 필요한가?

### (1) 고에너지 전자빔
- 전자빔은 매우 높은 에너지를 가진다.
- <mark style="background:#fff88f">생체 분자(단백질, 지질 등)가 손상될 수 있다.</mark>
### (2) <mark style="background:#fff88f">진공 환경</mark>
- Electron microscopy는 고진공 상태에서 수행된다.
- 살아있는 세포는 관찰할 수 없다.
### (3) 투과 조건
- Transmission Electron Microscopy (TEM)에서는 전자빔이 시료를 통과해야 한다.
- 따라서 <mark style="background:#fff88f">시료를 매우 얇게 절단해야 한다 (ultrathin section)</mark>.
## 2. Conventional TEM 시료 준비 과정
### (1) <mark style="background:#fff88f">고정 (Fixation)</mark>
목적: 단백질과 세포 구조를 안정화하여 원래 구조를 최대한 보존
- <mark style="background:#fff88f">Glutaraldehyde: 단백질 고정</mark>
- <mark style="background:#fff88f">Osmium tetroxide (OsO4): 지질 및 세포막 구조 보존</mark>, 전자 밀도 증가
→ 세포막과 세포 내 구조를 안정적으로 유지
### (2) <mark style="background:#fff88f">탈수 (Dehydration)</mark>
- 시료 내 물을 유기용매로 대체
- <mark style="background:#fff88f">진공 환경에서 물은 유지될 수 없기 때문(증발함)</mark>
- <mark style="background:#fff88f">물과 레진이 섞이지 않기 때문이기도 함.</mark>
### (3)<mark style="background:#fff88f"> Resin infiltration 및 Embedding</mark>
- 레진을 침투시켜 블록 형태로 굳힘
- 단단한 상태로 만들어 절단이 가능하도록 함
### (4) <mark style="background:#fff88f">초박절편 (Ultramicrotomy)</mark>
- ultramicrotome를 사용하여 수십 nm 두께로 절단
- 절편은 metal grid 위에 올려 관찰
#### TEM grid
![[_page_26_Figure_8.jpeg]]
- copper grid 위에 carbon film 또는 plastic film 코팅
- 얇은 절편을 지지하는 역할

## 3. 대비 형성 (Contrast Enhancement)
염색은 초박절편을 만든 직후.
생체 구성 원소(C, H, O, N)는 atomic number가 낮다. → 전자 산란이 약하다. → 영상 대비가 낮다.
해결 방법:
- heavy metal stain 사용 (Os, U, Pb 등)
<mark style="background:#fff88f">	- uranyl acetate</mark>
<mark style="background:#fff88f">	- phosphotungstic acid</mark>
<mark style="background:#fff88f">	- ammonium molybdate</mark>
- atomic number가 클수록 전자 산란 증가
- TEM bright-field에서 더 어둡게 보임

---
## 4. [[positively stained vs negatively stained#최신 기술 Cryo-EM과의 관계|Cryo-EM]]의 개념
문제 제기:
- 화학적 고정, 탈수, 레진 embedding 과정이 실제 세포 구조를 왜곡할 수 있다.
### Cryo-EM 접근 방식
- <mark style="background:#fff88f">시료를 급속 동결 (vitrification)</mark>
- <mark style="background:#fff88f">물을 얼음 결정이 아닌 비결정질 유리질 형태로 유지</mark>
	- <mark style="background:#fff88f">이로써 전자빔에 의해 얼음이 녹지 않는다.</mark>
- 화학 고정 없이 구조 보존
### Cryo-sectioning
- 두꺼운 세포를 <mark style="background:#fff88f">집속 이온 빔(FIB)으로 얇게 가공</mark>
- 판 모양(lamella)으로 만든 후 관찰(염색 안 함)
→ 실제 생체 구조에 더 가까운 상태를 유지
## 5. 핵심 정리
- 전자현미경은 고에너지, 고진공 환경이므로 생체 시료는 특별한 준비가 필요하다.
- Conventional TEM은 fixation → dehydration → resin embedding → ultrathin section 과정을 거친다.
- heavy metal staining(<font color="#ff0000">negative</font>)은 영상 대비를 증가시킨다.
- Cryo-EM은 구조 왜곡을 최소화하기 위한 대안적 방법이다.