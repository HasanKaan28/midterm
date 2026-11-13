# ENS101 Deneme 1: Cevaplar

Kod cevapları MATLAB'da çalıştırılıp doğrulandı (`kodlar/dogrula.m`). Teori cevaplarının kaynağı kitap; sayfa numaraları parantez içinde.

## Part A: Theory

| # | Cevap | Açıklama |
| --- | --- | --- |
| 1 | **B** | Canon 1: "Hold paramount the safety, health, and welfare of the public" (s. 44) |
| 2 | **B** | Intent sonuca bakmaz, sadece niyete bakar (s. 39) |
| 3 | **stakeholders** | (s. 38) |
| 4 | **D** | Üçüncü kural "do not criticize"; değerlendirme sonra yapılır (s. 55) |
| 5 | **B** | Bu yüzden weighted benefit analysis kullanılır (s. 62) |
| 6 | **weighted benefit analysis** | "Decision matrix" de kabul edilir (F25'te bu adla geçti) |
| 7 | **C** | A şıkkı group tanımı (s. 65) |
| 8 | **responsibility matrix** | (s. 72) |
| 9 | **B** | Bullet kullan, açık zemin koyu yazı, aynı arka plan (s. 81) |
| 10 | **Sincere** | (s. 80) |
| 11 | **C** | Table üstte, figure altta (s. 86) |
| 12 | **B** | Parçaları sayıp çarpmak aggregation (s. 112) |
| 13 | **repeatable**, **accurate** | (s. 119) |
| 14 | (a) **3** (b) **1** (c) **4** | Baştaki sıfırlar sayılmaz; noktasız tam sayının sonundaki sıfırlar sayılmaz; aradaki sıfırlar sayılır (s. 115) |
| 15 | (a) **4.7 × 10⁻⁵** (b) **47 × 10⁻⁶** | Engineering notation'da üs 3'ün katı (s. 122) |

**16.** Sınıf 8 m × 6 m × 3 m = 144 m³. 1 m³ = 1000 L → **yaklaşık 150,000 L**. Kabul edilebilir aralık: 100,000–300,000 L.

**17.** 70 atım/dakika × 60 dakika × 24 saat × 365 gün = 36,792,000 → **yaklaşık 3.7 × 10⁷ atım**. Kabul edilebilir aralık: 3 × 10⁷ – 4.5 × 10⁷.

Puanlama: 1–15 için birer puan, 16–17 için ikişer puan. Toplam 19.

## Part B: Octave/MATLAB

**(1) count = 13.** 3'e bölünenler: 3, 6, …, 30 (10 tane). 7'ye bölünenler: 7, 14, 21, 28 (4 tane). 21 ikisinde de var. 10 + 4 − 1 = 13.

**(2) r = 24.** 2·4² − 3·4 + 4 = 32 − 12 + 4.

**(3) s = 11.** `A(2,:)` = [1 3 5], toplam 9. `A(3,1)` = 8. `A(1,3)` = 6. 9 + 8 − 6 = 11.

**(4) result = [7 32 63].** `B(:,1)` 1. sütun: [1; 4; 7]. Transpose ile satır olur: [1 4 7]. `B(3,:)` = [7 8 9]. Eleman eleman çarpım: 1·7, 4·8, 7·9.

**(5) total = 74.** 2'den 20'ye çift sayıların toplamı 110. 3'e de bölünenler çıkar: 6 + 12 + 18 = 36. 110 − 36 = 74.

**(6) s = 28, k = 2.**

| Adım | k (kontrol) | k > 3 | s | k (sonra) |
| --- | --- | --- | --- | --- |
| 1 | 10 | evet | 10 | 8 |
| 2 | 8 | evet | 18 | 6 |
| 3 | 6 | evet | 24 | 4 |
| 4 | 4 | evet | 28 | 2 |
| 5 | 2 | hayır | döngü biter | |

**(7) v = [1 9 25 49 81], length(v) = 5.** k = 1, 3, 5, 7, 9; her birinin karesi sona eklenir.

**(8)**

```
1
12
123
```

Dış döngü satırı, iç döngü o satırdaki sayıları yazar. `fprintf('\n')` satırı bitirir.

**(9)** Dosya: `kodlar/myColMax.m`

```matlab
function [mx, row] = myColMax(A, c)
  [rows, cols] = size(A);
  mx = A(1,c);
  row = 1;
  for k = 2:rows
    if A(k,c) > mx
      mx = A(k,c);
      row = k;
    end
  end
end
```

Doğrulama: `myColMax([1 5; 7 2; 3 9], 1)` → 7, satır 2. Sütun 2 için → 9, satır 3.

**(10)** Dosya: `kodlar/countFiveSeven.m`

```matlab
function count = countFiveSeven(n)
  count = 0;
  for k = 1:n
    a = mod(k,5) == 0;
    b = mod(k,7) == 0;
    if (a || b) && ~(a && b)
      count = count + 1;
    end
  end
end
```

Doğrulama: `countFiveSeven(40)` = 11. 5'e bölünenler 8 tane, 7'ye bölünenler 5 tane, 35 ikisinde de var ve hiç sayılmaz: 8 + 5 − 2 = 11.

Koşulu tek satırda da yazabilirsin:

```matlab
if (mod(k,5)==0 || mod(k,7)==0) && ~(mod(k,5)==0 && mod(k,7)==0)
```

Puanlama: 1–8 için ikişer puan, 9–10 için üçer puan. Toplam 22.

## Sonucu yorumlama

Toplam 41 puan.

| Durum | Ne yap |
| --- | --- |
| Part A'da 14'ün altı | `ozet.md` A bölümünü yeniden oku; yanlış yaptığın sorunun sayfasını kitaptan aç |
| Part B 1–8'de 2'den fazla yanlış | Her soruyu tablo çizerek yeniden izle; `ozet.md` B5'teki 6 kalıbı yaz |
| Part B 9–10 yazılamadı | `kodlar/` içindeki fonksiyonları bakmadan yeniden yaz, MATLAB'da çalıştır |
| 16–17 aralık dışı | `ozet.md` A4'teki 6 adımı uygula, E7–E9'u çöz |

## Ek soruların cevapları

**E1.** Dosya: `kodlar/batteryCheck.m`

```matlab
function batteryCheck(level)
  if level < 0 || level > 100
    disp('Invalid level')
  elseif level < 20
    disp('WARNING: battery low, plug in')
  elseif level > 80
    disp('WARNING: battery high, unplug')
  else
    disp('Battery is OK')
  end
end
```

Geçersiz değer kontrolü en başta olmalı; yoksa 120 "too high" dalına girer.

**E2.** Dosya: `kodlar/decay.m`

```matlab
function N = decay(N0, t, halfLife)
  N = N0 * (1/2)^(t/halfLife);
end
```

Doğrulama: `decay(800, 30, 10)` = 100 (3 yarı ömür: 800 → 400 → 200 → 100).

t gün olarak gelirse yıla çevir:

```matlab
N = N0 * (1/2)^((t/365)/halfLife);
```

**E3.** Dosya: `kodlar/gradeStats.m`

```matlab
function [best, worst, nPass] = gradeStats(ids, grades)
  iMax = 1;  iMin = 1;  nPass = 0;
  for k = 1:length(grades)
    if grades(k) > grades(iMax)
      iMax = k;
    end
    if grades(k) < grades(iMin)
      iMin = k;
    end
    if grades(k) >= 60
      nPass = nPass + 1;
    end
  end
  best = ids(iMax);
  worst = ids(iMin);
  fprintf('Best: student %g (%g)\n', best, grades(iMax));
  fprintf('Worst: student %g (%g)\n', worst, grades(iMin));
  fprintf('Passed: %g of %g\n', nPass, length(grades));
  bar(ids, grades)
  xlabel('Student'); ylabel('Grade'); title('Grades')
end
```

Doğrulama: `gradeStats([101 102 103 104 105], [55 90 72 40 61])` → en iyi 102, en kötü 104, geçen 3. `plot(ids, grades, '-o')` de kabul edilir.

**E4.** (s. 37–41)

1. Determine the issues (What) and the stakeholders (Who).
2. Consider the alternative courses of action from three perspectives.
3. Correlate the perspectives. If they do not agree, reconsider; if they still do not agree, go with two out of three.
4. Act. This often requires courage.

Perspectives: **Consequences** asks how each stakeholder is affected by each alternative and how important each effect is. **Intent** considers only the intentions of the person, not the outcome: should everyone do this, should it be law, would I like to be the victim? **Character** asks whether a person of good character would do this, and whether it enhances or degrades my character.

**E5.** (s. 59) If solutions are generated first, team members form an opinion about a "best solution" and then choose criteria that fit their preferred idea. Defining the criteria first lets all ideas be evaluated fairly and avoids arguments based on hidden criteria. The criteria also depend on a clear problem definition.

**E6.** The first planning question is "Who is my audience?" (s. 80).

- (a) High school students: little prior knowledge. Simple language, no equations, pictures and a model, why the bridge matters, a short talk with a strong hook.
- (b) Civil engineering professors: expert knowledge. Loads, materials, calculations, design criteria, test results, comparison with alternative designs, and precise technical terms.

**E7.** Saha 100 m × 70 m = 7000 m². A4 0.21 m × 0.30 m ≈ 0.063 m². 7000 ÷ 0.063 ≈ **110,000 sayfa**. Aralık: 100,000–130,000.

**E8.** Günde 200 km × yılda 300 gün = 60,000 km. Tüketim 8 L/100 km → 60,000 × 8 ÷ 100 = 4800 L → **yaklaşık 5000 L**. Aralık: 3000–8000 L.

**E9.** 4 yıl × 2 dönem × 15 hafta × 20 saat/hafta = **2400 saat**. Aralık: 2000–3000 saat.
