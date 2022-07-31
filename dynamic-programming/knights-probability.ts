const directions = [
  [-1, 2],
  [1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, -1],
  [-2, 1],
];

const recurse = (
  n: number,
  k: number,
  row: number,
  column: number,
  dp: number[][][]
) => {
  if (row < 0 || row >= n || column < 0 || column >= n) {
    return 0;
  }

  if (k === 0) {
    return 1;
  }

  if (dp[k][row][column] !== undefined) {
    return dp[k][row][column];
  }

  let res = 0;
  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];
    res += recurse(n, k - 1, row + dir[0], column + dir[1], dp) / 8;
  }
  dp[k][row][column] = res;

  return dp[k][row][column];
};

const knightProbability = (
  n: number,
  k: number,
  row: number,
  column: number
) => {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));

  return recurse(n, k, row, column, dp);
};

console.log(knightProbability(8, 3, 3, 4));
