# Deneme Çözümleri

Denemeyi süre tutarak bitirdikten sonra aç. Yanlışlarını tipine göre not et (0/0 cebiri, işaret, tanım yazımı, kural).

---

# Deneme 1

## 1. Limitler

**a)** sin 6x / tan 4x = (sin 6x / 6x) · (4x / tan 4x) · (6x/4x) → 1 · 1 · 3/2 = **3/2**

**b)** (1 + cos 3x) ile çarp ve böl:

(1 − cos 3x)/x² = sin² 3x / [x²(1 + cos 3x)] = (sin 3x / 3x)² · 9/(1 + cos 3x) → 9/2 = **9/2**

**c)** Eşlenik: pay · [√(9 + x) + √(9 − 2x)] = (9 + x) − (9 − 2x) = 3x

İfade = 3x / (6x [√(9 + x) + √(9 − 2x)]) = 1/(2 [√(9 + x) + √(9 − 2x)]) → 1/(2 · 6) = **1/12**

**d)** x < 3 iken |x − 3| = −(x − 3):

−(x − 3)/[(x − 3)(x + 3)] = −1/(x + 3) → **−1/6** (soldan)

Sağdan: 1/(x + 3) → 1/6. Sol ≠ sağ, iki taraflı limit **DNE**.

**e)** Payda eşitle: 2/(x − 1) − 1/(x − 1)² = [2(x − 1) − 1]/(x − 1)² = (2x − 3)/(x − 1)²

Pay → −1, payda → 0⁺. Sonuç **−∞**.

**f)** 1/(x + 3) − 1/5 = (5 − x − 3)/[5(x + 3)] = (2 − x)/[5(x + 3)]

Payda: x² − x − 2 = (x − 2)(x + 1)

İfade = (2 − x)/[5(x + 3)(x − 2)(x + 1)] = −1/[5(x + 3)(x + 1)] → −1/(5 · 5 · 3) = **−1/75**

**g)** x²'ye böl: (3 − 1/x + 1/x²)/(5/x² − 2) → 3/(−2) = **−3/2**

**h)** x → −∞ iken √(4x² + 1) = |x|√(4 + 1/x²) = −x√(4 + 1/x²)

İfade = −x√(4 + 1/x²)/[x(3 − 2/x)] = −√(4 + 1/x²)/(3 − 2/x) → **−2/3**

## 2. Süreksizlikler

Geçiş noktaları: −2, 0, 1.

| Nokta | Sol limit | Sağ limit | f(nokta) | Sonuç |
| --- | --- | --- | --- | --- |
| x = −2 | −2 + 3 = 1 | 1 | 1 | Sürekli |
| x = 0 | 1 | 0 + 2 = 2 | 2 | Süreksiz (jump) |
| x = 1 | 1 + 2 = 3 | 4 − 1 = 3 | 5 | Süreksiz (removable) |

x = 1'de limit var (3) ama f(1) = 5 ≠ 3. Bu yüzden süreksiz. Bu tuzağa dikkat: sol = sağ olması yetmez, f(a)'ya da eşit olmalı.

## 3. a ve b

- x = −1: sol = −a + b, sağ = 3 − (−1) = 4. Denklem: −a + b = 4
- x = 1: sol = 3 − 1 = 2, sağ = a + b. Denklem: a + b = 2

Topla: 2b = 6, b = 3. Sonra a = −1.

**a = −1, b = 3**

## 4. Asimptotlar

y = (2x² + 1)/(x² − 4). Payda sıfır: x = ±2; pay orada 9 ≠ 0.

**Düşey:** x = −2 ve x = 2. **Yatay:** lim (x→±∞) = 2, yani y = 2.

## 5. Tanımdan türev

**a)** f(x) = 3x² + 2x

f(x + h) − f(x) = 3(x + h)² + 2(x + h) − 3x² − 2x = 6xh + 3h² + 2h

f′(x) = lim (h→0) (6x + 3h + 2) = **6x + 2**

f(1) = 5, f′(1) = 8. y − 5 = 8(x − 1) → **y = 8x − 3**

**b)** f(x) = 1/(2x + 3)

1/(2x + 2h + 3) − 1/(2x + 3) = [(2x + 3) − (2x + 2h + 3)]/[(2x + 2h + 3)(2x + 3)] = −2h/[(2x + 2h + 3)(2x + 3)]

f′(x) = lim (h→0) −2/[(2x + 2h + 3)(2x + 3)] = **−2/(2x + 3)²**

f(−1) = 1, f′(−1) = −2. y − 1 = −2(x + 1) → **y = −2x − 1**

**c)** f(x) = √(2x + 1)

[√(2x + 2h + 1) − √(2x + 1)]/h, eşlenikle çarp:

