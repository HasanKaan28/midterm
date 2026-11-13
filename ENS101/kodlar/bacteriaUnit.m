function p = bacteriaUnit(p0, t, unit)
% F24 Soru 8 (degistirilmis hali): unit = 'm' dakika, 'h' saat, 's' saniye.
  if unit == 'h'
    t = t * 60;      % saat -> dakika
  elseif unit == 's'
    t = t / 60;      % saniye -> dakika
  end
  p = p0 * 2^(t/20);
end
