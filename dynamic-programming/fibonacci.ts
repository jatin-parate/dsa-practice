import assert from "assert";
import runWithTimestamp from "../utils/runWithTimestamp";

const arr: number[] = new Array(2);

/**
 *
 * time complexity: O(n)
 * space complexity: O(1)
 */
const fib = (n: number): number => {
  if (n < 1) {
    return 0;
  }

  if (n < 3) {
    return 1;
  }

  arr[0] = 1;
  arr[1] = 1;

  for (let i = 3; i <= n; i += 1) {
    const answer = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = answer;
  }

  return arr[1];
};

assert.equal(fib(5), 5);
assert.equal(fib(6), 8);
assert.equal(fib(7), 13);

runWithTimestamp(() => fib(50));
