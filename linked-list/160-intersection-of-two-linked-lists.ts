import { ListNode } from "./utils";

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!(headA && headB)) {
    return null;
  }

  let lengthA = 0;
  let lengthB = 0;

  {
    let curr: ListNode | null = headA;
    while (curr) {
      lengthA += 1;
      curr = curr.next;
    }
  }

  {
    let curr: ListNode | null = headB;
    while (curr) {
      lengthB += 1;
      curr = curr.next;
    }
  }

  if (lengthA - lengthB < 0) {
    let diff = lengthB - lengthA;

    while (diff > 0) {
      headB = headB!.next;
      diff -= 1;
    }
  } else if (lengthA - lengthB > 0) {
    let diff = lengthA - lengthB;

    while (diff > 0) {
      headA = headA!.next;
      diff -= 1;
    }
  }

  while (headA && headA !== headB) {
    headA = headA.next;
    headB = headB!.next;
  }

  return headA;
}
