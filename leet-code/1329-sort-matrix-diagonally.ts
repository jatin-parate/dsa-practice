function diagonalSort(mat: number[][]): number[][] {
  const totalRows = mat.length;
  const totalColumns = mat[0].length;
  // const totalDiagonals = m + n - 1;

  let row = totalRows - 2;
  let col = 0;

  while (row >= 0 && col < totalColumns - 1) {
    let currRow = row;
    let currCol = col;
    let elementsInCurrentDiagonal: number[] = [];

    while (currRow < totalRows && currCol < totalColumns) {
      elementsInCurrentDiagonal.push(mat[currRow][currCol]);
      currRow++;
      currCol++;
    }
    // console.log(elementsInCurrentDiagonal);

    elementsInCurrentDiagonal.sort((a, b) => a < b ? -1 : 1);
    currRow = row;
    currCol = col;
    let i = 0;
    while (currRow < totalRows && currCol < totalColumns) {
      mat[currRow][currCol] = elementsInCurrentDiagonal[i];
      currRow++;
      currCol++;
      i++;
    }

    if (row === 0) {
      col++;
    } else {
      row--;
    }
  }

  return mat;
}

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ])
);

console.log(
  diagonalSort([
    [11, 25, 66, 1, 69, 7],
    [23, 55, 17, 45, 15, 52],
    [75, 31, 36, 44, 58, 8],
    [22, 27, 33, 25, 68, 4],
    [84, 28, 14, 11, 5, 50],
  ])
);
