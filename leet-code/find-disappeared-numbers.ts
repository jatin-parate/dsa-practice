import assert from "assert";

function findDisappearedNumbers(nums: number[]): number[] {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 1);
    }
  });

  let disappearedNumbers: number[] = [];

  for (let i = 1; i <= nums.length; i += 1) {
    if (!map.has(i)) {
      disappearedNumbers.push(i);
    }
  }

  return disappearedNumbers;
}

assert.deepEqual(findDisappearedNumbers([1,1]), [2]);
assert.deepEqual(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
