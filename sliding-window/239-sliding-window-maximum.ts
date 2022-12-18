export function maxSlidingWindow(nums: number[], k: number): number[] {
  const maxes: number[] = [];
  let deQueue: { index: number; value: number }[] = [];

  for (let index = 0; index < nums.length; index++) {
    // first element in queue is gone out of range of k
    if (index >= k && deQueue[0].index + k === index) deQueue.shift();

    let queueIndex = deQueue.length - 1;
    while (deQueue.length > 0 && deQueue[deQueue.length - 1].value <= nums[index]) {
      deQueue.pop();
      queueIndex -= 1;
    }
    deQueue.push({ index, value: nums[index] });

    if (index >= k - 1) maxes.push(deQueue[0].value);
  }

  return maxes;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
