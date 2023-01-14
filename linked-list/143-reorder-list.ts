class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
export function reorderList(head: ListNode | null): void {
  const queue: ListNode[] = [];
  let pointer = head;

  while (pointer) {
    queue.push(pointer);
    pointer = pointer.next;
  }

  if (queue.length < 3) {
    return;
  }

  while (queue.length >= 2) {
    const first = queue.shift()!;
    const last = queue.pop()!;
    const second = first.next;

    first.next = last;

    if (second === last) {
      last.next = null;
    } else {
      last.next = second;
    }
  }

  if (queue.length !== 0) {
    const lastEle = queue.pop()!;
    lastEle.next = null;
  }
}
