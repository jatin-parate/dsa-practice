const totalWays = (n: number): number => {
  if (n < 4) {
    return 1;
  }

  return totalWays(n - 1) + totalWays(n - 4);
};

console.log(totalWays(4));
console.log(totalWays(5));
console.log(totalWays(6));
