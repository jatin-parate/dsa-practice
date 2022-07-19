const networkDelayTime = (
  times: [number, number, number][],
  n: number,
  k: number
) => {
  const distances = new Array(n).fill(Infinity);
  const adjList = distances.map<[number, number][]>(() => []);

  distances[k - 1] = 0;
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);

  for (let i = 0; i < times.length; i += 1) {
    const [source, target, weight] = times[i];
    adjList[source - 1].push([target - 1, weight]);
  }

  while (!heap.isEmpty()) {
    const currentVertex = heap.pop()!;
    const adjacent = adjList[currentVertex];

    for (let i = 0; i < adjacent.length; i++) {
      const [neighboringVertex, weight] = adjacent[i];

      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        heap.push(neighboringVertex);
      }
    }
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};
