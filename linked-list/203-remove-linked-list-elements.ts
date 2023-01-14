class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  while (head?.val === val) {
    head = head.next;
  }

  if (head) {
    let pointer: ListNode | null = head;
    while (pointer?.next) {
      while (pointer.next?.val === val) {
        pointer.next = pointer.next!.next;
      }

      pointer = pointer.next;
    }
  }

  return head;
}
