import assert from "assert";

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const matrixBfs = (grid: string[][], i: number, j: number): void => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === "0" ||
    grid[i][j] === "visited"
  ) {
    return;
  }
  grid[i][j] = "visited";
  directions.forEach((direction) => {
    matrixBfs(grid, i + direction[0], j + direction[1]);
  });
};

function numIslands(grid: string[][]): number {
  let totalIslands = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "0" || grid[i][j] === "visited") {
        continue;
      }

      // curr element not visited yet
      totalIslands += 1;
      matrixBfs(grid, i, j);
    }
  }

  return totalIslands;
}

assert.equal(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);

assert.equal(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  3
);
