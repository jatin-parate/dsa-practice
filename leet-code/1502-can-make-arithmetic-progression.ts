import assert from "assert";

function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => (a < b ? -1 : 1));
  const diff = Math.abs(arr[1] - arr[0]);
  for (let i = 2; i < arr.length; i += 1) {
    const currDiff = Math.abs(arr[i] - arr[i - 1]);
    if (currDiff !== diff) {
      return false;
    }
  }
  return true;
}

assert.equal(canMakeArithmeticProgression([3, 5, 1]), true);
assert.equal(canMakeArithmeticProgression([1, 2, 4]), false);
