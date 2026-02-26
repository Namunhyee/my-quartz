---
dg-publish: true
---
# Mannosidase Timer

Mannosidase timer는 단백질이 ER에서 머무는 시간을 측정하는 quality control 메커니즘이다. ER-resident mannosidase가 천천히 terminal mannose를 제거함으로써, 오래 머무르는 단백질을 선별하여 degradation으로 보낸다.

## 기본 원리

![[Cell Biology/출처/md converted/Chapter 12/_page_33_Picture_2.jpeg]]

### Timer의 작동 방식
단백질이 ER에 들어오면 N-linked oligosaccharide의 core region에 여러 개의 mannose가 있다. ER에 있는 mannosidase는 이 중 terminal mannose를 천천히 제거한다. 이 제거 속도는 일정하므로, oligosaccharide에 남아있는 mannose의 수를 보면 단백질이 ER에서 머문 시간을 알 수 있다.

### 시간 측정의 의미
빠르게 접히는 단백질은 mannosidase가 mannose를 제거하기 전에 ER을 빠져나간다. 반면 느리게 접히는 단백질은 ER에 오래 머물면서 mannose trimming을 받게 된다. 이렇게 mannose trimming은 단백질이 정상적인 시간 내에 접히지 못했다는 신호가 된다.

## Mannose Trimming 과정

### Step 1: Normal Oligosaccharide
단백질이 처음 ER로 들어올 때 oligosaccharide는 9개의 mannose를 가지고 있다. [[Glycosylation-Based Monitoring]]이 일어나는 동안에도 mannose는 아직 그대로 유지된다.

### Step 2: Slow Mannose Removal
단백질이 [[Glycosylation-Based Monitoring]] cycle을 반복하면서 folding을 시도하는 동안, mannosidase가 천천히 작용한다. 이 효소는 다른 ER enzyme들에 비해 반응 속도가 매우 느리다. 이러한 느린 속도 덕분에 timer로 기능할 수 있다.

### Step 3: Trimmed Oligosaccharide Generation
충분한 시간이 지나면 terminal mannose가 제거되어 trimmed oligosaccharide가 생성된다. 이 구조는 원래의 oligosaccharide와 다르며, ER의 다른 lectin들이 인식할 수 있는 새로운 signal이 된다.

### Step 4: ERAD Lectin Recognition
Trimmed oligosaccharide를 가진 단백질은 ERAD pathway의 lectin들이 인식한다. 이 lectin들은 retrotranslocation machinery와 연결되어 있어서, 인식된 단백질을 [[ER-associated degradation]]으로 routing한다.

## 시간 기반 선별

### Fast Folding Proteins
올바르게 설계된 단백질은 빠르게 접힌다:
- Folding time < Mannose trimming time
- [[Glycosylation-Based Monitoring]] cycle을 몇 번만 거침
- Mannosidase가 작용하기 전에 ER export
- Mannose가 온전한 상태로 유지
- Golgi apparatus로 정상적으로 수송

### Slow Folding Proteins
Misfolded되거나 folding이 어려운 단백질은 느리게 접힌다:
- Folding time > Mannose trimming time
- [[Glycosylation-Based Monitoring]] cycle을 여러 번 반복
- Mannose trimming 발생
- ERAD signal 생성
- Degradation pathway로 진입

## Temporal Threshold 설정

Mannosidase의 반응 속도가 temporal threshold를 결정한다. 이 threshold는 다음과 같이 작동한다:

### 정상 Folding Intermediate 보호
단백질이 접히는 데는 시간이 걸린다. 특히 큰 단백질이나 복잡한 구조를 가진 단백질은 더 많은 시간이 필요하다. Mannosidase의 느린 반응 속도는 이러한 정상적인 folding intermediate에게 충분한 시간을 준다. 일시적으로 unfolded region이 있더라도 최종적으로 올바르게 접히면 mannose trimming 전에 ER을 빠져나갈 수 있다.

### Chronically Misfolded Protein 제거
하지만 어떤 단백질은 계속 잘못 접혀있거나, 영구적인 구조적 결함을 가지고 있다. 이런 단백질은 아무리 기회를 줘도 올바르게 접히지 못한다. Mannosidase timer는 이런 단백질들이 무한정 ER에 머물지 못하도록 한다. 시간 제한을 넘으면 mannose trimming이 일어나고 degradation으로 향한다.

## Glucosyl Transferase와의 상호작용

### Mannose Trimming의 영향
Mannose가 제거되면 oligosaccharide의 구조가 변한다. 이렇게 변형된 oligosaccharide는 glucosyl transferase의 좋은 기질이 아니다. 따라서 mannose trimming을 받은 단백질은 더 이상 [[Glycosylation-Based Monitoring]] cycle로 돌아갈 수 없다.

### [[ER-associated degradation|ERAD]]로의 Commitment
Mannose trimming은 irreversible decision point이다. 한번 mannose가 제거되면, 단백질은 ERAD로 향하는 길에 committed된다. 설령 그 후에 올바르게 접힌다 해도, 이미 degradation signal이 부착되어 있으므로 retrotranslocation을 피할 수 없다.

## 생리적 의의

### ER Capacity 보호
ER의 chaperone과 folding machinery는 제한적이다. 만약 misfolded protein이 계속 ER에 머물면서 chaperone을 독점하면, 새로 들어오는 단백질들이 처리되지 못한다. Mannosidase timer는 이런 상황을 방지하여 ER의 protein-processing capacity를 보호한다.

### Aggregation 방지
Misfolded protein이 오래 머물면 서로 응집하여 aggregate를 형성할 위험이 있다. 이런 aggregate는 매우 독성이 강하며 제거하기도 어렵다. Mannosidase timer는 개별 misfolded protein이 aggregate를 형성하기 전에 제거한다.

### Resource Management
잘못된 단백질을 계속 folding하려고 시도하는 것은 에너지와 자원의 낭비이다. 일정 시간 후에는 포기하고 degradation하여 amino acid를 회수하는 것이 더 효율적이다. Mannosidase timer가 이러한 경제적 선택을 자동화한다.

## Cell Type과 Condition에 따른 조절

### Mannosidase Activity 조절
어떤 세포나 조건에서는 mannosidase activity가 조절될 수 있다. Activity가 증가하면 timer가 빨라져서 더 엄격한 quality control이 일어난다. Activity가 감소하면 timer가 느려져서 더 관대한 quality control이 된다.

### 적응적 Threshold
ER stress 상황에서는 일시적으로 quality control threshold가 완화될 수 있다. 이는 세포가 급한 상황을 넘기는 데 도움이 된다. 하지만 chronic stress에서는 오히려 enhanced degradation이 일어나 세포를 보호한다.

## ERAD Lectin과의 연결

### Lectin의 종류
여러 종류의 ER lectin이 trimmed oligosaccharide를 인식한다. 이들은 retrotranslocation complex의 구성요소이거나 그와 결합되어 있다. 대표적인 것들로는:
- OS-9
- XTP3-B
- EDEM (ER degradation-enhancing α-mannosidase-like protein)

### ERAD Machinery로의 Delivery
이 lectin들은 trimmed oligosaccharide를 가진 단백질을 E3 ubiquitin ligase를 포함하는 retrotranslocation complex로 전달한다. 이렇게 mannosidase timer와 ERAD machinery가 직접 연결되어 있다.

## 관련 개념
- [[Glycosylation-Based Monitoring]]
- [[Quality control of ER protein folding]]
- [[ER-associated degradation]]
- [[Oligosaccharides]]
- [[Calnexin and Calreticulin]]
- [[Protein folding in ER]]
