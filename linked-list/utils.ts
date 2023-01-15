export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function listToArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr;
}

export function arrayToList(arr: number[]): ListNode | null {
  let head: ListNode | null = null;
  let p: ListNode | null = null;
  for (let num of arr) {
    const node = new ListNode(num);

    if (!head) {
      head = node;
      p = head;
    } else {
      p!.next = node;
      p = p!.next;
    }
  }

  return head;
}
