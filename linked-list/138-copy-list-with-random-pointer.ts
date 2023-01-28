class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  const map = new Map<Node, Node>();

  for (let curr = head; curr.next; curr = curr.next) {
    const copy = new Node(curr.val);
    map.set(curr, copy);
  }

  for (let curr = head; curr.next; curr = curr.next) {
    const currCopy = map.get(curr)!;
    // set next pointer
    if (curr.next) {
      currCopy.next = map.get(curr.next)!;
    }
    // set random pointer
    if (curr.random) {
      currCopy.random = map.get(curr.random)!;
    }
  }

  return map.get(head)!;
}
