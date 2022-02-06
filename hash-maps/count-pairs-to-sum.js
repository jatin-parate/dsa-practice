import runWithTimestamp from '../utils/runWithTimestamp';

/**
 *
 * List does not contain any duplicates
 * @param {number[]} arr
 * @param {number} sum
 */
const pairSumToTarget = (arr, sum) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    if (map.has(sum - arr[i])) {
      return [map.get(sum - arr[i]), i];
    }

    map.set(arr[i], i);
  }
  return null;
};

runWithTimestamp(pairSumToTarget.bind(this, [1, 5, 9, 7], 8));
runWithTimestamp(pairSumToTarget.bind(this, [10, 5, 9, 8, 12, 1, 16, 6], 16));
runWithTimestamp(pairSumToTarget.bind(this, [0, 1, 2, 3, -4], -4));
