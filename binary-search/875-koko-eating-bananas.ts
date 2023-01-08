import assert from "node:assert";

function isValid(k: number, piles: number[], h: number): boolean {
  let hoursSpent = 0;
  for (let num of piles) {
    hoursSpent += Math.ceil(num / k);
  }

  return hoursSpent <= h;
}

export function minEatingSpeed(piles: number[], h: number): number {
  let left = 1,
    right = Math.max(...piles);
  let k = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isValid(mid, piles, h)) {
      k = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return k;
}

assert.equal(minEatingSpeed([10], 2), 5);
assert.equal(minEatingSpeed([10], 1), 10);
assert.equal(minEatingSpeed([10, 1], 2), 10);
assert.equal(minEatingSpeed([10, 1], 3), 5);
