import assert from "assert";
import { arrayToList, ListNode, listToArray } from "./utils";

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  let prev = dummy;

  while (head != null) {
    let next: ListNode | null = head.next;
    if (prev.val >= head.val) prev = dummy;
    while (prev.next && prev.next.val < head.val) prev = prev.next;
    head.next = prev.next;
    prev.next = head;
    head = next;
  }

  return dummy.next;
}

assert.deepEqual(
  listToArray(insertionSortList(arrayToList([4, 3, 2, 1]))),
  [1, 2, 3, 4]
);
assert.deepEqual(
  listToArray(insertionSortList(arrayToList([1, 2, 4, 5, 3]))),
  [1, 2, 3, 4, 5]
);
assert.deepEqual(listToArray(insertionSortList(arrayToList([2, 1]))), [1, 2]);
assert.deepEqual(listToArray(insertionSortList(arrayToList([1]))), [1]);
assert.deepEqual(listToArray(insertionSortList(arrayToList([]))), []);
