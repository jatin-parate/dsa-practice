import { ListNode } from "./list-node";

type Nullable<T> = T | null;

type NullableHead = Nullable<ListNode>;

const reverseLinkList = (
  head: NullableHead,
  start: number,
  end: number
): NullableHead => {
  if (start === end || !head) {
    return head;
  }

  let preStart: NullableHead = null;
  let postEnd: NullableHead = null;
  let startNode: ListNode;
  let endNode: ListNode;

  // Position the pointers first
  for (let i = 1; i < start; i += 1) {
    preStart = preStart!?.next ?? head;
  }
  startNode = preStart?.next! ?? head;
  for (let i = start; i <= end; i += 1) {
    endNode = endNode!?.next! ?? startNode;
  }
  postEnd = endNode!.next;

  // Start reversing the linked list
  let prev: NullableHead = null;
  let p: ListNode = startNode;
  for (let i = start; i <= end; i += 1) {
    const temp = p.next;
    p.next = prev;
    prev = p;
    p = temp!;
  }

  // link preStart startNode's next properly
  if (preStart) {
    preStart.next = endNode!;
  }
  startNode.next = postEnd;
  // if started reversing from start then head is endNode else head
  return start === 1 ? endNode! : head;
};

console.log(
  JSON.stringify(
    reverseLinkList(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
      ),
      1,
      2
    ),
    null,
    2
  )
);
console.log(
  JSON.stringify(
    reverseLinkList(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
      ),
      2,
      4
    ),
    null,
    2
  )
);
