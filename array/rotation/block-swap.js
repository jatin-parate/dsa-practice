/* eslint-disable no-param-reassign */
/**
 * Rotates given array left by given number of steps using block swap algorithm.
 * @param {number[]} arr Array of numbers
 * @param {number} [d=1] number of rotations
 * @returns {void}
 * @complexity
 * - time - O(n)
 * - space - O(n)
 */
// eslint-disable-next-line no-unused-vars
const blockSwap = (arr, d = 1) => {
  const prefix = arr.slice(0, d);
  const n = arr.length;

  if (d < 1) {
    return;
  }

  for (let i = 0; i < n - d; i += 1) {
    arr[i] = arr[i + d];
    if (i + 1 < n - d) {
      i += 1;
      arr[i] = arr[i + d];
    }
  }

  for (let i = 0; i < d; i += 1) {
    arr[n - d + i] = prefix[i];
  }
};
