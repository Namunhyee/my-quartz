# N-linked Glycosylation

## 개요
==N-linked glycosylation은 preformed precursor [[Oligosaccharides]]가 단백질의 **asparagine** 잔기에 en bloc (한 덩어리로) 부착되는 과정이다. ER에서 일어나는 가장 흔한 glycosylation 형태이다.==

## Precursor [[Oligosaccharides]] 구조

![[Cell Biology/출처/md converted/Chapter 12/_page_31_Picture_6.jpeg]]

### 조성
총 14개의 sugar로 구성:
<mark style="background:#fff88f">- 2 N-acetylglucosamine (GlcNAc)</mark>
<mark style="background:#fff88f">- 9 Mannose (Man)</mark>
<mark style="background:#fff88f">- 3 Glucose (Glc)</mark>

구조: Glc₃Man₉GlcNAc₂
### Core region
회색 상자로 표시된 5개 sugar:
- 2 GlcNAc
- 3 Mannose

**중요성:**
- Golgi에서의 extensive trimming 후에도 남는 부분
- 많은 glycoprotein에 공통적으로 존재

## ~~Dolichol 합성 과정~~

### 1. Dolichol Lipid Anchor

![[Cell Biology/출처/md converted/Chapter 12/_page_32_Figure_2.jpeg]]

#### **[[Dolichol]]의 특징:**
- Polyisoprenoid lipid (22개의 5-carbon unit)
- 매우 소수성
- 막을 3번 이상 관통할 수 있는 길이
- [[Oligosaccharides]]를 막에 단단히 고정

#### **부착 방식:**
- Pyrophosphate bridge를 통해 첫 번째 sugar 연결
- High-energy bond → 단백질 전이 시 에너지원

### 2. 단계별 조립 (Step-by-step Assembly)
#### **Cytosolic side (ER membrane의 세포질 쪽):**
1. First sugar → Dolichol-P
2. Sugar-by-sugar addition
3. GlcNAc₂Man₅까지 합성
#### **Membrane flip:**
- (Man)₅(GlcNAc)₂-lipid intermediate가 flipped
- Transporter에 의해 lumenal face로 이동
#### **Lumenal side (ER lumen 쪽):**
1. 추가적인 sugar 부착
2. Dolichol-P-glucose와 dolichol-P-mannose 사용
3. 완전한 Glc₃Man₉GlcNAc₂ 구조 완성

### 3. Activated Sugar Donors
#### **Cytosolic side:**
- UDP-GlcNAc
- GDP-mannose
#### **Lumenal side:**
- Dolichol-P-glucose
- Dolichol-P-mannose
(이들은 cytosol에서 합성된 후 flip됨)

## ==단백질로의 전이==
### ==Oligosaccharyl Transferase(OST)에 의해==
#### **위치와 구조:**
- ER membrane의 transmembrane enzyme complex
- [[Sec61 complex]]==와 결합== : **==Co-translational하다!==**
- 13개의 transmembrane α-helix
- 큰 ER lumenal domain
#### **기능적 배치:**
- Active site가 ER lumen에 노출
- Nascent polypeptide와 dolichol-[[Oligosaccharides]] 모두 결합

### 전이 반응

![[Cell Biology/출처/md converted/Chapter 12/_page_31_Picture_6.jpeg]]

==**Target sequence:**==
```
Asn-X-Ser/Thr
```
- **==Asn**: Asparagine (attachment site)==
- ==**X**: Any amino acid **except proline**==
- **==Ser/Thr**: Serine or Threonine==

#### **반응 메커니즘:**
1. Asparagine이 oligosaccharyl transferase의 tunnel로 진입
2. Amide bond의 nitrogen이 평면 밖으로 비틀림
3. 반응성 증가
4. [[Oligosaccharides]]가 **intact unit**로 전이
5. Dolichol-pyrophosphate 방출

### ==Co-translational Modification==이다
#### **시기:**
- Polypeptide가 ER lumen에 진입하는 즉시
- Translation이 진행되는 동안
- Signal sequence 제거와 동시 또는 직후
#### **장점:**
- 빠른 modification
- Folding 전에 완료
- Aggregation 방지

