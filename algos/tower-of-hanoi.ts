export function towerOfHanoi(
  n: number,
  source: string,
  intermediate: string,
  destination: string
) {
  if (n > 0) {
    towerOfHanoi(n - 1, source, destination, intermediate);

    console.log(`move ${n} from ${source} to ${destination}`);

    towerOfHanoi(n - 1, intermediate, source, destination);
  }
}

towerOfHanoi(1, "a", "b", "c");

console.log("---------------------------");

towerOfHanoi(2, "a", "b", "c");

console.log("---------------------------");

towerOfHanoi(3, "a", "b", "c");
