# MATH101 Midterm: Konu Özeti ve Çözümlü Örnekler

Kapsam: Thomas 2.2, 2.4, 2.5, 2.6, 3.1, 3.2, 3.3. Örneklerin çoğu Leila Miller'ın problem kitabından (`Calculuszbirka april12 (2).docx`), kitabın verdiği cevaplarla doğrulandı.

Gösterim: `x→a⁺` sağdan, `x→a⁻` soldan. DNE = does not exist.

---

## §1. Limit ve 0/0 giderme (2.2)

**Kural:** Önce yerine koy.

| Yerine koyunca | Ne yap |
| --- | --- |
| Sayı çıkıyor | Cevap o sayı |
| 0/0 | Cebir: çarpanlara ayır, eşlenik, ortak payda |
| sayı/0 (sayı ≠ 0) | Sonsuz limit. İşaret incele (§4) |
| ∞/∞ ya da ∞ − ∞ | En büyük kuvvete böl ya da eşlenik (§4) |

**Limit kuralları:** lim f ve lim g varsa toplamın, farkın, çarpımın, bölümün (payda limiti ≠ 0) ve kökün limiti, limitlerin aynı işlemidir. Polinomda ve paydası sıfır olmayan rasyonel fonksiyonda limit = yerine koyma.

### Teknik 1: çarpanlara ayırma

lim (x→2) (x − 2)/(x² − 7x + 10)

x² − 7x + 10 = (x − 2)(x − 5). Sadeleştir: 1/(x − 5) → 1/(2 − 5) = **−1/3**

### Teknik 2: eşlenik (kök varsa)

lim (x→1) [√(x+3) − 2]/(1 − x)

Pay · [√(x+3) + 2] = (x + 3) − 4 = x − 1.

İfade = (x − 1)/[(1 − x)(√(x+3) + 2)] = −1/[√(x+3) + 2] → **−1/4**

Dikkat: (x − 1)/(1 − x) = −1. İşareti unutma.

### Teknik 3: ortak payda (kesir içinde kesir)

lim (x→4) (1/x − 1/4)/(x² − 16)

1/x − 1/4 = (4 − x)/(4x). Payda: (x − 4)(x + 4).

İfade = (4 − x)/[4x(x − 4)(x + 4)] = −1/[4x(x + 4)] → −1/(16 · 8) = **−1/128**

### Teknik 4: Sandwich (Squeeze) teoremi

g(x) ≤ f(x) ≤ h(x) ve lim g = lim h = L ise lim f = L.

lim (x→0) x² sin(1/x): −1 ≤ sin(1/x) ≤ 1 olduğundan −x² ≤ x² sin(1/x) ≤ x². İki uç da 0'a gider. Limit **0**.

Sınav cümlesi: "Since −x² ≤ x² sin(1/x) ≤ x² and both bounds → 0, the limit is 0 by the Sandwich Theorem."

---

## §2. Tek taraflı limitler ve trigonometrik limitler (2.4)

**Kural:** lim (x→a) f(x) = L ancak ve ancak sol limit = sağ limit = L. Farklıysa limit DNE.

### Mutlak değer

|x − a| = x − a (x > a iken), |x − a| = −(x − a) (x < a iken). Hangi taraftan yaklaşıyorsan ona göre aç.

lim (x→4⁺) |x − 4|/(4 − x): x > 4, yani |x − 4| = x − 4. (x − 4)/(4 − x) = **−1**

lim (x→4⁻) |x − 4|/(4 − x): |x − 4| = −(x − 4) = 4 − x. (4 − x)/(4 − x) = **1**

İki taraf farklı: lim (x→4) **DNE**.

### Parçalı fonksiyonda tek taraflı limit

Sol limit için noktanın solundaki formülü, sağ limit için sağındaki formülü kullan. f(a) için eşitliğin olduğu parçaya bak.

f(x) = 2 (x ≤ 0); x² + 1 (0 < x < 1); 3 (x = 1); 5 − x (x > 1)

- x = 0: sol = 2, sağ = 1, limit DNE, f(0) = 2
- x = 1: sol = 2, sağ = 4, limit DNE, f(1) = 3

### Trigonometrik limitler

Temel: **lim (θ→0) sin θ / θ = 1** (θ radyan). Buradan çıkanlar:

| Limit (x→0) | Sonuç |
| --- | --- |
| sin(ax)/(bx) | a/b |
| tan(ax)/(bx) | a/b |
| sin(ax)/sin(bx) | a/b |
| (1 − cos x)/x | 0 |
| (1 − cos x)/x² | 1/2 |

Sınavda sonucu doğrudan yazma, adımı göster: sin(ax)'in altına ax koy, fazlasını dışarı al.

