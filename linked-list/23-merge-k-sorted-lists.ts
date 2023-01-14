function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let newList: ListNode | undefined;
  let tail: ListNode | undefined;

  while (list1 && list2) {
    let newNode: ListNode;
    if (list1.val <= list2.val) {
      newNode = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      newNode = new ListNode(list2.val);
      list2 = list2.next;
    }

    if (!newList) {
      newList = tail = newNode;
    } else {
      tail!.next = newNode;
      tail! = tail!.next;
    }
  }

  if (list1) {
    tail!.next = list1;
  } else if (list2) {
    tail!.next = list2;
  }

  return newList!;
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }

  let first = lists[0];
  for (let i = 1; i < lists.length; i++) {
    first = mergeTwoLists(first, lists[i]);
  }

  return first;
}
