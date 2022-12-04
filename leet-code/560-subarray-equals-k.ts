export function subarraySum(nums: number[], k: number): number {
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
      i++;
    }
  }

  return total;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, -1, 0], 0));
