# Hydropathy Plot

Hydropathy plot은 protein의 amino acid sequence로부터 membrane-spanning segment를 예측하는 방법이다. X-ray crystallography와 single-particle cryo-electron microscopy의 발전으로 많은 membrane protein의 3차원 구조가 결정되었으며, 이는 amino acid sequence로부터 lipid bilayer를 확장하는 polypeptide chain 부분을 예측할 수 있음을 확인해주었다.

## 원리

### ==Membrane-spanning α Helix의 특성==

Transmembrane segment를 식별하기 위한 기준:
- **길이**: 약 20-30 amino acid를 포함하는 segment[^기출_중간_2025_5_⑤]
- **Hydrophobicity**: 높은 정도의 hydrophobicity
- **구조**: α helix로 lipid bilayer를 span하기에 충분한 길이

==이러한 segment는 hydropathy plot에서 종종 식별될 수 있다.==

## 방법론

### Free Energy 계산

![[_page_15_Figure_6.jpeg]]

Hydropathy plot 생성 과정:

1. **Segment 설정**
   - 고정된 크기의 segment 선택 (보통 10-20 amino acid)
   - Polypeptide chain의 각 연속적인 amino acid에서 시작하여

2. **Free Energy 계산**
   - ==Polypeptide chain의 연속적인 segment를 nonpolar solvent에서 물로 transfer하는데 필요한 free energy 계산==
   - Model compound로부터 얻은 data를 사용하여 각 segment의 amino acid 조성으로부터 계산

3. **Hydropathy Index**
   - Y축에 segment의 hydropathy index를 plot
   - Chain에서의 위치의 함수로 표시
   - ==**Positive value**: 물로의 transfer에 free energy 필요 (segment가 hydrophobic)==[^기출_중간_2025_5][^기출_중간_2023_17_②]
   - 값은 필요한 energy 양의 index

4. **결과 해석**
   - Amino acid sequence에서 hydrophobic segment의 위치에 peak 나타남

## 예시

![[_page_15_Figure_6.jpeg]]

위 그림은 두 membrane protein의 hydropathy plot을 보여준다:

### (A) Glycophorin

- Single membrane-spanning α helix 보유[^기출_중간_2023_17_③][^기출_중간_2025_5_④]
- Hydropathy plot에서 하나의 corresponding peak

**특성:**
- Peak의 위치가 transmembrane segment 위치를 나타냄
- Peak의 높이가 hydrophobicity 정도를 나타냄

### (B) Bacteriorhodopsin

- 7개의 membrane-spanning α helix 보유[^기출_중간_2023_17][^기출_중간_2023_17_⑤][^기출_중간_2025_5_①]
- Hydropathy plot에서 7개의 corresponding peak

**특성:**
- 각 peak가 하나의 transmembrane helix에 대응
- 7개의 distinct peak가 명확히 보임

## 한계

### ==β Barrel의 경우==

==Hydropathy plot은 membrane-spanning β barrel의 segment를 식별할 수 없다:==[^기출_중간_2023_17_④][^기출_중간_2025_5_③]

**이유:**
- β barrel을 횡단하는데 10개 이하의 amino acid로 충분
- Extended β strand로서
- 번갈아가며 나타나는 amino acid side chain만 hydrophobic하면 됨
- ==따라서 hydropathy plot에서 명확한 peak를 형성하지 않음==[^기출_중간_2022_17][^기출_중간_2023_23]
### ==옆의 helix와 붙어있는 경우==
![[Pasted image 20260325235417.png]]
끼어있는 helix는 모든 AA가 hydrophobic일 필요가 없음.
### Partial Membrane Insertion

Multipass transmembrane protein은:
- Membrane을 완전히 span하지 않는 region도 포함 가능
- Membrane의 양쪽에서 folding하여 들어감
- Transmembrane α helix 사이의 공간으로 squeeze됨
- Bilayer의 hydrophobic core와 접촉하지 않음

