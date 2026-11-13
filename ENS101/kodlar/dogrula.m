% Tum cozumleri calistirip sonuclari yazar (MATLAB ve Octave'da calisir).
disp('--- F25 MATLAB 1-7 ---')
count = 0;
for n = 1:20
  if mod(n,4)==0 || mod(n,5)==0
    count = count + 1;
  end
end
fprintf('F25-1 count = %g\n', count);
mypoly = @(x) x^3 - 2*x + 1;
fprintf('F25-2 result = %g\n', mypoly(3));
A = [1 2 3; 4 5 6; 7 8 9];
s = sum(A(:,3)) - A(2,2);
fprintf('F25-3 s = %g\n', s);
B = [2 4 6; 1 3 5; 7 9 11];
result = B(2,:) + B(3,:);
fprintf('F25-4 result = %s\n', mat2str(result));
total = 0;
for k = 1:15
  if mod(k,3)==0 && mod(k,5)~=0
    total = total + k;
  end
end
fprintf('F25-5 total = %g\n', total);
fprintf('F25-6 myMean([1 5; 5 5],2) = %g, loop = %g\n', myMean([1 5; 5 5],2), myMeanLoop([1 5; 5 5],2));
fprintf('F25-7 MyCheck(20) = %g\n', MyCheck(20));

disp('--- F24 7-10 ---')
fprintf('bacteria(100,60) = %g\n', bacteria(100,60));
fprintf('bacteriaUnit(100,1,h) = %g, (100,3600,s) = %g, (100,60,m) = %g\n', bacteriaUnit(100,1,'h'), bacteriaUnit(100,3600,'s'), bacteriaUnit(100,60,'m'));
tempCheck(25); tempCheck(55); tempCheck(95); tempCheck(30); tempCheck(80);
speed = 10:10:130;
fuel = [100 70 55 50 45 42 40 41 42 48 52 58 65];
[vMax, vMin] = fuelAnalysis(speed, fuel);
fprintf('vMax = %g, vMin = %g\n', vMax, vMin);

disp('--- Deneme 1 ---')
count = 0;
for n = 1:30
  if mod(n,3)==0 || mod(n,7)==0
    count = count + 1;
  end
end
fprintf('D1 count = %g\n', count);
f = @(x) 2*x^2 - 3*x + 4;
fprintf('D2 r = %g\n', f(4));
A = [2 4 6; 1 3 5; 8 7 9];
s = sum(A(2,:)) + A(3,1) - A(1,3);
fprintf('D3 s = %g\n', s);
B = [1 2 3; 4 5 6; 7 8 9];
result = B(:,1)' .* B(3,:);
fprintf('D4 result = %s\n', mat2str(result));
total = 0;
for k = 1:20
  if mod(k,2)==0 && mod(k,3)~=0
    total = total + k;
  end
end
fprintf('D5 total = %g\n', total);
k = 10; s = 0;
while k > 3
  s = s + k;
  k = k - 2;
end
fprintf('D6 s = %g, k = %g\n', s, k);
v = [];
for k = 1:2:9
  v = [v k^2];
end
fprintf('D7 v = %s, length = %g\n', mat2str(v), length(v));
disp('D8 output:')
for k = 1:3
  for j = 1:k
    fprintf('%d', j);
  end
  fprintf('\n');
end
[mx, row] = myColMax([1 5; 7 2; 3 9], 1);
fprintf('W1 myColMax col1 = %g row %g\n', mx, row);
[mx, row] = myColMax([1 5; 7 2; 3 9], 2);
fprintf('W1 myColMax col2 = %g row %g\n', mx, row);
fprintf('W2 countFiveSeven(40) = %g, (70) = %g\n', countFiveSeven(40), countFiveSeven(70));

disp('--- Ek sorular ---')
batteryCheck(10); batteryCheck(50); batteryCheck(90); batteryCheck(120);
fprintf('E2 decay(800,30,10) = %g\n', decay(800,30,10));
[best, worst, nPass] = gradeStats([101 102 103 104 105], [55 90 72 40 61]);
fprintf('best=%g worst=%g nPass=%g\n', best, worst, nPass);

disp('--- Ozet ornekleri ---')
x = 0:2:10;
fprintf('x = %s, length = %g\n', mat2str(x), length(x));
M = [1 2; 3 4];
fprintf('M*M = %s, M.*M = %s, transpose = %s\n', mat2str(M*M), mat2str(M.*M), mat2str(M'));
fprintf('mod(17,5) = %g, mod(-3,2) = %g, mod(0.5,2) = %g\n', mod(17,5), mod(-3,2), mod(0.5,2));
C = [1 2 3; 4 5 6];
fprintf('size(C) = %s, numel = %g\n', mat2str(size(C)), numel(C));
fprintf('sum(C) = %s, sum(C,2) = %s, sum(C(:)) = %g, mean(C(1,:)) = %g\n', mat2str(sum(C)), mat2str(sum(C,2)), sum(C(:)), mean(C(1,:)));
fprintf('C(2,:) = %s, C(:,2) = %s, C(end,end) = %g\n', mat2str(C(2,:)), mat2str(C(:,2)), C(end,end));

