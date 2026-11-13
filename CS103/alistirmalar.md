# CS103 Alıştırmalar

Kâğıt ve kalemle çöz, bilgisayarda çalıştırma. Cevaplar `cevaplar.md`'de. Kodlarda `#include <iostream>`, `using namespace std;` ve `main` varsayılır (fonksiyonlu sorularda yazıldı).

## Bölüm 0 — Teşhis testi (20 dakika)

Cevaplarını sohbete yaz; yanlış çıkan konular plana ağırlık olarak eklenir.

**T1** (`++`/`--`) Çıktı?

```cpp
int n = 4;
int p = n++ * 2;
int q = ++n * 2;
cout << p << " " << q << " " << n << endl;
```

**T2** (`switch` fall-through) Çıktı?

```cpp
for (int i = 0; i < 4; i++) {
    switch (i) {
        case 0: cout << "A";
        case 1: cout << "B"; break;
        case 2: cout << "C";
        default: cout << "D";
    }
}
```

**T3** (call-by-reference) Çıktı?

```cpp
void f(int a, int& b) {
    a = a + 10;
    b = b + a;
}
int main() {
    int x = 1, y = 2;
    f(x, y);
    cout << x << " " << y << endl;
    f(y, x);
    cout << x << " " << y << endl;
}
```

**T4** (overloading) Aşağıdaki iki fonksiyon varken `cout << add(2, 3.0);` ne yapar?

```cpp
double add(int a, int b)       { return a + b; }
double add(double a, double b) { return a + b; }
```

**T5** (nested if) Çıktı?

```cpp
int fuel = 80;
if (fuel < 75)
    if (fuel < 25)
        cout << "low";
else
    cout << "high";
cout << "!" << endl;
```

**T6** (fonksiyon yazımı) Kâğıda yaz: bir `int` ve bir `double` alan, `double` parametreyi `int` parametrenin iki katı yapan, değer döndürmeyen `scale` fonksiyonunun **bildirimi** ve **tanımı**.

---

## Bölüm A — Çıktı tahmini

**A1** (int bölme, casting)

```cpp
int a = 7, b = 2;
double c = a / b;
double d = static_cast<double>(a) / b;
double e = static_cast<double>(a / b);
cout << c << " " << d << " " << e << " " << a % b << endl;
```

**A2** = T1.

**A3**

```cpp
int a = 3;
while (a-- > 0)
    cout << a << " ";
cout << "| " << a << endl;
```

**A4**

```cpp
int k = 10;
do {
    cout << k << " ";
    k += 5;
} while (k < 10);
cout << k << endl;
```

**A5**

```cpp
int i;
for (i = 0; i < 3; i++);
cout << "Hi " << i << endl;
```

**A6** = T2.

**A7**

```cpp
for (int i = 3; i >= 1; i--) {
    for (int j = 1; j <= i; j++)
        cout << j;
    cout << endl;
}
```

**A8**

```cpp
int sum = 0;
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    sum += i;
}
cout << sum << endl;
```

**A9**

```cpp
int x = 5;
if (x = 0)
    cout << "zero ";
else
    cout << "nonzero ";
cout << x << endl;
```

**A10** = T5.

**A11** = T3.

**A12**

```cpp
void swapA(int a, int b)   { int t = a; a = b; b = t; }
void swapB(int& a, int& b) { int t = a; a = b; b = t; }
int main() {
    int x = 3, y = 8;
    swapA(x, y);
    cout << x << " " << y << endl;
    swapB(x, y);
    cout << x << " " << y << endl;
}
```

**A13** (overloading)

```cpp
double add(int a, int b)                 { cout << "1 "; return a + b; }
double add(double a, double b)           { cout << "2 "; return a + b; }
double add(double a, double b, double c) { cout << "3 "; return a + b + c; }
int main() {
    cout << add(2, 3) << endl;
    cout << add(2.5, 3.0) << endl;
    cout << add(1, 2.0, 3) << endl;
}
```

