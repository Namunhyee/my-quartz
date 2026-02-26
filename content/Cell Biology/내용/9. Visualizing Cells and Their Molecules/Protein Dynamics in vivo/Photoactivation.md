---
dg-publish: true
---
# Photoactivation

## 개요

[[Fluorescent Proteins(GFP, GFP tagging)#GFP 변이형 개발|GFP]]와 관련 형광 단백질을 암호화하는 유전자들은 engineering을 통해 특수한 특성을 가진 단백질 변이형을 생산할 수 있다. 이러한 변이형들은 photoactivation(광활성화)을 통해 단백질의 국소적 *in vivo*[^1] 행동을 추적할 수 있게 한다.

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
> 광활성화: 빛에 의해 화학 구조가 변해 새로운 형광 특성을 갖음 – 단일 분자 추적

[[Ch9.pdf#page=20&selection=54,0,81,2|Ch9, 페이지 20]]

## 작동 메커니즘

### 선택적 활성화

**공간적 제어**:
- 세포의 특정 영역에만 활성화 빛 조사
- 해당 영역의 형광 단백질만 활성화됨

**시간적 제어**:
- 원하는 시점에 활성화
- 활성화 후 시간 경과에 따른 변화 추적

### 단백질 추적

**원리**:
1. 관심 단백질을 photoactivatable fluorescent protein variant에 fusion
2. 특정 위치/시간에 활성화
3. 활성화된 단백질의 이동과 행동 추적
4. 새로 합성된 다른 단백질들과 독립적으로 관찰

## Photoactivatable Proteins의 종류

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

## 생물학적 응용

### Protein Trafficking 연구

**이동 경로 추적**:
- 단백질이 세포 내에서 이동하는 경로
- 이동 속도 측정
- 목적지 확인

### Protein Turnover 연구

**대사 회전**:
- 단백질의 반감기
- 분해 속도
- 재활용 메커니즘

### Subcellular Localization Dynamics

**구획 간 이동**:
- 세포소기관 사이의 이동
- 핵-세포질 왕복 (nucleocytoplasmic shuttling)
- 막 통과 (membrane translocation)

### Cell Migration 연구

**세포 이동 중**:
- 특정 단백질의 재분포
- 이동 방향과의 관계
- 세포 골격 구성 요소의 dynamics

## 실험적 고려사항

### 광원 요구사항

**활성화를 위한 빛**:
- 고강도 펄스 필요
- 특정 파장 (주로 near-UV)
- 정밀한 공간적 targeting

**여기를 위한 빛**:
- 활성화 후 형광 관찰
- 다른 파장 사용
- 연속적 또는 주기적 조명

### 광독성 (Phototoxicity)

**주의사항**:
- 강한 UV 빛은 세포 손상 가능
- 활성화 강도와 시간 최적화 필요
- 세포 생존력 모니터링

### 시간 해상도

**Trade-off**:
- 빠른 과정: 여러 번 빠르게 imaging
- 느린 과정: 장시간에 걸쳐 관찰
- 광표백(photobleaching)과의 균형

## Photoactivation vs 다른 기술

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

## 기술적 발전

### Genetically Encoded

**주요 장점**:
- 유전적으로 암호화됨 (genetically encoded)
- 외부 염료 필요 없음
- 특정 단백질에 융합 가능
- 살아있는 세포/생물에서 사용

### 다양한 Variants

**색상 선택**:
- 다양한 활성화 전/후 색상
- 다중 라벨링 가능
- 동시에 여러 단백질 추적

### 개선된 특성

**최적화**:
- 더 밝은 형광
- 더 빠른 활성화
- 더 안정한 신호
- 더 낮은 광독성

## 응용 예시

### 신경과학

**Synaptic proteins**:
- 시냅스에서의 단백질 이동
- 신경 활동에 따른 재분포
- Long-term potentiation 연구

### 세포 분열

**Mitotic proteins**:
- 세포 주기에 따른 위치 변화
- 염색체 분리 메커니즘
- Spindle dynamics

### 막 단백질

**Receptor trafficking**:
- 세포막에서의 이동
- Endocytosis/exocytosis
- 막 도메인 간 이동

## 요약

### 핵심 원리
- 특정 파장의 빛으로 형광 단백질을 선택적으로 활성화
- 활성화된 단백질의 국소적 *in vivo* 행동 추적
- 시공간적 정밀도

### 주요 장점
- 선택적 표지
- 시간적 제어
- 새로 합성된 단백질과 구별
- 단백질 수명과 행동 독립적 연구

### 생물학적 의의
- Protein trafficking 메커니즘
- Protein turnover dynamics
- Subcellular localization 변화
- Cell migration 중 단백질 행동

---

## 참고 문헌

- Chapter 9: Visualizing Cells and Their Molecules
- Section: "Protein Dynamics Can Be Followed in Living Cells"
- Related techniques: [[FRET]], [[FRAP]]
- Related concept: [[Fluorescent Proteins(GFP, GFP tagging)]]

[^1]: 생체 내(within the living)'라는 뜻의 라틴어로, 살아있는 유기체(동물, 식물, 사람) 안에서 직접 실험을 수행하는 것
