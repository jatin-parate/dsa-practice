/**
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const numIdenticalPairs = (nums) => {
  const hash = {};
  let count = 0;

  nums.forEach((num) => {
    if (hash[num] == null) {
      hash[num] = 1;
    } else {
      hash[num] += 1;
    }
  });

  Object.keys(hash).forEach((key) => {
    const num = hash[key];
    count += (num * (num - 1)) / 2;
  });

  return count;
};
