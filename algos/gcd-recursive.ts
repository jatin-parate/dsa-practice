import assert from "node:assert";

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

assert.equal(gcd(84, 246), 6);
assert.equal(gcd(121, 33), 11);
