function numberInfo()
% F24 Soru 7: kullanicidan sayi ister; tek/cift, pozitif/negatif,
% karesinden buyuk mu bilgisini yazar.
  x = input('Enter a number: ');

  if mod(x,2) == 0
    disp('even')
  elseif mod(x,2) == 1
    disp('odd')
  else
    disp('not an integer: neither odd nor even')
  end

  if x > 0
    disp('positive')
  elseif x < 0
    disp('negative')
  else
    disp('zero')
  end

  if x > x^2
    disp('larger than its square')
  else
    disp('not larger than its square')
  end
end