**Örnek 1.** lim (x→0) sin 4x / sin 16x = (sin 4x / 4x) · (16x / sin 16x) · (4x/16x) → **1/4**

**Örnek 2.** lim (x→0) sin² 3x / (3x²) = (sin 3x / 3x)² · 9x²/(3x²) → **3**

**Örnek 3.** lim (x→0) x² cot² 3x = x² cos² 3x / sin² 3x = cos² 3x · (3x / sin 3x)² · 1/9 → **1/9**

**Örnek 4.** lim (x→0) (1 − cos 2x)/x². (1 + cos 2x) ile çarp ve böl: sin² 2x / [x²(1 + cos 2x)] = (sin 2x / 2x)² · 4/(1 + cos 2x) → 4/2 = **2**

Yerine koyunca 0/0 çıkmıyorsa sin θ/θ kullanma: lim (x→π) sin 2x / x = 0/π = **0**.

---

## §3. Süreklilik (2.5)

**Tanım:** f, x = a'da süreklidir ancak ve ancak üç koşul sağlanır:

1. f(a) tanımlı
2. lim (x→a) f(x) var (sol = sağ)
3. lim (x→a) f(x) = f(a)

**Süreksizlik türleri:**

| Tür | Ne olur | Örnek |
| --- | --- | --- |
| Removable | Limit var ama f(a)'ya eşit değil ya da f(a) tanımsız | (x² − 1)/(x − 1), x = 1'de |
| Jump | Sol ve sağ limit farklı sayılar | Parçalı fonksiyonlar |
| Infinite | Limit ±∞ (düşey asimptot) | 1/(x − 2), x = 2'de |

**Nerede sürekli:** polinomlar her yerde; rasyonel fonksiyonlar paydanın sıfır olmadığı yerde; sin, cos her yerde; tan x, cos x = 0 olan yerler hariç. Sürekli fonksiyonların toplamı, çarpımı, bileşkesi süreklidir.

- f(x) = x/(x² − 1): x ≠ ±1 için sürekli
- f(x) = tan 2x: cos 2x = 0, yani x = (2k+1)π/4 hariç sürekli

### Kalıp soru 1: süreksizlikleri bul (explain)

Sadece geçiş noktalarına bak. Her noktada sol limit, sağ limit, f(a) yaz.

f(x) = −x (x ≤ −1); x² (−1 < x < 1); 0 (x = 1); 2x + 3 (x > 1)

- x = −1: sol = 1, sağ = (−1)² = 1, f(−1) = 1. Üçü eşit, **sürekli**.
- x = 1: sol = 1, sağ = 5. Limit yok, **süreksiz (jump)**.

### Kalıp soru 2: a, b bul

Her geçiş noktasında sol limit = sağ limit denklemi yaz.

f(x) = ax + b (x < 0); 2 − x (0 ≤ x ≤ 1); ax² − 3 (x > 1)

- x = 0: b = 2
- x = 1: 2 − 1 = a − 3, yani a = 4

**a = 4, b = 2**

### Removable süreksizlik

f(x) = (x − 1)/(x² − 1) = (x − 1)/[(x − 1)(x + 1)]

- x = 1: tanımsız ama limit = 1/2. Removable. f(1) = 1/2 tanımlanırsa sürekli olur.
- x = −1: limit ±∞. Infinite süreksizlik.

### Ara Değer Teoremi (Intermediate Value Theorem)

f, [a, b] üzerinde sürekli ve N, f(a) ile f(b) arasında ise f(c) = N olan bir c ∈ (a, b) vardır.

Kullanım: kök var mı. x³ + x − 1 = 0 denkleminin (0, 1)'de kökü var mı? f(x) = x³ + x − 1 polinom, sürekli. f(0) = −1 < 0, f(1) = 1 > 0. IVT'ye göre f(c) = 0 olan c ∈ (0, 1) vardır.

Review kağıdında IVT sorusu yok ama 2.5 kapsamda. Bir kez çöz, geç.

---

## §4. Sonsuzluk içeren limitler ve asimptotlar (2.6)

### x → ±∞ : rasyonel fonksiyon

Pay ve paydayı paydanın en büyük kuvvetine böl. 1/xⁿ → 0.

| Derece | Sonuç | Örnek |
| --- | --- | --- |
| pay < payda | 0 | (x + 2)/(x² + 1) → 0 |
| pay = payda | baş katsayıların oranı | (2x⁴ + 3)/(1 − x⁴) → −2 |
| pay > payda | ±∞ (işarete bak) | (x³ − 2)/(x² + 1) → x→∞'da +∞, x→−∞'da −∞ |

Adım gösterimi: lim (x→−∞) (x + 1)/(2x − 1) = lim (1 + 1/x)/(2 − 1/x) = **1/2**