= [(2x + 2h + 1) − (2x + 1)]/(h [√(2x + 2h + 1) + √(2x + 1)]) = 2/[√(2x + 2h + 1) + √(2x + 1)]

f′(x) = 2/(2√(2x + 1)) = **1/√(2x + 1)**

f(4) = 3, f′(4) = 1/3. y − 3 = (1/3)(x − 4) → **y = x/3 + 5/3**

## 6. Türev kuralları

**a)** y = 3x⁴ − 2x⁻³ + 4x^(1/2) − 7 → y′ = 12x³ + 6x⁻⁴ + 2x^(−1/2) = **12x³ + 6/x⁴ + 2/√x**

**b)** y′ = 2x(x³ − 2x) + (x² + 1)(3x² − 2) = 2x⁴ − 4x² + 3x⁴ + x² − 2 = **5x⁴ − 3x² − 2**

**c)** y′ = [(2x − 3)(2x + 1) − 2(x² − 3x)]/(2x + 1)² = (4x² − 4x − 3 − 2x² + 6x)/(2x + 1)² = **(2x² + 2x − 3)/(2x + 1)²**

**d)** y′ = 4x³ − 6x − 1/x² → y″ = **12x² − 6 + 2/x³**

---

# Deneme 2

## 1. Limitler

**a)** x − 4 = (√x − 2)(√x + 2). İfade = 1/(√x + 2) → **1/4**

**b)** (x + 2)(x − 1)/[(x − 1)(x + 1)] = (x + 2)/(x + 1) → **3/2**

**c)** Pay ve paydayı x²'ye böl: (sin 2x / x) / [(1 − cos x)/x²] → 2 / (1/2) = **4**

**d)** sin² 2x / (x tan 3x) = (sin 2x / 2x)² · 4x² / (x · tan 3x) = (sin 2x / 2x)² · (4/3) · (3x / tan 3x) → **4/3**

**e)** Pay → −3, payda → 0⁺. Sonuç **−∞**

**f)** Eşlenik: (x² + 4x − x²)/[√(x² + 4x) + x] = 4x/[√(x² + 4x) + x] = 4/[√(1 + 4/x) + 1] → **2**

**g)** x³'e böl: (5 − 2/x²)/(1/x³ − 2) → **−5/2**

**h)** Sağdan: (x − 5)/[(x − 5)(x + 5)] → 1/10. Soldan: −1/10. **DNE**

**i)** −x² ≤ x² cos(1/x) ≤ x². İki uç → 0. Sandwich teoremi: **0**

## 2. Süreklilik

**a)** lim (x→3) (x² − 9)/(x − 3) = lim (x + 3) = 6. **a = 6**

**b)** x = 2'de: sol = 4 − a, sağ = 2a + 1. 4 − a = 2a + 1 → **a = 1**

**c)** f(x) = (x − 1)/[(x − 1)(x + 1)].

- x = 1: tanımsız, limit = 1/2. **Removable.**
- x = −1: limit ±∞. **Infinite** (düşey asimptot x = −1).

**d)** f(x) = x³ + x − 1 polinom, [0, 1]'de sürekli. f(0) = −1 < 0, f(1) = 1 > 0. Intermediate Value Theorem: f(c) = 0 olan bir c ∈ (0, 1) vardır.

## 3. Tanımdan türev

**a)** f(x) = x/(x + 1)

(x + h)/(x + h + 1) − x/(x + 1) = [(x + h)(x + 1) − x(x + h + 1)]/[(x + h + 1)(x + 1)] = h/[(x + h + 1)(x + 1)]

f′(x) = lim (h→0) 1/[(x + h + 1)(x + 1)] = **1/(x + 1)²**

f(1) = 1/2, f′(1) = 1/4. y − 1/2 = (1/4)(x − 1) → **y = x/4 + 1/4**

**b)** f(x) = x³ − 2x

f(x + h) − f(x) = 3x²h + 3xh² + h³ − 2h

f′(x) = lim (h→0) (3x² + 3xh + h² − 2) = **3x² − 2**

f(1) = −1, f′(1) = 1. y + 1 = 1(x − 1) → **y = x − 2**

## 4. Türev kuralları

**a)** Önce aç: y = x + √x − 2 → y′ = **1 + 1/(2√x)**

**b)** y′ = [3(5x − 1) − 5(3x + 1)]/(5x − 1)² = **−8/(5x − 1)²**

**c)** y = x^(1/3) + 5x^(−1/3) → y′ = **(1/3)x^(−2/3) − (5/3)x^(−4/3)**

## 5. Teğet ve asimptot

**a)** y′ = 3x² − 3 = 0 → x = ±1. Noktalar **(1, −2)** ve **(−1, 2)**

**b)** Düşey: **x = 0**. Yatay: x → ∞ iken y → 1, x → −∞ iken y → −1. **y = 1 ve y = −1**
