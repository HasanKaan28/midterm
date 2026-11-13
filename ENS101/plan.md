# ENS101 Midterm Planı

Sınav: 21 Kasım 2026 Cumartesi 12:30. Plan 12 Kasım gecesi yazıldı.

## Kapsam (tahmin, kesin değil)

Bu yılın kapsamı elimde yok. Aşağıdaki liste iki eski sınavdan (F24, F25) ve klasördeki ders kodlarından çıkarıldı. Hoca farklı bir kapsam duyurduysa bana yaz, planı ona göre değiştiririm.

| Bölüm | Konu | Kaynak | Eski sınavdaki ağırlık |
| --- | --- | --- | --- |
| Teori | Etik (Ch 2) | Kitap s. 36–45 | F25: 3 soru, F24: 1 soru |
| Teori | Tasarım ve takım çalışması (Ch 3) | Kitap s. 53–75 | F25: 6 soru, F24: 2 soru |
| Teori | Sunum ve teknik yazım (Ch 4) | Kitap s. 79–90 | F25: 2 soru, F24: 1 soru |
| Teori | Tahmin / estimation (Ch 5) | Kitap s. 107–123 | F25: 4 soru, F24: 2 soru (6 puan) |
| Kod | Octave/MATLAB: vektör, matris, fonksiyon, `if`, `for`, `while`, `plot` | Ders kodları, Ch 16–19 | F25: 7 soru, F24: 4 soru (12/26 puan) |

Kitabın PDF sayfası = kitap sayfası + 23.

Sınav biçimi: F24 75 dakika, hepsi açık uçlu. F25 90 dakika, 15 teori (çoktan seçmeli, boşluk doldurma, tahmin) ve 7 kod sorusu (5 "bu kodun çıktısı ne", 2 "fonksiyon yaz"). Kod kağıda yazılıyor.

Eksik materyal: ders slaytları zip'te yoktu. F25'teki bazı terimler (team charter, round-robin, trade-off, requirement/constraint) kitabın okuduğum bölümlerinde geçmiyor, slayttan geliyor olmalı. Slaytları atarsan özeti onlarla tamamlarım.

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `calis.html` | Hepsinin etkileşimli hali: işaretlenebilir plan, özet, eski sınavlar, puanlanan deneme, zayıf konular |
| `ozet.md` | Teori özeti + Octave/MATLAB özeti |
| `cozumlu-eski-sinavlar.md` | F24 ve F25 sınavlarının tam çözümü |
| `deneme-1.md` | 90 dakikalık deneme + F24 tarzı ek sorular |
| `deneme-1-cevaplar.md` | Denemenin cevapları (önce çöz, sonra aç) |
| `kodlar/` | Bütün kod cevapları; `dogrula.m` hepsini çalıştırır |
| `materyal/` | Senin attığın zip'in içeriği |

Kod cevaplarının hepsi MATLAB R2026b'de çalıştırılıp doğrulandı.

## Gün gün plan

Diğer dört sınavın bu sınavdan önce olduğu için ENS101'e 19 Kasım'a kadar günde en fazla 20–40 dakika ayırdım. Asıl çalışma 20 Kasım Cuma.

| Gün | Diğer sınav | ENS101 işi | Süre |
| --- | --- | --- | --- |
| 13 Kas Cum | MATH101 hazırlığı | Yok | 0 |
| 14 Kas Cmt | MATH101 12:30 | Akşam: `ozet.md` A1 (etik) ve A2 (tasarım, takım) oku. Kalın yazılı terimleri sesli tekrar et. | 40 dk |
| 15 Kas Paz | NS102 hazırlığı | `ozet.md` A4 (tahmin). Eski sınavlardaki 3 tahmin sorusunu (F24 soru 1, F25 soru 14 ve 15) kağıtta çöz. | 25 dk |
| 16 Kas Pzt | NS102 09:00 | `ozet.md` A3 (sunum, yazım) + A5 (slayt terimleri). | 20 dk |
| 17 Kas Sal | ELIT100 17:45 | Yok | 0 |
| 18 Kas Çar | CS103 hazırlığı | `ozet.md` B4–B5 (`if`, döngüler). CS103'teki C++ döngüleriyle aynı mantık; B8'deki fark tablosuna bak. | 30 dk |
| 19 Kas Per | CS103 17:45 | Gece: `cozumlu-eski-sinavlar.md` içinden F25 teori 1–15'i cevapları kapatarak çöz. | 30 dk |
| 20 Kas Cum | — | Ana gün, aşağıdaki 5 blok. | ~5,5 saat |
| 21 Kas Cmt | ENS101 12:30 | Sabah: hata listen + terim listesi + 2 fonksiyonu ezberden kağıda yaz. | 60 dk |

### 20 Kasım Cuma blokları

1. **Kod özeti (90 dk).** `ozet.md` B bölümünün tamamı. Ardından `materyal/` içindeki şu ders kodlarını bakmadan kağıda yaz: `evenOrOdd.m`, `fued_speed.m`, `cylinderCal.m`, `pirmyds.m`, `simpleLoop3.m`. Yazdığını MATLAB'da çalıştır.
2. **F24 sınavı, süreli (75 dk).** `materyal/ENS101_F24_Midterm_toShare.pdf`. Bitince `cozumlu-eski-sinavlar.md` ile karşılaştır.
3. **Deneme 1, süreli (90 dk).** `deneme-1.md`. Bitince `deneme-1-cevaplar.md`.
4. **Yanlışlar (45 dk).** Her yanlış için tek satırlık not yaz: "ne sandım, doğrusu ne". Yanlış kod sorularını yeniden yaz.
5. **Tahmin ve terimler (30 dk).** 3 yeni tahmin sorusu (denemenin sonunda var) + A bölümü terim listesi.

Aralarda 10–15 dakika mola. Blok 3'ü atlamak zorunda kalırsan blok 2'yi atlama: F24 hocanın kendi soruları.

## Sınav günü taktikleri

- Kod izleme sorularında tablo çiz: her döngü adımı için değişkenlerin değerini yaz. Kafadan yapma.
- "Fonksiyon yaz" sorusunda önce ilk satırı yaz: `function [çıktılar] = isim(girdiler)`. Sonra `end`. Arasını sonra doldur.
- Tahmin sorusunda varsayımlarını ve birimleri yaz. F25 cevap anahtarı bir aralık kabul ediyor, tek doğru sayı yok.
- F24 notu: "If it is messy or cannot be read, it does not exist." Cevap kağıdında soru numarasını net yaz.
