function combinationSum4(
  nums: number[],
  target: number,
  dp: Record<string, number> = {}
): number {
  let newTotal = 0;

  for (let num of nums) {
    const newTarget = target - num;

    if (dp[newTarget] !== undefined) {
      newTotal += dp[newTarget];
      continue;
    }
    if (newTarget < 0) {
      dp[newTarget] = 0;
      continue;
    }
    if (newTarget === 0) {
      dp[newTarget] = 1;
    } else {
      dp[newTarget] = combinationSum4(nums, newTarget, dp);
    }
    newTotal += dp[newTarget];
  }

  return newTotal;
}

console.log(combinationSum4([1, 2, 3], 4));