**A13b** Aynı programa `cout << add(2, 3.0) << endl;` eklenirse ne olur?

**A14** (blok kapsamı)

```cpp
int x = 1;
cout << x << " ";
{
    cout << x << " ";
    int x = 2;
    cout << x << " ";
}
cout << x << endl;
```

**A15** (global ve local)

```cpp
int g = 5;
void change()  { int g = 100; g++; }
void change2() { g++; }
int main() {
    change();
    cout << g << " ";
    change2();
    cout << g << endl;
}
```

**A16**

```cpp
bool isEven(int n) { return n % 2 == 0; }
int main() {
    int count = 0;
    for (int i = 1; i <= 9; i += 2)
        if (isEven(i + 1) && i > 3)
            count++;
    cout << count << endl;
}
```

**A17**

```cpp
int x = 0, y = 0;
while (x++ < 5)
    y += x;
cout << x << " " << y << endl;
```

**A18** (char, bool)

```cpp
char c = 'A';
int n = c + 2;
char d = n;
bool b = 7;
cout << n << " " << d << " " << b << " " << (5 > 3) << endl;
```

**A19** (kısaltma operatörleri)

```cpp
int a = 10, b = 3;
a += b * 2;
b *= a - 14;
a %= 5;
cout << a << " " << b << " " << a + b / 2 << endl;
```

**A20**

```cpp
int twice(int n) { return 2 * n; }
void update(int& a, int b) {
    a = twice(a) + b;
    b = 0;
}
int main() {
    int p = 3, q = 4;
    update(p, q);
    update(q, p);
    cout << p << " " << q << endl;
}
```

**A21** (Part III tipi: iç içe döngü + fall-through)

```cpp
int i, j;
for (i = 1; i <= 3; i++) {
    j = i;
    while (j > 0) {
        switch (j % 3) {
            case 0: cout << "T";
            case 1: cout << "U"; break;
            case 2: cout << "V";
            default: cout << "W";
        }
        j--;
    }
    cout << "\n";
}
```

**A22** (biçimlendirme)

```cpp
double price = 7.5;
cout.setf(ios::fixed);
cout.setf(ios::showpoint);
cout.precision(2);
cout << price << " " << 10 / 4 << " " << 10 / 4.0 << endl;
```

**A23** (short-circuit)

```cpp
int kids = 0, pieces = 10;
if ((kids != 0) && (pieces / kids >= 2))
    cout << "two each";
else
    cout << "no kids";
```

**A24** (dosya) `data.txt` içeriği: `3 10 20 30 40`

```cpp
ifstream in;
in.open("data.txt");
int n, x, sum = 0;
in >> n;
for (int i = 0; i < n; i++) {
    in >> x;
    sum += x;
}
cout << n << " " << sum << endl;
in.close();
```

**A25** (cmath)

```cpp
cout << pow(2, 3) << " " << fabs(-3.5) << " " << sqrt(pow(3, 2)) << " "
     << 7 / abs(-2) << " " << ceil(5.8) << " " << floor(5.8) << endl;
```

**A26**

```cpp
double d = 11 / 2;
cout << d << " " << static_cast<int>(2.9) << " " << (!(5 > 3) || (2 == 2))
     << " " << 17 / 5 << " " << 17 % 5 << endl;
```

**A27** (enum, slaytta "optional")

```cpp
enum Direction { N = 5, S, E = 1, W };
cout << W << " " << E << " " << S << " " << N << endl;
```

---

## Bölüm B — Hata bulma

Her kodda hatalı satırları bul, düzelt. Derleme hatası mı, mantık hatası mı, belirt.

**B1** (amaç: x 5 ise "five" yaz)

```
1  #include <iostream>
2  using namespace std;
3  int main()
4  {
5      int x = 10
6      if (x = 5)
7          cout << "five" << endl;
8      return 0;
9  }
```

**B2**

