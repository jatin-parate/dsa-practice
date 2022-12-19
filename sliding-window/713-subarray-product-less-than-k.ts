export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) {
      continue;
    }

    res++;
    let product = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];
      if (product >= k) {
        break;
      }

      res++;
    }
  }

  return res;
}
