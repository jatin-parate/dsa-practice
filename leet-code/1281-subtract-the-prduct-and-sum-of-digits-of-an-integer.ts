import assert from "assert";

function subtractProductAndSum(n: number): number {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    const remainder = n % 10;
    n = Math.floor(n / 10);
    product *= remainder;
    sum += remainder;
  }

  return product - sum;
}

assert.equal(subtractProductAndSum(234), 15);
assert.equal(subtractProductAndSum(4421), 21);
