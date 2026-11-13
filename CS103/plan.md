# CS103 Midterm Planı

**Sınav:** 19 Kasım 2026 Perşembe, 17:45. Süre 80 dakika, kâğıt üstünde.
**Kapsam:** 1–7. haftalar (Savitch, Bölüm 1–5 ve 6.1 dosya I/O). Kaynak: `materyal/genel/WeeklySchedule.pdf` (8. hafta = midterm) ve `materyal/dersler/Presentations/`.

## Dosyalar

| Dosya | Ne için |
| --- | --- |
| `plan.md` | Bu plan |
| `ozet.md` | Konu özetleri ve sınav tuzakları |
| `alistirmalar.md` | Teşhis testi, çıktı tahmini, hata bulma, kâğıtta kod yazma |
| `cevaplar.md` | Tüm cevaplar ve örnek midterm ile quiz cevap anahtarı |
| `materyal/` | Zip'lerden çıkarılan slaytlar, ders kodları, örnek sınavlar |

Çıktı tahmini cevaplarının hepsi MSVC ile derlenip çalıştırılarak doğrulandı. Kod yazma çözümleri de derlendi ve test girdisiyle çalıştı.

## Sınav biçimi (örnek midterm'e göre)

| Bölüm | İçerik | Ağırlık tahmini |
| --- | --- | --- |
| Part I | 10 kısa soru: çoktan seçmeli, doğru/yanlış, boşluk doldurma | Düşük |
| Part II | 6 kod parçası, çıktıyı yaz (reference, döngü, overloading, nested if) | Orta |
| Part III | İç içe döngü + `switch` fall-through çıktısı | 10 puan |
| Part IV | Kâğıtta fonksiyon yazma: bildirim/tanım, girdi doğrulama döngüsü, faktöriyel/permütasyon, `void` + `return` | En yüksek (tek soru 30 puan) |

**Sonuç:** puanın büyük kısmı fonksiyon yazmada. Her gün en az bir kâğıt üstü kod sorusu çöz.

## Öncelik sırası

1. Fonksiyonlar: bildirim (prototype), tanım, çağrı, `return`, `void` fonksiyonlar
2. Call-by-value ve call-by-reference (`&`) izleme
3. `switch` fall-through ve iç içe döngü çıktısı
4. Integer bölme, `%`, `static_cast`, `++`/`--` (önek ve sonek)
5. Function overloading: hangisi çağrılır, hangisi geçersiz, hangisi belirsiz
6. Girdi doğrulama döngüsü (`while` / `do-while`)
7. Dosya I/O (`ifstream`, `ofstream`): quiz'de çıktı, midterm örneğinde yok, kısa tut
8. Hafta 1 teorisi (donanım, derleyici, ASCII): sadece Part I için bir kez oku

## Gün gün plan

Diğer sınavların araya giriyor: MATH101 (14 Kas Cmt 12:30), NS102 (16 Kas Pzt 09:00), ELIT100 (17 Kas Sal 17:45). Plan bunlara göre ayarlandı.

| Gün | Süre | Konu | Yapılacak |
| --- | --- | --- | --- |
| **Cum 13 Kas** (ilk iş) | 20 dk | Teşhis | `alistirmalar.md` Bölüm 0'ı kâğıtta çöz, cevapları sohbete yaz. Zayıf konuya göre plan güncellenir. |
| **Cum 13 Kas** (yarın MATH) | 1 saat | Hafta 2: tipler, int bölme, `%`, casting, `++`/`--`, kısaltma operatörleri | `ozet.md` §1–2. A1, A2, A3, A18, A19, A22, A26. B7. |
| **Cmt 14 Kas** (MATH sonrası) | 1,5 saat | Hafta 3–4: if/else, nested if, `switch`, while/do-while/for, break/continue | `ozet.md` §3–4. A4–A10, A17, A21, A23. B1, B4, B5, B6. |
| **Paz 15 Kas** (yarın NS) | 45 dk | İç içe döngü ve desenler | A7, A21 tekrar. C7 (kâğıtta). Örnek midterm Part III'ü çöz. |
| **Pzt 16 Kas** (NS sonrası) | 2 saat | Hafta 5–6: fonksiyonlar, hazır fonksiyonlar (`cmath`, `rand`), local/global, overloading | `ozet.md` §5–6. A13–A16, A25. B2, B8. C1, C2, C5, C10 (kâğıtta). |
| **Sal 17 Kas** (sabah, ELIT 17:45) | 2 saat | Hafta 7: `void`, call-by-reference, karışık parametreler; dosya I/O | `ozet.md` §7–8. A11, A12, A20, A24. B3, B9, B10. C3, C4, C8, C9. |
| **Çar 18 Kas** | 4 saat | Deneme sınavı | `materyal/genel/midtermSample.pdf`'i 80 dakika süre tutarak kâğıtta çöz. `cevaplar.md`'den kontrol et. Sonra `quizSample.pdf`. Yanlışların konusundan 3'er soru daha. C6. |
| **Per 19 Kas** (sınav 17:45) | 1,5 saat (sabah) | Son tekrar | `ozet.md` "Tuzak listesi" + kendi yanlışların. Öğleden sonra yeni konu yok. |

## Kâğıt üstü kod yazma kuralları

- Fonksiyon bildirimini `main`'den önce, tanımını `main`'den sonra yaz. Soru "kutuya yerleştir" diyorsa bildirim üst kutuya, tanım alt kutuya.
- Bildirim `;` ile biter, tanım başlığında `;` olmaz.
- `#include <iostream>`, `using namespace std;`, `string` için `#include <string>`, dosya için `#include <fstream>` yaz.
- Değişkeni kullanmadan önce bildir ve başlat (`int sum = 0;`, `int product = 1;`).
- Girintiyi düzgün yap, uzayan kodu okla işaretle (sınav kuralı: okunaksız cevap puan kaybettirir).
- Bitince kodu küçük bir girdiyle elde izle (ör. `n = 3`).

## İlerleme

- [ ] Teşhis testi (Cum 13)
- [ ] Hafta 2 (Cum 13)
- [ ] Hafta 3–4 (Cmt 14)
- [ ] İç içe döngü (Paz 15)
- [ ] Hafta 5–6 (Pzt 16)
- [ ] Hafta 7 + dosya I/O (Sal 17)
- [ ] Deneme sınavı (Çar 18)
- [ ] Son tekrar (Per 19)