### x → ±∞ : kök varsa

**√(x²) = |x|.** x → +∞ iken |x| = x, x → −∞ iken |x| = −x.

lim (x→∞) √(x² + 1)/(2x) = x√(1 + 1/x²)/(2x) → **1/2**

lim (x→−∞) √(x² + 1)/(2x) = (−x)√(1 + 1/x²)/(2x) → **−1/2**

### ∞ − ∞ : eşlenik

lim (x→∞) [√(x² + x + 1) − x]

Eşlenikle çarp: (x² + x + 1 − x²)/[√(x² + x + 1) + x] = (x + 1)/[√(x² + x + 1) + x]

x'e böl: (1 + 1/x)/[√(1 + 1/x + 1/x²) + 1] → **1/2**

Ters durum: lim (x→−∞) [√(x² + 3) − x]. Burada −x → +∞, yani ∞ + ∞. Belirsizlik yok, sonuç **+∞**.

### Sonsuz limitler (sayı/0)

Pay sıfırdan farklı bir sayıya, payda 0'a gidiyorsa sonuç ±∞. İşareti pay ve paydanın işaretinden bul.

lim (x→(−2)⁺) (x − 1)/(x + 2): pay → −3, payda → 0⁺. Sonuç **−∞**.

lim (x→(−2)⁻) (x − 1)/(x + 2): pay → −3, payda → 0⁻. Sonuç **+∞**.

lim (x→−2): iki taraf farklı, **DNE**.

Dikkat, önce 0/0 mı diye bak: lim (x→1⁺) (1 − x)/(x² − 1) = (1 − x)/[(x − 1)(x + 1)] = −1/(x + 1) → **−1/2**. Sonsuz değil.

### Asimptotlar

- **Yatay (horizontal):** lim (x→∞) f = L ya da lim (x→−∞) f = L ise y = L. İki tarafa ayrı bak.
- **Düşey (vertical):** x → a iken f → ±∞ ise x = a. Rasyonelde: sadeleştirdikten sonra paydayı sıfır yapan x.
- **Eğik (oblique):** payın derecesi paydanınkinden 1 fazlaysa. Polinom bölmesi yap.

**Örnek 1.** y = 2x²/(x² − 1). Düşey: x = −1, x = 1. Yatay: y = 2.

**Örnek 2.** y = √(x² + 1)/x. Düşey: x = 0. Yatay: x→∞'da y = 1, x→−∞'da y = −1. İki yatay asimptot.

**Örnek 3.** y = (x² − 5)/(x + 1) = x − 1 − 4/(x + 1). Düşey: x = −1. Eğik: y = x − 1.

---

## §5. Tanımdan türev ve teğet doğrusu (3.1, 3.2)

**Tanım:**

f′(x) = lim (h→0) [f(x + h) − f(x)] / h

Bir noktada: f′(a) = lim (h→0) [f(a + h) − f(a)]/h = lim (x→a) [f(x) − f(a)]/(x − a)

**Teğet doğrusu:** (a, f(a)) noktasında eğim f′(a):

y − f(a) = f′(a)(x − a)

**Adımlar:** (1) f(x+h) yaz. (2) f(x+h) − f(x) sadeleştir. (3) h'yi sadeleştir. (4) h → 0. Her satırda `lim` yaz. "Using the definition" diyen soruda kural kullanmak puan getirmez; kuralı sadece sonucu kontrol için kullan.

### Kalıp 1: polinom (aç, sadeleştir)

f(x) = x³ + 1

(x + h)³ − x³ = 3x²h + 3xh² + h³

f′(x) = lim (h→0) (3x² + 3xh + h²) = **3x²**

### Kalıp 2: kesir (ortak payda)

f(x) = 1/x

1/(x + h) − 1/x = (x − x − h)/[(x + h)x] = −h/[(x + h)x]

f′(x) = lim (h→0) −1/[(x + h)x] = **−1/x²**

f(x) = x/(x + 1)

(x + h)/(x + h + 1) − x/(x + 1) = [(x + h)(x + 1) − x(x + h + 1)]/[(x + h + 1)(x + 1)] = h/[(x + h + 1)(x + 1)]

f′(x) = lim (h→0) 1/[(x + h + 1)(x + 1)] = **1/(x + 1)²**

### Kalıp 3: kök (eşlenik)

f(x) = √(x + 2)

[√(x + h + 2) − √(x + 2)]/h · [√(x + h + 2) + √(x + 2)]/[aynısı] = h/(h[√(x + h + 2) + √(x + 2)])

f′(x) = lim (h→0) 1/[√(x + h + 2) + √(x + 2)] = **1/(2√(x + 2))**

