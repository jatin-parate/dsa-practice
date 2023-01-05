var guess = function (num: number): -1 | 0 | 1 {
  return -1;
};

export function guessNumber(n: number): number {
  let left = 1,
    right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
