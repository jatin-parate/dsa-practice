const swap = (arr: number[], l: number, r: number) => {
  const tmp = arr[l];
  arr[l] = arr[r];
  arr[r] = tmp;
};

const quickSort = (
  nums: number[],
  lowest: number,
  highest: number,
  k: number
) => {
  if (lowest >= highest) {
    return;
  }

  let p = lowest;
  let l = lowest + 1;
  let r = highest;

  while (l <= r) {
    if (nums[l] >= nums[p]) {
      swap(nums, l, r);
      r--;
    } else if (nums[r] <= nums[p]) {
      swap(nums, l, r);
      l++;
    } else {
      // l < p and r > p
      l++;
    }
  }

  l--;
  swap(nums, l, p);
  console.log(l, k);

  if (l > k) {
    quickSort(nums, lowest, l - 1, k);
  }
  quickSort(nums, l + 1, highest, k);
};

const findKthLargest = (nums: number[], k: number) => {
  quickSort(nums, 0, nums.length - 1, nums.length - k - 2);
  console.log(nums);

  return nums.at(-k);
};

console.log(findKthLargest([9, 3, 2, 11, 1, 5, 7, 12], 2));
// console.log(kThLargest([6, 5, 4, 3, 2, 1], 2));
// console.log(kThLargest([5, 3, 1, 6, 4, 2], 2));
// console.log(kThLargest([1, 2, 3], 3));
// console.log(kThLargest([3, 2, 1, 4, 7, 6, 5], 3));
// console.log(kThLargest([2, 4, 1, 3, 5, 8, 9, 6, 1], 3));
