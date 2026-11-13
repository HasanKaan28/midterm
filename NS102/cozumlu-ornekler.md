# NS102 Çözümlü Örnekler (Bölüm 1–7)

Önce soruyu kendin çöz, sonra çözüme bak. g = 9,80 m/s².

## Bölüm 1

### Örnek 1: Bileşenlerle vektör toplama

**A** vektörü 5,0 m büyüklüğünde ve +x ekseniyle 37° yapıyor. **B** vektörü 8,0 m büyüklüğünde ve +x ekseniyle 150° yapıyor. **R** = **A** + **B** vektörünün büyüklüğünü ve yönünü bul.

**Çözüm**

- Ax = 5,0 cos 37° = 3,99 m, Ay = 5,0 sin 37° = 3,01 m
- Bx = 8,0 cos 150° = −6,93 m, By = 8,0 sin 150° = 4,00 m
- Rx = 3,99 − 6,93 = −2,94 m, Ry = 3,01 + 4,00 = 7,01 m
- R = √(2,94² + 7,01²) = 7,60 m
- arctan(7,01 / −2,94) = −67,3°. Rx negatif, Ry pozitif olduğu için vektör 2. çeyrekte: θ = −67,3° + 180° = 112,7°

**Sonuç:** R = 7,60 m, +x ekseninden 112,7°.

### Örnek 2: Skaler ve vektörel çarpım

**A** = 2**î** + 3**ĵ** − **k̂** ve **B** = −**î** + 4**ĵ** + 2**k̂**. (a) **A**·**B**, (b) aralarındaki açı, (c) **A**×**B** nedir?

**Çözüm**

- (a) **A**·**B** = (2)(−1) + (3)(4) + (−1)(2) = 8
- (b) A = √(4 + 9 + 1) = √14 = 3,74. B = √(1 + 16 + 4) = √21 = 4,58. cos φ = 8 / (3,74 × 4,58) = 0,467, φ = 62,2°
- (c) Cx = AyBz − AzBy = (3)(2) − (−1)(4) = 10
  Cy = AzBx − AxBz = (−1)(−1) − (2)(2) = −3
  Cz = AxBy − AyBx = (2)(4) − (3)(−1) = 11

**Sonuç:** **A**×**B** = 10**î** − 3**ĵ** + 11**k̂**.

**Kontrol:** Sonuç iki vektöre de dik olmalı. **A**·(**A**×**B**) = 20 − 9 − 11 = 0. Doğru.

## Bölüm 2

### Örnek 3: Sabit ivmeli hareket, iki aşama

Bir araba durgun halden 2,5 m/s² ivmeyle 8,0 s hızlanıyor, sonra 4,0 m/s² ivmeyle fren yapıp duruyor. Toplam yol kaç metre?

**Çözüm**

- 1. aşama: v = 0 + (2,5)(8,0) = 20 m/s. x₁ = ½(2,5)(8,0)² = 80 m
- 2. aşama: 0 = 20² + 2(−4,0)x₂, x₂ = 400 / 8,0 = 50 m

**Sonuç:** Toplam yol 130 m.

### Örnek 4: Yukarı atış, çatıdan

20 m yüksekliğindeki bir çatının kenarından bir top 15 m/s süratle düşey yukarı atılıyor. (a) Çatıdan en fazla ne kadar yükselir? (b) Yere ne zaman çarpar? (c) Yere çarpma sürati nedir?

**Çözüm** (yukarı pozitif, çatı y = 0)

- (a) Tepede v = 0: 0 = 15² − 2(9,80)h, h = 225 / 19,6 = 11,5 m
- (b) Yer y = −20 m: −20 = 15t − 4,90t². Yani 4,90t² − 15t − 20 = 0.
  t = [15 + √(225 + 392)] / 9,80 = (15 + 24,84) / 9,80 = 4,07 s. Negatif kök atılır.
- (c) v = 15 − (9,80)(4,07) = −24,8 m/s

**Sonuç:** 11,5 m, 4,07 s, 24,8 m/s (aşağı yönlü).

**Not:** Hareketi çıkış ve iniş diye bölmedik. Tek denklem yetti.

## Bölüm 3

