import assert from "node:assert";

export function searchMatrix(matrix: number[][], target: number): boolean {
  const TOTAL = matrix.length * matrix[0].length;
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let left = 1,
    right = TOTAL;

  if (left === right) {
    return matrix[0][0] === target;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.ceil(mid / COLS) - 1;
    const col = mid - row * COLS - 1;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

assert.equal(searchMatrix([[1]], 0), false);
assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    1
  ),
  true
);
assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  ),
  false
);

assert.equal(searchMatrix([[1], [2], [3], [4]], -1), false);
assert.equal(searchMatrix([[1], [2], [3], [4]], 1), true);
assert.equal(searchMatrix([[1, 2, 3, 4]], -1), false);
assert.equal(searchMatrix([[1, 2, 3, 4]], 1), true);
