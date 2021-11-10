/**
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
const smallerNumbersThanCurrent = (nums) => {
  const map = new Map();

  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  });

  const result = new Array(nums.length).fill(0);

  nums.forEach((num, index) => {
    map.forEach((val, key) => {
      if (key < num) {
        result[index] += val;
      }
    });
  });

  return result;
};
