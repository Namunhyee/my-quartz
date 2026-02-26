# Fluidity of a Lipid Bilayer

[[Lipid bilayer]]의 fluidity는 세포막을 이상적인 구조로 만드는 가장 중요한 특성 중 하나이다. Fluidity는 많은 membrane 기능에 중요하며, 개별 lipid molecule이 bilayer plane 내에서 자유롭게 확산할 수 있게 한다.

## Lipid Bilayer의 Fluid 특성

### 발견

1970년경, 연구자들은 개별 lipid molecule이 lipid bilayer plane 내에서 자유롭게 확산할 수 있다는 것을 처음 인식했다.

**초기 증명:**
- Synthetic lipid bilayer 연구에서 나옴
- 구형 vesicle (liposome) 또는 planar lipid film 형태로 만들어짐

### Lipid Molecule의 운동

![[Cell Biology/출처/md converted/Chapter 10/_page_6_Figure_1.jpeg]]

Biophysical 연구는 phospholipid molecule이 synthetic bilayer에서 다양한 운동을 보임을 보여주었다:

#### 1. Lateral Diffusion (측면 확산)

**특성:**
- Lipid molecule이 monolayer (leaflet) 내에서 이웃과 빠르게 위치 교환
- 교환 속도: ~10⁷ times/second
- Diffusion coefficient (D): 약 10⁻⁸ cm²/sec
- 평균 lipid molecule이 큰 bacterial cell (~2 μm) 길이를 약 1초에 확산

#### 2. Rotational Diffusion

- Lipid molecule이 자신의 긴 축을 중심으로 빠르게 회전
- Hydrocarbon chain이 flexible함

#### 3. Flip-flop (매우 드묾)

**특성:**
- 한 monolayer에서 반대편 monolayer로 이동
- 시간 척도: 수 시간
- 개별 molecule에 대해 매우 느린 과정

**느린 이유:**
Flip-flop 동안 hydrophilic head group이:
1. Bilayer의 hydrophobic core에 일시적으로 들어가야 함
2. Hydrophobic core를 통과해야 함
3. 이는 energetically disfavored

**예외: [[Cholesterol]]**
- 빠르게 flip-flop 가능
- 단일 hydroxyl group만 hydrophobic core에 일시적으로 수용되면 됨

### Computer Simulation

![[Cell Biology/출처/md converted/Chapter 10/_page_6_Figure_1.jpeg]]

위 그림 (A)는 100개의 phosphatidylcholine molecule을 regular bilayer로 배열한 후, computer가 300 picosecond의 simulated time 후 모든 atom의 위치를 계산한 결과이다.

**결과:**
- Lipid molecule이 매우 disordered함
- 불규칙하고 ragged한 표면을 물 phase에 제공
- Variously spaced and oriented head group
- 한 monolayer의 tail이 충분히 길면 반대편 monolayer의 tail과 상호작용 가능

이 이론적 계산으로부터 나온 lipid bilayer model은 synthetic lipid bilayer의 거의 모든 측정 가능한 특성을 설명한다:
- Thickness
- Membrane area당 lipid molecule 수
- 물 침투 깊이
- 두 표면의 unevenness

## Biological Membrane에서의 Fluidity

### 유사한 Mobility

Biological membrane과 살아있는 세포의 labeled lipid molecule에 대한 유사한 mobility 연구:
- Synthetic bilayer와 유사한 결과
- Biological membrane의 lipid component가 2차원 liquid임을 증명
- Constituent molecule이 laterally 자유롭게 이동

### Monolayer Confinement

Synthetic bilayer처럼:
- 개별 phospholipid molecule은 보통 자신의 monolayer에 국한됨
- Flip-flop는 매우 드묾

### Membrane 성장의 문제

Biological membrane 성장에 문제가 생긴다:
1. Phospholipid molecule은 membrane의 한 monolayer에서만 제조됨
   - 주로 ER membrane의 cytosolic monolayer
2. 새로 만들어진 molecule이 noncytosolic monolayer로 빠르게 이동하지 못하면
3. Membrane이 비대칭적으로 팽창함

