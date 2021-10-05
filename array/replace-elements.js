/* eslint-disable no-param-reassign */
/**
 * @param {number[]} arr
 * @return {number[]}
 * @constraints
 * - 1 <= arr.length <= 104
 * - 1 <= arr[i] <= 105
 */
// eslint-disable-next-line no-unused-vars
const replaceElements = (arr) => {
  const n = arr.length;
  let largest = arr[n - 1];
  arr[n - 1] = -1;

  if (n < 2) {
    return arr;
  }

  for (let i = n - 2; i > -1; i -= 1) {
    const curr = arr[i];
    arr[i] = arr[i + 1] > largest ? arr[i + 1] : largest;
    if (curr > largest) {
      largest = curr;
    }
  }

  return arr;
};
