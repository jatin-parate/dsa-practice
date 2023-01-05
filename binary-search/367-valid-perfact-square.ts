import assert from "node:assert";

export function isPerfectSquare(num: number): boolean {
  let left = 1,
    right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid ** 2;

    if (square === num) {
      return true;
    } else if (square > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

assert.equal(isPerfectSquare(16), true);
assert.equal(isPerfectSquare(17), false);
assert.equal(isPerfectSquare(2 ** 30), true);
