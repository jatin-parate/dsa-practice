import assert from "assert";
import { arrayToList, ListNode, listToArray } from "./utils";

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

assert.deepEqual(
  listToArray(removeNthFromEnd(arrayToList([5, 4, 3, 2, 1]), 5)),
  [4, 3, 2, 1]
);
assert.deepEqual(
  listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2)),
  [1, 2, 3, 5]
);
assert.deepEqual(
  listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 20)),
  [1, 2, 3, 4, 5]
);
assert.deepEqual(listToArray(removeNthFromEnd(arrayToList([]), 20)), []);
