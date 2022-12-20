export function findLength(nums1: number[], nums2: number[]): number {
  let n = nums1.length, m = nums2.length;
  const dp = new Array<number[]>(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array<number>(m).fill(0);
  }

  let max = 0;

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (nums1[i] === nums2[j]) {
        if (i > 0 && j > 0) {
          dp[i][j] = 1 + dp[i - 1][j - 1]
        } else {
          dp[i][j] = 1;
        }

        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max;
}

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
console.log(findLength([0,0,0,0,0], [0,0,0,0,0]));
