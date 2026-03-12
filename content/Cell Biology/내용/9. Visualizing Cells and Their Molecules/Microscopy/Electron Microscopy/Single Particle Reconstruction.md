# Multiple Images Can Be Combined to Increase Resolution

## 1. 문제점: 전자빔에 의한 손상과 신호 한계
- <mark style="background:#fff88f">전자빔은 생체분자를 손상시킬 수 있다.</mark>
- <mark style="background:#fff88f">따라서 한 분자에서 얻을 수 있는 전자 신호는 제한적이다.</mark>
- <mark style="background:#fff88f"><font color="#000000"><font color="#000000">단일 이미지로는 높은 해상도의 구조를 얻기 어렵다</font>.</font></mark>

## 2. 해결 방법: 단일 입자 재구성 (Single Particle Reconstruction)
- <mark style="background:#fff88f">동일한 분자를 낮은 전자 밀도로, 매우 많이 촬영한다.</mark>
- 각각의 이미지는 잡음(noise)이 크고 신호(signal)는 약하다.
- 여러 이미지를 정렬(alignment)하고 평균화(averaging)한다.
- <mark style="background:#fff88f"><font color="#000000">평균 이미지</font></mark>를 통해 신호 대 잡음비(SNR)를 증가시킨다.(노이즈 제거)

→ 여러 이미지를 결합하여 해상도를 향상시킨다.
## 3. 적용 예: HIV 캡시드 구조 분석
인간 면역 결핍 바이러스(HIV) 내부의 단백질 캡시드 구조를 재구성한 사례이다.
![[Pasted image 20260305224559.png]]
- 많은 개별 입자 이미지를 수집
- 단일 입자 재구성을 통해 상세 구조 결정
- 전체 캡시드는 다음과 같은 단위로 구성됨:
    - 216개의 6량체 (hexamer)
    - 12개의 5량체 (pentamer)
        
→ 부분 구조 정보를 기반으로 전체 캡시드 구조를 분자 수준에서 재구성