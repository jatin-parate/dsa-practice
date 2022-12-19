export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let start = 0,
    end = 0,
    count = 0,
    prod = 1;

  while (end < nums.length) {
    prod *= nums[end];
    while (prod >= k) prod /= nums[start++];
    count += 1 + (end - start);
    end++;
  }

  return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 1, 1, 1], 2));
