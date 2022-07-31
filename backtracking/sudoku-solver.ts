import assert from "assert";

/**
  Write a program to solve a Sudoku puzzle by filling the empty cells.

  A sudoku solution must satisfy all of the following rules:

  Each of the digits 1-9 must occur exactly once in each row.
  Each of the digits 1-9 must occur exactly once in each column.
  Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
  The '.' character indicates empty cells.

  Do not return anything, modify board in-place instead.

  @constraints
  - board.length == 9
  - board[i].length == 9
  - board[i][j] is a digit or '.'.
  - It is guaranteed that the input board has only one solution.
 */

const isEmpty = (value: string) => value === ".";

const hasNextPosition = (currRow: number, currCol: number): boolean =>
  currRow < 9 && currCol < 9;

const getNextPosition = (
  currRow: number,
  currCol: number
): [number, number] => {
  if (currCol === 8) {
    return [currRow + 1, 0];
  }

  return [currRow, currCol + 1];
};

const getValidValues = (
  board: string[][],
  row: number,
  col: number
): Array<string> => {
  const set = new Set<string>(
    new Array(9).fill(0).map((_, i) => (i + 1).toString())
  );

  const minRow = Math.floor(row / 3) * 3;
  const minCol = Math.floor(col / 3) * 3;
  const maxRow = minRow + 3;
  const maxCol = minCol + 3;

  for (let i = minRow; i < maxRow; i++) {
    for (let j = minCol; j < maxCol; j++) {
      if (!isEmpty(board[i][j])) {
        set.delete(board[i][j]);
      }
    }
  }

  for (let currCol = 0; currCol < 9; currCol++) {
    if (currCol !== col && !(currCol >= minCol && currCol < maxCol)) {
      set.delete(board[row][currCol]);
    }
  }

  for (let currRow = 0; currRow < 9; currRow++) {
    if (currRow !== row && !(currRow >= minRow && currRow < maxRow)) {
      set.delete(board[currRow][col]);
    }
  }

  return [...set.values()];
};

const fillObviousValues = (board: string[][]) => {
  while (true) {
    let row = 0;
    let col = 0;
    let isAdded = false;
    while (row < 9 && col < 9) {
      if (!isEmpty(board[row][col])) {
        [row, col] = getNextPosition(row, col);
        continue;
      }

      const validValues = getValidValues(board, row, col);
      if (validValues.length === 1) {
        board[row][col] = validValues[0];
        isAdded = true;
        break;
      }
      [row, col] = getNextPosition(row, col);
    }

    if (!isAdded) {
      return;
    }
  }
};

function solveSudoku(
  board: string[][],
  currRow: number = 0,
  currCol: number = 0
) {
  if (currRow === 0 && currCol === 0) {
    fillObviousValues(board);
  }
  if (currRow > 8 || currCol > 8) {
    // matrix is full already
    return true;
  }

  while (!isEmpty(board[currRow][currCol])) {
    [currRow, currCol] = getNextPosition(currRow, currCol);

    if (currRow > 8 || currCol > 8) {
      // matrix is full already
      return true;
    }
  }

  // standing at the empty cell
  const validValues = getValidValues(board, currRow, currCol);
  // no valid values
  if (validValues.length === 0) {
    return false;
  }

  for (let i = 0; i < validValues.length; i++) {
    board[currRow][currCol] = validValues[i];
    if (!hasNextPosition(currRow, currCol)) {
      // this was last cell which had to fill with available value
      return true;
    }
    const [nextRow, nextCol] = getNextPosition(currRow, currCol);
    if (solveSudoku(board, nextRow, nextCol)) {
      return true;
    }
  }

  // solution not valid so mark current as empty cell
  board[currRow][currCol] = ".";
  return false;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);

assert.deepEqual(board, [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
]);

const board2 = new Array(9).fill(0).map(() => new Array(9).fill("."));
board2[0][1] = "7";
board2[0][3] = "9";
board2[0][5] = "4";
board2[0][6] = "3";
board2[0][8] = "1";
board2[1][1] = "3";
board2[1][4] = "5";
board2[1][5] = "7";
board2[2][2] = "9";
board2[2][3] = "6";
board2[2][4] = "1";
board2[2][7] = "8";
board2[3][0] = "1";
board2[3][4] = "3";
board2[3][5] = "2";
board2[3][6] = "9";
board2[3][8] = "6";
board2[4][2] = "6";
board2[4][4] = "4";
board2[4][5] = "5";
board2[4][6] = "1";
board2[4][8] = "8";
board2[5][0] = "2";
board2[5][1] = "8";
board2[5][2] = "4";
board2[5][7] = "7";
board2[6][0] = "4";
board2[6][2] = "5";
board2[6][4] = "7";
board2[6][5] = "8";
board2[6][8] = "2";
board2[7][2] = "3";
board2[8][0] = "9";
board2[8][3] = "5";
board2[8][4] = "6";
board2[8][5] = "1";
board2[8][6] = "7";
board2[8][8] = "4";

solveSudoku(board2);
console.log(board2);
