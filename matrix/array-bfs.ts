const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const traverseBfs = (matrix: number[][]): number[] => {
  if (!matrix.length) {
    return [];
  }

  const totalValues = matrix.length * matrix[0].length;
  const values: number[] = [matrix[0][0]];
  let queueStarting = 0;
  let queue: [number, number][] = [[0, 0]];
  let seen = matrix.map((row) => row.map<boolean>(() => false));
  seen[0][0] = true;

  while (queue.length !== totalValues) {
    const [currRow, currCol] = queue[queueStarting];

    for (let i = 0; i < directions.length; i += 1) {
      const currDir = directions[i];
      const newCell: [number, number] = [
        currRow + currDir[0],
        currCol + currDir[1],
      ];
      if (
        !(
          newCell[0] < 0 ||
          newCell[0] >= matrix.length ||
          newCell[1] < 0 ||
          newCell[1] >= matrix[0].length ||
          seen[newCell[0]][newCell[1]]
        )
      ) {
        queue.push(newCell);
        values.push(matrix[newCell[0]][newCell[1]]);
        seen[newCell[0]][newCell[1]] = true;
      }
    }
    queueStarting += 1;
  }

  return values;
};

console.log(
  traverseBfs([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
