export function longestOnes(nums: number[], k: number): number {
  let start = -1;
  let end = -1;
  let max = -Infinity;

  while (end < nums.length - 1) {
    end += 1;
    if (nums[end] === 0) {
      k -= 1;
    }

    if (start === -1) {
      start = 0;
    }

    if (k >= 0) {
      max = Math.max(max, end - start + 1);
    }

    while (k < 0 && start < end) {
      // shrink window
      if (nums[start] === 0) {
        k += 1;
      }
      start += 1;
    }
    if (k >= 0) {
      max = Math.max(max, end - start + 1);
    }
  }

  return max === -Infinity ? 0 : max;
}

console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)); // 3
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
