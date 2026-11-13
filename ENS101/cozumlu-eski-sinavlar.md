# Çözümlü Eski Sınavlar

Kod cevaplarının hepsi `kodlar/` klasöründe ve MATLAB'da çalıştırılıp doğrulandı. F25'in teori cevapları hocanın kendi cevap anahtarından; açıklamalar benim. F24'ün cevap anahtarı yok, açık uçlu soruların cevapları kitaba dayanan örnek cevaplardır.

---

## F24 Midterm (75 dakika, 26 puan)

### Soru 1 (4 puan): Tahmin

**(a) 15 inçlik bir laptopa kaç litre su sığar? (1 in = 2.54 cm)**

- 15 in ekran köşegenidir: 15 × 2.54 ≈ 38 cm.
- Köşegeni 38 cm olan ekran yaklaşık 32 cm × 21 cm. Gövde biraz daha büyük: 34 cm × 23 cm.
- Kalınlık: yaklaşık 2 cm.
- Hacim: 34 × 23 × 2 ≈ 1500 cm³.
- 1 L = 1000 cm³ → **yaklaşık 1.5 L** (1–2.5 L arası mantıklı).

**(b) 7 günlük Paris gezisi ne kadar tutar?**

| Kalem | Varsayım | Tutar |
| --- | --- | --- |
| Uçak (gidiş-dönüş) | Saraybosna–Paris | 300 € |
| Konaklama | 7 gece × 100 € | 700 € |
| Yemek | 7 gün × 40 € | 280 € |
| Şehir içi ulaşım | 7 gün × 10 € | 70 € |
| Müze, gezi | | 100 € |
| **Toplam** | | **≈ 1450 €, yuvarlak 1500 €** |

Burada puanı sayı değil yöntem getirir: kalemlere böl (aggregation), her kalemin varsayımını yaz, topla, yuvarla.

### Soru 2 (2 puan): Tahmin yöntemleri nelerdir?

Estimation by **analogy** (bilinen bir şeyle karşılaştırma), by **aggregation** (parçaları tahmin edip toplama), by **upper and lower bounds** (en kötü durumu düşünen conservative tahmin), using **modeling** (matematiksel model ya da istatistik). Kitap Ch 5.2–5.5.

### Soru 3 (2 puan): Tasarım probleminde fikir üretmek için ilk tercihin ne? Neden?

**Brainstorming.** Çünkü çok sayıda ve çeşitli fikir üretir ve eleştiri yasağı insanların sıra dışı fikirleri söylemesini sağlar. Fikir sayısı arttıkça içinden iyi fikir çıkma olasılığı artar ("quality is quantity"). Üç kural: more is better, variety is better, do not criticize.

### Soru 4 (2 puan): Takım üyelerinde arayacağın ilk özellik ne? Neden?

Tek doğru cevap yok; bir özellik seç ve gerekçelendir. Örnek cevap:

**Reliability / responsibility.** A reliable member keeps commitments and completes a fair share of the work on time. The other members depend on each task, so one missed deadline delays the whole project. Skills can be learned during the project, but the team cannot plan without trust.

(Kitaptaki CATME boyutlarından "contributing to the team's work" ile örtüşür. "Communication" da savunulabilir bir cevaptır.)

### Soru 5 (2 puan): Yazılımını yatırımcıya ve takım üyelerine sunarken içerik nasıl değişir?

Sunum planlamasının ilk sorusu "Who is my audience?".

| | Yatırımcı | Takım üyeleri |
| --- | --- | --- |
| Amaç | Para almak, ikna etmek | Bilgi paylaşmak, iş bölmek |
| İçerik | Hangi problemi çözüyor, pazar, maliyet, kazanç, zaman planı | Mimari, kod yapısı, algoritmalar, hatalar, kim ne yapacak |
| Dil | Teknik olmayan, kısa | Teknik, ayrıntılı |
| Görsel | Demo, basit grafikler | Akış şemaları, kod parçaları |

### Soru 6 (2 puan): Yasal ama etik olmayan ve etik ama yasal olmayan birer örnek

- **Legal but not ethical:** Plagiarism. Kitaba göre telif hakkı ihlali yoksa yasa dışı değildir ama etik dışıdır. Başka örnek: bir arkadaşının arkasından alay etmek.
- **Ethical but not legal:** Ağır yaralı birini hastaneye yetiştirmek için hız sınırını aşmak. Tarihten örnek: Harriet Tubman'ın köleleri kaçırması o dönemde yasa dışıydı.

### Soru 7 (3 puan): Sayı isteyen fonksiyon

Kullanıcıdan sayı ister; tek/çift, pozitif/negatif, karesinden büyük olup olmadığını söyler. Dosya: `kodlar/numberInfo.m`.

