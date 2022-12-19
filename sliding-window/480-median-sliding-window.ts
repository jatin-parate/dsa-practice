export function medianSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const isKEven = k % 2 === 0;
  const tmp: number[] = nums.slice(0, k);
  tmp.sort((a, b) => a - b);

  const insertMedian = () => {
    if (isKEven) {
      const mid = k / 2;
      result.push((tmp[mid] + tmp[mid - 1]) / 2);
    } else {
      result.push(tmp[Math.floor(k / 2)]);
    }
  };

  insertMedian();

  for (let i = 1; i <= nums.length - k; i++) {
    let index = tmp.indexOf(nums[i - 1]);
    tmp.splice(index, 1);

    if (nums[i + k - 1] < tmp[0]) {
      tmp.unshift(nums[i + k - 1]);
    } else {
      let index = 0;
      while (index < tmp.length && tmp[index] < nums[i + k - 1]) {
        index++;
      }
      tmp.splice(index, 0, nums[i + k - 1]);
    }

    insertMedian();
  }

  return result;
}

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3));
console.log(medianSlidingWindow([1, 4, 2, 3], 4));
