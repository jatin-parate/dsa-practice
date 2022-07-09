const traverseDfs = (
  grid: number[][],
  seen = new Set<number>(),
  traversedNodes: number[] = [],
  currNode?: number
): number[] => {
  if (currNode == null) {
    currNode = 0;
  }
  if (!seen.has(currNode)) {
    seen.add(currNode);
    traversedNodes.push(currNode);
    for (let i = 0; i < grid[currNode].length; i += 1) {
      if (!seen.has(grid[currNode][i])) {
        traverseDfs(grid, seen, traversedNodes, grid[currNode][i]);
      }
    }
  }

  return traversedNodes;
};

console.log(
  traverseDfs([
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
  ])
);
