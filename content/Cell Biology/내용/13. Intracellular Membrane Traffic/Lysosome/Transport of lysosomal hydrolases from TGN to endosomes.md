---
dg-publish: true
---
# Transport of Lysosomal Hydrolases to Endosomes

Lysosomal hydrolase는 TGN에서 선택적으로 포장되어 endosome으로 전달된다. 이는 TGN에서 가장 잘 이해된 sorting 메커니즘이다.

## M6P Receptor System

![[Cell Biology/출처/md converted/Chapter 13/_page_29_Figure_8.jpeg]]

### M6P Receptor의 역할

**Mannose 6-phosphate (M6P) receptor**는 transmembrane 단백질로:
- TGN에 존재
- Lumen 쪽에서 M6P group을 인식하고 lysosomal hydrolase에 결합
- Cytosolic 쪽에서 assembling clathrin coat의 adaptor 단백질에 결합
- Hydrolase를 TGN에서 budding하는 clathrin-coated vesicle로 포장하는 것을 돕음

### pH 의존적 결합

M6P receptor 단백질은 pH에 따라 ligand와의 결합 affinity가 변한다:
- **pH 6.5-6.7 (TGN)**: M6P에 결합
- **pH 6.0 (Early endosome)**: M6P로부터 방출

이러한 pH 의존성은 transferrin receptor의 경우와 유사하지만 역방향이다.

## Transport 과정

### 1. TGN에서 Packaging

1. Lysosomal hydrolase가 M6P marker 획득 (cis Golgi network에서)
2. TGN에서 M6P receptor가 hydrolase 결합
3. Adaptor 단백질이 M6P receptor의 cytoplasmic tail 인식
4. Clathrin coat 조립
5. Clathrin-coated vesicle budding

### 2. Early Endosome으로 전달

Clathrin-coated vesicle:
- Coat 제거
- Early endosome과 융합
- Hydrolase를 endosome 내강으로 전달

### 3. Receptor 재활용

![[Cell Biology/출처/md converted/Chapter 13/_page_19_Figure_10.jpeg]]

Early endosome에서:
1. 낮은 pH 환경 (pH 6.0)
2. Lysosomal hydrolase가 M6P receptor로부터 dissociate
3. Phosphate가 M6P에서 제거됨 (hydrolase가 receptor와 함께 TGN으로 돌아가지 않도록 추가로 보장)
4. 빈 M6P receptor가 **retromer-coated vesicle**로 회수됨
5. Retromer-coated vesicle이 TGN으로 돌아감
6. M6P receptor가 재사용됨

### Retromer Coat

Retromer는 endosome에서 TGN으로의 transport에 특화된 coat 단백질 complex이다.

양방향 transport에는 신호 필요:
- M6P receptor의 cytoplasmic tail에 신호 존재
- **TGN에서**: Clathrin coat의 adaptor 단백질이 tail 인식
- **Endosome에서**: Retromer가 tail 인식

서로 다른 막에서 동일한 receptor에 대한 서로 다른 coat의 조립은 organelle-specific marker에 의해 보장됨:
- Endosome: Rab7과 PI(3)P

## Escape Mechanism

![[Cell Biology/출처/md converted/Chapter 13/_page_29_Figure_8.jpeg]]

모든 hydrolase 분자가 lysosome에 도달하는 것은 아니다:
- 일부 M6P-tagged hydrolase가 정상 packaging process를 벗어남
- Constitutive secretory pathway로 세포 표면으로 운반됨
- 세포외 fluid로 분비됨

그러나 일부 M6P receptor도 plasma membrane으로 우회:
- 탈출한 lysosomal hydrolase를 재포획
- **Receptor-mediated endocytosis**로 회수
- Early 및 late endosome을 거쳐 lysosome으로 복귀

세포외 fluid는 일반적으로 pH 7.4이므로, lysosomal hydrolase가 세포외로 분비되어도 거의 해를 끼치지 않는다.

## M6P-Independent Pathway

모든 세포가 M6P pathway에만 의존하는 것은 아니다:

### Hepatocyte 등의 세포

일부 세포 유형은 M6P-independent pathway를 사용한다:
- I-cell disease 환자의 간세포는 정상적인 lysosomal enzyme 보완물을 포함
- Alternative sorting receptor가 이러한 경로에서 기능

### Lysosome 막 단백질

모든 세포에서 lysosome 막 단백질은:
- M6P-independent pathway로 TGN에서 late endosome으로 분류됨
- I-cell disease에서 정상

## KDEL Receptor와의 비교

M6P receptor의 재활용은 [[../../12. Intracellular Organization and Protein Sorting/ER retention signal|KDEL receptor의 재활용]]과 유사하지만, 운반을 매개하는 coated vesicle 유형이 다르다:
- **KDEL receptor**: COPI-coated vesicle
- **M6P receptor**: Clathrin-coated vesicle (forward) 및 retromer-coated vesicle (retrieval)

## 관련 주제

- [[Lysosomal hydrolase|Lysosomal 가수분해 효소]]
- [[Lysosome_MOC|Lysosome]]
- [[../endocytosis/Receptor-mediated endocytosis|Receptor-mediated endocytosis]]
- [[../endocytosis/Endosomes maturation|Endosome 성숙]]