# Oligosaccharide Processing in Golgi

Golgi apparatus는 ER에서 전달받은 N-linked oligosaccharide를 처리하여 이질적인 oligosaccharide 구조를 생성한다.[^기출_중간_2022_28]

## Processing의 시작

ER에서 단일 종류의 [[N-linked glycosylation|N-linked oligosaccharide]]가 많은 단백질에 부착되고, 단백질이 여전히 ER에 있는 동안 trimming된다. 이러한 trimming 반응에 의해 생성된 oligosaccharide intermediate는 단백질 folding을 돕고, [[ER-associated degradation|misfolded 단백질을 세포질로 운반하여 proteasome에서 분해]]하는 데 중요한 역할을 한다.

CGN에 도착한 후, 단백질은 Golgi processing 구획의 첫 번째(cis Golgi cisterna)로 들어간다. 그런 다음 다음 구획(medial cisterna)으로 이동하고, 마지막으로 glycosylation이 완료되는 trans cisterna로 이동한다.

## Processing 경로

![[Cell Biology/출처/md converted/Chapter 13/_page_23_Figure_2.jpeg]]

Oligosaccharide processing은 다음과 같이 순차적으로 진행된다:

### ==ER에서 시작 (Step 1)==
- [[N-linked glycosylation]]된 단백질에 대하여
- Glucose 제거: 단백질에 전달된 ==oligosaccharide에서 glucose 제거==
- ==ER 막의 mannosidase: 특정 mannose 하나 제거==

### Golgi Stack에서 (Steps 2-5)

#### ==Step 2: Cis Golgi==
**Golgi mannosidase I**: ==3개의 mannose를 추가로 제거==
==mannose 5개 남은 high-mannose oligosaccharide 형성==
#### ==Step 3: Medial Golgi==
**N-acetylglucosamine transferase I**: ==N-acetylglucosamine 하나 추가==

#### ==Step 4: Medial Golgi==
**Golgi mannosidase II**: ==2개의 mannose를 추가로 제거==
- Complex oligosaccharide에 존재하는 3개의 mannose로 구성된 최종 core 생성
- 이 단계에서 core의 두 N-acetylglucosamine 사이의 결합이 highly specific endoglycosidase (Endo H)의 공격에 저항성이 됨
- Endo H 처리는 complex oligosaccharide와 high-mannose oligosaccharide를 구별하는 데 널리 사용됨

#### ==Step 5: Trans Golgi와 TGN==
==추가 당의 부가==:
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
- ==**Core region**: 일반적으로 2개의 N-acetylglucosamine과 3개의 mannose== 이건 공통.
- **Terminal region**: 특정 trisaccharide unit (N-acetylglucosamine–galactose–sialic acid)의 가변적인 수의 복사본
- 종종 terminal region이 truncated되어 GlcNAc와 galactose만 또는 GlcNAc만 포함
- Fucose가 추가될 수 있음 (일반적으로 asparagine에 부착된 core GlcNAc에)

Complex oligosaccharide는 이질적일 수 있다:
- 3개의 terminal branch를 가진 complex oligosaccharide가 표시되어 있음
- 2개와 4개의 branch도 glycoprotein과 그것을 만드는 세포에 따라 일반적임

### 2. High-Mannose Oligosaccharides

Trimming되지만 Golgi apparatus에서 새로운 당이 추가되지 않는다.
- Core region까지 완전히 trimming되지 않음

Hybrid oligosaccharide도 존재한다 (하나의 mannose branch와 하나의 GlcNAc 및 Gal branch).

## ==Oligosaccharide 유형 결정 요인==(중요)

주어진 oligosaccharide가 high-mannose로 남아 있는지 또는 처리되는지는 주로 단백질에서의 위치에 달려 있다:

- ==**Accessible oligosaccharide**: Golgi apparatus의 processing 효소에 접근 가능하면 complex 형태로 전환될 가능성이 높음==
- ==**Inaccessible oligosaccharide**: 단백질의 접힘 구조나 특정 folding domain 내부에 묻힌 당으로, 효소가  접근할 수 없으면 high-mannose 형태로 남을 가능성이 높음==

## ==High mannose form vs Complex form==
### **High mannose form**
- **Endoplasmic Reticulum + 초기 Golgi 단계까지만 거친 상태**
- 특징:
    - mannose가 많이 남아 있음
    - 추가적인 당(GlcNAc, galactose 등) 거의 없음
### Complex form
- **Golgi apparatus에서 충분히 가공됨**
- 특징:
    - mannose 일부 제거됨 (trimming)
    - 대신 다양한 당이 붙음  
        → GlcNAc, galactose, sialic acid 등
    - 가지(branch)가 복잡해짐
### 차이를 만드는 것
- **Asn-X-Ser/Thr 서열 존재**
- **구조적 노출 여부**
- **Golgi 통과 정도 (시간/경로)** ← 가장 중요

## ==N-linked vs O-linked==
[[N-linked glycosylation#vs O-linked glycosylation]] 참조
![[Cell Biology/출처/md converted/Chapter 13/_page_24_Figure_2.jpeg]]
두 가지 방식으로  연결되어 [[Proteoglycan]]을 만듦.
N-linked는 Asn(asparagine), O-linked는 Thr(threonine) 혹은 Ser(Serine)

## ==Glycosylation의 목적==
### ==protein folding promotion==
- Folding이 이루어지고 있는 중간체의 용해도를 늘려 응집을 방지하는 역할 
- N-연결된 올리고당의 순차적 변형은 단백질 폴딩의 진행 정도를 나타냄 (glyco-code)
### ==proteolytic enzyme에 의한 digestion 방지==

### ==pathogen으로부터 보호, 세포-세포 recognition==
### ==세포 신호 전달의 조절 기능==
glycosylation에 따라 신호 전달 경로가 달라진다.

## 관련 주제

- [[functional compartmentalization of the Golgi apparatus|Golgi apparatus의 기능적 구획화]]
- [[Golgi apparatus_MOC|Golgi apparatus]]
- [[N-linked glycosylation]]
- [[Quality control of ER protein folding]]

[^기출_중간_2022_28]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_28번|2022 중간 28번]] — Golgi에서 N-linked oligosaccharide의 cis→medial→trans 순차적 처리(mannose 제거, sugar 추가)가 정답 근거로 활용됨.