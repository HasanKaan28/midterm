function batteryCheck(level)
% Ek soru E1: sarj yuzdesi 20'nin altinda "low", 80'in ustunde "unplug", arasi "OK".
  if level < 0 || level > 100
    disp('Invalid level')
  elseif level < 20
    disp('WARNING: battery low, plug in')
  elseif level > 80
    disp('WARNING: battery high, unplug')
  else
    disp('Battery is OK')
  end
end
