export function findMaxAverage(nums: number[], k: number): number {
  let sum = nums.slice(0, k).reduce((prev, curr) => curr + prev, 0);
  let maxAvg = sum / k;

  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    const avg = sum / k;
    maxAvg = Math.max(maxAvg, avg);
  }

  return maxAvg;
}
