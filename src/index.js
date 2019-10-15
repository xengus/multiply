module.exports = function multiply(first, second) {
  a = first.split('');
  b = second.split('');
  let c = Array.from({ length: a.length + b.length - 1 }, (v) => 0);
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
          c[i + j] += a[i] * b[j];
      }
  }
  for (let i = c.length - 1; i > 0; i--) {
    c[i-1]+=(c[i]/10|0);
    c[i]=c[i]%10;
  }
  while(c[0]==0) c.shift();
  return c.join('') || '0'; 
}
