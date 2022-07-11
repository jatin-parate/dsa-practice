const totalWays = (n: number, dp: number[] = []): number => {
  if (n < 4) {
    return 1;
  }

  if (dp[n] !== undefined) {
    return dp[n];
  }

  return (dp[n] = totalWays(n - 1, dp) + totalWays(n - 4, dp));
};

const totalWaysTabulated = (n: number): number => {
  const table = new Array<number>(n + 1).fill(1);

  for (let i = 4; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 4];
  }

  return table[n];
};

console.log(totalWays(4), totalWaysTabulated(4));
console.log(totalWays(5), totalWaysTabulated(5));
console.log(totalWays(6), totalWaysTabulated(6));
console.log(totalWays(10), totalWaysTabulated(10));
