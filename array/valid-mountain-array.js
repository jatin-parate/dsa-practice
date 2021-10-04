/**
 * @constraints
 * - arr.length >= 3
 * - There exists some i with 0 < i < arr.length - 1 such that
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * @param {number[]} arr
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
const validMountainArray = (arr) => {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;

  for (; i < arr.length - 1; i += 1) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }

    if (arr[i] > arr[i + 1]) {
      i += 1;
      break;
    }
  }

  if (i < 2) {
    return false;
  }

  for (; i < arr.length; i += 1) {
    if (arr[i] >= arr[i - 1]) {
      return false;
    }
  }

  return true;
};
