export function maxSlidingWindow(nums: number[], k: number): number[] {
  let start = 0,
    end = start + k - 1;
  let result: number[] = [];

  while (end < nums.length) {
    let currentMaxIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (nums[i] > nums[currentMaxIndex]) currentMaxIndex = i;
    }

    // find next maximum in the range of currentMaxIndex
    let nextMaxIndex = -1;
    for (
      let i = currentMaxIndex + 1;
      i < nums.length && i < currentMaxIndex + k;
      i++
    ) {
      if (nums[i] > nums[currentMaxIndex]) {
        nextMaxIndex = i;
        break;
      }
    }

    // console.log("going in loop");

    while (
      end < nums.length &&
      start <= currentMaxIndex &&
      (nextMaxIndex === -1 || end < nextMaxIndex)
    ) {
      // console.log(
      //   nums[currentMaxIndex],
      //   ":",
      //   start,
      //   "to",
      //   end,
      //   "with curr max index",
      //   currentMaxIndex,
      //   "and next max index",
      //   nextMaxIndex
      // );

      result.push(nums[currentMaxIndex]);
      start++;
      end++;
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
