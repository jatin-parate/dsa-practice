class MultiLevelDoublyList {
  public child: MultiLevelDoublyList | null = null;

  constructor(
    public value: number,
    public next: MultiLevelDoublyList | null = null,
    public prev: MultiLevelDoublyList | null = null
  ) {}
}

const flatten = (head: MultiLevelDoublyList | null) => {
  let currNode: MultiLevelDoublyList | null = head;

  while (currNode) {
    if (currNode.child) {
      let tail = currNode.child!;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = currNode.next;
      if (currNode.next) {
        currNode.next.prev = tail;
      }
      currNode.next = currNode.child;
      currNode.child = null;
    }
    currNode = currNode.next;
  }

  return head;
};
