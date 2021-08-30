/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const findMedianSortedArrays = function findMedianSortedArrays(nums1, nums2) {
  const x = nums1.length;
  const y = nums2.length;

  if (y < x) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const total = x + y;
  const half = Math.floor(total / 2);

  let l = 0;
  let r = x - 1;
  let i;
  let j;
  let Aleft;
  let Aright;
  let Bleft;
  let BRight;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    i = Math.floor((l + r) / 2); // A
    j = half - (i + 1) - 1; // B
    // i+1 is because i is an index and i+1 will be total elements in left side of nums1
    // last -1 because of need to find index of middle of the nums2 so
    // (half - (i+1)) is total number of elements in half of nums2 and -1 will get you
    // index of the last element.
    Aleft = i >= 0 ? nums1[i] : Number.NEGATIVE_INFINITY;
    Aright = i + 1 < x ? nums1[i + 1] : Number.POSITIVE_INFINITY;
    Bleft = j >= 0 ? nums2[j] : Number.NEGATIVE_INFINITY;
    BRight = j + 1 < y ? nums2[j + 1] : Number.POSITIVE_INFINITY;

    // partition is correct
    if (Aleft <= BRight && Bleft <= Aright) {
      // odd
      if (total % 2 === 1) {
        return Math.min(Aright, BRight);
      }

      // even
      return (Math.max(Aleft, Bleft) + Math.min(Aright, BRight)) / 2;
    } if (Aleft > BRight) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};
