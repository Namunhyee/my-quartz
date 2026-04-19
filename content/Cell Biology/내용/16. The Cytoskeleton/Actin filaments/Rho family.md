# Rho Family GTPases

Rho family GTPase는 세포 극성 확립과 actin cytoskeleton 재구성의 핵심 신호전달 분자다. 세 주요 구성원인 **Cdc42**, **Rac**, **Rho**는 각각 고유한 downstream effector를 통해 [[actin arrays|filopodia, lamellipodia, stress fiber]] 형성을 조절한다.[^기출_기말_2023_16]

## ==분자 스위치 메커니즘==

Rho family 단백질은 [[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/major accessory proteins of the actin cytoskeleton|small monomeric GTPase]]로서 GTP-결합 활성형과 GDP-결합 비활성형 사이를 순환하는 분자 스위치로 작동한다.

상태 전환은 세 종류의 조절 단백질에 의해 제어된다.

- **GEF (Guanine nucleotide Exchange Factor)**: GDP를 GTP로 교환시켜 GTPase를 **활성화**
- **GAP (GTPase Activating Protein)**: GTP 가수분해를 촉진하여 GTPase를 **불활성화**
- **GDI (Guanine nucleotide Dissociation Inhibitor)**: GDP-결합형에 결합하여 GEF에 의한 GTP 교환을 억제

## ==세 주요 구성원과 actin에 대한 효과==

![[Cell Biology/출처/md converted/Chapter 16/_page_68_Figure_2.jpeg]]
*Fig 16–75. Cdc42, Rac, Rho의 활성화가 fibroblast actin 구조에 미치는 극적인 차이. (A) 혈청 결핍 기저 상태. (B) 활성형 **Cdc42** 주입 → 다수의 **filopodia**. (C) 활성형 **Rac** 주입 → 세포 전 둘레에서 **lamellipodium** 형성. (D) 활성형 **Rho** 주입 → 다수의 **stress fiber** 형성.*

| GTPase    | 주요 actin 구조                      | 핵심 effector   |
| --------- | -------------------------------- | ------------- |
| ==Cdc42== | ==Filopodia==                    | 세포 극성 마스터 조절자 |
| ==Rac==   | ==Lamellipodia==                 | WAVE → Arp2/3 |
| ==Rho==   | ==Stress fiber==, Focal adhesion | Formin + ROCK |

### Cdc42 → Filopodia와 세포 극성

Cdc42는 Rho family GTPase 중 가장 잘 보존되어 있으며 **세포 극성의 마스터 조절자**다. 활성화 시 세포 표면에 다수의 긴 filopodia를 형성하며, 이는 외부 신호를 감지하는 안테나 역할을 한다.

**출아 효모(Saccharomyces cerevisiae)에서의 Cdc42 기능**:

![[Cell Biology/출처/md converted/Chapter 16/_page_69_Figure_2.jpeg]]
*Fig 16–76. Cdc42가 효모 세포 극성을 확립하는 양성 피드백 루프. (A) Cdc42-GTP가 자신의 GEF를 plasma membrane으로 모집하여 단일 활성화 부위를 생성. (B) Formin 단백질 활성화 후 actin 필라멘트 형성, myosin V가 소낭을 운반하여 bud 성장.*

1. 비활성형 GDP-Cdc42가 세포막에 균등 분포
2. 우연히 GTP-Cdc42 foci가 형성되면 PAK 단백질 키나제를 모집
3. PAK이 scaffold 단백질 및 **Cdc42 GEF**를 모집 → **양성 피드백**으로 해당 부위의 Cdc42 집중 활성화
4. 세포질 GEF pool 고갈 → **단일 부위**만 활성화되어 하나의 bud site 선택
5. Cdc42-GTP가 formin을 활성화 → 직선 actin 필라멘트 형성
6. Myosin V가 actin 필라멘트를 따라 분비 소낭 운반 → bud 성장

이동 중인 세포에서 Cdc42는 세포의 전반적인 극성을 설정하며, 그 downstream effector로 polarity protein **Par-3**를 포함한다. Cdc42는 filopodia 형성을 자극하여 외부 신호 감지를 돕는다.

### Rac → Lamellipodia 형성

Rac-GTP는 세포 periphery에서 actin 중합을 촉진하여 **sheet-like lamellipodia**를 형성한다. 이는 [[cell migration by actin cytoskeleton|세포 이동]]의 앞쪽 돌출에 핵심적이다.

**Rac → WAVE → Arp2/3 신호축**:

![[Cell Biology/출처/md converted/Chapter 16/_page_73_Figure_2.jpeg]]
*Fig 16–79. Rho family GTPase에 의한 NPF와 formin 조절. (A) WAVE는 Rac-GTP와 결합 시 활성 열린 형태로 전환되어 Arp2/3 complex 및 profilin-actin 결합이 가능해짐. (B) 일부 formin은 자가억제 구조를 갖고 있어 Rho-GTP 결합 시 plus end 및 profilin-actin 결합 부위가 노출됨.*

