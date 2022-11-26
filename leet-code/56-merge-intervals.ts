function intervalComesBefore(source: number[], target: number[]): boolean {
  return source[0] < target[0] && source[1] < target[0];
}

function merge(intervals: number[][]): number[][] {
  intervals.sort(([a], [b]) => a - b);
  let i = 1;
  const n = intervals.length;
  let res: typeof intervals = [intervals[0]];

  while (i < n) {
    if (!intervalComesBefore(res.at(-1)!, intervals[i])) {
      res[res.length - 1][0] = Math.min(
        res[res.length - 1][0],
        intervals[i][0]
      );
      res[res.length - 1][1] = Math.max(
        res[res.length - 1][1],
        intervals[i][1]
      );
    } else {
      res.push(intervals[i]);
    }

    i++;
  }

  return res;
}

console.log(
  merge([
    [2, 4],
    [1, 3],
  ])
);
