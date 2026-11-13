function [mx, row] = myColMax(A, c)
% Deneme W1: A matrisinin c. sutunundaki en buyuk eleman ve satir numarasi (max() yok).
  [rows, cols] = size(A);
  mx = A(1,c);
  row = 1;
  for k = 2:rows
    if A(k,c) > mx
      mx = A(k,c);
      row = k;
    end
  end
end