```matlab
function numberInfo()
  x = input('Enter a number: ');

  if mod(x,2) == 0
    disp('even')
  elseif mod(x,2) == 1
    disp('odd')
  else
    disp('not an integer: neither odd nor even')
  end

  if x > 0
    disp('positive')
  elseif x < 0
    disp('negative')
  else
    disp('zero')
  end

  if x > x^2
    disp('larger than its square')
  else
    disp('not larger than its square')
  end
end
```

Doğrulama: `0.5` → ne tek ne çift, positive, larger than its square. `-3` → odd, negative, not larger. `4` → even, positive, not larger.

Üç ayrı `if` bloğu var çünkü üç bağımsız soru soruluyor. Hepsini tek `if/elseif` zincirine koyarsan sadece biri çalışır. Bir sayı karesinden ancak 0 ile 1 arasındaysa büyüktür.

### Soru 8 (3 puan): Bakteri

Formül: p = p₀ · 2^(t/20), t dakika. Dosya: `kodlar/bacteria.m`.

```matlab
function p = bacteria(p0, t)
  p = p0 * 2^(t/20);
end
```

Doğrulama: `bacteria(100, 60)` = 800 (60 dakikada 3 kez ikiye katlanır: 100 → 200 → 400 → 800).

**Değişiklik:** kullanıcı saat gönderirse dakikaya çevir (`t*60`), saniye gönderirse (`t/60`).

```matlab
p = p0 * 2^(t*60/20);    % t saat
p = p0 * 2^(t/60/20);    % t saniye
```

Tek fonksiyonda (`kodlar/bacteriaUnit.m`):

```matlab
function p = bacteriaUnit(p0, t, unit)
  if unit == 'h'
    t = t * 60;
  elseif unit == 's'
    t = t / 60;
  end
  p = p0 * 2^(t/20);
end
```

Doğrulama: `bacteriaUnit(100, 1, 'h')` = 800, `bacteriaUnit(100, 3600, 's')` = 800.

### Soru 9 (3 puan): Anakart sıcaklığı

İdeal aralık 30–80 °C. Dosya: `kodlar/tempCheck.m`.

```matlab
function tempCheck(T)
  if T < 30
    disp('WARNING: too cold')
  elseif T > 80
    disp('WARNING: too hot')
  else
    disp('Temperature is OK')
  end
end
```

Doğrulama: 25 → too cold, 55 → OK, 95 → too hot. Sınır değerler 30 ve 80 "OK" sayılır.

### Soru 10 (3 puan): Hız ve yakıt tüketimi

En yüksek ve en düşük tüketimin olduğu hızları bulur, grafiği çizer. Cevap her veri için çalışmalı, o yüzden girdiler parametre. Dosya: `kodlar/fuelAnalysis.m`.

```matlab
function [vMax, vMin] = fuelAnalysis(speed, fuel)
  maxi = fuel(1);  iMax = 1;
  mini = fuel(1);  iMin = 1;

  for k = 2:length(fuel)
    if fuel(k) > maxi
      maxi = fuel(k);
      iMax = k;
    end
    if fuel(k) < mini
      mini = fuel(k);
      iMin = k;
    end
  end

  vMax = speed(iMax);
  vMin = speed(iMin);
  fprintf('Highest consumption %g at speed %g\n', maxi, vMax);
  fprintf('Lowest consumption %g at speed %g\n', mini, vMin);

  plot(speed, fuel, '-o')
  xlabel('Speed (km/h)')
  ylabel('Fuel consumption (g/km)')
  title('Speed vs fuel consumption')
  grid on
end
```

Doğrulama (sorudaki tabloyla): en yüksek tüketim 100, hız 10. En düşük tüketim 40, hız 70.

Kısa yol (hazır fonksiyonla):

```matlab
[maxi, iMax] = max(fuel);
[mini, iMin] = min(fuel);
```

Hoca derste döngülü hali yazdı (`materyal/fued_speed.m`), sınavda döngülü hali yazmak daha güvenli.

---

## F25 Midterm (90 dakika)

### Teori 1–15 (cevap anahtarı hocadan)

| # | Soru özeti | Cevap | Neden |
| --- | --- | --- | --- |
| 1 | Etik kodunun asıl amacı | **B.** Protect public safety and guide professional conduct | Canon 1: public safety, health, welfare |
| 2 | Yasal ama nadiren güvenlik hatası veren malzeme | **C.** Public welfare and safety | Yasal olması etik olması demek değil |
| 3 | Güvenlik sorununu içeride ve dışarıda bildiren mühendis | **whistle-blowing** | |
| 4 | Requirement işlevdir, constraint ise | **B.** A limitation or boundary the design must not violate | |
| 5 | Decision matrix'in amacı | **B.** Compare design alternatives using weighted criteria | Kitaptaki weighted benefit analysis |
| 6 | Görünüm için yüksek maliyet mi, basitlik için düşük maliyet mi | **tradeoff** | |
| 7 | Team charter ne içerir | **B.** Team roles and communication expectations | |
| 8 | Takımda yanlış anlaşmanın yaygın nedeni | **B.** Assumed shared knowledge | |
| 9 | Herkesin sırayla bir kez konuştuğu teknik | **round-robin** | |
| 10 | Slaytın anlaşılırlığını artıran | **C.** Concise bullet points and readable font sizes | Kitap: bullet, en az 18 pt |
| 11 | Raporun testlerin nasıl yapıldığını anlatan bölümü | **methods** | |
| 12 | Tahminde en yaygın strateji | **B.** Breaking the problem into simpler, estimable components | Aggregation |
| 13 | Hesabın mantıklı olup olmadığını kontrol eden tahmin | **sanity / reasonableness** check | |
| 14 | 4 kişilik evin haftalık su kullanımı | **3500–5000 L** | Aşağıda |
| 15 | IUS'tan eski şehre adım ve saat | **14000–18000 adım, 2–4 saat** | Aşağıda |

