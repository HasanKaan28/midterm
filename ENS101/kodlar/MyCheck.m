function count = MyCheck(n)
% F25 Soru 7: 1..n arasinda 3'e bolunen ama 2'ye bolunmeyen sayi adedi.
  count = 0;
  for k = 1:n
    if mod(k,3) == 0 && mod(k,2) ~= 0
      count = count + 1;
    end
  end
end
