/**
 *
 * @param list sorted array
 * @param item item to find
 * @returns index of found element else returns `-1`
 */
function binarySearch(list: number[], item: number): number {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 3));
console.log(binarySearch([1, 2, 3, 4], 5));
