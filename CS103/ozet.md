# CS103 Konu Özetleri (Hafta 1–7)

Her bölümün sonunda **Tuzak** satırı var. Sınavdan önce en alttaki tuzak listesini oku.

## 1. Temeller (Hafta 1–2)

**Bilgisayar (Hafta 1, sadece Part I için):** CPU, RAM (geçici, elektrik gidince silinir), ikincil depolama (kalıcı: HDD, SSD, USB). Makine dili = 0 ve 1. Assembly → assembler ile makine diline. Yüksek seviyeli dil (C++) → **compiler** ile makine diline. 1 byte = 8 bit, 1 KB = 1024 byte. ASCII: 128 karakter. Algoritma = sonlu sürede biten adım adım çözüm. Yapısal programlama = problemi alt problemlere böl (top-down). OOP = nesneler (veri + işlemler).

**Program iskeleti:**

```cpp
#include <iostream>     // preprocessor directive
using namespace std;
int main() {
    cout << "Hello" << endl;
    return 0;
}
```

**Identifier kuralı:** harf veya `_` ile başlar, sonra harf/rakam/`_`. Rakamla başlayamaz. Keyword (`int`, `return`, `while`…) olamaz. Büyük-küçük harf farklı. Fonksiyon adları da aynı kurala uyar.

**Bildirim:** `int a, b = 5;` tek satırda birden çok değişken yasal. Başlatılmamış değişkenin değeri belirsiz (çöp).

**Çıktı:** `cout << x << " " << y;` Kaçış dizileri: `\n` yeni satır, `\t` tab, `\\` ters bölü, `\"` tırnak.

**Girdi:** `cin >> a >> b;` boşluk ve satır sonlarını atlar. `char` okurken de boşluk atlanır (`J D` ve `JD` aynı sonuç).

**Ondalık biçim:**

```cpp
cout.setf(ios::fixed);
cout.setf(ios::showpoint);
cout.precision(2);      // 7.5 → 7.50
```

**Tuzak:** `"a"` string, `'a'` char. `cout << "number";` değişkeni değil `number` yazısını basar.

## 2. Tipler ve aritmetik (Hafta 2)

| Tip | Örnek |
| --- | --- |
| `int` | `3`, `-45` |
| `double` | `3.0`, `1.5e3` |
| `char` | `'A'` (aslında sayı: `'A'` = 65) |
| `bool` | `true` (1), `false` (0); sıfır olmayan her sayı `true` |
| `string` | `"Ali"` (`#include <string>`) |

**Bölme:** iki taraf da `int` ise sonuç `int`, kesir **atılır** (yuvarlanmaz). `7/2 = 3`, `7/2.0 = 3.5`, `3/4 = 0`.
**Kalan:** `%` sadece tam sayılarda. `17 % 5 = 2`. Negatifte işaret soldakinden: `-3 % 2 = -1`.
**Atama dönüşümü:** `int a = 4.75;` → `4` (kesilir). `double d = 11/2;` → `5` (önce int bölme yapılır).

**Casting:**

```cpp
static_cast<double>(a) / b    // doğru: 3.5
a / static_cast<double>(b)    // doğru: 3.5
static_cast<double>(a / b)    // YANLIŞ: önce int bölme → 3
double(a), (double)a          // eski stil, çalışır
static_cast<int>(2.9)         // 2
```

**Öncelik:** `* / %` → `+ -` → karşılaştırma → `&&` → `||`. Aynı seviyede soldan sağa. `3 + 10 * 3 = 33`.

**Kısaltmalar:** `a += 2` → `a = a + 2`. `b *= a - 14` → `b = b * (a - 14)` (sağ taraf önce hesaplanır).

**`++` ve `--`:**

```cpp
int n = 2;
int v = 2 * (n++);   // v = 4, n = 3  (önce kullan, sonra artır)
int w = 2 * (++n);   // n = 4, w = 8  (önce artır, sonra kullan)
```

**Tuzak:** `static_cast<float>(3/4)` → `0`. `x++ < 5` karşılaştırmayı eski değerle yapar ama `x` yine de artar.

