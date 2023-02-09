import assert from "node:assert";

export function numTrees(n: number, dp: number[] = [1, 1, 2]): number {
  if (dp[n] !== undefined) return dp[n];

  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    count += numTrees(i - 1, dp) * numTrees(n - i, dp);
  }

  return (dp[n] = count);
}

assert.equal(numTrees(6), 132);
assert.equal(numTrees(4), 14);
assert.equal(numTrees(3), 5);
console.log(numTrees(1));
console.log(numTrees(2));
