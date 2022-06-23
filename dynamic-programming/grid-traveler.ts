import assert from "assert";
import runWithTimestamp from "../utils/runWithTimestamp";
let cache: number[][] = new Array(101);

/**
 *
 * @param m rows
 * @param n cols
 */
const _uniquePaths = (m: number, n: number): number => {
  if (m < 1 || n < 1) {
    return 0;
  }
  if (m === 1 && n === 1) {
    return 1;
  }
  if (!cache[m]) {
    cache[m] = [];
  }
  if (!cache[n]) {
    cache[n] = [];
  }

  if (!cache[m][n] && !cache[n][m]) {
    cache[m][n] = _uniquePaths(m - 1, n) + _uniquePaths(m, n - 1);
  }

  return cache[m][n] || cache[n][m];
};

function uniquePaths(m: number, n: number): number {
  cache = new Array(Math.max(m, n));

  return _uniquePaths(m, n);
}

runWithTimestamp(() => uniquePaths(23, 32));
// assert.equal(uniquePaths(2, 3), 3);
