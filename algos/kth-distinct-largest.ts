export function kthDistinctLargest(k: number, arr: number[]): number | void {
  let m = arr[0];

  const s1: typeof arr = [];
  const s2: typeof arr = [];
  const s3: typeof arr = [];

  for (let ele of arr) {
    if (ele < m) {
      s1.push(ele);
    } else if (ele === m) {
      s2.push(ele);
    } else {
      s3.push(ele);
    }
  }

  if (k <= s1.length) {
    return kthDistinctLargest(k, s1);
  }
  if (k <= s1.length + s2.length) {
    return m;
  }

  return kthDistinctLargest(k - s1.length - s2.length, s3);
}

console.log(kthDistinctLargest(4, [4, 7, 3, 6, 6, 2, 5]));
