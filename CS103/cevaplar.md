# CS103 Cevaplar

Bölüm A ve örnek sınavların çıktıları MSVC (Visual Studio 18) ile derlenip çalıştırılarak doğrulandı. Bölüm C çözümleri derlendi ve test girdisiyle çalıştırıldı.

## Bölüm 0 — Teşhis

| Soru | Cevap | Yanlışsa çalış |
| --- | --- | --- |
| T1 | `8 12 6` | `ozet.md` §2 `++`/`--` |
| T2 | `ABBCDD` | §3 fall-through |
| T3 | `1 13` / `24 13` | §7 reference |
| T4 | Derleme hatası: belirsiz çağrı (ambiguous) | §6 overloading |
| T5 | `!` (sadece) | §3 dangling else |
| T6 | aşağıda | §6–7 bildirim/tanım, `&` |

T6:

```cpp
void scale(int factor, double& value);      // bildirim

void scale(int factor, double& value) {     // tanım
    value = factor * 2;
}
```

Puanı getiren iki şey: dönüş tipi `void` ve `double&` (reference olmazsa çağıranın değişkeni değişmez). Bildirim `;` ile biter, tanım başlığında `;` olmaz.

## Bölüm A

| Soru | Çıktı | Neden |
| --- | --- | --- |
| A1 | `3 3.5 3 1` | `a/b` int bölme → 3. `static_cast<double>(a/b)` geç kalır. |
| A2 | `8 12 6` | `p = 4*2`, n=5; `++n` → 6, `q = 12`. |
| A3 | `2 1 0 \| -1` | Karşılaştırma eski değerle, sonra azalır. Son kontrol `0 > 0` yanlış ama `a` yine azalır → -1. |
| A4 | `10 15` | do-while bir kez çalışır. |
| A5 | `Hi 3` | `for(...);` boş gövde; döngü bitince i=3. |
| A6 | `ABBCDD` | i=0: A,B. i=1: B. i=2: C,D. i=3: D. |
| A7 | `123` / `12` / `1` | |
| A8 | `16` | 1+3+5+7; i=9 > 7 → break. |
| A9 | `nonzero 0` | `x = 0` atama, değeri 0 → false. |
| A10 | `!` | `else` içteki `if`'e ait; dış koşul yanlış. |
| A11 | `1 13` / `24 13` | 1. çağrı: a=11, y=13. 2. çağrı: a=13+10=23, x=1+23=24. |
| A12 | `3 8` / `8 3` | `swapA` kopyalarla çalışır. |
| A13 | `1 5` / `2 5.5` / `3 6` | `add(1, 2.0, 3)` tek 3 parametreli sürüm, int'ler double'a döner. |
| A13b | Derleme hatası | `(int,int)` ve `(double,double)` eşit derecede uyar → ambiguous (MSVC: C2666). |
| A14 | `1 1 2 1` | İç `x` bildirilene kadar dıştaki görünür. |
| A15 | `5 6` | `change` kendi local `g`'sini artırır. |
| A16 | `3` | `i+1` hep çift; i = 5, 7, 9. |
| A17 | `6 15` | y = 1+2+3+4+5; son kontrolde x 5'ten 6'ya çıkar. |
| A18 | `67 C 1 1` | `'A'` = 65. Sıfır olmayan → true → 1. |
| A19 | `1 6 4` | a=16; b=3*(16-14)=6; a=16%5=1; 1+6/2=4. |
| A20 | `10 18` | p = 2*3+4 = 10; q = 2*4+10 = 18. |
| A21 | `U` / `VWU` / `TUVWU` | j%3: 1→U; 2→V,W; 0→T,U. |
| A22 | `7.50 2 2.50` | `10/4` int bölme, ama fixed ayarı sadece double'ı etkiler. |
| A23 | `no kids` | `&&` solu false → sağı hesaplanmaz, sıfıra bölme olmaz. |
| A24 | `3 60` | İlk sayı adet; sonra 10+20+30. `40` okunmaz. |
| A25 | `8 3.5 3 3 6 5` | `7/abs(-2)` = 7/2 = 3. |
| A26 | `5 2 1 3 2` | `11/2` önce int bölme → 5. |
| A27 | `2 1 6 5` | N=5, S=6, E=1, W=2. |

## Bölüm B

**B1**
- Satır 5: `;` eksik → `int x = 10;` (derleme).
- Satır 6: `=` atama → `if (x == 5)` (mantık; derlenir ama her zaman "five" basar).

**B2**
- Satır 3 öncesi: bildirim yok → `int square(int n);` ekle (derleme: `square` tanımsız).
- Satır 8: değer döndürülmüyor → `return n * n;`.

**B3**
- Satır 1: call-by-value, çıktı `34` olur (mantık) → `void zeroBoth(int& a, int& b)`.
- Not: reference ile `zeroBoth(5, y);` gibi sabit argüman geçersiz olur.

