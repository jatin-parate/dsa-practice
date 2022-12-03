export function gcd(m: number, n: number): number {
  if (n === 0) {
    return m;
  }

  if (n > m) {
    return gcd(n, m);
  }

  return gcd(n, m % n);
}

console.log(gcd(6, 20));