### Örnek 5: Eğik atış, düz zemin

Bir top yerden 20 m/s süratle, yatayla 53° açıyla atılıyor. (a) Uçuş süresi, (b) menzil, (c) en büyük yükseklik, (d) tepe noktasındaki sürat nedir?

**Çözüm**

- v₀x = 20 cos 53° = 12,0 m/s, v₀y = 20 sin 53° = 16,0 m/s
- (a) t = 2v₀y / g = 2(16,0) / 9,80 = 3,26 s
- (b) R = v₀x t = (12,0)(3,26) = 39,2 m
- (c) h = v₀y² / (2g) = 16,0² / 19,6 = 13,0 m
- (d) Tepede vy = 0, sürat = v₀x = 12,0 m/s

### Örnek 6: Düz viraj

Bir araba 50 m yarıçaplı düz bir virajı 15 m/s süratle dönüyor. (a) Merkezcil ivmesi nedir? (b) Kaymaması için gereken en küçük statik sürtünme katsayısı nedir?

**Çözüm**

- (a) a_rad = v² / R = 15² / 50 = 4,5 m/s²
- (b) Merkeze doğru tek kuvvet statik sürtünmedir: μs mg ≥ mv² / R, μs ≥ v² / (gR) = 225 / 490 = 0,46

**Not:** Kütle sadeleşir. Sonuç arabanın kütlesine bağlı değildir.

### Örnek 14: Bağıl hız, nehir

Bir teknenin suya göre sürati 4,0 m/s. Nehir doğuya 3,0 m/s akıyor. (a) Tekne burnunu tam kuzeye çevirirse yere göre hızı nedir? (b) Tam kuzeye gitmek için burnunu nereye çevirmeli, yere göre sürati ne olur?

**Çözüm**

- (a) Yere göre hız = suya göre hız + suyun hızı. Bileşenler: 3,0 m/s doğu, 4,0 m/s kuzey.
  Sürat = √(3² + 4²) = 5,0 m/s. Yön: arctan(3/4) = 36,9°, kuzeyin doğusu.
- (b) Suya göre hızın batı bileşeni akıntıyı götürmeli: 4,0 sin θ = 3,0, θ = 48,6°, kuzeyin batısı.
  Yere göre sürat = 4,0 cos 48,6° = √(16 − 9) = 2,65 m/s.

## Bölüm 4 ve 5

### Örnek 7: Sürtünmeli eğik düzlem

5,0 kg'lık bir blok 30° eğimli düzlemden aşağı kayıyor. μk = 0,20. (a) İvmesi nedir? (b) Durgun halden başlayıp 2,0 m kayınca sürati ne olur?

**Çözüm** (x ekseni düzlem boyunca aşağı, y ekseni düzleme dik)

- y: n − mg cos 30° = 0, n = (5,0)(9,80)(0,866) = 42,4 N
- fk = μk n = (0,20)(42,4) = 8,49 N
- x: mg sin 30° − fk = ma, 24,5 − 8,49 = 5,0a, a = 3,20 m/s²
- v² = 2(3,20)(2,0), v = 3,58 m/s

**Kısa yol:** a = g(sin θ − μk cos θ) = 9,80(0,500 − 0,173) = 3,20 m/s².

### Örnek 8: Masa ve asılı kütle

4,0 kg'lık blok sürtünmesiz yatay masada. Hafif bir iple, masanın kenarındaki makaradan geçerek 2,0 kg'lık asılı bloğa bağlı. İvmeyi ve ip gerilmesini bul.

**Çözüm**

- Masadaki blok: T = m₁a
- Asılı blok (aşağı pozitif): m₂g − T = m₂a
- Topla: m₂g = (m₁ + m₂)a, a = (2,0)(9,80) / 6,0 = 3,27 m/s²
- T = (4,0)(3,27) = 13,1 N

**Kontrol:** T, asılı bloğun ağırlığından (19,6 N) küçük. Olması gereken bu, yoksa blok aşağı ivmelenemezdi.

### Örnek 9: Asansörde görünür ağırlık

70 kg'lık bir kişi asansörde tartının üzerinde duruyor. Tartı (a) asansör 2,0 m/s² ile yukarı ivmelenirken, (b) 2,0 m/s² ile aşağı ivmelenirken, (c) sabit hızla giderken ne gösterir?

