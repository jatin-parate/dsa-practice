export function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
}

console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
