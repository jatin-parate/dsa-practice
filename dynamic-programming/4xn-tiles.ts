const totalWays = (n: number, dp: number[] = []): number => {
  if (n < 4) {
    return 1;
  }

  if (dp[n] !== undefined) {
    return dp[n];
  }

  return (dp[n] = totalWays(n - 1, dp) + totalWays(n - 4, dp));
};

console.log(totalWays(4));
console.log(totalWays(5));
console.log(totalWays(6));
console.log(totalWays(10));
