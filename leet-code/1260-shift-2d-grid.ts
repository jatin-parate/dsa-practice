import assert from "assert";

const getNextPosition = (i: number, totalElems: number, k: number) => {
  if (i + k > totalElems) {
    return k - (totalElems - i);
  }

  return i + k;
};

const getIndexAtPosition = (index: number, m: number, n: number) => {
  const row = Math.ceil(index / n);
  const col = index - (row - 1) * n;

  return [row - 1, col - 1];
};

function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;
  const result = new Array(m);
  const totalElems = m * n;

  if (k >= totalElems) {
    k = k % totalElems;
  }
  if (k === 0) {
    return grid;
  }

  for (let i = 0; i < m; i += 1) {
    result[i] = new Array(n);
  }

  let elemIndex: number = 0;
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      elemIndex += 1;
      const nextPosition = getNextPosition(elemIndex, totalElems, k);
      const [nextI, nextJ] = getIndexAtPosition(nextPosition, m, n);
      result[nextI][nextJ] = grid[i][j];
    }
  }

  return result;
}

assert.deepEqual(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23), [
  [6],
  [5],
  [1],
  [2],
  [3],
  [4],
  [7],
]);

assert.deepEqual([[1]], shiftGrid([[1]], 100));

assert.deepEqual(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  ),
  [
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]
);

assert.deepEqual(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  ),
  [
    [12, 0, 21, 13],
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
  ]
);
