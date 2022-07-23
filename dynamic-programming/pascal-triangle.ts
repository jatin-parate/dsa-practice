function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  const triangle = [[1], [1,1]];

  for (let currRow = 2; currRow < numRows; currRow++) {
    const previousRow = triangle[currRow - 1];
    const totalColumns = currRow + 1;
    const currentRowElements = new Array<number>(totalColumns).fill(1);

    for (let col = 1; col < totalColumns - 1; col++) {
      currentRowElements[col] = previousRow[col - 1] + previousRow[col];
    }

    triangle.push(currentRowElements);
  }

  return triangle;
}

console.log(generate(5));
