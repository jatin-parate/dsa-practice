import runWithTimestamp from "../utils/runWithTimestamp";

const _totalBinaryStrings = (n: number): [number, number] => {
  if (n === 1) {
    return [1, 1];
  }

  const [old0, old1] = _totalBinaryStrings(n - 1);

  return [old0 + old1, old0];
};

const totalBinaryStrings = (n: number): number => {
  return _totalBinaryStrings(n).reduce((prev, curr) => prev + curr, 0);
};

const totalBinaryStringsBottomUp = (n: number): number => {
  const totalZeros = new Array<number>(n + 1);
  const totalOnes = new Array<number>(n + 1);
  totalZeros[1] = totalOnes[1] = 1;

  for (let i = 2; i <= n; i += 1) {
    totalZeros[i] = totalZeros[i - 1] + totalOnes[i - 1];
    totalOnes[i] = totalZeros[i - 1];
  }

  return totalZeros[n] + totalOnes[n];
};

runWithTimestamp(() => totalBinaryStrings(1));
runWithTimestamp(() => totalBinaryStrings(2));
runWithTimestamp(() => totalBinaryStrings(3));
runWithTimestamp(() => totalBinaryStrings(4));
runWithTimestamp(() => totalBinaryStrings(240));

console.log("---------------");

runWithTimestamp(() => totalBinaryStringsBottomUp(1));
runWithTimestamp(() => totalBinaryStringsBottomUp(2));
runWithTimestamp(() => totalBinaryStringsBottomUp(3));
runWithTimestamp(() => totalBinaryStringsBottomUp(4));
runWithTimestamp(() => totalBinaryStringsBottomUp(240));
