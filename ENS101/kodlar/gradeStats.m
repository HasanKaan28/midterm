function [best, worst, nPass] = gradeStats(ids, grades)
% Ek soru E3: en yuksek ve en dusuk notu alan ogrenci numarasi, gecen (>=60) sayisi, grafik.
  iMax = 1;  iMin = 1;  nPass = 0;
  for k = 1:length(grades)
    if grades(k) > grades(iMax)
      iMax = k;
    end
    if grades(k) < grades(iMin)
      iMin = k;
    end
    if grades(k) >= 60
      nPass = nPass + 1;
    end
  end
  best = ids(iMax);
  worst = ids(iMin);
  fprintf('Best: student %g (%g)\n', best, grades(iMax));
  fprintf('Worst: student %g (%g)\n', worst, grades(iMin));
  fprintf('Passed: %g of %g\n', nPass, length(grades));
  bar(ids, grades)
  xlabel('Student'); ylabel('Grade'); title('Grades')
end
