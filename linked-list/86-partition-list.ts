import { ListNode } from "./utils";

export function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  const dummyHead = new ListNode(0, head);
  let rightHead: ListNode | null = null;
  let leftTail: ListNode = dummyHead;
  let rightTail: ListNode | null = null;

  for (let curr: ListNode | null = head; curr; curr = curr.next) {
    if (curr.val < x) {
      leftTail.next = curr;
      leftTail = leftTail.next;
      continue;
    }

    if (!rightTail) {
      rightTail = curr;
      rightHead = curr;
      continue;
    }

    rightTail.next = curr;
    rightTail = rightTail.next;
  }

  leftTail.next = rightHead;
  if (rightTail) {
    rightTail.next = null;
  } else {
    leftTail.next = null;
  }

  return dummyHead.next;
}
