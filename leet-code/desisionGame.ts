function getOptimalX(n: number): number | null {
  if (n < 2) {
    return null;
  }
  let optimalX: number;
  for (let i = n -1; i > 0; i -= 1) {
    if (n % i === 0) {
      optimalX = i;
    }
  }

  return optimalX!;
}

function divisorGame(n: number, isAliceTurn = true): boolean {
  if (n === 1) {
    return false;
  }

  const x = getOptimalX(n);
  if (x == null) {
    return false;
  }
  const newN = n - x;
  return !divisorGame(newN, !isAliceTurn);
}

console.log(divisorGame(4));
