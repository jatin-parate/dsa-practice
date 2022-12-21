export function shortestSubarray(nums: number[], k: number): number {
  let shortest = Infinity;
  let sum = 0;
  const deQueue: { i: number, val: number }[] = []

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= k) shortest = Math.min(shortest, i + 1);

    // compress from left
    let curr: typeof deQueue[number] | undefined;
    while (deQueue.length > 0 && sum - deQueue[0].val >= k) {
      curr = deQueue.shift()!;
    }

    if (curr) {
      shortest = Math.min(shortest, i - curr.i);
    }

    // pop from end
    while (deQueue.length > 0 && deQueue.at(-1)!.val >= sum) {
      deQueue.pop();
    }

    deQueue.push({ i, val: sum })
  }

  return shortest === Infinity ? -1 : shortest;
}

console.log(
  shortestSubarray(
    [
      -34, 37, 51, 3, -12, -50, 51, 100, -47, 99, 34, 14, -13, 89, 31, -14, -44,
      23, -38, 6,
    ],
    151
  )
); // 2
console.log(shortestSubarray([-28, 81, -20, 28, -29], 89)); // 3
console.log(shortestSubarray([1], 1)); // 1
console.log(shortestSubarray([1, 2], 4)); // -1
console.log(shortestSubarray([2, -1, 2], 3)); // 3
