const dijkstra = (
  n: number,
  k: number,
  edges: [number, number, number][]
): number => {
  const weights = new Array<number>(n).fill(Infinity);
  const adjacencyMatrix: number[][] = new Array(n).fill(0);
  adjacencyMatrix.forEach((_, i) => {
    adjacencyMatrix[i] = new Array(i).fill(Infinity);
  });

  edges.forEach(([source, target, time]) => {
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
};

console.log(
  dijkstra(6, 0, [
    [0, 1, 4],
    [0, 2, 2],
    [1, 3, 1],
    [2, 3, 6],
    [2, 4, 5],
    [3, 5, 4],
    [4, 5, 10],
  ])
);

console.log(
  dijkstra(5, 0, [
    [0, 1, 9],
    [0, 2, 2],
    [1, 3, 1],
    [2, 1, 4],
    [2, 3, 6],
    [3, 4, 7],
    [4, 1, 3],
    [3, 0, 5],
  ])
);

console.log(
  dijkstra(3, 0, [
    [0, 1, 8],
    [2, 0, 3],
  ])
);
