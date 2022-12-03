export function recursiveFindMinAndMax(arr: number[]): [number, number] {
  const n = arr.length;

  if (n === 1) {
    const [first] = arr;
    return [first, first];
  }

  const m = Math.floor(n / 2);
  const [min1, max1] = recursiveFindMinAndMax(arr.slice(0, m));
  const [min2, max2] = recursiveFindMinAndMax(arr.slice(m));

  return [Math.min(min1, min2), Math.max(max1, max2)];
}

console.log(recursiveFindMinAndMax([4, 3, 2, 1]));
