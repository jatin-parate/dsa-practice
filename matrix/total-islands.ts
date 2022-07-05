import assert from "assert";

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const matrixBfs = (
  grid: string[][],
  seen: boolean[][],
  queue: [number, number][]
): void => {
  while (queue.length) {
    const [currI, currJ] = queue.shift()!;

    seen[currI][currJ] = true;

    directions.forEach((direction) => {
      const adjacentCell: [number, number] = [
        currI + direction[0],
        currJ + direction[1],
      ];

      if (
        adjacentCell[0] >= 0 &&
        adjacentCell[0] < grid.length &&
        adjacentCell[1] >= 0 &&
        adjacentCell[1] < grid[0].length &&
        !seen[adjacentCell[0]][adjacentCell[1]] &&
        grid[adjacentCell[0]][adjacentCell[1]] === "1"
      ) {
        queue.push(adjacentCell);
        seen[adjacentCell[0]][adjacentCell[1]] = true;
      }
    });
  }
};

function numIslands(grid: string[][]): number {
  const seen = grid.map((row) => row.map<boolean>(() => false));
  let totalIslands = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (seen[i][j] || grid[i][j] === "0") {
        continue;
      }

      // curr element not visited yet
      let queue: [number, number][] = [[i, j]];
      totalIslands += 1;
      matrixBfs(grid, seen, queue);
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
