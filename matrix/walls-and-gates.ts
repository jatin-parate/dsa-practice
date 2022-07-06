const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

enum CellEnum {
  WALL = -1,
  GATE = 0,
  infinity = 2147483647,
}

type Cell = CellEnum & number;
type CellAddress = [number, number];

const getGates = (grid: Cell[][]): CellAddress[] => {
  const gates: CellAddress[] = [];

  grid.forEach((row, rowNumber) => {
    row.forEach((cell, colNumber) => {
      if (cell === CellEnum.GATE) {
        gates.push([rowNumber, colNumber]);
      }
    });
  });

  return gates;
};

const wallsAndGates = (grid: Cell[][]): typeof grid => {
  const queue = getGates(grid);

  while (queue.length) {
    const [row, col] = queue.shift()!;

    directions.forEach((direction) => {
      const cellRow = row + direction[0];
      const cellCol = col + direction[1];
      const cellValue = grid[cellRow]?.[cellCol];
      if (cellValue != null) {
        const newVal = Math.min(
          grid[cellRow][cellCol],
          grid[row][col] === CellEnum.GATE ? 1 : grid[row][col] + 1
        );
        if (newVal !== grid[cellRow][cellCol]) {
          grid[cellRow][cellCol] = newVal;
          queue.push([cellRow, cellCol]);
        }
      }
    });
  }

  return grid;
};

console.log(
  wallsAndGates([
    [CellEnum.infinity, CellEnum.WALL, CellEnum.GATE, CellEnum.infinity],
    [CellEnum.infinity, CellEnum.infinity, CellEnum.infinity, CellEnum.WALL],
    [CellEnum.infinity, CellEnum.WALL, CellEnum.infinity, CellEnum.WALL],
    [CellEnum.GATE, CellEnum.WALL, CellEnum.infinity, CellEnum.infinity],
  ])
);
