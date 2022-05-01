import assert from "assert";

function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count += 1;
  }

  return count;
}

assert.equal(hammingWeight(11), 3);
assert.equal(hammingWeight(128), 1);
assert.equal(hammingWeight(4294967293), 31);
