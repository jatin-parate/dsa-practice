import assert from "assert";

function isValidSudoku(board: string[][]): boolean {
  // Check row wise
  const colSets = new Array<Array<undefined | true>>(9);
  for (let i = 0; i < 9; i += 1) {
    colSets[i] = new Array(10);
  }

  for (let row = 0; row < board.length; row += 1) {
    const currRowSet = new Array<undefined | true>(10);
    for (let col = 0; col < board[row].length; col += 1) {
      if (board[row][col] !== ".") {
        // if (currRowSet.has(board[row][col])) {
        if (currRowSet[board[row][col] as any] === true) {
          return false;
        }
        if (colSets[col][board[row][col] as any] === true) {
          return false;
        }

        currRowSet[board[row][col] as any] = true;
        colSets[col][board[row][col] as any] = true;
      }
    }
  }

  // Check sub-box wise
  for (let boxNumber = 0; boxNumber < 9; boxNumber += 1) {
    const currBoxSet = new Array<undefined | true>(10);
    const colStart = (boxNumber % 3) * 3;
    const colEnd = colStart + 2;

    const rowStart = Math.floor(boxNumber / 3) * 3;
    const rowEnd = rowStart + 2;

    for (let row = rowStart; row <= rowEnd; row += 1) {
      for (let col = colStart; col <= colEnd; col += 1) {
        const val = board[row][col];

        if (val !== ".") {
          if (currBoxSet[val as any] === true) {
            return false;
          }

          currBoxSet[val as any] = true;
        }
      }
    }
  }

  return true;
}

assert.equal(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  true
);
