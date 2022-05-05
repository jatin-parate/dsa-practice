import assert from "assert";

function maxProduct(nums: number[]): number {
  let largestProduct = -Infinity;
  let currStarting = 0;
  let currProduct = 1;
  let hasZero = false;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      hasZero = true;
      if (i === currStarting) {
        i += 1;
        currStarting += 1;
      } else {
        i = currStarting + 1;
        currStarting = i;
      }
      currProduct = 1;
    } else {
      currProduct *= nums[i];
      if (currProduct > largestProduct) {
        largestProduct = currProduct;
      }
    }

    if (i === nums.length - 1 && currStarting < nums.length - 1) {
      i = currStarting - 1;
      currProduct = 1;
    }

    console.log(i, currStarting);
  }

  return largestProduct < 0 && hasZero ? 0 : largestProduct;
}

// assert.equal(maxProduct([2, 3, -2, 4]), 6);
// assert.equal(maxProduct([-2, 0, -1]), 0);
assert.equal(maxProduct([0, 2]), 2);
// assert.equal(maxProduct(),)
