import assert from "assert";

function sumOfSquareOfDigits(n: number): number {
  let sum = 0;
  let currN = n;
  while (currN > 0) {
    const remainder = currN % 10;
    sum += remainder * remainder;
    currN = Math.floor(currN / 10);
  }
  return sum;
}

function isHappy(n: number): boolean {
  const visited = new Set();

  while (!visited.has(n)) {
    visited.add(n);
    n = sumOfSquareOfDigits(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
}

assert.equal(isHappy(19), true);
assert.equal(isHappy(2), false);
