export function checkPossibility(arr: number[]): boolean {
  let isReplaced = false;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) {
      if (isReplaced) {
        return false;
      }
      if (i >= 2 && arr[i - 2] >= arr[i - 1]) {
        return false;
      }
      if (i >= 2) {
        arr[i-1] = arr[i-2]
      } else {
        arr[i - 1] = arr[i];
      }
      isReplaced = true;
    }
  }
  return true;
}
