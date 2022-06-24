import assert from "assert";

const canSum = (targetSum: number, numbers: number[]): boolean => {
  if (targetSum === 0) {
    return true;
  }

  for (let number of numbers) {
    let newTargetSum = targetSum - number;
    if (newTargetSum === 0) {
      return true;
    }
    if (newTargetSum > 0 && canSum(newTargetSum, numbers)) {
      return true;
    }
  }

  return false;
};

assert.equal(canSum(7, [5, 3, 4, 7]), true);
assert.equal(canSum(7, [2, 3]), false);
