function networkDelayTime(
  edges: [number, number, number][],
  n: number,
  k: number
): number {
  k--;
  const weights = new Array<number>(n).fill(Infinity);
  const adjacencyMatrix: number[][] = new Array(n).fill(0);
  adjacencyMatrix.forEach((_, i) => {
    adjacencyMatrix[i] = new Array(i).fill(Infinity);
  });

  edges.forEach(([source, target, time]) => {
    source--;
    target--;
    adjacencyMatrix[source][target] = time;
  });

  const queue: number[] = [k];
  weights[k] = 0;
  while (queue.length) {
    const node = queue.shift()!;

    adjacencyMatrix[node].forEach((time, adjacentNode) => {
      if (time === Infinity) {
        return;
      }
      const newWeight = weights[node] + time;
      if (weights[adjacentNode] > newWeight) {
        weights[adjacentNode] = newWeight;
        queue.push(adjacentNode);
      }
    });
  }

  console.log(weights);

  const totalTime = Math.max(...weights);

  return totalTime === Infinity ? -1 : totalTime;
}
