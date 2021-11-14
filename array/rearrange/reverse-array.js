/* eslint-disable no-param-reassign */
/**
 * Reverse the given array.
 * @param {Array<number>} arr Array to reverse
 * @returns {Array<number>}
 */
// eslint-disable-next-line no-unused-vars
const reverseArray = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i += 1;
    j -= 1;
  }

  return arr;
};