**해결책: Phospholipid Translocator**
- Flippase와 scramblase
- 한 monolayer에서 다른 monolayer로 phospholipid의 빠른 flip-flop 촉매

## Fluidity의 조절

Fluidity는 정밀하게 조절되어야 한다:
- Membrane protein의 빠르고 일시적인 상호작용 허용
- 특정 membrane transport process와 enzyme activity에 필수
- Bilayer viscosity가 실험적으로 threshold level 이상 증가하면 이러한 활동이 멈춤

### 조성에 따른 Fluidity

[[Lipid bilayer]]의 fluidity는 조성과 온도에 의존한다 (synthetic lipid bilayer 연구로 쉽게 증명됨).

#### Phase Transition

![[Cell Biology/출처/md converted/Chapter 10/_page_6_Figure_8.jpeg]]

단일 type의 phospholipid로 만든 synthetic bilayer:
1. Liquid state에서 2차원 rigid crystalline (또는 gel) state로 변화
2. 특징적인 온도에서 발생 = phase transition
3. Phase transition 온도는 다음 조건에서 낮아짐:
   - Hydrocarbon chain이 짧을 때
   - Chain에 double bond가 있을 때

#### Hydrocarbon Chain 길이의 영향

**짧은 chain:**
- 같은 monolayer와 반대 monolayer에서 서로 상호작용하는 경향 감소
- 낮은 온도에서 membrane이 fluid로 유지
- Freeze시키기 더 어려움

#### cis-Double Bond의 영향

![[Cell Biology/출처/md converted/Chapter 10/_page_6_Figure_8.jpeg]]

**cis-Double bond의 효과:**
- Chain에 kink 생성
- Chain들을 함께 pack하기 더 어렵게 만듦
- Lipid bilayer를 freeze시키기 더 어렵게 함
- Unsaturated lipid의 hydrocarbon chain이 더 spread apart됨
- 결과: Unsaturated lipid를 포함하는 bilayer가 더 얇음

#### 복잡한 Lipid 혼합의 효과

Membrane이 많은 서로 다른 lipid species의 복잡한 혼합으로 구성되면:
- 대부분의 membrane이 phase-transition point 바로 위에서 liquid로 유지되도록 조절됨

### 온도 적응

온도가 환경과 함께 변동하는 유기체 (bacteria, yeast 등):
- Membrane lipid의 fatty acid 조성을 조절
- 상대적으로 일정한 fluidity 유지

**예시:**
온도가 떨어질 때:
1. 세포가 더 많은 cis-double bond를 가진 fatty acid 합성
2. 온도 하락으로 인한 bilayer fluidity 감소를 회피

### Cholesterol의 역할

[[Cholesterol]]은 lipid bilayer의 특성을 조절한다:

**효과:**
1. **Permeability-barrier 강화**: Phospholipid와 섞였을 때
2. **Packing 강화**: Bilayer의 lipid packing을 tighten
3. **Mobility 감소**: Phospholipid hydrocarbon chain의 첫 몇 개 CH₂ group의 mobility 감소
4. **Deformability 감소**: 이 영역에서 bilayer를 덜 deformable하게 만듦
5. **Permeability 감소**: 작은 water-soluble molecule에 대한 bilayer permeability 감소

**중요한 점:**
- Cholesterol이 bilayer의 lipid packing을 tighten하지만
- Membrane을 덜 fluid하게 만들지는 않음
- Hydrocarbon chain이 함께 와서 결정화되는 것을 방지

## Liquidity의 기능적 중요성

Membrane의 liquidity는 여러 중요한 기능을 허용한다:
1. Lipid가 일시적 hole을 빠르게 patch할 수 있음
2. Mechanical 또는 기타 stress로 bilayer에 나타날 수 있는 hole 복구
3. [[Membrane protein]]의 빠른 상호작용
4. Membrane transport와 enzyme activity 지원

## 관련 개념
- [[Lipid bilayer]]
- [[Phospholipid]]
- [[Cholesterol]]
- [[Major lipids in cell membrane]]
- [[Raft domain]]
- [[Asymmetry of the lipid bilayer]]
