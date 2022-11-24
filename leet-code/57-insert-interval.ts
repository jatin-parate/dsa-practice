function intervalComesBefore(source: number[], target: number[]): boolean {
  return source[0] < target[0] && source[1] < target[0];
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  const n = intervals.length;
  const res: typeof intervals = [];

  while (i < n && intervalComesBefore(intervals[i], newInterval)) {
    res.push(intervals[i]);
    i++;
  }

  const intervalsToMerge: typeof intervals = [];
  while (i < n && !intervalComesBefore(newInterval, intervals[i])) {
    intervalsToMerge.push(intervals[i]);
    i++;
  }

  if (intervalsToMerge.length === 0) {
    res.push(newInterval);
  } else {
    res.push([
      Math.min(newInterval[0], intervalsToMerge[0][0]),
      Math.max(newInterval[1], intervalsToMerge.at(-1)![1]),
    ]);
  }

  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
