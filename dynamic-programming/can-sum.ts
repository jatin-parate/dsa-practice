import assert from "assert";

const canSum = (targetSum: number, numbers: number[]): boolean => {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i; j < numbers.length; j += 1) {
      let sum = 0;
      for (let k = i; k <= j; k += 1) {
        sum += numbers[k];
      }
      if (sum === targetSum) {
        return true;
      }
    }
  }

  return false;
};

assert.equal(canSum(7, [5, 3, 4, 7]), true);
assert.equal(canSum(7, [2, 3]), false);
