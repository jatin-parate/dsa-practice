const bfs = (graph: number[][]): number[] => {
  const traverseList = new Array(graph.length);
  let traverseListLastIndex = -1;
  const queue: number[] = [];
  const seen = new Set<number>();
  for (let i = 0; i < graph.length; i += 1) {
    if (graph[i].length > 0) {
      queue.push(i);
      break;
    }
  }

  while (queue.length) {
    const vertex = queue.shift()!;
    seen.add(vertex);
    traverseList[++traverseListLastIndex] = vertex;
    const connections = graph[vertex];
    connections.forEach((connectedVertex) => {
      if (!seen.has(connectedVertex)) {
        queue.push(connectedVertex);
      }
    });
  }

  return traverseList;
};

console.log(
  bfs([[1, 3], [0], [3, 8], [0, 4, 5, 2], [3, 6], [3], [4, 7], [6], [2]])
);
