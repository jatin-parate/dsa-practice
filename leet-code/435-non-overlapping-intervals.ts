function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length < 2) {
    return 0;
  }

  intervals.sort(
    ([firstStart], [secondStart]) =>
      firstStart - secondStart
  );

  let res = 0;
  let [, prevEnd] = intervals[0];
  for (let [start, end] of intervals.slice(1)) {
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      res++;
      prevEnd = Math.min(end, prevEnd);
    }
  }

  return res;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
