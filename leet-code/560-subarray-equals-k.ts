export function subarraySum(nums: number[], k: number): number {
  const min = Math.min(...nums);
  const hasNegative = min < 0;
  let total = 0;
  const n = nums.length;
  for (let starting = 0; starting < n; starting++) {
    let currentSum = 0;
    let i = starting;

    while (i < n) {
      currentSum += nums[i];

      if (currentSum === k) {
        total += 1;
      }
      if (!hasNegative && currentSum > k) {
        break;
      } else {
        i++;
      }
    }
  }

  return total;
}

console.log(subarraySum([1, 2, 1, 2, 1], 3));
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, -1, 0], 0));
