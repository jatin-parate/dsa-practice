/* eslint-disable no-param-reassign */
/**
 * Given an array of elements of length N, ranging from 0 to N – 1.
 * All elements may not be present in the array.
 * If the element is not present then there will be -1 present in the array.
 * Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.
 * @param {number[]} arr Array of numbers
 * @returns {void}
 * @complexity
 * - time: O(n)
 * - space: O(n)
 */
// eslint-disable-next-line no-unused-vars
const rearrange = (arr) => {
  const hash = {};

  arr.forEach((ele) => {
    hash[ele] = true;
  });

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = hash[i] ? i : -1;
  }
};
