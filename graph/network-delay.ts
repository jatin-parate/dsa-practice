function networkDelayTime(
  times: [number, number, number][],
  n: number,
  k: number
): number {
  const distances = new Array<number>(n).fill(Infinity);
  distances[k - 1] = 0;

  for (let i = 0; i < n - 1; i += 1) {
    let count = 0;
    for (let j = 0; j < times.length; j += 1) {
      const source = times[j][0] - 1;
      const target = times[j][1] - 1;
      const weight = times[j][2];

      if (distances[source] + weight < distances[target]) {
        distances[target] = distances[source] + weight;
        count += 1;
      }
    }

    if (count === 0) {
      break;
    }
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
}
