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

export function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>();
  while (head) {
    if (set.has(head)) {
      return true;
    }

    set.add(head);
    head = head.next;
  }

  return false;
}
