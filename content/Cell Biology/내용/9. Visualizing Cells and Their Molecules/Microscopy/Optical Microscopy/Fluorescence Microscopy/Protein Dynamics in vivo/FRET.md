# FRET (Förster Resonance Energy Transfer)

## 개요

Fluorescent proteins는 이제 단순히 세포 내 특정 단백질의 위치를 확인하는 것을 넘어, kinetic properties(동역학적 특성)를 밝히고 다른 분자들과의 상호작용 여부를 파악하는 데 활용된다. **FRET**는 이러한 목적으로 사용되는 강력한 기술이다.

## FRET의 정의

**Förster Resonance Energy Transfer** 또는 **Fluorescence Resonance Energy Transfer**
- 두 명칭 모두 **FRET**로 약칭됨
- 단백질 간 상호작용을 모니터링하는 기술

## 작동 원리
![[_page_12_Figure_7.jpeg]]
### 기본 구성

**두 분자 표지**:
- <mark style="background:#fff88f">관심 있는 두 분자를 각각 다른 fluorochrome으로 표지</mark>
- Fluorochrome 선택 기준:
  - **Donor(공여체)**의 emission spectrum(방출 스펙트럼)
  - **Acceptor(수용체)**의 absorption spectrum(흡수 스펙트럼)
  - <mark style="background:#fff88f">두 스펙트럼이 overlap(겹침)해야 함</mark>

### Energy Transfer 메커니즘

**조건**:
- 두 단백질이 상호작용하여 fluorochromes가 <mark style="background:#fff88f">매우 가까운 근접 거리(약 5 nm 이내</mark>)로 접근

**과정**:
1. 첫 번째 fluorochrome(donor)이 여기(excited)됨
2. 흡수된 빛으로부터 에너지를 **직접** 다른 fluorochrome으로 전달
3. **비방사적(nonradiatively)** 전달 - resonance(공명)에 의해
4. 결과: 첫 번째 fluorochrome의 excitation wavelength(여기 파장)로 조명하면
5. 두 번째 fluorochrome의 emission wavelength(방출 파장)에서 형광 생성

### Figure 9-19: Fluorescence Resonance Energy Transfer (FRET)
![[_page_12_Figure_7.jpeg]]
#### 실험 설계

**목적**: 세포 내에서 두 단백질이 상호작용하는지(그리고 언제 상호작용하는지) 결정

**준비**:
- [[GFP(Fluorescent Protein Tagging)|GFP]]의 서로 다른 색상 변이형에 부착된 fusion proteins로 먼저 생성

#### (A) FRET 시스템 구성

**Protein X**:
- Blue fluorescent protein에 연결
- Violet light(자색광)로 여기
- Blue light(청색광) 방출

**Protein Y**:
- Green fluorescent protein에 연결
- Blue light로 여기
- Green light(녹색광) 방출

#### (B) 상호작용 없을 때

**실험 조건**:
- Protein X와 Y가 상호작용하지 않음
- Violet light로 샘플 조명

**결과**:
- Blue fluorescent protein에서만 형광 발생
- Green fluorescent protein 형광 없음

#### (C) 상호작용 시 FRET 발생

**실험 조건**:
- Protein X와 protein Y가 상호작용
- Violet light로 샘플 조명

**결과**:
- Blue fluorescent protein이 여기됨
- **Resonance transfer of energy(공명 에너지 전달)** 발생
- 에너지가 green fluorescent protein으로 전달
- **Green light 방출**

**중요 조건**:
- Fluorochromes가 매우 가까워야 함
- <mark style="background:#fff88f">약 1-5 nm 이내</mark>
- 모든 protein X와 Y 분자가 항상 결합되어 있는 것은 아니므로 일부 blue light는 여전히 검출 가능

**동적 변화 관찰**:
- 두 단백질이 상호작용하기 시작하면:
  - Donor blue fluorescent protein의 방출 감소
  - Acceptor GFP의 방출 증가

## GFP 변이형 사용

**장점**:
- GFP의 서로 다른 spectral variants를 fluorochromes로 사용
- 다양한 조합 가능
- 살아있는 세포에서 직접 관찰 가능

## 핵심 특징

### <mark style="background:#fff88f">1. 비침습적 관찰</mark>
- 살아있는 세포에서 실시간 모니터링[^기출_중간_2022_7]
- 세포 손상 최소화
### 2. 높은 공간 해상도
- 1-5 nm 범위의 분자 간 거리 측정
- 일반 광학 현미경([[diffraction limit|회절 한계]] 약 200 nm)보다 훨씬 높은 해상도
### 3. 동적 정보
- 단백질 상호작용의 시작과 종료 추적
- 상호작용의 강도 변화 측정
### 4. 정량적 분석
- FRET 효율 측정을 통한 정량적 데이터 획득
- 결합 친화도 및 해리 상수 계산 가능




---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "Protein Dynamics Can Be Followed in Living Cells"
- Related Figure: 9-19, 15-49
- Related concepts: [[GFP(Fluorescent Protein Tagging)|GFP]], [[FRAP]], [[Photoactivation]]

[^기출_중간_2022_7]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_7번|2022 중간 7번]] — Co-IP는 세포 용해 후 단백질 복합체를 검출(lysis artifact 가능)하는 반면, FRET는 살아있는 세포에서 실시간으로 단백질 상호작용을 관찰할 수 있어 in vivo 적합성이 더 높다는 차이가 정답 근거로 활용됨.