## ==Processing in the ER==
### [[Glycosylation-Based Monitoring|Glucose Trimming]]
![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]
#### **단계:**
1. glucosidase가 2개의 glucose 제거
2. Glc₁Man₉GlcNAc₂ 생성(포도당 하나 남음)
3. 이 구조가 [[Calnexin and Calreticulin]]에 의해 인식됨
#### **Folding cycle:**
```
Glc₃Man₉GlcNAc₂ (newly attached)
    ↓ (glucosidases)
Glc₁Man₉GlcNAc₂ (binds calnexin/calreticulin)
    ↓ (glucosidase)
Man₉GlcNAc₂ (released from calnexin/calreticulin)
    ↓ (glucosyl transferase, if misfolded)
Glc₁Man₉GlcNAc₂ (re-binds calnexin/calreticulin)
```

이 cycle은 [[Quality control of ER protein folding]] 참조

### [[Mannosidase Timer|Mannose Trimming]]
**시기:** Protein이 ER에 오래 머무를 때

**의미:**
- Trimmed mannose = folding 문제 신호
- [[ER-associated degradation|ER-associated degradation (ERAD)]] pathway로 전환
- Mannosidase가 terminal mannose 제거

## Further Processing in Golgi

ER을 벗어난 후:
- Golgi에서 extensive modification
- 다양한 [[Oligosaccharides]] 구조 생성
- Complex, hybrid, high-mannose type으로 분류
  
(자세한 내용은 [[Oligosaccharide processing in Golgi|Golgi에서의 N-linked 당화 processing]] 참조)

## ==N-linked Glycosylation의 기능==

### 1. [[Quality control of ER protein folding|Quality Control Tag]]
- Glucose의 presence/absence가 folding state 표시
- [[Calnexin and Calreticulin|Calnexin/calreticulin]] recruitment
- ER retention of misfolded proteins
=> ==proper protein folding in ER==
### 2. Protein ==Stability and Solubility==
- 당의 극성으로 solubility 증가, 안정화
- 올바른 folding 촉진
- Aggregation 방지[^기출_중간_2023_19]
- Proteolysis로부터 보호[^기출_중간_2023_19]
### 3. Cell-Cell Recognition
- [[ER-associated degradation#Lectins|Lectin]] binding[^기출_중간_2023_19]
- Receptor recognition
- Protein sorting
- ==immune system==
### 4. 필수성
일부 단백질에서:
- Proper folding에 필수적
- 위치는 중요하지 않음 (어느 Asn-X-Ser/Thr이든 가능)
- Glycosylation 자체가 중요

## vs O-linked glycosylation
### 주요 차이점 비교 테이블

| **특징**      | **N-연결 당화 (N-linked)**        | **O-연결 당화 (O-linked)**                              |
| ----------- | ----------------------------- | --------------------------------------------------- |
| **결합 아미노산** | **아스파라긴(Asn, N)**의 측쇄 질소($N$) | ==**세린(Ser, S)** 또는 **트레오닌(Thr, T)**의 수산기 산소($O$)== |
| **발생 장소**   | **소포체(ER)**에서 시작 (골지에서 수정)    | 주로 **골지체(Golgi)**에서 발생                              |
| **전달 방식**   | 14개의 당 덩어리를 **한꺼번에** 전달       | 당을 **하나씩** 차례대로 붙임                                  |
| **지질 운반체**  | 돌리콜(Dolichol) 사용              | 사용 안 함                                              |
| **인식 서열**   | Asn-X-Ser/Thr (X는 Pro 제외)     | 특정 공통 서열이 명확하지 않음                                   |
### O-연결 당화 (O-linked Glycosylation)

단백질의 소수성 부위나 특정 구조가 완성된 후, 골지체에서 당 전이효소(Glycosyltransferase)들이 하나씩 당을 추가합니다.

- **특징:** 주로 **뮤신(Mucin)**과 같은 점액 성분 단백질이나 프로테오글리칸 형성에 중요합니다. 당 사슬이 짧은 경우도 있지만, 매우 길고 복잡하게 자라나기도 합니다.
## 관련 개념
- [[Glycosylation]]
- [[Oligosaccharides]]
- [[Dolichol]]
- [[Oligosaccharyl transferase]]
- [[Calnexin and Calreticulin]]
- [[Quality control of ER protein folding]]
- [[Sec61 complex]]

[^기출_중간_2023_19]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_19번|2023 중간 19번]] — ① 틀림: glycosylation은 세포 인식(lectin binding, receptor recognition)을 촉진하며 신호전달을 차단하지 않음. ② 틀림: oligosaccharide는 입체 장애(steric hindrance)로 protease 접근을 차단하여 분해를 억제함. ③ 틀림: N-linked glycosylation은 aggregation을 방지하여 folding을 보조함.