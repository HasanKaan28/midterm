# ENS101 Konu Özeti

Sınav İngilizce olduğu için terimler İngilizce bırakıldı. Sayfa numaraları kitabın kendi numarasıdır (PDF sayfası = +23).

- [A. Teori](#a-teori)
- [B. Octave/MATLAB](#b-octavematlab)

---

## A. Teori

### A1. Etik (Ch 2, s. 36–45)

**Etik karar vermenin 4 adımı** (s. 37–41):

1. **Issues and stakeholders.** Sorun ne (What), kim etkileniyor (Who). *Stakeholder* insan olmak zorunda değil: kişi, grup, kurum ya da doğal sistem olabilir.
2. **Üç bakış açısından değerlendir:**
   - **Consequences:** her seçenek her paydaşı nasıl etkiler, etkinin ağırlığı ne.
   - **Intent:** sonuca bakmaz, sadece niyete bakar. "Rights perspective" de denir. Kant: bunu herkes yapsa olur mu, yasa olsa olur mu, mağduru ben olsam ister miyim.
   - **Character:** iyi karakterli biri bunu yapar mı, bu beni daha iyi mi daha kötü mü yapar.
3. **Correlate perspectives.** Üçü aynı sonucu veriyorsa güven yüksek. Uyuşmuyorsa yeniden düşün; yine uyuşmuyorsa üçte ikiye uy.
4. **Act.** En zor adım, cesaret ister. Örnek: *whistle-blower* işini riske atar.

**Diğer kavramlar:**

- İnsanların etik davranmasının iki nedeni: *altruism* (dünyayı iyileştirmek) ve kötü sonuçlardan kaçınmak.
- **Plagiarism:** başkasının işini kendi işin gibi sunmak. Kitaba göre kendi başına yasa dışı değil ama etik dışı; telif hakkı ihlali varsa yasa dışı olur. "Legal but not ethical" sorusunun hazır cevabı.
- **NSPE Fundamental Canons** (s. 44). Mühendisler:
  1. Hold paramount the **safety, health, and welfare of the public**
  2. Perform services only in areas of their **competence**
  3. Issue public statements only in an **objective and truthful** manner
  4. Act for each employer or client as **faithful agents or trustees**
  5. Avoid **deceptive acts**
  6. Conduct themselves honorably, responsibly, ethically, and lawfully
- **Engineer's Creed:** "public welfare above all other considerations", "service before profit".
- **Social responsibility:** bireyin topluma fayda sağlayacak şekilde davranma yükümlülüğü.

### A2. Tasarım ve takım çalışması (Ch 3, s. 53–75)

**Tasarım süreci:** yaratıcı ve *iterative* (design, build, test, redesign). Tasarım *multiobjective*: birden fazla çözüm vardır, amaç en önemli hedefleri karşılayanı bulmak. Genel adımlar: problem definition → generating ideas → analysis → prototyping, implementation, testing.

**Brainstorming kuralları** (s. 55):

1. More is better
2. Variety is better
3. Do not criticize

"In brainstorming, quality is quantity." Kitaptaki örnek: buzlanan telefon hatları için helikopter fikri 36. fikirdi.

**Criteria and evaluation** (s. 58–62):

- Kriterler çözüm üretmeden **önce** tanımlanır. Tersi olursa insanlar beğendiği çözüme uyan kriter seçer.
- Kriter **clear and measurable** olmalı. "Inexpensive" yerine "less than $300".
- **Wants = criteria, needs = requirements.** Requirement yasal, şirket içi ya da müşteri kaynaklı olabilir. Minimum requirement'ı karşılamayan çözüm doğrudan elenir.
- Az kriter iyidir: 10 kriter bulduysan en önemli 2'sini kullan.
- **Pairwise comparisons:** her kriter için seçenekler ikişer ikişer karşılaştırılır (0 daha kötü, 1 eşit, 2 daha iyi). Dezavantajı: bütün kriterler eşit ağırlıkta.
- **Weighted benefit analysis:** her kritere ağırlık verilir, her seçenek her kriterden puan alır, toplam = Σ(ağırlık × puan). F25'te buna **decision matrix** denmiş.
- **Reality check:** en iyi çıkan çözümü uygulamadan önce bir daha sorgula.

Örnek (kitap Tablo 3-2): ağırlıklar cost 2, safety 8, weight 10, wow 5. Seçenek 1 puanları 2, 10, 7, 2 → 4 + 80 + 70 + 10 = 164.

**Sustainability** (s. 64): "meeting the needs of the present without compromising the ability of future generations to do the same." Üç boyut: **environmental, social, economic**.

**Takım** (s. 65–72):

- **Group:** aynı yerde, aynı zamanda bir araya gelen insanlar. **Team:** ortak bir hedef için iş birliği yapan bireyler.
- Yeni takımın en kritik işi: purpose, process, ilerlemeyi ölçme yöntemi.
- Takım davranışı başlıkları: ground rules, decision making (consensus ya da majority vote), communication, roles (uzun projede dönüşümlü), participation, values, outcomes.
- **CATME** akran değerlendirmesinin 5 boyutu:
  1. Contributing to the team's work
  2. Interacting with teammates
  3. Keeping the team on track
  4. Expecting quality
  5. Having relevant knowledge, skills, and abilities
- Değerlendirirken kişi hakkındaki fikrine değil **davranışa** bak.
- **Project timeline:** teslim tarihinden **geriye doğru** planla; işleri alt işlere böl; haftada en az bir sabit toplantı.
- **Responsibility matrix:** işler solda, üyeler üstte; kim yapacak, kim kontrol edecek.

### A3. Sunum ve teknik yazım (Ch 4, s. 79–90)

**Preplanning: 5 W + 1 H.** Who (dinleyici kim), What (amacım ne), Where, When, Why, How long. Listede ilk sırada dinleyici var. Kitaba göre çok az insan 20 dakikadan uzun odaklanabilir.

**4-S formula:** **Short, Simple, Strong, Sincere.** Strong = active voice ve action verbs.

**Üç yapısal parça:**

- **Introduction:** dinleyicinin ilgisini yakala.
- **Body:** 2–3 ana nokta, her birine basit örnek, görsel.
- **Conclusion:** ana noktaları özetle, teşekkür et, soru al.

**Slayt kuralları** (s. 81):

- Slayt başına bir kavram, en fazla **6 satır**, slayt başına ortalama **60 saniye**
- Tam cümle değil **bullet points**
- Font en az **18 pt**, tercihen **24 pt** ve üstü
- Yüksek kontrast, **açık zemin koyu yazı**; siyah zemin beyaz yazıdan kaçın
- Tablo yerine basit grafik; az animasyon; aynı arka plan

**Sunarken:** yavaş ve net konuş, göz teması kur, sesli prova yap, erken git. Metinden okuma, arkanı dönme, "um" deme.

**Teknik yazım** (s. 85–87):

- Açık ve kesin dil, genelde **past tense**, kişisel duygu değil gerçek
- **Table:** numara ve başlık **üstte**. **Figure:** numara ve başlık **altta**.
- Cümle başındaki sayı yazıyla yazılır; ondalıkta baştaki sıfır kalır (`0.23`)
- İki kez oku: bir kez teknik içerik, bir kez akış için

**Kaynak değerlendirme ABC'si:** **Authority, Bias, Currency.** Üstüne: peer review, karşılaştırma, corroboration.

### A4. Tahmin / Estimation (Ch 5, s. 107–123)

**Fermi problem:** çözmek için gereken bilginin çoğu eksik olan problem. Cevap genelde bir *order of magnitude* (10 kat) içinde doğrudur.

**Dört yöntem** (F24 soru 2'nin cevabı):

| Yöntem | Ne yapar | Örnek |
| --- | --- | --- |
| **By analogy** | Bildiğin bir şeyle karşılaştır | Laptop ≈ defter kâğıdı boyutu |
| **By aggregation** | Parçaları tahmin et, topla ya da çarp | Fayans say × fayans boyu = oda uzunluğu |
| **By upper and lower bounds** | Tahminin fazla mı az mı olduğunu takip et; *conservative* tahmin | Boya: yukarı yuvarla ki yetmesin diye bir durum olmasın |
| **Using modeling** | Matematiksel model ya da istatistik kullan | Yüzey alanı / hacim oranı ile soğuma |

**Genel ipuçları** (s. 110–111):

- Gereken doğruluğu belirle (order of magnitude mi, ±%25 mi)
- "Ballpark" değer çoğu zaman yeter
- Hangi yöne hata yapmak daha güvenli? Köprünün taşıyabileceği yükü tahmin ediyorsan **düşük** tahmin et; bir kirişin taşıması gereken yükü tahmin ediyorsan **yüksek** tahmin et.
- Çarpımda biri aşağı yuvarlandıysa diğerini yukarı yuvarla, hatalar birbirini götürsün
- İkinci derece etkilere takılma

**Sınavda tahmin sorusu nasıl çözülür:**

1. Varsayımları birimleriyle yaz.
2. Problemi parçalara böl.
3. Sayıları 1 anlamlı basamağa yuvarla.
4. Birimleri yazarak çarp, birimler sadeleşsin.
5. *Reasonableness check:* sonuç fiziksel olarak mantıklı mı?
6. Cevabı 1–2 anlamlı basamakla ya da aralık olarak ver.

**İşe yarar referans sayılar** (bunlar benim seçtiğim yuvarlak değerler, kitaptan değil):

| Büyüklük | Değer |
| --- | --- |
| 1 in | 2.54 cm |
| 1 L | 1000 cm³; 1 m³ = 1000 L |
| Adım uzunluğu | ~0.75 m |
| Yürüme hızı | ~5 km/saat |
| Kişi başı günlük su kullanımı | ~150 L |
| Kalp atışı | ~70 atım/dakika |
| Oda yüksekliği | ~3 m |
| A4 kâğıt | 21 × 30 cm |
| Arabanın yakıt tüketimi | ~7 L/100 km |
| 1 yıl | ~365 gün ≈ 8760 saat ≈ 3.15 × 10⁷ saniye |

**Significant figures** (s. 114–117):

- Sıfır dışındaki her rakam anlamlıdır.
- Sıfır anlamlıdır: iki sıfır olmayan rakam arasındaysa (`306` → 3), ondalık noktası olan sayının sonundaysa (`2.790` → 4).
- Sıfır anlamlı değildir: ondalık yerini sabitliyorsa (`0.0456` → 3), ondalık noktasız tam sayının sonundaysa (`2000` → 1).
- Çarpma/bölme: sonuç, en az anlamlı basamağı olan sayı kadar basamak taşır. `2.43 × 17.675 = 43.0`
- Toplama/çıkarma: sonuç, en az ondalık basamağı olan sayı kadar ondalık taşır. `1725.463 + 489.2 + 16.73 = 1931.4`
- Ara adımlarda yuvarlama. Genelde 3 anlamlı basamak iyi seçimdir.

**Accuracy, repeatability, precision** (s. 119):

- **Accuracy:** gerçek değere yakınlık.
- **Repeatability:** ölçümlerin birbirine yakınlığı.
- **Precision:** ikisinin birleşimi; hem accurate hem repeatable.

**Reasonableness:** *physically reasonable* (cevap fiziksel olarak mantıklı mı) ve *reasonable precision* (basamak sayısı verinin doğruluğuyla uyumlu mu). F25'te buna *sanity check* de denmiş.

**Notation** (s. 122):

- **Scientific:** `#.### × 10^N`, N tam sayı. 43,480,000 = 4.348 × 10⁷
- **Engineering:** `###.### × 10^M`, M 3'ün katı. 43,480,000 = 43.48 × 10⁶; 0.0351 = 35.1 × 10⁻³
- Order of magnitude farkı: log'ların farkı. 10,000,000 ile 1,000 arasında 7 − 3 = 4.

### A5. F25 sınavında geçen, kitapta bulamadığım terimler

Bunlar büyük olasılıkla ders slaytlarından. Tanımlar F25 cevap anahtarından.

| Terim | Anlam |
| --- | --- |
| **Requirement** | Tasarımın yapması gereken işlev |
| **Constraint** | Tasarımın aşmaması gereken sınır (bütçe, boyut, süre) |
| **Trade-off** | Bir özelliği iyileştirmek için diğerinden vazgeçmek (daha iyi görünüm ↔ daha düşük maliyet) |
| **Decision matrix** | Tasarım seçeneklerini ağırlıklı kriterlerle karşılaştıran tablo |
| **Team charter** | Takım rollerini ve iletişim beklentilerini yazan belge |
| **Round-robin** | Açık tartışmadan önce herkesin sırayla bir kez konuştuğu toplantı tekniği |
| **Assumed shared knowledge** | Takımda yanlış anlaşmanın yaygın nedeni: herkesin aynı şeyi bildiğini varsaymak |
| **Whistle-blowing** | Güvenlik sorununu kurum içinde, gerekirse dışında bildirmek |
| **Methods section** | Raporun, testlerin ve hesapların *nasıl* yapıldığını anlatan bölümü |
| **Sanity / reasonableness check** | Ayrıntılı hesabın mantıklı olup olmadığını kaba tahminle kontrol etmek |

---

## B. Octave/MATLAB

Derste Octave kullanılmış (`endif`, `endfor`, `endfunction`, `!=`, çift tırnak). Aşağıdaki yazım hem Octave'da hem MATLAB'da çalışır; sınavda bunu kullan:

| Sadece Octave | İkisinde de çalışan |
| --- | --- |
| `endif`, `endfor`, `endwhile`, `endfunction` | `end` |
| `!=` | `~=` |
| `"metin"` | `'metin'` |

### B1. Değişken, vektör, matris

```matlab
x = 5;                 % ; çıktıyı gizler
v = [1 2 3 4];         % satır vektörü
w = [1; 2; 3];         % sütun vektörü
t = 0:2:10;            % başlangıç:adım:bitiş  ->  [0 2 4 6 8 10]
k = 1:5;               % adım yazılmazsa 1
A = [1 2 3; 4 5 6];    % 2 satır, 3 sütun; ; satır ayırır
```

**İndeksleme 1'den başlar.** `A(satır, sütun)`.

```matlab
A(2,3)      % 6
A(2,:)      % 2. satırın tamamı   -> [4 5 6]
A(:,2)      % 2. sütunun tamamı   -> [2; 5]
A(end,end)  % son eleman          -> 6
v(2) = 10;  % elemanı değiştir
```

**Hazır fonksiyonlar:**

| Fonksiyon | Sonuç (`A = [1 2 3; 4 5 6]` için) |
| --- | --- |
| `length(v)` | eleman sayısı |
| `size(A)` | `[2 3]`; `[r, c] = size(A)` ile satır ve sütun sayısı |
| `sum(A)` | sütun toplamları `[5 7 9]` |
| `sum(A(1,:))` | 1. satırın toplamı `6` |
| `mean(A(1,:))` | 1. satırın ortalaması `2` |
| `max(v)`, `min(v)` | en büyük, en küçük; `[m, i] = max(v)` indeksi de verir |
| `mod(a, b)` | kalan. `mod(17,5)` = 2 |
| `zeros(1,7)` | 7 sıfırdan oluşan satır vektörü |

**Skaler ve eleman eleman işlemler:**

```matlab
a = [1 2 3];  b = [4 5 6];
a + b      % [5 7 9]
a .* b     % [4 10 18]   eleman eleman çarpma
a ./ b     % eleman eleman bölme
a .^ 2     % [1 4 9]     eleman eleman üs
```

`*`, `/`, `^` matris işlemidir. İki vektörü eleman eleman çarpacaksan nokta koy. Skalerle çarpmada nokta gerekmez (`3*a`).

### B2. Script ve function

**Script:** komutların sırayla yazıldığı `.m` dosyası. Workspace'teki değişkenleri görür. Bir script başka script'i adını yazarak çağırır (dersteki `manager.m` → `lazyFriends`, `activeFriends`).

**Function:** girdi alır, çıktı verir, kendi değişkenleri vardır. Dosya adı fonksiyon adıyla aynı olmalı.

```matlab
function [V, SA] = cylinderCal(r, h)
  V  = pi * r^2 * h;
  SA = 2*pi*r*h + 2*pi*r^2;
end
```

Çağırma:

```matlab
[hacim, alan] = cylinderCal(2, 5);
v = cylinderCal(2, 5);        % sadece ilk çıktıyı alır
```

Kalıplar:

```matlab
function y = f(x)             % 1 girdi, 1 çıktı
function [a, b] = f(x, y)     % 2 girdi, 2 çıktı
function [] = f()             % girdi yok, çıktı yok
```

Çıktı değişkenine fonksiyonun içinde değer atamayı unutma. Bir fonksiyon başka fonksiyonu çağırabilir (dersteki `cylinderCal` → `addNums`).

### B3. Girdi ve çıktı

```matlab
x = input('Enter a number: ');        % sayı okur
disp('Hello')                          % metin yazar
disp(x)                                % değer yazar
fprintf('x = %d, y = %.2f\n', x, y);   % biçimli; \n satır atlar
```

`%d` tam sayı, `%f` ondalıklı, `%g` otomatik, `%s` metin. `fprintf('*')` satır atlamaz, `disp` atlar.

### B4. Koşullar

```matlab
if T < 30
  disp('too cold')
elseif T > 80
  disp('too hot')
else
  disp('OK')
end
```

| Karşılaştırma | | Mantık | |
| --- | --- | --- | --- |
| `==` | eşit | `&&` | ve |
| `~=` | eşit değil | `\|\|` | veya |
| `<` `>` `<=` `>=` | | `~` | değil |

- `=` atama, `==` karşılaştırma. `if x = 5` hatadır.
- `elseif` bitişik yazılır. İlk doğru olan dal çalışır, gerisi atlanır.
- Çift mi: `mod(x,2) == 0`. Tek mi: `mod(x,2) == 1`. 3'e bölünür mü: `mod(x,3) == 0`.
- "A'ya bölünür ama B'ye bölünmez": `mod(k,A)==0 && mod(k,B)~=0`

### B5. Döngüler

```matlab
for k = 1:5          % k = 1, 2, 3, 4, 5
for k = 1:2:10       % k = 1, 3, 5, 7, 9
for k = 10:-1:1      % geriye doğru
for k = 1:length(v)  % vektörün her elemanı için
```

```matlab
k = 10;
while k > 3
  disp(k)
  k = k - 1;         % bunu unutursan sonsuz döngü
end
```

**Ezberlenecek 6 kalıp.** Eski sınavlardaki kod sorularının hepsi bunlardan biri.

1. Sayaç:

```matlab
count = 0;
for n = 1:20
  if mod(n,4)==0 || mod(n,5)==0
    count = count + 1;
  end
end
```

2. Toplam:

```matlab
total = 0;
for k = 1:15
  if mod(k,3)==0 && mod(k,5)~=0
    total = total + k;
  end
end
```

3. En büyük / en küçük ve yeri (dersteki `fued_speed.m`, F24 soru 10):

```matlab
maxi = v(1);  iMax = 1;
for k = 2:length(v)
  if v(k) > maxi
    maxi = v(k);
    iMax = k;
  end
end
```

4. Vektör büyütme (dersteki `crazyFor.m`):

```matlab
vec = [];
for k = 1:10
  vec = [vec k^2];
end
```

5. İç içe döngü ile matris gezme (dersteki `oddies.m`):

```matlab
[r, c] = size(B);
for k = 1:r
  for j = 1:c
    if mod(B(k,j),2) == 1
      numOdd = numOdd + 1;
    end
  end
end
```

6. İç içe döngü ile desen (dersteki `pirmyds.m`):

```matlab
for k = 1:4
  for j = 1:k
    fprintf('*')
  end
  fprintf('\n')
end
```

Çıktı: `*`, `**`, `***`, `****` alt alta.

**Kod izleme (trace) tekniği.** Her adım için tablo çiz. Örnek, kalıp 2:

| k | mod(k,3)==0 | mod(k,5)~=0 | total |
| --- | --- | --- | --- |
| 3 | evet | evet | 3 |
| 6 | evet | evet | 9 |
| 9 | evet | evet | 18 |
| 12 | evet | evet | 30 |
| 15 | evet | hayır | 30 |

Sonuç: `total = 30`.

### B6. Grafik

```matlab
t = 0:0.01:10;
y = 3*sin(2*pi*t);
figure(1)
plot(t, y)
axis([0 10 -4 4])          % [xmin xmax ymin ymax]
xlabel('Time (s)')
ylabel('Amplitude')
title('Sine wave')
grid on
```

`pause(2)` 2 saniye bekler, `clf` şekli temizler, `hold on` üst üste çizer. `plot(x, y, '-o')` noktaları işaretler.

### B7. Sık yapılan hatalar

- `end` unutmak. Her `if`, `for`, `while`, `function` bir `end` ister.
- `=` yerine `==` ya da tersi.
- İndeksi 0'dan başlatmak. `v(0)` hatadır.
- Tanımlanmamış değişken. Dersteki `oddies.m` içinde `r` ve `c` hiç tanımlanmamış; `[r, c] = size(B);` satırı gerekir.
- Sayaç ya da toplamı döngüden önce sıfırlamamak.
- Fonksiyonda çıktı değişkenine değer atamamak.
- Vektörlerde `*` ve `^` yazıp `.*` ve `.^` unutmak.
- `while` içinde değişkeni güncellememek.
- `elseif` yerine `else if` yazmak (fazladan `end` ister).

### B8. C++ (CS103) ile farklar

| | C++ | Octave/MATLAB |
| --- | --- | --- |
| İndeks | 0'dan | 1'den |
| Blok | `{ }` | `end` |
| Eşit değil | `!=` | `~=` |
| Değil | `!` | `~` |
| Döngü | `for (int k=1; k<=5; k++)` | `for k = 1:5` |
| Kalan | `a % b` | `mod(a, b)` |
| Yorum | `//` | `%` |
| Yazdırma | `cout << x;` | `disp(x)` ya da `fprintf` |
| Tip bildirimi | `int x = 5;` | `x = 5;` |
| Fonksiyon | `int f(int x) { return y; }` | `function y = f(x) ... end` |
