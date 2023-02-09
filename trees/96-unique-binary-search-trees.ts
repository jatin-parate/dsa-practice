import assert from "node:assert";

export function numTrees(n: number): number {
  let count = 0;
  const dp: number[] = [0, 1, 2];

  for (let i = 1; i <= n; i += 1) {
    count += fn(1, i, n, dp);
  }

  return count;
}

function fn(min: number, root: number, max: number, dp: number[]): number {
  let count = 0;
  const leftTreeNodesCount = root - min;
  const rightTreeNodesCount = max - root;

  if (leftTreeNodesCount > 1) {
    if (dp[leftTreeNodesCount] === undefined) {
      let newLeftTreeNodesCount = 0;
      for (let i = min; i < root; i += 1) {
        newLeftTreeNodesCount += fn(min, i, root - 1, dp);
      }

      dp[leftTreeNodesCount] = newLeftTreeNodesCount;
    }

    count = dp[leftTreeNodesCount];
  }

  if (rightTreeNodesCount > 1) {
    if (dp[rightTreeNodesCount] === undefined) {
      let newRightTreeNodesCount = 0;

      for (let i = root + 1; i <= max; i += 1) {
        newRightTreeNodesCount += fn(root + 1, i, max, dp);
      }

      dp[rightTreeNodesCount] = newRightTreeNodesCount;
    }

    count =
      count == 0 ? dp[rightTreeNodesCount] : count * dp[rightTreeNodesCount];
  }

  if (count === 0) return 1;

  return count;
}

assert.equal(numTrees(6), 132);
assert.equal(numTrees(4), 14);
assert.equal(numTrees(3), 5);
console.log(numTrees(1));
console.log(numTrees(2));
