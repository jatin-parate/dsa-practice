function smallestElementIndexInRange(
  arr: number[],
  start: number,
  end: number
) {
  let smallest = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[smallest]) {
      smallest = i;
    }
  }

  return smallest;
}

function swap(arr: number[], i: number, j: number) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * in place selection sort
 * @param arr unsorted array
 */
function selectionSort(arr: number[]): void {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const j = smallestElementIndexInRange(arr, i, n - 1);
    if (i !== j) {
      swap(arr, i, j);
    }
  }

  return;
}

const arr = [4, 3, 2, 1];
selectionSort(arr);
console.log(arr);
