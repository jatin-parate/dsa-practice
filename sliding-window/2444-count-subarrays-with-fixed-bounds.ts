export function countSubarrays(
  nums: number[],
  minK: number,
  maxK: number
): number {
  let total = 0;
  let minFound = false,
    maxFound = false;
  let start = 0,
    minStart = 0,
    maxStart = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < minK || num > maxK) {
      minFound = false;
      maxFound = false;
      start = i + 1;
    }
    if (num === minK) {
      minFound = true;
      minStart = i;
    }
    if (num === maxK) {
      maxFound = true;
      maxStart = i;
    }
    if (minFound && maxFound) {
      total += Math.min(minStart, maxStart) - start + 1;
    }
  }

  return total;
}

console.log(countSubarrays([2, 1, 5, 4, 1, 3, 5, 4], 1, 5));
console.log(
  countSubarrays(
    [
      8121, 8121, 955792, 925378, 383928, 673920, 457030, 925378, 925378,
      925378, 92893, 456370, 925378,
    ],
    8121,
    925378
  )
); // 0
console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)); // 2
console.log(countSubarrays([1, 1, 1, 1], 1, 1)); // 10
