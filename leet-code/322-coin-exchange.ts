import assert from "assert";

/**
 *
 * @constraints
 * - 1 <= coins.length <= 12
 * - 1 <= coins[i] <= 2^31 - 1
 * - 0 <= amount <= 104
 */
function coinChange(
  coins: number[],
  amount: number,
  exchanges = 0,
  dp: { [key: string]: number } = {}
): number {
  if (dp[amount] !== undefined) {
    return dp[amount];
  }
  console.log(dp);

  if (amount === 0) {
    return exchanges;
  }

  if (amount < 0) {
    return -1;
  }

  let minExchange = -1;

  for (let coin of coins) {
    if (amount >= coin) {
      const currMinExchanges = coinChange(
        coins,
        amount - coin,
        exchanges + 1,
        dp
      );

      if (minExchange === -1) {
        minExchange = currMinExchanges;
      } else if (currMinExchanges !== -1 && currMinExchanges < minExchange) {
        minExchange = currMinExchanges;
      }
    }
  }

  dp[amount] = minExchange;

  return minExchange;
}

assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
