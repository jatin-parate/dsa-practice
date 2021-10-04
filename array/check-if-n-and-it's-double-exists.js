/**
 * @constraints
 * - i != j
 * - 0 <= i, j < arr.length
 * - arr[i] == 2 * arr[j]
 * @param {number[]} arr
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
const checkIfExist = (arr) => {
  const map = new Map();

  arr.forEach((ele, i) => {
    map.set(ele, i);
  });

  return arr.some((ele, i) => {
    if (map.has(ele * 2)) {
      const j = map.get(ele * 2);
      return j !== i;
    }
    return false;
  });
};
