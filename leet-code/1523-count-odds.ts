import assert from "assert";

function countOdds(low: number, high: number): number {
  let n = high - low + 1;
  if (low % 2 === 0) {
    n -= 1;
  }
  if (high % 2 === 0) {
    n -= 1;
  }

  return Math.ceil(n / 2);
}

assert.equal(countOdds(8, 10), 1);
assert.equal(countOdds(3, 7), 3);
