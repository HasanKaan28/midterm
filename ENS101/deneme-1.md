# ENS101 Deneme 1

Süre: 90 dakika. Kâğıt kalem, bilgisayar yok, not yok. Biçim F25 sınavına göre. Cevaplar `deneme-1-cevaplar.md` dosyasında; bitirmeden açma.

Sorular benim yazdığım yeni sorulardır, hocanın soruları değildir.

---

## Part A: Theory

**1.** According to the NSPE Fundamental Canons, what must engineers hold paramount?

- A. The profit of their employer
- B. The safety, health, and welfare of the public
- C. The honor of the profession
- D. The confidentiality of their client

**2.** In ethical decision making, which perspective ignores the outcome and considers only what the person meant to do?

- A. Consequences
- B. Intent
- C. Character
- D. Stakeholders

**3.** The people, groups, institutions or natural systems that might be affected by a decision are called _________.

**4.** Which of the following is NOT a rule of brainstorming?

- A. More is better
- B. Variety is better
- C. Do not criticize
- D. Evaluate each idea as soon as it is proposed

**5.** What is the main disadvantage of the pairwise comparisons approach?

- A. It needs special software
- B. All criteria have equal weight
- C. It works only for two options
- D. It ignores safety

**6.** A method in which each option is scored against each criterion, and each score is multiplied by the importance of that criterion, is called _________.

**7.** Which statement best describes a team, as opposed to a group?

- A. People who are in the same place at the same time
- B. People who have the same manager
- C. Individuals cooperating to accomplish a common goal
- D. People with the same engineering discipline

**8.** A table that lists the project tasks down the side and the team members across the top, showing who performs each task, is called a _________.

**9.** Which of the following follows the guidelines for presentation slides?

- A. Complete sentences so the audience can read everything
- B. A font size of at least 18 points, preferably 24 or more
- C. A black background with white text
- D. A different background style on every slide

**10.** The 4-S formula for structuring a presentation is: Short, Simple, Strong and _________.

**11.** In a technical report, where do the captions go?

- A. Above tables and above figures
- B. Below tables and below figures
- C. Above tables and below figures
- D. Below tables and above figures

**12.** You count the floor tiles across a room and multiply by the size of one tile to find the length of the room. This is estimation by:

- A. Analogy
- B. Aggregation
- C. Modeling
- D. Upper and lower bounds

**13.** Five measurements of the same length are very close to each other, but all of them are far from the true value. The measurements are _________ but not _________.

**14.** How many significant figures does each number have? (a) 0.00450 (b) 3000 (c) 20.05

**15.** Write 0.000047 in (a) scientific notation and (b) engineering notation.

**16.** Estimate the number of liters of water needed to fill your classroom completely. Show your assumptions.

**17.** Estimate how many times a human heart beats in one year. Show your assumptions.

---

## Part B: Octave/MATLAB

**(1)** What is `count` after this code runs?

```matlab
count = 0;
for n = 1:30
  if mod(n,3)==0 || mod(n,7)==0
    count = count + 1;
  end
end
```

**(2)** What is the value of `r`?

```matlab
function y = f(x)
  y = 2*x^2 - 3*x + 4;
end

r = f(4);
```

**(3)** What is the value of `s`?

```matlab
A = [2 4 6; 1 3 5; 8 7 9];
s = sum(A(2,:)) + A(3,1) - A(1,3);
```

**(4)** What is the vector `result`? (`'` is transpose)

```matlab
B = [1 2 3; 4 5 6; 7 8 9];
result = B(:,1)' .* B(3,:);
```

**(5)** What is the value of `total`?

```matlab
total = 0;
for k = 1:20
  if mod(k,2)==0 && mod(k,3)~=0
    total = total + k;
  end
end
```

**(6)** What are the values of `s` and `k` after the loop?

```matlab
k = 10;
s = 0;
while k > 3
  s = s + k;
  k = k - 2;
end
```

**(7)** What is the vector `v`, and what is `length(v)`?

```matlab
v = [];
for k = 1:2:9
  v = [v k^2];
end
```

**(8)** What does this code print?

```matlab
for k = 1:3
  for j = 1:k
    fprintf('%d', j);
  end
  fprintf('\n');
end
```

**(9)** Write a function `myColMax(A, c)` that takes a matrix `A` and a column number `c`, and returns the largest element of that column and the row where it is found. Do not use `max`.

Example: if `A = [1 5; 7 2; 3 9]`, then `[m, row] = myColMax(A, 1)` gives `m = 7` and `row = 2`.

**(10)** Write a function `countFiveSeven(n)` that counts how many numbers between 1 and `n` are divisible by 5 or by 7, but not by both.

Example: `countFiveSeven(40)` is 11.

---

## Ek sorular (F24 tarzı, açık uçlu)

Bunlar 90 dakikanın dışında. 20 Kasım'da blok 5'te ya da boş kaldığında çöz.

**E1.** A phone battery works best between 20% and 80% charge. Write a function that takes the charge level and displays a warning if it is too low or too high. If the level is below 0 or above 100, display that it is invalid.

**E2.** The amount of a radioactive material is N = N₀ · (1/2)^(t/T), where T is the half-life. Write a function that takes N₀, t and T (t and T in years) and returns N. Then modify the function for the case where the user sends t in days.

**E3.** A teacher has a vector of student numbers and a vector of their grades. Write a function that shows which student has the highest grade, which has the lowest grade, how many students passed (grade 60 or more), and plots the grades.

**E4.** List the four steps of ethical decision making and explain the three perspectives used in the second step.

**E5.** Why should the criteria be defined before the team starts generating solutions?

**E6.** How would your presentation about a new bridge design change if you presented it (a) to high school students and (b) to civil engineering professors?

**E7.** Estimate how many A4 sheets of paper are needed to cover a football pitch.

**E8.** Estimate how many liters of fuel a taxi in Sarajevo uses in one year.

**E9.** Estimate how many hours you will spend in lectures during your whole undergraduate education.