**Teğet, x = −1'de:** f(−1) = 1, f′(−1) = 1/2. y − 1 = (1/2)(x + 1), yani **y = x/2 + 3/2**.

### Türevlenebilirlik

- Türevlenebilir ise süreklidir. Tersi doğru değil.
- Türev yok: köşe (|x|, x = 0'da: sağ türev 1, sol türev −1), sivri uç (cusp), düşey teğet, süreksizlik noktası.

---

## §6. Türev kuralları (3.3)

| Kural | Formül |
| --- | --- |
| Sabit | (c)′ = 0 |
| Kuvvet | (xⁿ)′ = n xⁿ⁻¹ (n her reel sayı) |
| Sabit çarpan | (c f)′ = c f′ |
| Toplam / fark | (f ± g)′ = f′ ± g′ |
| Çarpım | (f g)′ = f′ g + f g′ |
| Bölüm | (f/g)′ = (f′ g − f g′)/g² |
| İkinci türev | y″ = (y′)′ |

**Önce kuvvet biçimine çevir:**

| İfade | Kuvvet | Türev |
| --- | --- | --- |
| 1/x | x⁻¹ | −1/x² |
| 1/xⁿ | x⁻ⁿ | −n/xⁿ⁺¹ |
| √x | x^(1/2) | 1/(2√x) |
| 1/√x | x^(−1/2) | −1/(2x√x) |
| ∛x | x^(1/3) | 1/(3 ∛(x²)) |

**Örnek 1.** y = x⁻³ + 2x⁻² − 3x → y′ = **−3x⁻⁴ − 4x⁻³ − 3**

**Örnek 2.** y = √x + 2/√x = x^(1/2) + 2x^(−1/2) → y′ = (1/2)x^(−1/2) − x^(−3/2) = **1/(2√x) − 1/√(x³)**

**Örnek 3 (çarpım).** y = (x³ + 1)(x² − 2x) → y′ = 3x²(x² − 2x) + (x³ + 1)(2x − 2) = **5x⁴ − 8x³ + 2x − 2**

**Örnek 4 (bölüm).** y = (x² + 1)/(x² − 1) → y′ = [2x(x² − 1) − 2x(x² + 1)]/(x² − 1)² = **−4x/(x² − 1)²**

**Örnek 5 (ikinci türev).** y = x⁴ − 3x² + 1/x → y′ = 4x³ − 6x − 1/x² → y″ = **12x² − 6 + 2/x³**

**Yatay teğet:** f′(x) = 0 çöz. y = x³ − 3x: y′ = 3x² − 3 = 0, x = ±1. Noktalar (1, −2) ve (−1, 2).

---

## Formül sayfası (sınav sabahı bir kez oku)

- lim sin θ/θ = 1; sin ax/(bx) → a/b; tan ax/(bx) → a/b; (1 − cos x)/x → 0; (1 − cos x)/x² → 1/2
- 1 − cos x ifadesinde (1 + cos x) ile çarp: sin² x çıkar
- a² − b² = (a − b)(a + b); a³ − b³ = (a − b)(a² + ab + b²)
- Eşlenik: (√A − √B)(√A + √B) = A − B
- √(x²) = |x|; x → −∞ iken −x
- Sürekli: f(a) var, limit var, ikisi eşit
- f′(x) = lim (h→0) [f(x+h) − f(x)]/h
- Teğet: y − f(a) = f′(a)(x − a)
- (fg)′ = f′g + fg′; (f/g)′ = (f′g − fg′)/g²
- (1/x)′ = −1/x²; (√x)′ = 1/(2√x)

## Sık yapılan hatalar

1. 0/0'ı cevap sanmak. 0/0 "daha iş var" demek.
2. sayı/0'a doğrudan "DNE" yazmak. Tek taraflıysa +∞ ya da −∞ yaz; iki taraflıysa iki tarafı karşılaştır.
3. |x − a|'yı tarafa bakmadan açmak.
4. x → −∞'da √(x²) = x almak. Doğrusu −x.
5. (x − 1)/(1 − x) = 1 sanmak. Doğrusu −1.
6. Tanımdan türevde `lim` yazmayı bırakmak ya da h'yi sadeleştirmeden h = 0 koymak.
7. (fg)′ = f′g′ yazmak. Yanlış.
8. Bölüm kuralında sırayı karıştırmak: önce payın türevi × payda, eksi pay × paydanın türevi.
9. 5/x²'nin türevinde işaret: −5/x² → +10/x³.
10. Teğet doğrusunda f′(x)'i x'li bırakmak. Eğim bir sayıdır: f′(a).
11. Süreklilik sorusunda sadece "not continuous" yazmak. Sol limit, sağ limit, f(a) göster.
