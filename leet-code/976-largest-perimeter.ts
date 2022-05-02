import assert from "assert";

function largestPerimeter(nums: number[]): number {
  const swap = (nums: number[], left: number, right: number) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  };

  const partition = (nums: number[], left: number, right: number) => {
    const pivot = nums[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (nums[i] > pivot) {
        i++;
      }
      while (nums[j] < pivot) {
        j--;
      }

      if (i <= j) {
        swap(nums, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSort = (nums: number[], left: number, right: number) => {
    let index;

    if (nums.length > 1) {
      index = partition(nums, left, right);

      if (left < index - 1) {
        quickSort(nums, left, index - 1);
      }
      if (index < right) {
        quickSort(nums, index, right);
      }
    }

    return nums;
  };

  quickSort(nums, 0, nums.length - 1);

  const canFormTriangle = (num1: number, num2: number, num3: number) => {
    return num1 < num2 + num3;
  };

  for (let i = 0; i < nums.length; i++) {
    if (canFormTriangle(nums[i], nums[i + 1], nums[i + 2])) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
}

assert.equal(largestPerimeter([3, 6, 2, 3]), 8);
assert.equal(largestPerimeter([2, 1, 2]), 5);
assert.equal(largestPerimeter([2, 1, 1]), 0);