**이러한 region의 특성:**
- 다른 polypeptide region과만 상호작용
- Hydrogen-bonding을 maximize할 필요 없음
- 다양한 secondary structure 가질 수 있음
- Partway across bilayer만 확장하는 helix 포함 가능

![[Cell Biology/출처/md converted/Chapter 10/_page_16_Picture_9.jpeg]]

위 그림은 aquaporin water channel의 두 short α helix를 보여준다. 각각이 lipid bilayer를 halfway만 span한다. 이러한 colored helix는 protein-protein interaction에 의해 형성된 interface에 묻혀 있다.

**결과:**
- 이러한 region은 hydropathy plot에서 식별될 수 **없음**
- Protein의 3차원 구조 결정으로만 밝혀짐
- 또는 구조가 알려진 homologous protein과의 sequence alignment로


## 관련 개념
- [[Membrane protein]]
- [[Lipid bilayer]]

[^기출_중간_2023_17]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_17번|2023 중간 17번]] — Hydropathy plot에서 7개의 peak = 7개의 α-helix를 가진 7-pass transmembrane protein으로 예측할 수 있다는 내용이 정답 근거로 활용됨. 복기 불완전. (선지 미복기)
[^기출_중간_2022_17]: [[Cell Biology/기출 DB/중간고사/2022년/mid_2022_17번|2022 중간 17번]] — β-barrel transmembrane protein은 hydropathy plot으로 예측이 어렵다는 내용이 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2023_23]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_23번|2023 중간 23번]] — β-barrel 막단백질은 짧은 β strand(10개 이하 아미노산)가 Extended β strand로 막을 횡단하며, 격번 아미노산의 소수성 side chain이 지질과 접촉한다는 내용이 출제됨. 복기 불완전. (선지 미복기)
[^기출_중간_2025_5]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_5번|2025 중간 5번]] — ②번 선지: Hydropathy plot에서 양의 값이 소수성 성질을 의미 (정답)
[^기출_중간_2023_17_②]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_17번|2023 중간 17번]] — ②번 선지: 양의 값은 소수성(물과 친화도 낮음)을 의미함 — "물과 친화도 높음"이라는 선지는 틀림 (오답)
[^기출_중간_2023_17_③]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_17번|2023 중간 17번]] — ③번 선지: (A) Glycophorin은 single membrane-spanning α helix 1개 → 3개라는 선지는 틀림 (오답)
[^기출_중간_2023_17_④]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_17번|2023 중간 17번]] — ④번 선지: β-barrel은 hydropathy plot으로 식별 불가 → "소수성으로 판단하기 쉽다"는 틀림 (오답)
[^기출_중간_2023_17_⑤]: [[Cell Biology/기출 DB/중간고사/2023년/mid_2023_17번|2023 중간 17번]] — ⑤번 선지: 여러 양의 peak = 여러 α-helix (β-sheet가 아님); Bacteriorhodopsin 7개 peak = 7 α-helix (오답)
[^기출_중간_2025_5_①]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_5번|2025 중간 5번]] — ①번 선지: (B) Bacteriorhodopsin은 7개의 α-helix → 4개라는 선지는 틀림 (오답)
[^기출_중간_2025_5_③]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_5번|2025 중간 5번]] — ③번 선지: β-barrel의 막 접촉 부분은 hydropathy plot으로 식별 불가 (오답)
[^기출_중간_2025_5_④]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_5번|2025 중간 5번]] — ④번 선지: (A) Glycophorin은 single α-helix로 막을 통과 — β-sheet 3개라는 선지는 틀림 (오답)
[^기출_중간_2025_5_⑤]: [[Cell Biology/기출 DB/중간고사/2025년/mid_2025_5번|2025 중간 5번]] — ⑤번 선지: TM α-helix는 약 20-30개의 연속 소수성 잔기가 필요 — 10개 이하로는 불충분 (오답)

