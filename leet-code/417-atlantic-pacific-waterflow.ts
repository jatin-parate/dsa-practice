/**
 *
 * @constraints
 * - m == heights.length
 * - n == heights[r].length
 * - 1 <= m, n <= 200
 * - 0 <= heights[r][c] <= 105
 */
function pacificAtlantic(heights: number[][]): number[][] {
  const ROWS = heights.length;
  const COLS = heights[0].length;

  const pac = new Set<string>();
  const atl = new Set<string>();

  const matrixDfs = (
    r: number,
    c: number,
    visit: Set<string>,
    prevHeight: number
  ) => {
    if (
      visit.has(`[${r}, ${c}]`) ||
      r < 0 ||
      c < 0 ||
      r === ROWS ||
      c === COLS ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    visit.add(`[${r}, ${c}]`);
    matrixDfs(r + 1, c, visit, heights[r][c]);
    matrixDfs(r - 1, c, visit, heights[r][c]);
    matrixDfs(r, c + 1, visit, heights[r][c]);
    matrixDfs(r, c - 1, visit, heights[r][c]);
  };

  for (let c = 0; c < COLS; c++) {
    matrixDfs(0, c, pac, heights[0][c]);
    matrixDfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    matrixDfs(r, 0, pac, heights[r][0]);
    matrixDfs(r, COLS - 1, atl, heights[r][COLS - 1]);
  }

  const res: [number, number][] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pac.has(`[${r}, ${c}]`) && atl.has(`[${r}, ${c}]`)) {
        res.push([r, c]);
      }
    }
  }

  return res;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
