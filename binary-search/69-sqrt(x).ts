export function mySqrt(x: number): number {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 0,
    right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid === left) {
      return left;
    }

    const squared = mid ** 2;
    if (squared === x) {
      return mid;
    } else if (squared < x) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return 0;
}

console.log(mySqrt(10));
console.log(mySqrt(8));