## 3. Karar yapıları (Hafta 3–4)

**Karşılaştırma:** `==  !=  <  <=  >  >=`. Mantık: `&&` (ve), `||` (veya), `!` (değil).

- `2 <= x <= 15` C++'ta yanlış yazım. Doğrusu: `(x >= 2 && x <= 15)`.
- `if (x = 5)` derlenir ama `x`'e 5 atar ve her zaman doğrudur. Karşılaştırma `==`.
- `!time > limit` → `(!time) > limit` olarak okunur. Niyet `!(time > limit)` ise parantez şart.
- **Short-circuit:** `&&`'de sol taraf `false` ise sağ taraf hiç hesaplanmaz; `||`'de sol taraf `true` ise sağ taraf hesaplanmaz. `(kids != 0) && (pieces / kids >= 2)` sıfıra bölmeyi önler.

**if / else:** `{}` yoksa sadece ilk satır koşula bağlıdır.

**Dangling else:** `else` her zaman **en yakın, eşleşmemiş `if`**'e bağlanır, girintiye bakılmaz.

```cpp
if (fuel < 75)
    if (fuel < 25) cout << "low";
else cout << "high";      // içteki if'in else'i! fuel = 80 → hiçbir şey basılmaz
```

**switch:**

```cpp
switch (grade) {          // int, char, bool, enum olabilir; string ve double OLAMAZ
    case 'A':
    case 'a': cout << "Excellent"; break;   // iki etiket aynı kodu çalıştırır
    case 'B': cout << "Good";               // break YOK → alttaki case'e düşer
    case 'C': cout << "Pass"; break;
    default:  cout << "Wrong";              // hiçbiri tutmazsa
}
```

**Fall-through kuralı:** eşleşen `case`'ten başla, `break` veya `}` görene kadar **alttaki tüm satırları** çalıştır (diğer `case` etiketlerini yok say). `default` en altta değilse de aynı kural geçerli.

**Blok kapsamı:** `{}` içinde tanımlanan değişken sadece o blokta yaşar. İç blokta aynı isimle yeni değişken tanımlanırsa dıştakini gölgeler.

**Tuzak:** `case "A":` hatalıdır (string), `case 'A':` doğru. `default` sonrası `:` unutulmaz.

## 4. Döngüler (Hafta 3–5)

| Döngü | Ne zaman | Koşul |
| --- | --- | --- |
| `while (k) {...}` | Hiç çalışmayabilir | Başta kontrol |
| `do {...} while (k);` | **En az bir kez** çalışır | Sonda kontrol, sonunda `;` var |
| `for (init; k; update) {...}` | Sayısı belli tekrar | Başta kontrol |

**İzleme yöntemi:** her turda tablo tut: değişkenler, koşul, çıktı. Koşulu kontrol et → gövde → güncelleme → koşul…

