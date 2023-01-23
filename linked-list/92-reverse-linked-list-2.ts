import { ListNode, arrayToList, listToArray } from "./utils";
import assert from "node:assert";

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null || left === right) {
    return head;
  }

  // Iterate until left pointer is left node
  // keep pointer to node before reversing begins, which is pointer to the end of the list after reversal
  // reverse nodes between left and right
  // Connect the pre-tail node to the tail node by access through pre-left pointer
  // connect pre-left pointer to start of reversed list
  let leftPointer = head;
  let preLeftPointer = null;
  let i = 1;
  for (i; i < left; i++) {
    preLeftPointer = leftPointer;
    leftPointer = leftPointer.next!;
  }

  let lastNodeOfSubList = leftPointer;
  let lastNodeBeforeReversal = preLeftPointer;

  let prev = null;
  let tmpNext;
  while (i <= right) {
    tmpNext = leftPointer.next;
    leftPointer.next = prev;
    prev = leftPointer;
    leftPointer = tmpNext!;
    i++;
  }

  if (lastNodeBeforeReversal !== null) {
    lastNodeBeforeReversal.next = prev;
  } else {
    head = prev;
  }

  lastNodeOfSubList.next = leftPointer;
  return head;
}

export { reverseBetween };

assert.deepEqual(
  listToArray(reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4)),
  [1, 4, 3, 2, 5]
);
assert.deepEqual(listToArray(reverseBetween(arrayToList([5]), 1, 1)), [5]);
