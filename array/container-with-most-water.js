/**
 * O(n) time
 * @param {number[]} height
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function maxArea(height) {
  let l = 0;
  let r = height.length - 1;
  let area = 0;

  while (l < r) {
    const newArea = (r - l) * Math.min(height[l], height[r]);

    if (newArea > area) {
      area = newArea;
    }

    if (height[l] > height[r]) {
      r -= 1;
    } else {
      l += 1;
    }
  }

  return area;
}
