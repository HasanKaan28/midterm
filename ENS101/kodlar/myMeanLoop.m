function m = myMeanLoop(A, r)
% F25 Soru 6, mean() kullanmadan.
  [rows, cols] = size(A);
  total = 0;
  for j = 1:cols
    total = total + A(r,j);
  end
  m = total / cols;
end
