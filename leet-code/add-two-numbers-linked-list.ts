class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let parity = 0;
  let head: ListNode | null = null;
  let currNode: ListNode | null = head;

  while (l1 || l2) {
    let currSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + parity;
    if (currSum > 9) {
      parity = 1;
      currSum = currSum % 10;
    } else {
      parity = 0;
    }

    if (!currNode) {
      head = currNode = new ListNode(currSum);
    } else {
      currNode.next = new ListNode(currSum);
      currNode = currNode.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (parity > 0) {
    const newNode = new ListNode(parity);
    currNode!.next = newNode;
  }

  return head;
}
