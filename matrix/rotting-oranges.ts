import assert from "assert";

enum Cell {
  EMPTY = 0,
  ROTTEN = 2,
  FRESH = 1,
}

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

type CellAddress = [number, number];

const getFreshOrangeCells = (matrix: Cell[][]): CellAddress[] => {
  let freshOrangeCells: CellAddress[] = [];

  matrix.forEach((row, rowNumber) => {
    row.forEach((cell, cellNumber) => {
      if (cell === Cell.FRESH) {
        freshOrangeCells.push([rowNumber, cellNumber]);
      }
    });
  });

  return freshOrangeCells;
};

const ifAdjacentRottenOrangeExists = (matrix: Cell[][], cell: CellAddress) => {
  return directions.some(
    (direction) =>
      matrix[cell[0] + direction[0]]?.[cell[1] + direction[1]] === Cell.ROTTEN
  );
};

const orangesRotting = (matrix: Cell[][]): number => {
  let freshCells = getFreshOrangeCells(matrix);
  let totalMins = 0;

  while (freshCells.length) {
    const newRottenCells: number[] = [];

    freshCells.forEach((freshOrangeCell, i) => {
      if (ifAdjacentRottenOrangeExists(matrix, freshOrangeCell)) {
        newRottenCells.push(i);
      }
    });

    if (!newRottenCells.length) {
      return -1;
    }
    newRottenCells.forEach((i) => {
      const [row, col] = freshCells[i];
      matrix[row][col] = Cell.ROTTEN;
    });
    totalMins++;
    freshCells = freshCells.filter(
      ([row, col]) => matrix[row][col] == Cell.FRESH
    );
  }

  return totalMins;
};

assert.equal(orangesRotting([[0, 0, 0, 0]]), 0);
assert.equal(orangesRotting([[0, 2]]), 0);
assert.equal(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
  -1
);
assert.equal(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  4
);
assert.equal(
  orangesRotting([
    [0, 0, 0, 0],
    [0, 1, 2, 0],
  ]),
  1
);
