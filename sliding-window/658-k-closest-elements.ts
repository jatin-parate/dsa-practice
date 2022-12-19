function findClosestElements(arr: number[], k: number, x: number): number[] {
  let start = 0;
  for (let i = 1; i <= arr.length - k; i++) {
    const lastEleInWindow = arr[i + k - 1];
    const lastEleDiff = Math.abs(x - lastEleInWindow);
    const firstEleDiff = Math.abs(x - arr[i - 1]);

    if (lastEleInWindow === arr[i - 1] || firstEleDiff > lastEleDiff) {
      start++;
    } else {
      break;
    }
  }

  return arr.slice(start, start + k);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 10));
