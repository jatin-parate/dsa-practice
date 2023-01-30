export function minimumTotal(triangle: number[][], i = 0, j = 0): number {
  if (i >= triangle.length) return 0;

  let sum =
    triangle[i][j] +
    Math.min(
      minimumTotal(triangle, i + 1, j),
      minimumTotal(triangle, i + 1, j + 1)
    );

  return sum;
}
