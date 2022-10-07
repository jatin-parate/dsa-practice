function rob(nums: number[]): number {
  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)));
}

function helper(nums: number[]) {
  let rob1 = 0;
  let rob2 = 0;
  let newRob: number;

  for (let n of nums) {
    newRob = Math.max(rob1 + n, rob2);
    rob1 = rob2;
    rob2 = newRob;
  }

  return rob2;
}

console.log(rob([2, 3, 2]));

console.log(rob([1, 2, 3, 1]));
