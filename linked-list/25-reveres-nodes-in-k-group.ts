class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  function reverseKElements(arr: any[], start: number, end: number) {
    let i = start,
      j = end;
    while (i <= j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;

      i++;
      j--;
    }
  }
  const arr: ListNode[] = [];

  {
    let pointer = head;
    while (pointer) {
      arr.push(pointer);
      pointer = pointer.next;
    }
  }

  {
    let i = 0;
    while (i + k - 1 < arr.length) {
      reverseKElements(arr, i, i + k - 1);
      i += k;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i + 1] ?? null;
  }

  return arr[0] ?? null;
}
