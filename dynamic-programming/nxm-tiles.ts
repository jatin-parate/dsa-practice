import runWithTimestamp from "../utils/runWithTimestamp";

const totalWays2 = (n: number, m: number, dp: number[] = []): number => {
  if (n === 0 || m === 0) {
    return 1;
  }

  if (n < m) {
    return 1;
  }

  if (dp[n] !== undefined) {
    console.log("found for ", n);

    return dp[n];
  }

  return (dp[n] = totalWays2(n - 1, m, dp) + totalWays2(n - m, m, dp));
};

const totalWays2Tabulation = (n: number, m: number): number => {
  const dp = new Array<number>(n + 1).fill(1);

  for (let i = m; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - m];
  }

  return dp[n];
};

runWithTimestamp(() => totalWays2(4, 4) /*totalWaysTabulated(4) */);
runWithTimestamp(() => totalWays2(6, 5) /*totalWaysTabulated(5) */);
runWithTimestamp(() => totalWays2(10, 6) /*totalWaysTabulated(6) */);
runWithTimestamp(() => totalWays2(20, 10) /*totalWaysTabulated(10) */);

runWithTimestamp(() => totalWays2Tabulation(4, 4) /*totalWaysTabulated(4) */);
runWithTimestamp(() => totalWays2Tabulation(6, 5) /*totalWaysTabulated(5) */);
runWithTimestamp(() => totalWays2Tabulation(10, 6) /*totalWaysTabulated(6) */);
runWithTimestamp(
  () => totalWays2Tabulation(20, 10) /*totalWaysTabulated(10) */
);
