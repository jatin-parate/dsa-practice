import assert from "assert";

const dfs = (
  currId: number,
  adjList: number[][],
  informTime: number[]
): number => {
  if (adjList[currId].length === 0) return 0;

  let max = -Infinity;
  const subordinates = adjList[currId];

  subordinates.forEach((subOrdinateId) => {
    max = Math.max(max, dfs(subOrdinateId, adjList, informTime));
  });

  return max + informTime[currId];
};

const numOfMinutes = (
  n: number,
  headId: number,
  managers: number[],
  informTime: number[]
): number => {
  const adjList = managers.map<number[]>(() => []);
  for (let e = 0; e < n; e++) {
    const manager = managers[e];
    if (manager === -1) continue;
    adjList[manager].push(e);
  }

  return dfs(headId, adjList, informTime);
};

assert.equal(
  numOfMinutes(8, 4, [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 3, 6, 0]),
  13
);

assert.equal(
  numOfMinutes(
    11,
    4,
    [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4],
    [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337]
  ),
  2560
);

assert.equal(
  numOfMinutes(
    15,
    0,
    [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  ),
  3
);
