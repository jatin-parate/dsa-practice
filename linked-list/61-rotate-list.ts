import { ListNode } from "./utils";

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || k < 1) return head;

  let totalNodes = 0;
  for (let curr: ListNode | null = head; curr != null; curr = curr.next) {
    totalNodes += 1;
  }

  k = k % totalNodes;
  const nodesToBeSkipped = totalNodes - k;
  let rightListHead: ListNode = head;
  let firstListTail: ListNode = head;
  for (let i = 0; i < nodesToBeSkipped; i += 1) {
    if (!rightListHead.next) {
      return head;
    }

    firstListTail = rightListHead;
    rightListHead = rightListHead.next;
  }

  let rightListTail = rightListHead;
  while (rightListTail.next) {
    rightListTail = rightListTail.next;
  }

  rightListTail.next = head;
  firstListTail.next = null;

  return rightListHead;
}
