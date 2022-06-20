import assert from "assert";
import runWithTimestamp from "../utils/runWithTimestamp";

function trap(heights: number[]): number {
  if (heights.length < 3) {
    return 0;
  }

  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        // No left wall
        maxLeft = heights[left];
      } else {
        // there is left and right wall and left is smaller than right one
        totalWater += maxLeft - heights[left];
      }
      left += 1;
      // right wall is bigger
    } else {
      if (heights[right] >= maxRight) {
        // No right wall
        maxRight = heights[right];
      } else {
        // there is a left and right wall and right one is smaller than left one
        totalWater += maxRight - heights[right];
      }

      right -= 1;
    }
  }

  return totalWater;
}

// runWithTimestamp(() => trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
assert.equal(trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]), 8);
assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
assert.equal(trap([4, 2, 0, 3, 2, 5]), 9);
assert.equal(trap([4, 2, 3]), 1);
