import assert from "assert";

class StackItem {
  constructor(public index: number, public value: number) {}
}

export function largestRectangleArea(heights: number[]): number {
  const stack: StackItem[] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let top: StackItem | undefined;
    while (stack.length > 0 && stack.at(-1)!.value >= heights[i]) {
      top = stack.pop()!;
      const areaCoveredByTop = (i - top.index) * top.value;
      maxArea = Math.max(areaCoveredByTop, maxArea);
    }

    stack.push(new StackItem(top?.index ?? i, heights[i]));
  }

  while (stack.length > 0) {
    const top = stack.pop()!;
    const areaCoveredByTop = (heights.length - top.index) * top.value;
    maxArea = Math.max(areaCoveredByTop, maxArea);
  }

  return maxArea;
}

assert.equal(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
assert.equal(largestRectangleArea([2, 4]), 4);
