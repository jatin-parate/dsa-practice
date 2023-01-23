import { ListNode } from "./utils";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const originalHead = head;
  while (head) {
    let curr = head;

    while (curr.next && curr.val === curr.next.val) {
      curr.next = curr.next.next;
    }

    head = head.next;
  }

  return originalHead;
}
