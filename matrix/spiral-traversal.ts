import assert from "assert";

const directions = [
  [-1, 0], // up
  [1, 0], // right
  [0, 1], // down
  [0, -1], // left
];

/**
  for a given matrix, return spiral order traversal in array
*/
const spiralOrder = (matrix: number[][]): number[] => {
  if (!matrix.length) {
    return [];
  }

  const traverse: number[] = [];

  while (matrix.length && matrix[0].length) {
    // right
    traverse.push(...matrix.shift()!);

    // down
    for (let row = 0; row < matrix.length; row += 1) {
      let poppedEle = matrix[row].pop();
      if (poppedEle != null) {
        traverse.push(poppedEle);
      }
    }
    // left
    const lastRow = matrix.pop();
    if (lastRow) {
      for (let i = lastRow.length - 1; i >= 0; i -= 1) {
        traverse.push(lastRow[i]);
      }
    }
    // up
    for (let i = matrix.length - 1; i >= 0; i--) {
      let shiftedEle = matrix[i].shift();
      if (shiftedEle) {
        traverse.push(shiftedEle);
      }
    }
  }

  return traverse;
};

assert.deepEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]),
  [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
);
