export function find132pattern(nums: number[]): boolean {
  const monoDecreasingStack: { num: number; minLeft: number }[] = [];
  let currMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    while (
      monoDecreasingStack.length > 0 &&
      n >= monoDecreasingStack.at(-1)!.num
    ) {
      monoDecreasingStack.pop();
    }

    if (
      monoDecreasingStack.length > 0 &&
      n > monoDecreasingStack.at(-1)!.minLeft
    ) {
      return true;
    }

    monoDecreasingStack.push({ minLeft: currMin, num: n });
    currMin = Math.min(currMin, n);
  }

  return false;
}
