const Node = require("./linkedList");

/**
 * Creates new linked list which is revers of given singly linked list
 * and returns head of that list
 * 
 * @Complexities
 * - time: O(n)
 * - space: O(n)
 * @param {Node} list
 * @returns {Node}
 */
const reverseLinkedList = (list) => {
  let p = list;
  let head = null;

  while (p) {
    const node = new Node(p.val);

    if (!head) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }

    p = p.next;
  }

  return head;
};

const originalList = Node.generate(5);

console.time("start");
const reversed = reverseLinkedList(originalList);
console.timeEnd("start");

console.log("Original list:", originalList.print());
console.log("Reversed list:", reversed.print());
