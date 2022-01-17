/**
 * @param {number[]} nums
 * @return {boolean}
 * @constraints
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */
const containsDuplicate = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      return true;
    }

    map.set(nums[i]);
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
