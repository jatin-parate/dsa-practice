import assert from "node:assert";

export function arrangeCoins(n: number): number {
  let left = 1,
    right = Math.ceil(n / 2),
    result = 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const coinsRequired = (mid * (mid + 1)) / 2;

    if (coinsRequired === n) {
      return mid;
    } else if (coinsRequired > n) {
      right = mid - 1;
    } else {
      result = Math.max(mid, result);
      left = mid + 1;
    }
  }

  return result;
}

assert.equal(arrangeCoins(5), 2);
assert.equal(arrangeCoins(8), 3);
assert.equal(arrangeCoins(7), 3);
assert.equal(arrangeCoins(6), 3);
assert.equal(arrangeCoins(10), 4);
