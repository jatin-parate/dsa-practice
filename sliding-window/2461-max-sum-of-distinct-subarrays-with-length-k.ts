export function maximumSubarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let max = 0;
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1 + (map.get(nums[i]) ?? 0));
    currSum += nums[i];
    // time to delete previous element at starting of window
    if (i >= k) {
      const index = i - k;
      currSum -= nums[index];
      const freq = map.get(nums[index])!;
      if (freq > 1) {
        map.set(nums[index], freq - 1);
      } else {
        map.delete(nums[index]);
      }
    } else if (i < k - 1) {
      continue;
    }

    if (map.size === k) {
      max = Math.max(max, currSum);
    }
  }

  return max;
}

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // 15
console.log(maximumSubarraySum([4, 4, 4], 3)); // 15