**B4**
- Satır 2: `for` sonrası `;` gövdeyi boşaltır → `;` kaldır.
- Satır 3: `i` döngü dışında tanımsız (derleme). `;` kalkınca düzelir. Ayrıca girinti yanıltıcı; `{}` kullan.

**B5**
- Satır 4: `"A"` string → `'A'` (derleme). `break` eksik → "Excellent" sonrası "Good" da basılır (mantık).
- Satır 6: `default` sonrası `:` eksik → `default: cout << "Other";` (derleme).

**B6**
- Satır 2: `<` → `<=`, yoksa 5 basılmaz (off-by-one).
- Satır 3–4: `i++` yok → sonsuz döngü. `cout << i << " "; i++;`.

**B7**
- Satır 2: int bölme → 3. `double avg = static_cast<double>(total) / count;`.

**B8**
- Satır 2 geçersiz: satır 1 ile aynı parametre listesi, sadece dönüş tipi farklı.

**B9**
- Satır 2: `void` fonksiyon değer döndüremez.
- Satır 5: `void` çağrısı `cout` içinde kullanılamaz.
- Düzeltme A: `int printSum(int a, int b) { return a + b; }` ve `cout << printSum(2, 3);`.
- Düzeltme B: `void` kalsın, içinde `cout << a + b;` yaz, `main`'de `printSum(2, 3);`.

**B10**
- Satır 1 sonrası: `#include <fstream>` eksik (derleme).
- Satır 5: dosya adı tırnaksız → `in.open("numbers.txt");` (derleme).
- Satır 8 sonrası: `in.close();` ve `return 0;` ekle (stil).

## Bölüm C — Model çözümler

Hepsi derlendi ve çalıştırıldı (test: C1 girdi `-5 0 7` → `7`; C2 `5 2` → `20`; C3 `Ali 3` → `300km`; C5 → `2 3 5 7 11 13 17 19`; C8 → adet 6, toplam 108, ortalama 18; C10 `4071` → `12`).

**C1**

```cpp
#include <iostream>
using namespace std;

int get_number();                    // bildirim (üst kutu)

int main() {
    int number = get_number();
    cout << "Number you entered: " << number << endl;
    return 0;
}

int get_number() {                   // tanım (alt kutu), (b) şıkkı
    int n;
    cout << "Enter a positive integer: ";
    cin >> n;
    while (n <= 0) {
        cout << "Warning: the number must be positive!\n";
        cout << "Enter a positive integer: ";
        cin >> n;
    }
    return n;
}
```

(a) şıkkı için `while` bloğunu çıkar: oku ve `return n;`.

**C2**

```cpp
#include <iostream>
using namespace std;

int factorial(int n);
int permutation(int n, int r);

int main() {
    int n, r;
    cout << "Enter n and r: ";
    cin >> n >> r;
    cout << "P(" << n << "," << r << ") = " << permutation(n, r) << endl;
    return 0;
}

int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

int permutation(int n, int r) {
    return factorial(n) / factorial(n - r);
}
```

**C3**

```cpp
#include <iostream>
#include <string>
using namespace std;

void hello(string name);
void shareBudget(int number, double totalAmount);

int main() {
    string name;
    int people;
    double budget = 900;
    cout << "What is your name? ";
    cin >> name;
    hello(name);
    cout << "How many of you in the group? ";
    cin >> people;
    shareBudget(people, budget);
    return 0;
}

void hello(string name) {
    cout << "Hello " << name << "!\n";
}

void shareBudget(int number, double totalAmount) {
    if (number == 0) {
        cout << "No people, no budget distribution!\n";
        return;
    }
    double each = totalAmount / number;
    cout << "Each person will receive " << each << "km. Good luck!\n";
}
```

**C4**

```cpp
void swapValues(int& a, int& b);
void order(int& a, int& b);

void swapValues(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

void order(int& a, int& b) {
    if (a > b)
        swapValues(a, b);
}
```

**C5**

```cpp
bool isPrime(int n);

int main() {
    for (int i = 1; i <= 20; i++)
        if (isPrime(i))
            cout << i << " ";
    cout << endl;
    return 0;
}

bool isPrime(int n) {
    if (n < 2)
        return false;
    for (int i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
```

**C6**

```cpp
int main() {
    int choice;
    double x;
    do {
        cout << "1) Square  2) Cube  0) Exit\nChoice: ";
        cin >> choice;
        switch (choice) {
            case 1:
                cout << "Number: ";
                cin >> x;
                cout << "Square: " << x * x << endl;
                break;
            case 2:
                cout << "Number: ";
                cin >> x;
                cout << "Cube: " << x * x * x << endl;
                break;
            case 0:
                cout << "Bye!\n";
                break;
            default:
                cout << "Wrong choice!\n";
        }
    } while (choice != 0);
    return 0;
}
```

