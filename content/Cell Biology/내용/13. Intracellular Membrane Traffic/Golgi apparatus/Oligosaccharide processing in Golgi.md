# Oligosaccharide Processing in Golgi

Golgi apparatus는 ER에서 전달받은 N-linked oligosaccharide를 처리하여 이질적인 oligosaccharide 구조를 생성한다.

## Processing의 시작

ER에서 단일 종류의 N-linked oligosaccharide가 많은 단백질에 *en bloc*으로 부착되고, 단백질이 여전히 ER에 있는 동안 trimming된다. 이러한 trimming 반응에 의해 생성된 oligosaccharide intermediate는 단백질 folding을 돕고, misfolded 단백질을 세포질로 운반하여 proteasome에서 분해하는 데 중요한 역할을 한다.

CGN에 도착한 후, 단백질은 Golgi processing 구획의 첫 번째(cis Golgi cisterna)로 들어간다. 그런 다음 다음 구획(medial cisterna)으로 이동하고, 마지막으로 glycosylation이 완료되는 trans cisterna로 이동한다.

## Processing 경로

![[Cell Biology/출처/md converted/Chapter 13/_page_23_Figure_2.jpeg]]

Oligosaccharide processing은 다음과 같이 순차적으로 진행된다:

### ER에서 시작 (Step 1)

- Glucose 제거: 단백질에 전달된 oligosaccharide에서 glucose 제거
- ER 막의 mannosidase: 특정 mannose 하나 제거

### Golgi Stack에서 (Steps 2-5)

#### Step 2: Cis Golgi
**Golgi mannosidase I**: 3개의 mannose를 추가로 제거

#### Step 3: Medial Golgi
**N-acetylglucosamine transferase I**: N-acetylglucosamine 하나 추가

#### Step 4: Medial Golgi
**Golgi mannosidase II**: 2개의 mannose를 추가로 제거
- Complex oligosaccharide에 존재하는 3개의 mannose로 구성된 최종 core 생성
- 이 단계에서 core의 두 N-acetylglucosamine 사이의 결합이 highly specific endoglycosidase (Endo H)의 공격에 저항성이 됨
- Endo H 처리는 complex oligosaccharide와 high-mannose oligosaccharide를 구별하는 데 널리 사용됨

#### Step 5: Trans Golgi와 TGN
추가 당의 부가:
- N-acetylglucosamine
- Galactose
- Sialic acid

이러한 최종 단계는 순차적으로 작용하는 세 가지 유형의 glycosyl transferase 효소에 의해 수행된다:
- 표시된 nucleotide에 연결되어 활성화된 sugar 기질 사용
- Golgi cisternae의 막은 각 sugar nucleotide가 교환을 통해 들어갈 수 있도록 하는 특정 carrier 단백질 포함
- 당이 내강 면의 단백질에 부착된 후 방출되는 nucleoside phosphate와 교환

## 두 가지 Oligosaccharide 클래스

![[Cell Biology/출처/md converted/Chapter 13/_page_22_Figure_9.jpeg]]

포유류 glycoprotein에 부착되는 N-linked oligosaccharide의 두 가지 broad class:

### 1. Complex Oligosaccharides

원래 ER에서 추가된 N-linked oligosaccharide가 trimming되고 추가 당이 추가될 때 생성된다.

구조:
- **Core region**: 일반적으로 2개의 N-acetylglucosamine과 3개의 mannose
- **Terminal region**: 특정 trisaccharide unit (N-acetylglucosamine–galactose–sialic acid)의 가변적인 수의 복사본
- 종종 terminal region이 truncated되어 GlcNAc와 galactose만 또는 GlcNAc만 포함
- Fucose가 추가될 수 있음 (일반적으로 asparagine에 부착된 core GlcNAc에)

Complex oligosaccharide는 이질적일 수 있다:
- 3개의 terminal branch를 가진 complex oligosaccharide가 표시되어 있음
- 2개와 4개의 branch도 glycoprotein과 그것을 만드는 세포에 따라 일반적임

### 2. High-Mannose Oligosaccharides

Trimming되지만 Golgi apparatus에서 새로운 당이 추가되지 않는다.
- Core region까지 완전히 trimming되지 않음
- 추가 mannose 포함

Hybrid oligosaccharide도 존재한다 (하나의 mannose branch와 하나의 GlcNAc 및 Gal branch).

## Oligosaccharide 유형 결정 요인

주어진 oligosaccharide가 high-mannose로 남아 있는지 또는 처리되는지는 주로 단백질에서의 위치에 달려 있다:

- **Accessible oligosaccharide**: Golgi apparatus의 processing 효소에 접근 가능하면 complex 형태로 전환될 가능성이 높음
- **Inaccessible oligosaccharide**: 당이 단백질 표면에 단단히 붙들려 있어 접근할 수 없으면 high-mannose 형태로 남을 가능성이 높음

## Glycosylation의 목적

### 1. 단백질 Folding 촉진

N-linked glycosylation은 단백질 folding을 두 가지 방식으로 촉진한다:
- Folding intermediate를 더 용해성 있게 만들어 응집 방지
- N-linked oligosaccharide의 순차적 수정이 단백질 folding 진행을 표시하는 "glyco-code" 확립
- 이 glyco-code는 ER의 chaperone과 lectin이 단백질 folding과 분해를 안내하는 데 사용됨

### 2. 보호 코팅

![[Cell Biology/출처/md converted/Chapter 13/_page_25_Picture_2.jpeg]]

Glycoprotein 표면에서 튀어나온 oligosaccharide chain은:
- 다른 거대분자가 단백질 표면에 접근하는 것을 제한
- Glycoprotein을 proteolytic 효소에 의한 소화에 더 저항성 있게 만듦
- 보호 코팅 제공 (cell-surface protein에서)

### 3. 인식 및 분류

당 chain은 세포외 공간의 lectin에 의한 인식에 중요하다:
- 많은 발달 과정에서 중요
- 세포-세포 인식에서 중요
- 예: Selectin (transmembrane lectin)은 혈액 세포 이동 중 세포-세포 접착에 기능

### 4. 조절 역할

Glycosylation은 중요한 조절 역할을 할 수 있다. 예를 들어, Notch 수용체의 O-glycosylation:
- 일부 serine, threonine, hydroxylysine에 단일 fucose 추가
- 일부 세포 유형은 Golgi apparatus에서 각 fucose에 N-acetylglucosamine을 추가하는 glycosyl transferase를 발현
- 이 추가는 Notch가 활성화하는 세포 표면 신호 단백질에 대한 특이성을 변경

## Glycobiology의 복잡성

포유류 glycosylation의 복잡성:
- 인간 genome은 수백 가지의 서로 다른 Golgi glycosyl transferase와 많은 glycosidase를 인코딩
- 이러한 효소는 세포 유형마다 다르게 발현되고 발달 중 다른 시기에 발현됨
- 주어진 단백질 또는 지질의 다양한 glycosylated 형태가 서로 다른 세포 유형과 분화의 다양한 단계에서 발생

이러한 복잡성은 N-linked oligosaccharide에만 국한되지 않고 O-linked sugar에서도 발생한다.

## 관련 주제

- [[functional compartmentalization of the Golgi apparatus|Golgi apparatus의 기능적 구획화]]
- [[Golgi apparatus_MOC|Golgi apparatus]]
- [[../../12. Intracellular Organization and Protein Sorting/N-linked glycosylation|N-linked glycosylation]]
- [[../../12. Intracellular Organization and Protein Sorting/Quality control in ER|ER에서의 품질 관리]]