import assert from "node:assert";

export function carFleet(
  target: number,
  position: number[],
  speed: number[]
): number {
  const arr: [number, number][] = position.map((position, i) => [
    position,
    speed[i],
  ]);
  const stack: number[] = [];

  arr.sort(([a], [b]) => a - b);

  for (let i = arr.length - 1; i >= 0; i--) {
    const [p, s] = arr[i];
    const speed = (target - p) / s;

    stack.push(speed);
    if (stack.length >= 2 && stack.at(-1)! <= stack.at(-2)!) {
      stack.pop();
    }
  }

  return stack.length;
}

assert.equal(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
assert.equal(carFleet(10, [3], [3]), 1);
assert.equal(carFleet(100, [0, 2, 4], [4, 2, 1]), 1);
