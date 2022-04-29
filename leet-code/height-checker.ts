import assert from "assert";

function heightChecker(heights: number[]): number {
  if (heights.length < 2) {
    return 0;
  }

  const expected = [...heights];
  expected.sort((a, b) => (a < b ? -1 : 1));

  // console.log(expected, heights);

  let totalStudentsOutOfOrder = 0;

  heights.forEach((height, i) => {
    if (expected[i] !== height) {
      totalStudentsOutOfOrder += 1;
    }
  });

  return totalStudentsOutOfOrder;
}

// assert.equal(heightChecker([1, 1, 4, 2, 1, 3]), 3);
// assert.equal(heightChecker([5,1,2,3,4]), 5);
// assert.equal(heightChecker([1,2,3,4,5]), 0);
assert.equal(
  heightChecker([
    10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
  ]),
  22
);
