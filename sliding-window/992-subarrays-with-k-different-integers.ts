function _subarraysWithKDistinct(nums: number[], k: number): number {
    let start = 0;
    let end = 0;
    let count = 0;
    const map = new Map<number, number>();

    while (end < nums.length) {
        const num = nums[end];

        if (!map.has(num)) {
            map.set(num, 0);
            k--;
        }

        map.set(num, map.get(num)! + 1);
        end++;

        while (k < 0) {
            const leftNum = nums[start];
            map.set(leftNum, map.get(leftNum)! - 1);

            if (map.get(leftNum) === 0) {
                map.delete(leftNum);
                k++;
            }

            start++;
        }

        count += end - start;
    }

    return count;
}

function subarraysWithKDistinct(nums: number[], k: number): number {
    return _subarraysWithKDistinct(nums, k) - _subarraysWithKDistinct(nums, k - 1);
}

console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1)); // 8
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
console.log(subarraysWithKDistinct([1, 2], 1));