**Çözüm** (yukarı pozitif): n − mg = ma, n = m(g + a)

- (a) n = 70(9,80 + 2,0) = 826 N
- (b) n = 70(9,80 − 2,0) = 546 N
- (c) n = 70(9,80) = 686 N

**Not:** Belirleyici olan ivmenin yönüdür, hareketin yönü değil. Yukarı giderken yavaşlayan asansörde ivme aşağıdır, tartı 546 N gösterir.

### Örnek 15: Eğimli viraj

100 m yarıçaplı bir viraj, 20 m/s süratle giden arabalar sürtünme olmadan dönebilsin diye eğimlendirilecek. Eğim açısı kaç derece olmalı?

**Çözüm**

- Düşey: n cos β = mg
- Yatay (merkeze doğru): n sin β = mv² / R
- Böl: tan β = v² / (gR) = 400 / 980 = 0,408, β = 22,2°

## Bölüm 6

### Örnek 10: İş–enerji teoremi, açılı çekme

10 kg'lık bir sandık, yatayla 37° yukarı açı yapan 50 N'luk kuvvetle yatay zeminde 5,0 m çekiliyor. μk = 0,20. Sandık durgun halden başlıyor. Son sürati nedir?

**Çözüm**

- Normal kuvvet: n + F sin 37° = mg, n = 98,0 − 30,1 = 67,9 N
- fk = (0,20)(67,9) = 13,6 N
- W_F = F s cos 37° = (50)(5,0)(0,799) = 199,7 J
- W_f = −fk s = −(13,6)(5,0) = −67,9 J
- Normal kuvvet ve ağırlık harekete dik, işleri sıfır.
- W_top = 199,7 − 67,9 = 131,8 J = ½mv², v = √(2 × 131,8 / 10) = 5,13 m/s

**Dikkat:** n = mg almak en sık yapılan hatadır. Kuvvetin yukarı bileşeni normal kuvveti azaltır.

### Örnek 12: Güç

800 kg'lık bir asansör sabit 3,0 m/s süratle yukarı çekiliyor. Motorun gücü kaç kW olmalı?

**Çözüm**

- Sabit hız: çekme kuvveti = mg = (800)(9,80) = 7840 N
- P = Fv = (7840)(3,0) = 23 520 W = 23,5 kW

## Bölüm 7

### Örnek 11: Yay, sürtünme ve rampa

2,0 kg'lık bir blok, yay sabiti 400 N/m olan yayı 0,25 m sıkıştırıp bırakılıyor. Zemin sürtünmesiz. (a) Yaydan ayrıldığındaki sürati nedir? (b) Sürtünmesiz bir rampada ne kadar yükselir? (c) Rampadan önce 1,0 m uzunluğunda, μk = 0,30 olan pürüzlü bir bölge olsaydı ne kadar yükselirdi?

**Çözüm**

- Yaydaki enerji: U_el = ½(400)(0,25)² = 12,5 J
- (a) ½mv² = 12,5, v = √(2 × 12,5 / 2,0) = 3,54 m/s
- (b) mgh = 12,5, h = 12,5 / (2,0 × 9,80) = 0,638 m
- (c) Sürtünme işi: W_f = −μk mg d = −(0,30)(2,0)(9,80)(1,0) = −5,88 J
  Kalan enerji: 12,5 − 5,88 = 6,62 J. h = 6,62 / 19,6 = 0,338 m

### Örnek 13: Potansiyel enerji fonksiyonundan kuvvet

Bir parçacığın potansiyel enerjisi U(x) = 3x² − x³ (U joule, x metre). (a) Kuvvet fonksiyonu nedir? (b) Denge noktaları nerede, hangisi kararlı?

**Çözüm**

- (a) Fx = −dU/dx = −6x + 3x²
- (b) Fx = 0: 3x(x − 2) = 0, x = 0 ve x = 2 m
  İkinci türev: d²U/dx² = 6 − 6x.
  x = 0'da +6 (pozitif): U minimum, kararlı denge.
  x = 2 m'de −6 (negatif): U maksimum, kararsız denge.
