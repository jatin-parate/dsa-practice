import assert from "assert";
import { arrayToList, ListNode, listToArray } from "./utils";

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let tmp: ListNode | null = head.next;

  while (tmp) {
    let p: ListNode = head;
    let prev: ListNode = head;

    while (p.val <= tmp.val && p !== tmp) {
      prev = p;
      p = p.next!;
    }

    if (p !== tmp) {
      let last: ListNode = p;
      while (last.next !== tmp) {
        last = last.next!;
      }

      last.next = tmp.next;
      tmp.next = p;

      if (p === head) {
        head = tmp;
      } else {
        prev.next = tmp;
      }
    }

    tmp = tmp.next;
  }

  return head;
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