- WAVE family nucleation-promoting factor (NPF)는 평소 접힌 비활성 형태로 존재
- Rac-GTP 결합 시 plasma membrane으로 모집되고 열린 활성 형태로 전환
- 활성 WAVE가 Arp2/3 complex와 profilin-actin을 결합하여 **분지형 actin network** 형성
- 결과적으로 lamellipodia 및 pseudopodia 형성

### Rho → Stress Fiber와 Focal Adhesion

Rho-GTP는 Rac와 대조적으로 **평행 actin bundle**을 형성하고 myosin II 수축을 촉진한다.

**Rho 신호 경로**:

![[Cell Biology/출처/md converted/Chapter 16/_page_74_Figure_2.jpeg]]
*Fig 16–80. Rac와 Rho 활성화의 대조적 효과. (A) Rac 활성화: WAVE/Arp2/3로 분지형 네트워크 형성, PAK이 MLCK를 억제하여 myosin II 활성 감소. (B) Rho 활성화: formin으로 직선 필라멘트 뉴클레이션, ROCK이 myosin II를 활성화하여 stress fiber와 focal adhesion 형성.*

- **Rho-GTP → Formin 활성화**: Formin과의 결합이 자가억제를 해제하여 직선 actin 필라멘트 형성 촉진
- **Rho-GTP → ROCK 활성화**:
  - ROCK이 myosin 인산화효소 억제제(phosphatase)를 억제 → **MLC(myosin light chain) 인산화 증가** → Myosin II 활성화
  - ROCK이 **LIM kinase**를 활성화 → cofilin 억제 → actin 필라멘트 안정화
- 결과: 수축성 stress fiber와 [[Cell Biology/내용/19. Cell Junctions and the Extracellular Matrix/Cell Junctions/Cell-Matrix Junctions/integrin/integrin_MOC|integrin]] 기반 focal adhesion 형성

## Rac-Rho 상호 길항성

Rac와 Rho 경로는 공간적으로 분리되어 있으며 **상호 길항(mutual antagonism)**을 통해 세포 극성을 유지한다.

- **이동 세포의 front**: Rac 활성화 → lamellipodia 돌출
- **이동 세포의 rear**: Rho 활성화 → 수축성 bundle
- Rac의 effector인 **PAK**이 myosin II를 억제하여 Rho 경로를 억제
- 두 GTPase는 상대방의 GEF, GAP, GDI를 조절하여 공간적 분리를 강화

## 세포 이동과 화학주성에서의 역할

[[cell migration by actin cytoskeleton|세포 이동]]과 **chemotaxis(화학주성)**에서 Rho family GTPase는 방향성 있는 이동을 가능하게 한다.

중성구(neutrophil)의 화학주성 예시:

1. 세균 유래 N-formyl 펩타이드가 G단백결합수용체(GPCR)에 결합
2. **Front**: PI3K 활성화 → PI(3,4,5)P3 생성 → **Rac 활성화** → WAVE/Arp2/3 → lamellipodia 돌출
   - PI(3,4,5)P3는 빠르게 분해되어 leading edge에만 국한
   - 양성 피드백으로 PI3K 활성 강화
3. **Rear**: **Rho 활성화** → ROCK → myosin II 수축
4. Rac-Rho 상호 길항이 front와 rear의 기능적 구분 유지

## PAR 단백질과의 연관

[[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/actin arrays|actin arrays]] 조절 측면에서 Rho family는 세포 극성 단백질(PAR proteins)과 협력한다. *C. elegans* 수정란에서:

- 정자 진입 후 Rho GEF가 posterior 영역에서 고갈 → 국소적 Rho 활성 감소
- Myosin II 의존 cortical contractility의 비대칭 형성
- 이 비대칭이 PAR 단백질(anterior: Par-3, Par-6, Cdc42, aPKC / posterior: Par-1, Par-2) 국재화를 설정

*Drosophila* 상피세포의 극성에서도 Cdc42가 apical domain에서 PAR 단백질을 모집하는 핵심 역할을 담당한다.

## 관련 노트

- [[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/major accessory proteins of the actin cytoskeleton|Major accessory proteins of the actin cytoskeleton]]
- [[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/cell migration by actin cytoskeleton|Cell migration by actin cytoskeleton]]
- [[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/actin arrays|Actin arrays]]
- [[Cell Biology/내용/16. The Cytoskeleton/Actin filaments/treadmilling|Treadmilling]]

[^기출_기말_2023_16]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_16번|2023 기말 16번]] — Rac1→WAVE→Arp2/3에 의한 branched network(lamellipodia)와 RhoA→formin에 의한 linear filament(stress fiber)가 각각 다른 신호 경로를 통해 형성됨이 정답 근거로 활용됨.
