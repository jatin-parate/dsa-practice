import assert from "assert";

const canFinish = (
  n: number,
  preRequisites: [number, number][]
): boolean => {
  const adjMatrix: number[][] = new Array(n).fill(0).map(() => []);

  preRequisites.forEach(([dependent, dependee]) => {
    adjMatrix[dependee].push(dependent);
  });

  return adjMatrix.every((adjacentNodes, currNode) => {
    const queue = [...adjacentNodes];
    const seen = new Set<number>();

    while (queue.length) {
      const current = queue.shift()!;
      seen.add(current);
      if (current === currNode) {
        return false;
      }
      adjMatrix[current].forEach((ele) => {
        if (!seen.has(ele)) {
          queue.push(ele);
        }
      });
    }

    return true;
  });
};

assert.equal(
  canFinish(6, [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ]),
  true
);

assert.equal(
  canFinish(6, [
    [1, 0],
    [2, 1],
    [5, 2],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ]),
  false
);
