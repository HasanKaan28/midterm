function [vMax, vMin] = fuelAnalysis(speed, fuel)
% F24 Soru 10: en yuksek ve en dusuk tuketimin oldugu hizlari bulur, grafigi cizer.
  maxi = fuel(1);  iMax = 1;
  mini = fuel(1);  iMin = 1;

  for k = 2:length(fuel)
    if fuel(k) > maxi
      maxi = fuel(k);
      iMax = k;
    end
    if fuel(k) < mini
      mini = fuel(k);
      iMin = k;
    end
  end

  vMax = speed(iMax);
  vMin = speed(iMin);
  fprintf('Highest consumption %g at speed %g\n', maxi, vMax);
  fprintf('Lowest consumption %g at speed %g\n', mini, vMin);

  plot(speed, fuel, '-o')
  xlabel('Speed (km/h)')
  ylabel('Fuel consumption (g/km)')
  title('Speed vs fuel consumption')
  grid on
end
