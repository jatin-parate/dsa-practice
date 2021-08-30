/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // pointer to element of nums1
  let i = 0;
  // pointer to element of num2
  let j = 0;
  let finalArray = []

  // start combining both the arrats
  while(i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      finalArray.push(nums1[i]);
      i++;
    } else {
      finalArray.push(nums2[j]);
      j++;
    }
  }

  if (i < nums1.length) {
    for (; i < nums1.length; i++) {
      finalArray.push(nums1[i])
    }
  }

  if (j < nums2.length) {
    for(; j < nums2.length; j++) {
      finalArray.push(nums2[j])
    }
  }

  if (finalArray.length === 1) {
    return finalArray[0]
  }

  const middle = finalArray.length / 2;

  if (finalArray.length % 2 === 0) {
    // even
    return (finalArray[middle - 1] + finalArray[middle]) / 2
  } else {
    // odd
    return finalArray[Math.floor(middle)]
  }
};
