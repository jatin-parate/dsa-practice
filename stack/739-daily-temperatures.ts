import assert from "assert";

export function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array<number>(temperatures.length).fill(0);
  const stack: { index: number; value: number }[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    while (stack.length > 0 && stack.at(-1)!.value < temperature) {
      const stackItem = stack.pop()!;
      result[stackItem.index] = i - stackItem.index;
    }
    stack.push({ index: i, value: temperature });
  }

  return result;
}

assert.deepEqual(
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
  [1, 1, 4, 2, 1, 1, 0, 0]
);
assert.deepEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