**break:** içinde bulunduğu **tek** döngüden (veya switch'ten) çıkar. İç içe döngüde sadece içtekinden.
**continue:** turun geri kalanını atla, sonraki tura geç (`for`'da güncelleme yine yapılır).

**İç içe döngü:** dış döngünün her turunda iç döngü baştan sona çalışır. Toplam iç tur = dış × iç.

```cpp
for (int i = 1; i <= 3; i++) {          // satır
    for (int j = 1; j <= i; j++)        // her satırda i yıldız
        cout << "*";
    cout << endl;
}
```

**Döngü bitirme yöntemleri:** baştan sayı al (list headed by size), her turda sor (Y/N), sentinel değer (ör. negatif sayı gelince dur; sentinel işlenmez), dosya bitene kadar oku.

**Toplam ve çarpım:** `sum = 0`, `product = 1` ile başla.

**Girdi doğrulama (sınavda çıktı):**

```cpp
cin >> n;
while (n <= 0) {
    cout << "Warning!\n";
    cin >> n;
}
```

**Tuzak:**
- `for (...);` veya `while (...);` → noktalı virgül gövdeyi boşaltır. `for (i = 0; i < 3; i++); cout << i;` → bir kez `3` basar.
- Sayaç güncellenmezse sonsuz döngü.
- `<` ile `<=` farkı: bir tur eksik/fazla (off-by-one).
- `for (int i...)` içinde tanımlanan `i` döngü dışında yoktur.

## 5. Hazır fonksiyonlar (Hafta 5)

| Fonksiyon | Kütüphane | Not |
| --- | --- | --- |
| `sqrt(x)`, `pow(x, y)` | `<cmath>` | `double` döner. `pow(2,3)` = 8 |
| `fabs(x)` | `<cmath>` | `double` mutlak değer |
| `abs(x)` | `<cstdlib>` | `int` mutlak değer. `7 / abs(-2)` = 3 (int bölme) |
| `ceil(5.8)` = 6, `floor(5.8)` = 5 | `<cmath>` | |
| `rand()`, `srand(time(0))` | `<cstdlib>`, `<ctime>` | `srand` bir kez çağrılır |

**Rastgele aralık:** `rand() % N + a` → `a` ile `a + N - 1` arası. Zar: `rand() % 6 + 1`. `10 < x < 21` için: `rand() % 10 + 11`.

**Geçerli çağrı:** dönen değer bir ifade gibi kullanılır: `fabs(3.5);` (değer atılır ama yasal), `cout << fabs(3.5);`. `cin >> fabs(3.5);` geçersiz.

## 6. Kendi fonksiyonların (Hafta 5–6)

```cpp
double totalCost(int number, double price);     // BİLDİRİM (prototype), ; ile biter

int main() {
    double bill = totalCost(3, 2.5);            // ÇAĞRI: argümanlar , ile ayrılır
}

double totalCost(int number, double price) {    // TANIM: başlık + gövde
    const double TAX = 0.05;
    double subtotal = number * price;
    return subtotal + subtotal * TAX;           // return fonksiyonu bitirir
}
```

- Çağrıdan **önce** bildirim veya tanım görünmeli. Tanım `main`'den önceyse bildirim gerekmez.
- Bildirimde parametre adları yazılmayabilir: `double totalCost(int, double);`. Tanımda adlar şart.
- Değer dönen fonksiyonun her yolu bir `return` ile bitmeli.
- Fonksiyon içinde başka fonksiyon **tanımlanamaz**, ama çağrılabilir.
- Argüman sırası önemlidir; derleyici tip kontrolü yapar, mantıksal sıra kontrolü yapmaz.
- `bool` dönen fonksiyon `if (isEven(n))` şeklinde kullanılır.

**Call-by-value:** parametre, argümanın **kopyasıdır**. Fonksiyon içindeki değişiklik çağıranı etkilemez.

**Local / global:** fonksiyonda tanımlanan değişken sadece orada yaşar. Parametreler de local'dir; gövdede tekrar tanımlanmaz. Global değişken tüm fonksiyonların dışında tanımlanır; aynı isimde local varsa local kazanır. Global sabit (`const double PI = 3.14159;`) yaygın ve kabul görür.

**Overloading:** aynı isim, **farklı parametre listesi** (sayı, tip veya sıra).

```cpp
int    add(int a, int b);            // geçerli
double add(double a, double b);      // geçerli (tipler farklı)
int    add(int a, int b, int c);     // geçerli (sayı farklı)
double add(int a, int b);            // GEÇERSİZ: sadece dönüş tipi farklı
int    add(int x, int y);            // GEÇERSİZ: sadece parametre adları farklı
```

**Hangisi çağrılır?** Tam eşleşme kazanır. Tam eşleşme yoksa derleyici en az dönüşüm gereken sürümü seçer. İki aday eşit derecede iyiyse **derleme hatası (ambiguous)**.

- `add(2, 3)` → `(int,int)`.
- `add(2.5, 3.0)` → `(double,double)`.
- `add(2, 3.0)` iki sürüm varken (`int,int` ve `double,double`) → **belirsiz, derleme hatası**. Hafta 6 kodunda (`week6.cpp`) bu çağrı var.
- Tek sürüm varsa otomatik dönüşüm olur: `mpg(45, 2)` → `mpg(45.0, 2.0)`.

## 7. void fonksiyonlar ve call-by-reference (Hafta 7)

**void:** değer döndürmez. `return;` (değersiz) erken çıkış için kullanılabilir, zorunlu değil. Çağrısı tek başına bir ifadedir: `showResults(a, b);`. `cout << showResults(a, b);` **hata**.

```cpp
void shareBudget(int number, double total) {
    if (number == 0) {
        cout << "No people!\n";
        return;                 // fonksiyonu burada bitir
    }
    cout << total / number;
}
```

**Call-by-reference (`&`):** parametre, argümanın **kendisidir** (aynı bellek adresi). Fonksiyondaki değişiklik çağıranın değişkenini değiştirir.

```cpp
void swapValues(int& a, int& b) {   // & hem bildirimde hem tanımda
    int temp = a;
    a = b;
    b = temp;
}
```

- Reference argümanı **değişken** olmalı: `swapValues(x, 5);` hata.
- Karışık liste yasal: `void f(int& a, int b, double& c);`.
- `&` unutulursa kod derlenir ama değişken değişmez (sık hata).
- Ne zaman `&`? Fonksiyon çağıranın değişkenini değiştirecekse (girdi okuma, takas, birden çok sonuç döndürme).

**İzleme taktiği:** reference parametreyi gördüğünde kâğıda "`a` = main'deki `x`" yaz ve tek bir kutu üzerinde çalış.

**Pre/postcondition:** fonksiyon yorumunda "çağrılmadan önce doğru olan" ve "çağrıdan sonra doğru olan".

## 8. Dosya I/O (Hafta 5, 6.1)

```cpp
#include <fstream>

ifstream in;                 // okuma
in.open("file.txt");
int x;
while (in >> x) {            // okuma başarılı oldukça döner
    cout << x << endl;
}
in.close();

ofstream out;                // yazma (dosya yoksa oluşturur, varsa üzerine yazar)
out.open("numbers.txt");
out << "a = " << 20 << endl;
out.close();
```

İlk satırda kayıt sayısı varsa: önce `in >> total;`, sonra `for (int i = 0; i < total; i++) { in >> name >> score; }`.

## Tuzak listesi (sınav sabahı oku)

1. `int / int` kesri atar: `7/2 = 3`, `3/4 = 0`. `static_cast<double>(a/b)` geç kalır.
2. `int a = 4.75;` → 4.
3. `x++` eski değeri, `++x` yeni değeri kullanır; ikisinde de `x` artar.
4. `while (x++ < 5)`: döngü bittiğinde `x` = 6.
5. `if (x = 0)` atama yapar ve `false` olur; `if (x = 5)` her zaman `true`.
6. `else` en yakın `if`'e bağlanır, girintiye bakma.
7. `switch`'te `break` yoksa alttaki case'lere düşer; `case` etiketleri durdurmaz.
8. `for(...);` ve `while(...);` gövdeyi boşaltır.
9. `do-while` en az bir kez çalışır; `while (...)` sonrası `;` var.
10. `break` sadece içinde olduğu döngüden çıkar.
11. `&` yoksa fonksiyon kopya üzerinde çalışır, çağıranın değişkeni değişmez.
12. Overloading sadece dönüş tipiyle olmaz; `add(2, 3.0)` iki eşit aday varsa derleme hatası.
13. `void` fonksiyon `cout <<` içinde kullanılamaz ve `return x;` yazamaz.
14. `-3 % 2 == -1`, yani `x % 2 == 1` negatif tek sayılarda yanlış sonuç verir.
15. `cout << "x";` harfi, `cout << x;` değeri basar.
16. Global ile aynı isimli local değişken global'i değiştirmez.
17. `cin >> fabs(3.5)` geçersiz; `fabs(3.5);` yasal.
18. Sayaç/toplamları başlat: `sum = 0`, `product = 1`.
