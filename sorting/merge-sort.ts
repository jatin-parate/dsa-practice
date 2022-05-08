import assert from "assert";

const sort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor((0 + nums.length - 1) / 2);
  const leftArr = sort(nums.slice(0, mid + 1));
  const rightArr = sort(nums.slice(mid + 1));

  const finalArray = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (rightArr[j] <= leftArr[i]) {
      finalArray.push(rightArr[j]);
      j += 1;
    } else {
      finalArray.push(leftArr[i]);
      i += 1;
    }
  }

  while (i < leftArr.length) {
    finalArray.push(leftArr[i]);
    i += 1;
  }

  while (j < rightArr.length) {
    finalArray.push(rightArr[j]);
    j += 1;
  }

  return finalArray;
};

const sortArray = (nums: number[]) => {
  return sort(nums);
};

assert.deepEqual(sortArray([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
assert.deepEqual(sortArray([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
