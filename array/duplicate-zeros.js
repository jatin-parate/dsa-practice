/**
 * Given a fixed-length integer array arr,
 * duplicate each occurrence of zero, shifting the remaining elements to the right.
 * **Note** that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place and do not return anything.
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * @constraints
 * - 1 <= arr.length <= 104
 * - 0 <= arr[i] <= 9
 */
// eslint-disable-next-line no-unused-vars
const duplicateZeros = (arr) => {
  /** @type {number} */
  let index;

  for (let i = 0; i < arr.length; i += 2) {
    index = arr.indexOf(0, i);
    if (index !== -1) {
      i = index;
      arr.splice(i, 0, 0);
      arr.pop();
    }
  }
};
