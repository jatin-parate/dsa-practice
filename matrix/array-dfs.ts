const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];
const dfs = (
  matrix: number[][],
  row: number,
  col: number,
  seen: boolean[][],
  values: number[]
): void => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return;
  }

  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i += 1) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};

const traverseDfs = (matrix: number[][]): number[] => {
  let seen = matrix.map<boolean[]>((row) => row.map<boolean>(() => false));

  const values: number[] = [];
  dfs(matrix, 0, 0, seen, values);

  return values;
};

console.log(
  traverseDfs([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
