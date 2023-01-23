import { ListNode, arrayToList, listToArray } from "./utils";
import assert from "node:assert";

function reverse(front: ListNode, rear: ListNode): void {
  let prev = front,
    cur = front.next,
    next = cur?.next,
    last = rear.next;

  while (cur && cur !== last) {
    cur.next = prev;
    prev = cur;
    cur = next ?? null;
    next = next?.next ?? null;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) return null;

  const dummy = new ListNode(0, head);
  let front: ListNode;
  let preFront: ListNode = dummy;
  let rear: ListNode;
  let postRear: ListNode | null = null;

  for (let i = 1, curr: ListNode = head; i <= right; i++, curr = curr.next!) {
    if (i === left) {
      front = curr;
    } else if (!front!) {
      preFront = curr;
    }

    if (i === right) {
      rear = curr;
      postRear = curr.next;
    }
  }

  reverse(front!, rear!);

  preFront.next = rear!;
  front!.next = postRear;

  return dummy.next;
}

export { reverseBetween };

assert.deepEqual(
  listToArray(reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4)),
  [1, 4, 3, 2, 5]
);
assert.deepEqual(listToArray(reverseBetween(arrayToList([5]), 1, 1)), [5]);
