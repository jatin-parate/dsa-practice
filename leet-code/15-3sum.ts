/**
 *
 * @param nums array
 * @constraints
 * - 3 <= nums.length <= 3000
 * - -10^5 <= nums[i] <= 10^5
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (left < right && nums[left] == nums[left - 1]) {
          left += 1;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([1, 2, -2, -1]));

console.log(threeSum([-1, 0, 1, 2, -1, -4]), [
  [-1, -1, 2],
  [-1, 0, 1],
]);
console.log(threeSum([0, 1, 1]), []);
console.log(threeSum([0, 0, 0]), [[0, 0, 0]]);
