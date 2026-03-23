# Photoactivation

## 개요

[[GFP(Fluorescent Protein Tagging)#GFP 변이형 개발|GFP]]와 관련 형광 단백질을 암호화하는 유전자들은 engineering을 통해 특수한 특성을 가진 단백질 변이형을 생산할 수 있다. 이러한 변이형들은 photoactivation(광활성화)을 통해 단백질의 국소적 *in vivo*[^1] 행동을 추적할 수 있게 한다.

## Photoactivation의 원리

### Photoactivatable Fluorescent Proteins의 특성

**기본 특징**:
- 일반적으로 하나 이상의 아미노산 변화를 가진 단백질 변이형
- 정상 excitation 조건에서는 **약하게만 형광**을 띰
- 특정 파장의 강한 빛 펄스로 "활성화" 가능

### 활성화 과정

**자극**:
- 다른 파장의 강한 빛 펄스 (strong pulse of light)

**결과**:
- 더 강하게 형광을 띠게 됨
- 또는 색상 변화 (예: 녹색 → 빨간색)
>[!warning] fluorescene VS photoactivation
>형광: 활성화 과정 없이 특정 파장의 빛을 받으면 형광 나타냄
> 광활성화: 빛에 의해 화학 구조가 변해 새로운 형광 특성을 갖음 – 단일 분자 추적
### Photoactivation의 정의

특정 파장의 강한 빛 펄스로 형광 단백질을 유도하여:
- 더 강한 형광 발생
- 색상 전환 (color shift)

이 과정을 **photoactivation(광활성화)**이라고 함
<mark style="background:#fff88f">> 광활성화: 빛에 의해 화학 구조가 변해 새로운 형광 특성을 갖음 – 단일 분자 추적</mark>

[[Ch9.pdf#page=20&selection=54,0,81,2|Ch9, 페이지 20]]
## ~~Photoactivatable Proteins의 종류~~

### 색상 변화 기반 분류

**1. Photoactivated labels (광활성화 라벨)**
- 예: 어두움(dark) → 녹색(green)으로 전환

**2. Photoconvertible labels (광전환 라벨)**
- 예: 녹색(green) → 빨간색(red)으로 전환

**3. Photoswitchable labels (광스위치 라벨)** ^48987e
- 앞뒤로 전환 가능 (reversible switching)

### 활성화 방법
**Near-ultraviolet light 조명**:
- 분자의 일부를 수정하여 활성화
- 다른 파장의 excitation beam에 노출 시 형광 발생

## Photoactivation의 장점

### 1. 공간적 정밀도
**선택적 표지**:
- 세포의 특정 영역만 표지 가능
- 관심 부위의 단백질만 추적
- <mark style="background:#fff88f">단일 분자 수준 추적이 가능하다.</mark>

### 2. 시간적 해상도
**시점 제어**:
- 원하는 시점에 정확히 활성화
- 시간에 따른 변화 추적

### 3. 새로운 합성과 구별
**독립적 추적**:
- 활성화된 기존 단백질
- 새로 합성된 단백질
- 두 그룹을 독립적으로 관찰 가능

### 4. 단백질 수명 연구
**Lifetime 측정**:
- 활성화된 단백질의 수명
- 다른 단백질들과 독립적으로 연구

### vs [[FRET]]
**FRET**:
- 단백질 간 상호작용 (거리 5 nm 이내)
- 동시 존재하는 두 단백질
**Photoactivation**:
- 단일 단백질의 이동과 행동
- 시간에 따른 위치 변화

### vs [[FRAP]]
**공통점**:
- 둘 다 단백질 dynamics 연구
- 형광 신호의 변화 추적
**차이점**:
- **Photoactivation**: 형광 증가 또는 색상 변화
- **FRAP**: 형광 소멸 후 회복

## 응용 예시

### 세포 분열
![[Pasted image 20260312170832.png]]
<mark style="background:#fff88f">가운데의 tubulin 단백질들에만 uv로 광활성화하자 2.5분간 광 활성이 줄어드는 동시에 단백질의 이동을 관측할 수 있었다.</mark>
**Mitotic proteins**:
- 세포 주기에 따른 위치 변화
- 염색체 분리 메커니즘
- <mark style="background:#fff88f">Spindle dynamics</mark>
---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "Protein Dynamics Can Be Followed in Living Cells"
- Related techniques: [[FRET]], [[FRAP]]
- Related concept: [[GFP(Fluorescent Protein Tagging)]]

[^1]: 생체 내(within the living)'라는 뜻의 라틴어로, 살아있는 유기체(동물, 식물, 사람) 안에서 직접 실험을 수행하는 것
