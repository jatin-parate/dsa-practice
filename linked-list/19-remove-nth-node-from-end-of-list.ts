class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const stack: ListNode[] = [];

  {
    let pointer = head;
    while (pointer) {
      stack.push(pointer);
      pointer = pointer.next;
    }
  }

  if (stack.length >= n) {
    while (n > 0) {
      stack.pop();
      n -= 1;
    }

    if (stack.length > 0) {
      const top = stack.at(-1)!;
      top.next = stack.at(-1)!.next?.next ?? null;
    } else {
      head = head?.next ?? null;
    }
  }

  return head;
}
