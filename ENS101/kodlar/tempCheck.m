function tempCheck(T)
% F24 Soru 9: anakart sicakligi 30-80 C arasinda olmali.
  if T < 30
    disp('WARNING: too cold')
  elseif T > 80
    disp('WARNING: too hot')
  else
    disp('Temperature is OK')
  end
end
