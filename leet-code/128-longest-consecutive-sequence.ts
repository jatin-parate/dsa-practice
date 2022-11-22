function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  nums.forEach((n) => {
    if (!numSet.has(n - 1)) {
      let length = 0;
      while (numSet.has(n + length)) {
        length += 1;
      }

      longest = Math.max(length, longest);
    }
  });

  return longest;
}
