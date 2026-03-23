# Glucose Trimming

Glucose trimming은 N-linked oligosaccharide에서 glucose를 제거하고 재부착하여 단백질의 folding 상태를 표시하는 quality control 메커니즘이다. 이 과정은 [[Calnexin and Calreticulin]]과 함께 작동하여 불완전하게 접힌 단백질을 ER에 retention시킨다.

## 기본 메커니즘

![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

### ==초기 상태==
단백질이 ER로 translocation되면서 [[N-linked glycosylation|N-linked oligosaccharide]]를 부착받는다. 이 precursor oligosaccharide는 14개의 sugar로 구성되어 있으며, 그 중 3개가 glucose이다.

### ==Step 1: Initial Trimming by Glucosidase==
ER에 있는 **glucosidase**가 2개의 glucose를 빠르게 제거한다. 이 반응은 단백질이 ER로 들어온 직후 거의 즉시 일어난다. 결과적으로 1개의 terminal glucose만 남게 되는데, 이것이 singly glucosylated oligosaccharide이다.

### ==Step 2: Calnexin/Calreticulin Binding==
Singly glucosylated oligosaccharide는 [[Calnexin and Calreticulin]]의 인식 신호이다. 이 lectin chaperone들은 monoglucosylated glycoprotein에 결합하여 단백질이 ER을 빠져나가지 못하도록 retention시킨다. 이 결합 상태에서 단백질은 folding을 시도한다.

### ==Step 3: Final Glucose Removal==
**Glucosidase**가 마지막 남은 glucose도 제거한다. 이제 oligosaccharide에는 glucose가 하나도 없게 되고, calnexin/calreticulin이 단백질로부터 해리된다.

### ==Step 4: Folding State Assessment==
단백질이 calnexin/calreticulin로부터 해리된 후, **glucosyl transferase**가 단백질의 folding 상태를 평가한다. misfolded protein을 인식해 glucose를 재부착한다.

## Glucosyl Transferase의 역할

Glucosyl transferase는 quality control의 핵심 효소이다. 이 효소는 불완전하게 접힌 단백질을 선택적으로 인식하여 terminal glucose를 재부착한다.

### 인식 메커니즘
Glucosyl transferase는 다음과 같은 특징을 가진 단백질을 misfolded로 판단한다:
- 노출된 hydrophobic region
- 비정상적인 structure
- 불완전한 folding intermediate

### ==Glucose 재부착==
불완전하게 접힌 단백질로 판단되면, **glucosyl transferase**가 UDP-glucose로부터 glucose 하나를 oligosaccharide에 transfer한다. 이렇게 다시 monoglucosylated 상태가 된 단백질은 calnexin/calreticulin에 다시 결합한다.

## Quality Control Cycle

이 과정은 cycle을 형성한다:

1. **Monoglucosylated state**: Calnexin/calreticulin 결합, ER retention
2. **Glucose 제거**: Glucosidase 작용, chaperone 해리
3. **Folding 평가**: Glucosyl transferase가 검사
4. **두 가지 결과**:
   - ==올바르게 접힘 → Glucose 재부착 없음 → ER export==[^기출_중간_2023_19][^기출_중간_2023_26]
   - ==불완전하게 접힘 → Glucose 재부착 → cycle 반복==

### Cycle의 반복
이 cycle은 단백질이 완전히 접힐 때까지 반복된다. ==각 cycle마다 단백질은 folding을 시도할 기회를 얻는다.== ==Calnexin/calreticulin이 단백질의 aggregation을 방지==[^기출_중간_2023_19]하면서 이러한 반복적인 folding 시도를 가능하게 한다.

## 올바른 Folding의 판정 원리

### Properly Folded Protein
단백질이 올바르게 접히면:
- Hydrophobic region이 내부로 매립됨
- Native conformation 달성
- Glucosyl transferase가 더 이상 인식하지 않음
- Glucose가 재부착되지 않음
- De-glucosylated 상태로 ER 빠져나감

### Incompletely Folded Protein
단백질이 불완전하게 접혔으면:
- Hydrophobic region이 노출됨
- Non-native conformation 유지
- Glucosyl transferase가 인식
- Glucose 재부착
- Calnexin/calreticulin과 재결합

## 시간 제한과의 연결

Glucose trimming cycle이 반복되는 동안 [[Mannosidase Timer]]도 동시에 작동한다. 단백질이 오랜 시간 동안 glucose trimming cycle을 반복하면, mannosidase가 terminal mannose를 제거하기 시작한다. 

Mannose가 제거된 oligosaccharide는 더 이상 glucosyl transferase나 calnexin/calreticulin의 좋은 기질이 아니다. 대신 이것은 [[ER-associated degradation]]으로 향하는 signal이 된다. 이렇게 glucose trimming system과 mannosidase timer가 협력하여, 빠르게 접히는 단백질은 보호하고 오래 걸리는 단백질은 제거한다.

## 생리적 중요성

### 모든 Glycoprotein의 감시
거의 모든 N-linked glycoprotein이 이 system을 거친다. 이는 ER에서 합성되는 단백질의 약 절반에 해당한다. 따라서 glucose trimming은 ER quality control의 주요 축을 담당한다.

### Folding 기회 제공
Cycle을 반복하면서 단백질은 여러 번 folding을 시도할 수 있다. Chaperone의 도움으로 aggregation을 피하면서 올바른 구조를 찾아갈 수 있다.

### 선택적 Retention
Glucose의 존재/부재가 명확한 on/off switch 역할을 한다. 이는 단백질의 ER retention과 export를 정밀하게 조절한다.

## [[Calnexin and Calreticulin#^aff582|ERp57]]과의 협력

ERp57은 [[Protein disulfide isomerase|PDI]] family member로서 [[Calnexin and Calreticulin|calnexin/calreticulin]]과 함께 작동한다. ERp57은 free sulfhydryl group을 인식하여 불완전한 [[Disulfide bond formation]]을 감지한다.

단백질이 calnexin/calreticulin에 결합되어 있을 때, ERp57도 함께 recruit된다. 이렇게 oligosaccharide 상태(glucose 유무)와 disulfide bond 상태(free SH 유무)를 동시에 모니터링하여 더 정확한 quality control을 수행한다.

## Non-Glycosylated Protein

Glucose trimming system은 glycoprotein에만 적용된다. Non-glycosylated protein은 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Protein Modification, Degradation, Export/Folding/BiP|BiP]]와 같은 다른 chaperone system에 의존한다. 이렇게 두 system이 complementary하게 작동하여 모든 ER protein을 감시한다.

## 관련 개념
- [[Calnexin and Calreticulin]]
- [[Mannosidase Timer]]
- [[Oligosaccharides]]
- [[Glycosylation]]
- [[Quality control of ER protein folding]]
- [[ER-associated degradation]]
- [[Protein folding in ER]]

[^기출_중간_2023_19]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_19번|2023 중간 19번]] — ⑤ 정답: Glycosylation의 순차적 변형(glucose 잔기 수 3→2→1→0)이 단백질 접힘 진행 정도를 나타내는 타이머 역할. 올바르게 접힌 단백질만 glucose 재부착 없이 ER을 빠져나감. ③ 오답 근거: Calnexin/calreticulin은 aggregation을 방지하여 접힘을 돕는 역할을 함.
[^기출_중간_2023_26]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_26번|2023 중간 26번]] — ② 옳음: ER lumen에서 N-linked glycosylation의 순차적 변형이 단백질 접힘 정도를 나타내며, 올바르게 접힌 단백질만 ER을 떠날 수 있음.
