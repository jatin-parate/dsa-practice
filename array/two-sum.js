/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hash = {
      [target-nums[0]]: 0,
    };

    for (let i = 1; i < nums.length; i+=1) {
      if (hash[nums[i]] != null) {
        return [hash[nums[i]], i];
      }

      hash[target-nums[i]] = i;
    }
};

// console.log(twoSum([3,3], 6))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([2,7,11,15], 9))