/**
 *
 * @param {number[]} array
 */
const deepReverse = (array) => {
  const newArray = [];

  for (let i = array.length - 1; i > -1; i -= 1) {
    if (array[i] instanceof Array) {
      newArray.push(deepReverse(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(JSON.stringify(deepReverse([1, 2, [3, 4], 5, [6, [7, [8]]]]), null, 2));
