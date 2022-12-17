export function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= i + indexDiff && j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsNearbyAlmostDuplicate([1, 2, 5, 6, 7, 2, 4], 4, 0));
console.log(containsNearbyAlmostDuplicate([4,1,-1,6,5], 3, 1));
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
