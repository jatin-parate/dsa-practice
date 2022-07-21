const bellmanFord = (
  n: number,
  k: number,
  edges: [number, number, number][]
) => {
  k--;
  const distances = new Array(n).fill(Infinity);
  distances[k] = 0;
  edges.forEach(([source, target, weight]) => {
    source--;
    target--;
    if (
      distances[source] !== Infinity &&
      distances[source] + weight < distances[target]
    ) {
      distances[target] = distances[source] + weight;
    }
  });

  edges.forEach(([source, target, weight]) => {
    if (
      distances[source] !== Infinity &&
      distances[source] + weight < distances[target]
    ) {
      console.log("Graph contains negative weight cycle");
      return;
    }
  });

  console.log(distances);
};

bellmanFord(5, 1, [
  [1, 2, -1],
  [1, 3, 4],
  [2, 3, 3],
  [2, 4, 2],
  [2, 5, 2],
  [4, 2, 1],
  [4, 3, 5],
  [5, 4, -3],
]);