**Soru 14 çözümü.** 4 kişi × 150 L/kişi/gün × 7 gün = 4200 L. Aralığın içinde.

**Soru 15 çözümü.** IUS (Ilidža) ile Baščaršija arası yaklaşık 12 km.

- Adım: 12,000 m ÷ 0.75 m/adım = 16,000 adım.
- Süre: 12 km ÷ 5 km/saat = 2.4 saat.

### MATLAB 1: `count` kaç olur?

```matlab
count = 0;
for n = 1:20
  if mod(n,4)==0 || mod(n,5)==0
    count = count + 1;
  end
end
```

4'e bölünenler: 4, 8, 12, 16, 20 (5 tane). 5'e bölünenler: 5, 10, 15, 20 (4 tane). 20 ikisinde de var, bir kez sayılır.

**count = 5 + 4 − 1 = 8**

### MATLAB 2: `result` kaç olur?

```matlab
function y = mypoly(x)
  y = x^3 - 2*x + 1;
end
result = mypoly(3);
```

3³ − 2·3 + 1 = 27 − 6 + 1 = **22**

### MATLAB 3: `s` kaç olur?

```matlab
A = [1 2 3; 4 5 6; 7 8 9];
s = sum(A(:,3)) - A(2,2);
```

`A(:,3)` 3. sütun: 3, 6, 9 → toplam 18. `A(2,2)` = 5.

**s = 18 − 5 = 13**

### MATLAB 4: `result` vektörü nedir?

```matlab
B = [2 4 6; 1 3 5; 7 9 11];
result = B(2,:) + B(3,:);
```

2. satır `[1 3 5]`, 3. satır `[7 9 11]`.

**result = [8 12 16]**

### MATLAB 5: `total` kaç olur?

```matlab
total = 0;
for k = 1:15
  if mod(k,3)==0 && mod(k,5)~=0
    total = total + k;
  end
end
```

3'e bölünenler: 3, 6, 9, 12, 15. 15, 5'e de bölünür, elenir.

**total = 3 + 6 + 9 + 12 = 30**

### MATLAB 6: Matrisin bir satırının ortalaması

Dosya: `kodlar/myMean.m`.

```matlab
function m = myMean(A, r)
  m = mean(A(r,:));
end
```

`mean` kullanmadan (`kodlar/myMeanLoop.m`):

```matlab
function m = myMeanLoop(A, r)
  [rows, cols] = size(A);
  total = 0;
  for j = 1:cols
    total = total + A(r,j);
  end
  m = total / cols;
end
```

Doğrulama: `myMean([1 5; 5 5], 2)` = 5.

### MATLAB 7: 1 ile n arasında 3'e bölünen ama 2'ye bölünmeyen sayıların adedi

Dosya: `kodlar/MyCheck.m`.

```matlab
function count = MyCheck(n)
  count = 0;
  for k = 1:n
    if mod(k,3) == 0 && mod(k,2) ~= 0
      count = count + 1;
    end
  end
end
```

Doğrulama: `MyCheck(20)` = 3 (3, 9, 15).

Soru "script" diyor ama örnekte `MyCheck(n)` diye çağırıyor, yani fonksiyon bekleniyor. Script isterse: en üste `n = 20;` yaz, `function` ve son `end` satırlarını sil.

---

## İki sınavdan çıkan sonuç

- Kod soruları dersteki örneklerin benzeri: `evenOrOdd.m`, `fued_speed.m`, `elseIF.m`, `oddies.m`.
- `mod` ile bölünebilme ve `&&`, `||`, `~=` her iki sınavda da var.
- Matris indeksleme (`A(:,3)`, `B(2,:)`) F25'te 3 soruda geçti.
- Tahmin sorusu iki sınavda da var ve yerel: Saraybosna, laptop, ev.
- F24'te teori açık uçlu, F25'te çoktan seçmeli ve boşluk doldurma. İkisine de hazır ol: terimi tanımak yetmez, yazabilmelisin.
