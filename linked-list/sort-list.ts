import assert from "assert";
import { arrayToList, listToArray, ListNode } from "./utils";

function findMidAndSplitList(head: ListNode): ListNode {
  let slow = head,
    slowPrev = head,
    fast: ListNode | null = head;
  while (fast && fast.next) {
    slowPrev = slow;
    slow = slow.next!;
    fast = fast.next.next;
  }

  slowPrev.next = null;
  return slow;
}

function mergeTwoSortedLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  let head: ListNode;

  if (l1.val <= l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }
  let p = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1 || l2) {
    p.next = l1 || l2;
  }

  return head;
}

export function sortSinglyLinkedList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const secondHead = findMidAndSplitList(head);
  return mergeTwoSortedLists(
    sortSinglyLinkedList(head),
    sortSinglyLinkedList(secondHead)
  );
}

assert.deepEqual(
  listToArray(sortSinglyLinkedList(arrayToList([4, 3, 2, 1]))),
  [1, 2, 3, 4]
);

assert.deepEqual(listToArray(sortSinglyLinkedList(arrayToList([]))), []);
assert.deepEqual(listToArray(sortSinglyLinkedList(arrayToList([1]))), [1]);
assert.deepEqual(
  listToArray(sortSinglyLinkedList(arrayToList([1, 2]))),
  [1, 2]
);
