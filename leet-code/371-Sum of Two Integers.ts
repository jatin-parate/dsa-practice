function getSum(n: number, m: number): number {
  if (!n) return m;
  if (!m) return n;
  while (m) {
    let temp = (n & m) << 1;
    n ^= m;
    m = temp;
  }
  return n;
}