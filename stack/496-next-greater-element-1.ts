export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  if (nums2.length === 0) {
    return nums1.map(() => -1);
  }
  const map = new Map<number, number>();

  const stack: number[] = [nums2[0]];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && stack.at(-1)! < nums2[i]) {
      const smallerEle = stack.pop()!;
      map.set(smallerEle, nums2[i]);
    }
    stack.push(nums2[i]);
  }

  return nums1.map((num) => (map.has(num) ? map.get(num)! : -1));
}
