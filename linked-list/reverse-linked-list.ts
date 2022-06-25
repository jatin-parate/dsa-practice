import { ListNode } from "./list-node";

const reverseList = (head: ListNode | null): ListNode | null => {
  let prev = null;

  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
};

let head = new ListNode(
  5,
  new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
);

console.log(JSON.stringify(reverseList(head), null, 2));
// console.log(JSON.stringify(reverseList(new ListNode(1)), null, 2));
// console.log(
//   JSON.stringify(reverseList(new ListNode(1, new ListNode(2))), null, 2)
// );
