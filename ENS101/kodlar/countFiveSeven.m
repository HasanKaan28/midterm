function count = countFiveSeven(n)
% Deneme W2: 1..n arasinda 5'e veya 7'ye bolunen, ama ikisine birden bolunmeyen sayi adedi.
  count = 0;
  for k = 1:n
    a = mod(k,5) == 0;
    b = mod(k,7) == 0;
    if (a || b) && ~(a && b)
      count = count + 1;
    end
  end
end
