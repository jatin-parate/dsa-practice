function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  const traversal: number[] = new Array<number>(m + n - 1);
  let len = 0;
  let i = 0;
  let j = 0;
  let forward = true;

  while (i < m && j < n) {
    traversal[len] = mat[i][j];
    len++;
    if (forward) {
      if (j === n - 1) {
        i++;
        forward = !forward;
      } else if (i === 0) {
        j++;
        forward = !forward;
      } else {
        i--;
        j++;
      }
    } else {
      if (i === m - 1) {
        j++;
        forward = !forward;
      } else if (j === 0) {
        i++;
        forward = !forward;
      } else {
        i++;
        j--;
      }
    }
  }

  return traversal;
}

console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ])
);
