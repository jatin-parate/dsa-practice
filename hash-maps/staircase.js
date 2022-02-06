import runWithTimestamp from '../utils/runWithTimestamp';

/**
 * A child is running up a staircase and can hop either 1 step, 2 steps or 3 steps at a time.
 * Given that the staircase has a total n steps,
 * write a function to count the number of possible ways in which child can run up the stairs.
 * @param {number} n
 * @param {Map<number, number>} cache
 * @returns {number}
 */
const staircase = (n, cache = new Map()) => {
  if (cache.has(n)) {
    return cache.get(n);
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 4;
  }

  const result = staircase(n - 3, cache) + staircase(n - 2, cache) + staircase(n - 1, cache);
  cache.set(n, result);
  return result;
};

runWithTimestamp(staircase.bind(this, 4)); // 7
runWithTimestamp(staircase.bind(this, 5)); // 13
runWithTimestamp(staircase.bind(this, 3)); // 4
runWithTimestamp(staircase.bind(this, 20)); // 121415
