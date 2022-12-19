export function medianSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  for (let i = 0; i <= nums.length - k; i++) {
    const arr = nums.slice(i, i + k);
    arr.sort((a, b) => a - b);
    console.log(arr);

    if (k % 2 === 0) {
      const tmp = k / 2;
      result.push((arr[tmp] + arr[tmp - 1]) / 2);
    } else {
      result.push(arr[Math.floor(k / 2)]);
    }
  }

  return result;
}

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3));
console.log(medianSlidingWindow([1, 4, 2, 3], 4));
