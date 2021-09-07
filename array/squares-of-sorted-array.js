/**
 *
 * @param {number} num number to be squared
 * @returns {number} squared number
 */
const square = (num) => num * num;

/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 * @constraints
 * - 1 <= nums.length <= 104
 * - -104 <= nums[i] <= 104
 * - nums is sorted in non-decreasing order
 * @followUp
 * Squaring each element and sorting the new array is very trivial,
 * could you find an O(n) solution using a different approach?
 */
// eslint-disable-next-line no-unused-vars
const sortedSquares = (nums) => {
  let negativePointer = -1;

  while (nums[negativePointer + 1] < 0) {
    negativePointer += 1;
  }

  let leftArrPointer = negativePointer;
  let rightArrPointer = negativePointer + 1;
  const finalArr = [];

  while (leftArrPointer >= 0 && rightArrPointer < nums.length) {
    const leftVal = square(nums[leftArrPointer]);
    const rightVal = square(nums[rightArrPointer]);

    if (leftVal <= rightVal) {
      finalArr.push(leftVal);
      leftArrPointer -= 1;
    } else {
      finalArr.push(rightVal);
      rightArrPointer += 1;
    }
  }

  while (leftArrPointer >= 0) {
    finalArr.push(square(nums[leftArrPointer]));
    leftArrPointer -= 1;
  }

  while (rightArrPointer < nums.length) {
    finalArr.push(square(nums[rightArrPointer]));
    rightArrPointer += 1;
  }

  return finalArr;
};