```
1  #include <iostream>
2  using namespace std;
3  int main() {
4      cout << square(4) << endl;
5      return 0;
6  }
7  int square(int n) {
8      n * n;
9  }
```

**B3** (amaç: iki değişkeni de 0 yap, çıktı `00` olsun)

```
1  void zeroBoth(int a, int b) {
2      a = 0;
3      b = 0;
4  }
5  int main() {
6      int x = 3, y = 4;
7      zeroBoth(x, y);
8      cout << x << y;
9  }
```

**B4** (amaç: 1'den 10'a toplam)

```
1  int sum = 0;
2  for (int i = 1; i <= 10; i++);
3      sum += i;
4  cout << sum;
```

**B5**

```
1  char grade;
2  cin >> grade;
3  switch (grade) {
4      case "A": cout << "Excellent";
5      case 'B': cout << "Good"; break;
6      default cout << "Other";
7  }
```

**B6** (amaç: `1 2 3 4 5` yaz)

```
1  int i = 1;
2  while (i < 5) {
3      cout << i << " ";
4  }
```

**B7** (amaç: `Average: 3.5`)

```
1  int total = 7, count = 2;
2  double avg = total / count;
3  cout << "Average: " << avg;
```

**B8** Hangi bildirim geçersiz?

```
1  int area(int side);
2  double area(int side);
3  double area(double w, double h);
```

**B9**

```
1  void printSum(int a, int b) {
2      return a + b;
3  }
4  int main() {
5      cout << printSum(2, 3);
6  }
```

**B10** (amaç: dosyadaki sayıları yazdır)

```
1  #include <iostream>
2  using namespace std;
3  int main() {
4      ifstream in;
5      in.open(numbers.txt);
6      int x;
7      while (in >> x)
8          cout << x << endl;
9  }
```

Örnek quiz'in Part II'sindeki 4 hata sorusu da (`materyal/genel/quizSample.pdf`) aynı tipte; cevapları `cevaplar.md`'de.

---

## Bölüm C — Kâğıtta kod yazma

Her birinde fonksiyon **bildirimini** `main`'den önce, **tanımını** `main`'den sonra yaz.

**C1** (örnek midterm IV-1) `get_number()`: kullanıcıdan bir tam sayı okuyup döndürsün. Sonra değiştir: sadece pozitif kabul etsin; 0 veya negatifse uyarı verip tekrar sorsun.

**C2** (örnek midterm IV-2) `factorial(int n)` döngüyle (özyineleme yok) ve `permutation(int n, int r)` = `factorial(n) / factorial(n - r)`. `main` n ve r okuyup sonucu yazsın.

**C3** (örnek midterm IV-3) `hello(string name)` selam yazsın. `shareBudget(int number, double totalAmount)` kişi başı payı yazsın; kişi sayısı 0 ise `No people, no budget distribution!` yazıp `return` ile çıksın. Bütçe 900, `main`'de tanımlı.

**C4** `swapValues(int& a, int& b)` ve onu kullanan `order(int& a, int& b)`: çağrıdan sonra `a <= b` olsun.

**C5** `bool isPrime(int n)`. `main` 1'den 20'ye kadar asal sayıları yazsın.

**C6** `do-while` ve `switch` ile menü: 1 kare, 2 küp, 0 çıkış, başka sayı "Wrong choice!".

**C7** `n` okuyup önce sola dayalı, sonra sağa dayalı ters üçgen çizen `triangles(int n)`. `n = 3` için:

```
*
**
***
***
 **
  *
```

**C8** `numbers.txt` dosyasındaki tüm sayıları (kaç tane olduğu bilinmiyor) okuyup adet, toplam ve ortalamayı (`double`) yazan program.

**C9** `void stats(int a, int b, int& sum, int& product)`: toplamı ve çarpımı reference parametrelerle döndürsün.

**C10** `int sumDigits(int n)`: basamakların toplamı (`4071` → `12`), `%` ve `/` ile.
