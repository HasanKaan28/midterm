# MIDTERM REVIEW 101: Çözümler

Kaynak: `materyal/onedrive/MIDTERM REVIEW 101.docx`. Önce kendin çöz, sonra bak.

## Limitler

### 1. lim (x→0) sin 5x / tan 10x

Yerine koy: 0/0. sin u / u → 1 ve tan u / u → 1 kullan.

sin 5x / tan 10x = (sin 5x / 5x) · (10x / tan 10x) · (5x / 10x)

→ 1 · 1 · 1/2 = **1/2**

### 2. lim (x→0) (1 − cos x) / x²

0/0. (1 + cos x) ile çarp ve böl:

(1 − cos x)(1 + cos x) / [x²(1 + cos x)] = sin² x / [x²(1 + cos x)] = (sin x / x)² · 1/(1 + cos x)

→ 1² · 1/2 = **1/2**

### 3. lim (x→0) [√(1+2x) − √(1−x)] / (3x)

0/0. Eşlenikle çarp:

[√(1+2x) − √(1−x)] · [√(1+2x) + √(1−x)] = (1 + 2x) − (1 − x) = 3x

İfade = 3x / (3x [√(1+2x) + √(1−x)]) = 1 / [√(1+2x) + √(1−x)]

→ 1/(1 + 1) = **1/2**

### 4a. lim (x→2⁺) |x − 2| / (x² − 4)

x > 2 iken |x − 2| = x − 2.

(x − 2) / [(x − 2)(x + 2)] = 1/(x + 2) → **1/4**

### 4b. lim (x→2) |x − 2| / (x² − 4)

Sağdan: 1/4 (yukarıda). Soldan: x < 2 iken |x − 2| = −(x − 2), yani ifade = −1/(x + 2) → −1/4.

Sol limit ≠ sağ limit. **Limit yok (DNE).**

### 5. lim (x→0⁺) (1/x² − 2/x)

∞ − ∞ biçimi. Payda eşitle:

1/x² − 2/x = (1 − 2x)/x²

Pay → 1 (pozitif), payda → 0⁺. Sonuç **+∞**.

### 6. lim (x→3) [1/(x+2) − 1/5] / (x² − 5x + 6)

0/0. Payı tek kesir yap:

1/(x+2) − 1/5 = (5 − x − 2) / [5(x+2)] = (3 − x) / [5(x+2)]

Payda: x² − 5x + 6 = (x − 2)(x − 3)

İfade = (3 − x) / [5(x+2)(x−2)(x−3)] = −1 / [5(x+2)(x−2)]

→ −1 / (5 · 5 · 1) = **−1/25**

### 7. lim (x→−∞) (x³ + 6) / (1 − x)²

(1 − x)² = x² − 2x + 1. Payın derecesi 3, paydanın derecesi 2. Pay ve paydayı x²'ye böl:

(x + 6/x²) / (1 − 2/x + 1/x²)

Pay → −∞, payda → 1. Sonuç **−∞**.

## Süreklilik

### 8. Süreksizlikleri bul ve açıkla

f(x) = −x (x < −1); 1 (−1 ≤ x ≤ 1); 4 (1 < x < 2); 3 − x (x ≥ 2)

Her parça kendi aralığında sürekli. Sadece geçiş noktalarına bakılır: −1, 1, 2.

| Nokta | Sol limit | Sağ limit | f(nokta) | Sonuç |
| --- | --- | --- | --- | --- |
| x = −1 | −(−1) = 1 | 1 | 1 | Sürekli |
| x = 1 | 1 | 4 | 1 | Süreksiz (jump) |
| x = 2 | 4 | 3 − 2 = 1 | 1 | Süreksiz (jump) |

Sınav cevabı: "f is discontinuous at x = 1 and x = 2. At x = 1: lim(x→1⁻) f = 1, lim(x→1⁺) f = 4, so the limit does not exist. At x = 2: lim(x→2⁻) f = 4, lim(x→2⁺) f = 1, so the limit does not exist. At x = −1 both one-sided limits equal 1 = f(−1), so f is continuous there."

### 9. a'yı bul: f her x için sürekli olsun

f(x) = 2 − x (x ≤ 1); ax² − 3 (x > 1)

Tek sorun noktası x = 1.

Sol limit = f(1) = 2 − 1 = 1. Sağ limit = a − 3.

a − 3 = 1 → **a = 4**

## Tanımdan türev + teğet doğrusu

Tanım: f′(x) = lim (h→0) [f(x+h) − f(x)] / h. Teğet: y − f(a) = f′(a)(x − a).

### 10. f(x) = 2x² − x, teğet x = −1'de

f(x+h) − f(x) = 2(x+h)² − (x+h) − 2x² + x = 4xh + 2h² − h

f′(x) = lim (h→0) (4xh + 2h² − h)/h = lim (h→0) (4x + 2h − 1) = **4x − 1**

f(−1) = 2 + 1 = 3, f′(−1) = −5.

y − 3 = −5(x + 1) → **y = −5x − 2**

### 11. f(x) = 1/(3x − 1), teğet x = 1'de

f(x+h) − f(x) = 1/(3x + 3h − 1) − 1/(3x − 1) = [(3x − 1) − (3x + 3h − 1)] / [(3x + 3h − 1)(3x − 1)] = −3h / [(3x + 3h − 1)(3x − 1)]

f′(x) = lim (h→0) −3 / [(3x + 3h − 1)(3x − 1)] = **−3/(3x − 1)²**

f(1) = 1/2, f′(1) = −3/4.

y − 1/2 = −(3/4)(x − 1) → **y = −(3/4)x + 5/4**

### 12. f(x) = √(1 − x), teğet x = 0'da

[√(1 − x − h) − √(1 − x)] / h, eşlenikle çarp:

= [(1 − x − h) − (1 − x)] / (h [√(1 − x − h) + √(1 − x)]) = −h / (h [√(1 − x − h) + √(1 − x)])

f′(x) = lim (h→0) −1 / [√(1 − x − h) + √(1 − x)] = **−1 / (2√(1 − x))**

f(0) = 1, f′(0) = −1/2.

y − 1 = −(1/2)(x − 0) → **y = −x/2 + 1**

## Türev kuralları

### 13. y = 2x² − 5/x² + 3√x

Kuvvet biçiminde yaz: y = 2x² − 5x⁻² + 3x^(1/2)

dy/dx = 4x + 10x⁻³ + (3/2)x^(−1/2) = **4x + 10/x³ + 3/(2√x)**

### 14. y = (2x³ − x)/(3x − 1)

Bölüm kuralı: (u/v)′ = (u′v − uv′)/v². u = 2x³ − x, u′ = 6x² − 1; v = 3x − 1, v′ = 3.

Pay: (6x² − 1)(3x − 1) − 3(2x³ − x) = 18x³ − 6x² − 3x + 1 − 6x³ + 3x = 12x³ − 6x² + 1

dy/dx = **(12x³ − 6x² + 1)/(3x − 1)²**