**C7**

```cpp
void triangles(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            cout << "*";
        cout << endl;
    }
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= i; j++)
            cout << "*";
        cout << endl;
    }
}
```

**C8**

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream inFile;
    inFile.open("numbers.txt");
    int number, count = 0, sum = 0;
    while (inFile >> number) {
        sum += number;
        count++;
    }
    inFile.close();
    if (count == 0) {
        cout << "File is empty.\n";
        return 0;
    }
    cout << "Count: " << count << ", Sum: " << sum
         << ", Average: " << static_cast<double>(sum) / count << endl;
    return 0;
}
```

**C9**

```cpp
void stats(int a, int b, int& sum, int& product);

void stats(int a, int b, int& sum, int& product) {
    sum = a + b;
    product = a * b;
}
// çağrı: int s, p; stats(3, 5, s, p);  → s = 8, p = 15
```

**C10**

```cpp
int sumDigits(int n);

int sumDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}
```

---

## Örnek midterm cevap anahtarı (`materyal/genel/midtermSample.pdf`)

**Part I**

| No | Cevap | Not |
| --- | --- | --- |
| 1 | a) `5 4` | `++x < 5`: x=5'te durur, y 4 kez artar |
| 2 | c) `0.0` | `3/4` önce int bölme → 0; ekrana `0` basılır |
| 3 | a) True | |
| 4 | `33` | `3 + 10*3` |
| 5 | c) | a: sadece dönüş tipi farklı; b: sadece adlar farklı; d: farklı isim, overload değil |
| 6 | f) a and b | `cin >> fabs(3.5)` ve `fabs(cin >> x)` geçersiz |
| 7 | d) virgül | |
| 8 | d) Nothing is returned | `return;` yazılabilir, o yüzden a yanlış |
| 9 | `default` | |
| 10 | a) True | |

**Part II**

| No | Çıktı |
| --- | --- |
| 1 | `3 , 5 , 0` ve `5 , 5 , 50` (fonksiyondaki `b` local; main'in `b`'si değişmez; a=5+0, c=50) |
| 2 | `5` |
| 3 | `?` / `??` / `???` |
| 4 | `21` ve `4` (a=4; 4*4+5=21; x reference → 4) |
| 5 | `210` (`myFun(1,2)` = 2; `myFun(1.0,4.0,5)` → `(int,double,int)` daha iyi eşleşir → 1+4+5 = 10; iki çıktı arada boşluksuz) |
| 6 | `B` (x=5, `5 > 5` yanlış → dış else) |

**Part III**

```
KXZZ
XZZ
Z
```

i=2: j=4 (fark 2 → default K), j=3 (fark 1 → X, Z, break), j=2 (fark 0 → Z). i=3: j=4 (X, Z), j=3 (Z). i=4: j=4 (Z).

**Part IV:** C1, C2, C3 çözümleri yukarıda.

## Örnek quiz cevap anahtarı (`materyal/genel/quizSample.pdf`)

**Part I**

| No | Çıktı | Not |
| --- | --- | --- |
| 1 | `4` | 2.75 + 2.0 = 4.75 → int'e atanınca 4 |
| 2 | `-3` | Girdi -3: `-3 % 2` = -1, 1 değil → else |
| 3 | `000` | j=0, i=1; k=--i → i=0, k=0; k++ → 1; k>0 → k-- → 0 |
| 4 | (çıktı yok) | Kodda `cout` yok |
| 5 | `0 0 10` | |

**Part II**

1. `#include <iostream>` eksik. `int num;` bildirimi eksik. `cin num;` → `std::cin >> num;` (`using namespace std;` yoksa `std::` şart). `if` koşulsuz → `if (num % 2 != 0)`. `return 0;` ekle.
2. `int main() {` eksik. `ans` `char` olmalı (`char ans;`). `cin >> ans` sonrası `;` eksik. `cout "invalid answer\n"` → `cout << "invalid answer\n";`.
3. `int n` sonrası `;` eksik. `cin << n` → `cin >> n`. `while (n >= 0);` → `while (n < 0)` (hem koşul ters hem `;` döngüyü boşaltıyor). `cin >> n` sonrası `;` eksik.
4. `#include <fstream>` eksik. `int number; sum = 0;` → `int number, sum = 0;`. `while (...);` sonundaki `;` kaldır. `sum =+ number` → `sum += number`. `cout << "Total: " sum` → `cout << "Total: " << sum`. `inFile.close()` sonrası `;` eksik. `main`'in kapanış `}` eksik.

**Part III**

1. b) False
2. b) False
3. `do-while`
4. `number` (tırnak içi yazı)
5. c) `(x >= 2 && x <= 15)`
