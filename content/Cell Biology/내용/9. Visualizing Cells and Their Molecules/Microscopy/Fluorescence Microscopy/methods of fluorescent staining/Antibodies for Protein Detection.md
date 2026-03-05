# Antibodies for Protein Detection

## Overview

Antibodies(항체)는 특정 proteins(단백질)를 검출하는 강력한 도구이다. Antibodies는 vertebrate immune system(척추동물 면역 체계)에서 infection(감염)에 대한 방어로 생산되는 proteins이며, 각각 다른 binding site(결합 부위)를 가진 수십억 가지 형태로 만들어진다.

## Antibody Specificity

- Antibodies는 특정 target molecule(표적 분자) 또는 antigen(항원)을 인식하는 고유한 특성을 가진다
- 이러한 정밀한 antigen specificity(항원 특이성) 때문에 cell biology(세포 생물학)에서 강력한 도구로 사용된다

## Applications in Microscopy

### [[000_Fluorescence Microscopy(형광현미경)|Fluorescence Microscopy]]

- **Fluorescent dyes(형광 염료)와 결합**: Antibodies를 fluorescent dyes에 화학적으로 연결하여 사용 ^bbd9c5
- **세포 내 특정 molecules(분자) 위치 확인**: Fluorescence microscopy(형광 현미경)를 통해 cells(세포) 내 특정 molecules의 위치를 파악
- **일반적 사용 형광 염료**:
  - [[000_Fluorescence Microscopy(형광현미경)#^e7cebe|Fluorescein(플루오레세인)]]: Blue light(청색광)로 여기(excitation)하면 강한 green fluorescence(녹색 형광) 방출
  - [[000_Fluorescence Microscopy(형광현미경)#^0db42b|rhodamine(로다민)]]: Green-yellow light(녹황색광)로 여기하면 deep red fluorescence(진한 적색 형광) 방출

### [[000_Fluorescence Microscopy(형광현미경)#^c8ea96|Multiple Labeling]]

- 하나의 antibody를 fluorescein에, 다른 antibody를 rhodamine에 결합하여 같은 cell(세포)에서 서로 다른 molecules(분자)의 distribution(분포)를 비교 가능
- 두 molecules는 각 dye(염료)에 특화된 filter sets(필터 세트)를 전환하여 따로 visualize(시각화) 가능
- Multiple fluorescent dyes를 사용하여 같은 cell에서 여러 유형의 molecules를 명확하게 구별 가능 (Figure 9–13 참조)

### Modern Fluorescent Probes

현대의 fluorescent probes(형광 프로브)들:
- Cy3, Cy5, Alexa dyes 등이 fluorescence microscopy를 위해 특별히 개발됨
- 많은 organic fluorochromes(유기 형광체)와 마찬가지로 지속적인 조명 시 비교적 빠르게 fade(퇴색)됨
- 추가 fluorescence microscopy methods를 통해 living cells(살아있는 세포) 내 특정 molecules의 concentration(농도)과 location(위치) 변화를 모니터링 가능

## Important Consideration

- Fluorescence microscopy의 모든 방법에는 trade-off가 존재한다
- Fluorescence microscopes에서는 fluorescently labeled molecules(형광 표지된 분자)만 imaging(영상화)이 가능하다
- Cell 내의 다른 모든 molecules는 보이지 않는 상태로 남는다

## Detection Methods

### Direct vs Indirect Immunocytochemistry

> [!scheme] Indirect immunocytochemistry
> ![[Chapter 9.pdf#page=11&selection=65,0,65,12|h-25%]]


**Primary Antibody(1차 항체)**:
- 관심 있는 protein(단백질)에 직접 결합
- Marker molecule(표지 분자)에 직접 연결 가능

**Secondary Antibody(2차 항체)**:
- Primary antibody에 결합하는 antibody[^기출_중간_2022_3]
- Labeled secondary antibodies의 group이 사용될 때 더 강한 signal(신호) 생성
- 이 과정을 indirect immunocytochemistry(간접 면역세포화학)라고 함[^기출_중간_2021_3][^기출_중간_2021_미상A]

**장점**:
- Indirect method가 더 sensitive(민감)함
- 여러 secondary antibody molecules가 각 primary antibody를 인식하기 때문

### Immunogold Electron Microscopy

Electron microscope(전자 현미경)에서의 antibody 사용:
- Colloidal gold spheres(콜로이드 금 입자) 같은 electron-dense particles(전자 밀도가 높은 입자)로 표지
- Electron microscopy에서 유사한 목적으로 사용
- Purified antibodies from antiserum(항혈청에서 정제된 항체) 또는 specific monoclonal antibodies(특정 단일클론 항체) 사용

## Signal Amplification

Antibodies를 probes로 사용할 때 fluorescent signal(형광 신호) 증폭 방법:
- Marker molecule(fluorescent dye 등)을 primary antibody에 직접 연결 가능하기도 하지만
- Unlabeled primary antibody 사용 후 labeled secondary antibodies로 검출하면 더 강한 signal 획득 가능

---

## References

- Chapter 9: Visualizing Cells and Their Molecules
- Section: [[Chapter 9.pdf#page=10&selection=12,0,12,50|"Antibodies Can Be Used to Detect Specific Proteins"]]
- Related Figures: 9-12, 9-13, 9-14, 9-15

[^기출_중간_2021_3]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_3번|2021 중간 3번]] — 항체를 이용해 조직·세포 내 특정 단백질을 형광 염료로 검출하는 immunocytochemistry 및 2차 항체를 추가 사용해 신호를 증폭하는 indirect 방법에 관한 내용이 출제됨.
[^기출_중간_2021_미상A]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상A번|2021 중간 미상A번]] — 면역세포화학(immunohistochemistry/immunocytochemistry)의 정의가 여러 현미경 정의 문항에서 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2022_3]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_3번|2022 중간 3번]] — 동일 숙주 종(예: 모두 rabbit) 유래의 2개 1차 항체를 사용하면, 2차 항체가 이들을 구별할 수 없어 두 target 단백질을 서로 다른 색으로 표지할 수 없다는 내용이 정답 근거로 활용됨.