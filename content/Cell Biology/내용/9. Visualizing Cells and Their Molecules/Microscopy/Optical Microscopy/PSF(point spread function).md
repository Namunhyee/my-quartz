## Point Spread Function의 이해
### 기본 개념
[[deconvolution#Point Spread Function(PSF)의 이해|Point spread function]]은 lens에 의해 점 광원이 초점을 맞출 때 형성되는 three-dimensional blurred image 내 빛 강도의 분포다. Diffraction effects 때문에 점 광원과 동일하게 imaging되는 대신, 이미지는 Gaussian distribution에 의해 대략적으로 설명되는 강도 분포를 가지며, 이것이 lens system의 resolution을 결정한다.

### Figure 9-29: Point Spread Function과 Resolution
![[Cell Biology/출처/md converted/Chapter 9/_page_19_Figure_2.jpeg]]
**(A) 3D Blurring**: 점 광원이 lens system으로 초점을 맞출 때, diffraction effects로 인해 점으로 imaging되지 않고 모든 차원에서 blurred됨. Point spread function이 elongated(길쭉한) 형태이므로, XY축에서의 resolution이 Z축보다 우수함을 의미함.
**(B) Gaussian Distribution**: 이미지 평면에서 빛의 분포가 Gaussian distribution에 근사함. 이상적 조건에서 half-maximum에서의 width는 약 200 nm.
**(C) Resolution Limit**: 약 200 nm 떨어진 두 개의 별도 점 광원은 이미지에서 여전히 별도 객체로 구별 가능함. 이보다 가까우면 이미지가 겹쳐서 분해 불가능.