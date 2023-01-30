export function minimumTotal(
  triangle: number[][],
  cache: number[][] = [],
  i = 0,
  j = 0
): number {
  if (i >= triangle.length) return 0;
  if (cache[i]?.[j] !== undefined) {
    return cache[i][j];
  }

  let sum =
    triangle[i][j] +
    Math.min(
      minimumTotal(triangle, cache, i + 1, j),
      minimumTotal(triangle, cache, i + 1, j + 1)
    );

  if (!cache[i]) {
    cache[i] = new Array(triangle[i].length).fill(undefined);
  }

  cache[i][j] = sum;

  return sum;
}
