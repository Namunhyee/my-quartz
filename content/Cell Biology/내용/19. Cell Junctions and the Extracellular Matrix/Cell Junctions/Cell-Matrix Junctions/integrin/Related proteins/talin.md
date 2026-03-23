# Talin

Talin은 [[integrin_MOC|integrin]]과 actin cytoskeleton을 연결하는 거대한 adaptor protein이다. [[Cell-Matrix Junctions_MOC|Cell–matrix junction]]에서 핵심적인 역할을 하며, **mechanosensor**로서 기계적 장력을 감지하고 이에 반응한다.

## 구조와 기능

![[_page_42_Figure_6.jpeg]]
*Figure 19-56. Talin은 여러 domain을 포함하는 거대 단백질로, 한쪽 끝(N-terminal)은 integrin β-subunit의 cytoplasmic tail에 결합하고, 다른 쪽 끝(C-terminal)은 actin filament에 결합한다. Vinculin 등 다른 단백질들과도 상호작용하여 actin 연결을 강화한다.*

Talin은 다음과 같은 구조를 가진다:
- **N-terminal domain**: Integrin β-subunit tail에 결합
- **Rod domain**: 여러 개의 접힌 domain으로 구성되며, 각 domain에 [[vinculin]] 결합 부위가 숨겨져 있음
- **C-terminal domain**: Actin filament 결합 부위

Talin의 주요 binding partner:[^기출_기말_2023_31]
- **Integrin β-subunit** (direct binding)
- **[[100_Actin filaments_MOC|Actin filaments]]** (direct binding)
- **[[Vinculin]]** (tension-dependent)
- **Kindlin** (integrin activation에 협력)

## Inside-Out Integrin Activation에서의 역할

![[_page_46_Figure_1.jpeg]]
*Figure 19-59. Platelet에서 thrombin 신호가 Rap1 GTPase를 활성화하고, 이것이 RIAM을 통해 talin을 plasma membrane으로 모집한다. Talin은 평소 접힌 비활성 상태로 존재하다가, membrane에 모집되면 펼쳐져서 integrin β-chain과 상호작용하여 integrin을 활성화시킨다.*
**여기서 thrombin receptor는 GPCR, Rap1은 G-protein이다.

Talin은 비활성 상태에서 자가억제 구조를 취한다: C-terminal actin-binding domain이 N-terminal integrin-binding domain과 결합하여 활성을 차단한다. 세포 내 신호(예: Rap1 GTPase 경로)가 talin을 plasma membrane으로 모집하면, talin이 펼쳐지면서:

1. N-terminal이 integrin β-chain에 결합
2. Integrin α-β chain 간 intracellular 연결이 끊어짐
3. Integrin이 inactive(folded) → active(extended) 상태로 전환
4. Talin이 actin filament와 결합하여 cytoskeleton 연결 완성

이 과정을 [[integrin_MOC#^6a5ea7|inside-out signaling]]이라 하며, 세포 내부 신호가 integrin의 세포 외부 matrix-binding 활성을 조절한다.

## Mechanotransduction: Talin as a Tension Sensor

![[Cell Biology/출처/md converted/Chapter 19/_page_48_Figure_5.jpeg]]
*Figure 19-61. Talin의 mechanosensing 메커니즘. (A) Talin rod domain은 여러 접힌 domain으로 구성되며, 각각 숨겨진 vinculin 결합 부위를 포함한다. (B) Magnetic bead를 이용한 실험: talin fragment를 유리 표면에 고정하고 자기력으로 늘렸을 때, 늘어나지 않은 talin은 vinculin을 거의 결합하지 않았으나, 늘어난 talin은 2-3개의 vinculin을 결합했다.*

Talin의 가장 중요한 기능 중 하나는 **mechanosensor**로서 장력을 감지하는 것이다 (→ [[mechanotransduction in an adherence junction]]의 alpha-catenin과 유사한 원리):

1. Actin filament가 non-muscle myosin II에 의해 수축하면 talin에 장력이 가해진다
2. 장력이 talin rod domain의 접힌 구조를 펼친다(unfold)
3. 숨겨져 있던 **cryptic vinculin-binding sites**가 노출된다
4. Vinculin이 결합하여 추가 actin filament를 동원한다
5. Cell–matrix junction의 actin 연결이 강화된다

이 메커니즘을 통해 장력이 증가하면 junction이 자동으로 강화되는 positive feedback이 작동한다. Talin은 12개의 α-helix로 이루어진 bundle 구조에 5개의 vinculin 결합 부위를 포함하며, 이들이 장력에 의해 순차적으로 노출된다.

## Cell–Matrix Junction 조립에서의 역할

Talin은 [[integrin_MOC|integrin]] 기반 cell–matrix junction의 핵심 조직자이다:

- **Focal adhesion**: 배양 접시 표면에 부착한 fibroblast가 형성하는 대형 부착 구조
- **Myotendinous junction**: 근육 세포와 힘줄 사이의 강력한 부착
- **Actin-linked cell–matrix junction**: 일반적인 세포-기질 부착 지점

Talin 없이는 integrin이 활성화되지 않고, actin과의 안정적 연결도 형성되지 않는다.

## 관련 개념

- Cell–cell junction의 [[mechanotransduction in an adherence junction]]에서 α-catenin이 유사한 방식으로 작동
- Both talin and α-catenin은 장력에 의해 구조 변화가 일어나는 mechanosensor
- 차이점: Talin은 cell–matrix junction에서, α-catenin은 cell–cell junction에서 작동

[^기출_기말_2023_31]: [[Cell Biology/기출 DB/기말고사/2023년/final_2023_31번|2023 기말 31번]] — talin이 N-terminal(integrin β-subunit 결합), rod domain(vinculin 결합), C-terminal(actin filament 결합)을 통해 integrin과 actin cytoskeleton을 연결한다는 내용이 정답 근거로 활용됨.
[^기출_기말_2025_31]: [[Cell Biology/기출 DB/기말고사/2025년/final_2025_31번|2025 기말 31번]] — talin과 직접 결합하는 단백질 3가지: integrin(β-tail), vinculin(VBS), F-actin(C-terminal) 단답형.
