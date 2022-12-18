export function maxSlidingWindow(nums: number[], k: number): number[] {
  let start = 0,
    end = start + k - 1;
  let currMaxIndex = -1;
  const res: number[] = [];

  function calculateCurrMaxIndex(): void {
    currMaxIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (nums[i] > nums[currMaxIndex]) {
        currMaxIndex = i;
      }
    }
  }

  while (end < nums.length) {
    if (currMaxIndex < start) {
      calculateCurrMaxIndex();
    } else if (nums[end] > nums[currMaxIndex]) {
      currMaxIndex = end;
    }

    res.push(nums[currMaxIndex]);

    // === must increment indexes at the end ===
    start++;
    end++;
  }

  return res;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
