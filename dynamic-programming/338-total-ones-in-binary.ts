function countBits(n: number): number[] {
  if (n < 1) {
    return [0];
  }
  if (n < 2) {
    return [0, 1];
  }
  const totalBits = new Array(n + 1).fill(0);
  totalBits[1] = 1;
  let nearestTwo = 0;
  for (let i = 2; i <= n; i++) {
    if (2 ** (nearestTwo + 1) === i) {
      totalBits[i] = 1;
      nearestTwo++;
    } else {
      const remain = i - 2 ** nearestTwo;
      totalBits[i] = 1 + totalBits[remain];
    }
  }

  return totalBits;
}
