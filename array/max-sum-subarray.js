/**
 * @complexities
 * - Time: O(n)
 * - Space: O(1)
 * @param {number[]} list
 * @returns {number[]}
 */
const getMaxSumSubArray = (list) => {
  let sum = 0;
  let start = -1;
  let end = -1;
  let currStart = 0;
  let newSum = 0;

  for (let i = 0; i < list.length; i += 1) {
    newSum += list[i];
    if (newSum > sum) {
      sum = newSum;
      start = currStart;
      end = i;
    } else if (newSum < 0) {
      newSum = 0;
      currStart = i + 1;
    }
  }

  console.log("Max sum is", sum);

  return list.slice(start, end + 1);
};

console.log(getMaxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(getMaxSumSubArray([1, 2, -1, -3, -4, 6, 7]));
console.log(getMaxSumSubArray([1, 2, 6, -1, 7, 1]));
