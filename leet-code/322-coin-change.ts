/**
 *
 * @constraints
 * - 1 <= coins.length <= 12
 * - 1 <= coins[i] <= 231 - 1
 * - 0 <= amount <= 104
 */
function coinChange(coins: number[], amount: number): number {
  if (amount < 0) {
    return -1;
  }

  if (amount === 0) {
    return 0;
  }

  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let lowest = Infinity;

    for (let coin of coins) {
      const targetPosition = i - coin;
      if (targetPosition < 0) {
        continue;
      }
      if (!targetPosition) {
      }

      lowest = Math.min(lowest, dp[targetPosition] + 1);
    }

    dp[i] = lowest;
    lowest = Infinity;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([474, 83, 404, 3], 264));
// console.log(coinChange([186, 419, 83, 408], 6249));
