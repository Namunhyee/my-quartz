# Mitochondrial Genetics

## 개요

미토콘드리아의 유전 시스템은 핵 유전 시스템과 여러 면에서 다르다. 세균 유래라는 계통적 기원을 반영하는 특징들을 가지면서도, 진화 과정에서 독자적인 변형이 일어났다.

---

## 세균과의 공통점

| 특징 | 미토콘드리아 | 세균 |
|------|------------|------|
| Genome 형태 | 원형 DNA | 원형 DNA |
| Ribosome | 세균형, 항생제 감수성 | 동일 |
| 번역 개시 | N-formylmethionine | N-formylmethionine |
| Genome 구성 | 전사·번역 관련 유전자 포함 | 동일 |

---

## 핵 유전 시스템과의 차이점

### 1. Relaxed Codon Usage (완화된 코돈 사용)

- 세포질 및 엽록체: 30개 이상의 tRNA로 아미노산 지정
- 미토콘드리아: **22개 tRNA**만으로 모든 아미노산 지정 가능
- 이유: "**2 out of 3**" pairing — tRNA가 codon의 세 번째 위치(wobble position)에 관계없이 결합 가능
- 결과: 1개의 tRNA가 4개의 codon을 모두 인식 → 더 적은 tRNA 종류로 단백질 합성

### 2. Variant Genetic Code (변형된 유전 코드)

미토콘드리아 유전 코드는 핵 유전 코드와 일부 다르며, 생물마다 변형 내용도 다름:

| Codon | 표준 코드 | 포유류 mt | 무척추동물 mt | 진균 mt | 식물 mt |
|-------|---------|---------|------------|--------|--------|
| UGA | **STOP** | Trp | Trp | Trp | STOP |
| AUA | Ile | Met | Met | Met | Ile |
| CUA | Leu | Leu | Leu | **Thr** | Leu |
| AGA/AGG | Arg | **STOP** | **Ser** | Arg | Arg |

- 변형 이유: 미토콘드리아 genome이 소규모이므로 희귀 코돈 하나의 의미 변경이 비교적 적은 영향을 미침 → **random drift** 발생 가능
- 단백질 수가 많은 핵 genome에서는 코돈 의미 변경 시 다수 단백질 기능 손상 → 불가능

### 3. tRNA Import (일부 생물)

- 일부 기생생물(예: trypanosome)은 미토콘드리아에 tRNA 유전자가 없음
- 세포질에서 합성된 tRNA를 **미토콘드리아로 import**하여 사용 (특수 tRNA translocase 이용)

---

## 미토콘드리아 유전자 발현 흐름

```
mtDNA (matrix)
    ↓ 전사
mRNA (13개) + rRNA (2개) + tRNA (22개)
    ↓ 번역 (미토콘드리아 ribosome)
13개 소수성 단백질 (ETC·ATP synthase 소단위)
    ↓ 조립
핵 encoding 소단위 (세포질 합성 → import)와 결합
    ↓
기능성 Respiratory chain / ATP synthase
```

→ 두 genome의 정교한 **협력 발현**이 필수적이며, 양측 간 신호 시스템이 진화함

---

## 관련 노트

- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Mitochondria/Mitochondrial DNA|Mitochondrial DNA]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Mitochondria/mtDNA heteroplasmy|mtDNA heteroplasmy]]
- [[Cell Biology/내용/14. Energy Conversion in Mitochondria and Chloroplasts/Metabolism/Mitochondria/Segregation of mitochondrial DNA|Segregation of mitochondrial DNA]]
