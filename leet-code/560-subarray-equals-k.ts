export function subarraySum(nums: number[], k: number): number {
  let res = 0;
  let currSum = 0;
  let prefixSums: Record<string, number> = { 0: 1 };

  for (let n of nums) {
    currSum += n;
    let diff = currSum - k;

    res += prefixSums[diff] || 0;
    prefixSums[currSum] = 1 + (prefixSums[currSum] || 0);
  }

  return res;
}

console.log(
  subarraySum([-92, -63, 75, -86, -58, 22, 31, -16, -66, -67, 420], 100)
); // 1
console.log(subarraySum([1, 2, 1, 2, 1], 3)); // 4
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, -1, 0], 0)); // 3
