# Antibodies for Protein Detection

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
## Detection Methods

### <mark style="background:#fff88f">Direct vs Indirect Immunocytochemistry</mark>
![[_page_10_Picture_2.jpeg]]


**Primary Antibody(1차 항체)**:
- 관심 있는 protein(단백질)에 직접 결합
- Marker molecule(표지 분자)에 직접 연결 가능

**Secondary Antibody(2차 항체)**:
- Primary antibody에 결합하는 antibody[^기출_중간_2022_3]
- Labeled secondary antibodies의 group이 사용될 때 더 강한 signal(신호) 생성
- 이 과정을 indirect immunocytochemistry(간접 면역세포화학)라고 함[^기출_중간_2021_3][^기출_중간_2021_미상A]

**장단점**:
- <mark style="background:#fff88f">Indirect method가 더 sensitive(민감)하지만 덜 specific함.</mark>
- 그래서 indirect method에는 nonspecific한 형광이 나와 노이즈가 생김.
- 여러 secondary antibody molecules가 각 primary antibody를 인식하기 때문

## Signal Amplification

Antibodies를 probes로 사용할 때 fluorescent signal(형광 신호) 증폭 방법:
- Marker molecule(fluorescent dye 등)을 primary antibody에 직접 연결 가능하기도 하지만
- Unlabeled primary antibody 사용 후 labeled <mark style="background:#fff88f">secondary antibodies로 검출하면 더 강한 signal 획득</mark> 가능
## immunocytochemistry의 단점
<mark style="background:#fff88f">살아있는 세포에 antibody를 집어넣는 침습적 과정에서 세포가 죽음. 따라서 살아있는 세포 관찰 불가능</mark>
대안이 [[GFP(Fluorescent Protein Tagging)#3. GFP Fusion Protein|GFP fusion]]단백질

---

## References

- Chapter 9: Visualizing Cells and Their Molecules
- Section: [[Chapter 9.pdf#page=10&selection=12,0,12,50|"Antibodies Can Be Used to Detect Specific Proteins"]]
- Related Figures: 9-12, 9-13, 9-14, 9-15

[^기출_중간_2021_3]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_3번|2021 중간 3번]] — 항체를 이용해 조직·세포 내 특정 단백질을 형광 염료로 검출하는 immunocytochemistry 및 2차 항체를 추가 사용해 신호를 증폭하는 indirect 방법에 관한 내용이 출제됨.
[^기출_중간_2021_미상A]: [[Cell Biology/기출 DB/중간고사/2021년/mid_2021_미상A번|2021 중간 미상A번]] — 면역세포화학(immunohistochemistry/immunocytochemistry)의 정의가 여러 현미경 정의 문항에서 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2022_3]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_3번|2022 중간 3번]] — 동일 숙주 종(예: 모두 rabbit) 유래의 2개 1차 항체를 사용하면, 2차 항체가 이들을 구별할 수 없어 두 target 단백질을 서로 다른 색으로 표지할 수 없다는 내용이 정답 근거로 활용됨.