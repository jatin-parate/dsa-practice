const tailFactorial = (x: number, totalSoFar = 1): number => {
  if (x === 0) {
    return totalSoFar;
  }

  return tailFactorial(x - 1, x * totalSoFar);
};

const factorial = (x: number): number => {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
};
