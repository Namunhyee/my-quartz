---
dg-publish: true
---
# Protein translocation

Transmembrane protein [[Sec61 complex|translocator]]가 cytosol에서 topologically distinct한 공간(membrane의 반대편 또는 integral membrane protein의 경우 lipid bilayer 내부)으로 특정 단백질을 직접 수송한다. 수송되는 단백질 분자는 일반적으로 [[Sec61 complex|translocator]]를 통과하기 위해 펼쳐져야 한다.
선택된 단백질의 초기 수송이 cytosol에서 [[Endoplasmic Reticulum]] lumen, [[Endoplasmic Reticulum]] membrane, 또는 mitochondria로 이러한 방식으로 발생한다.

## [[Co-translational translocation|Co-translational translocation]]
### 1. 개요

공번역 이동은 리보솜에서 단백질이 합성되는 도중에 [[Endoplasmic Reticulum|ER]] 막을 통과하여 내부(Lumen)로 들어가는 방식이다. 주로 분비 단백질이나 막 단백질이 이 경로를 거친다.

### 2. 주요 단계

1. **신호 서열([[Sorting Signal|Signal Sequence]]) 노출**: 리보솜에서 합성 중인 폴리펩타이드의 앞부분에 소포체로 향함을 알리는 신호 서열(N-말단)이 나타난다.
    
2. **[[SRP]] 결합**: 세포질에 있던 **신호 인식 입자(SRP, Signal Recognition Particle)**가 이 신호 서열을 인식하여 결합한다. 이때 SRP는 단백질 합성을 일시적으로 중단시킨다.
    
3. **ER 막 이동 및 결합**: SRP-리보솜 복합체가 소포체 막에 있는 **[[SRP receptor|SRP 수용체(SRP Receptor)]]**에 결합한다.
    
4. **[[Sec61 complex|트랜스로콘]](Translocon) 개방**: SRP가 분리되면서 리보솜이 소포체 막의 단백질 통로인 **트랜스로콘(Sec61 복합체)**에 부착된다. 이와 동시에 닫혀 있던 통로가 열린다.
    
5. **합성 및 이동 재개**: 중단되었던 단백질 합성이 다시 시작되며, 생성되는 폴리펩타이드 사슬이 소포체 내부로 직접 주입된다.
    
6. **신호 서열 제거 및 완성**: 소포체 내부의 **[[sequential use of cleaved ER signal and TM segment during membrane protein insertion#3단계 Signal Sequence의 절단|신호 펩타이드 분해효소(Signal Peptidase)]]**가 신호 서열을 잘라낸다. 합성이 완료되면 단백질은 소포체 내에서 적절한 구조로 접히게 된다.
    

---

### 3. 핵심 구성 요소

- **신호 서열([[Sorting Signal|Signal Sequence]])**: 약 15~30개의 아미노산으로 구성되며 소포체 타겟팅을 결정한다.
    
- **[[SRP]]**: 단백질 합성을 조절하고 리보솜을 소포체로 인도하는 가이드 역할을 한다.
    
- **[[Sec61 complex|Sec61 복합체]]**: 단백질이 막을 통과할 수 있게 해주는 실제 통로이다.

## [[Post-translational translocation|Post-translational translocation]]

완성된 단백질이 cytosol에서 합성된 후 ER로 import되는 경우도 있다. 이는 [[Post-translational translocation]]이라고 하며, 주로 효모 ER membrane과 진화적으로 관련된 bacterial plasma membrane에서 더 흔하다.

### Eukaryotic cells에서의 기전

![[_page_25_Figure_2.jpeg]]

Figure 12-25B[^1]: Eukaryotic cell에서의 post-translational translocation. [[Sec62-Sec63 complex]]가 필요하다. 이 complex는 [[Sec61 complex|Sec61 translocator]]에 부착되어 있으며, ER lumen에서 translocator로부터 나오는 translocating chain에 결합할 수 있는 위치에 [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Proten Traffic/Protein Translocation/Enzymes, complexes and Factors/BiP|BiP]] 분자를 배치한다. ATP 구동 BiP 결합 및 방출 주기가 단백질을 lumen으로 끌어당긴다.

[[Sec62-Sec63 complex]]는 [[Sec61 complex|Sec61 translocator]]에 부착되어 ER lumen의 translocation channel 개구부 근처에 hsp70 유사 chaperone protein([[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Proten Traffic/Protein Translocation/Enzymes, complexes and Factors/BiP|BiP]])을 위치시킨다. [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Proten Traffic/Protein Translocation/Enzymes, complexes and Factors/BiP|BiP]]는 펼쳐진 polypeptide chain에 높은 친화력을 가지며, ER lumen에서 [[Sec61 complex|Sec61 translocator]]로부터 나오는 즉시 import된 단백질 chain에 단단히 결합한다.

### Bacteria에서의 기전

![[_page_25_Figure_2.jpeg]]

*Figure 12-25C: Bacteria에서의 post-translational translocation. 완성된 polypeptide chain이 [[SecA ATPase]]에 의해 cytosolic 측면에서 plasma membrane의 [[Sec61 complex|Sec61 translocator]] 박테리아 상동체(SecY)로 공급된다. ATP 가수분해 구동 conformational change가 SecA에서 piston과 같은 운동을 유도한다. 이 piston은 단백질 chain의 여러 아미노산을 translocator의 pore를 통해 밀어낼 뿐만 아니라 chain이 cytosol로 역류하는 것을 방지한다.*

Bacteria는 에너지를 사용할 수 없는 세포 외 공간으로 직접 단백질을 수송하므로 [[SecA ATPase]]라는 cytosolic accessory protein을 사용한다. SecA는 precursor polypeptide에 결합하고 translocator의 cytosolic 측면에 부착되어 ATP 가수분해에 의해 구동되는 주기적 conformational change를 겪는다.

## 관련 개념
- [[SRP]]
- [[SRP receptor]]
- [[Sec61 complex]]
- [[Sec62-Sec63 complex]]
- [[Cell Biology/내용/12. Intracellular Organization and Protein Sorting/Proten Traffic/Protein Translocation/Enzymes, complexes and Factors/BiP]]
- [[SecA ATPase]]
- [[Post-translational translocation]]
- [[Co-translational translocation]]

[^1]: A는 Co-translational translocation으로 에너지적으로 자발적.
