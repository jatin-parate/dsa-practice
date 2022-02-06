/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/prefer-default-export
export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertStart(val) {
    const node = { val, left: null, right: null };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    node.right = this.head;
    this.head.left = node;
    this.head = node;

    return node;
  }

  insertEnd(val) {
    const node = { val, left: null, right: null };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    node.left = this.tail;
    this.tail.right = node;
    this.tail = node;

    return node;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    if (!this.head.right) {
      this.head = null;
      this.tail = null;
    }
    const nodeToReturn = this.head;

    this.head = this.head.right;
    this.head.left.right = null;
    this.head.left = null;
    return nodeToReturn;
  }

  moveNodeToEnd(node) {
    if (this.head === this.tail) {
      return;
    }

    if (node === this.tail) {
      return;
    }

    if (this.head === node) {
      this.tail.right = node;
      node.left = this.tail;
      this.head = this.head.right;
      this.head.left = null;
      node.right = null;
      this.tail = node;

      return;
    }

    node.left.right = node.right;
    node.right.left = node.left;
    node.right = null;
    node.left = this.tail;
    this.tail.right = node;
    this.tail = node;
  }

  print() {
    if (!this.head) {
      console.log('Empty');
      return;
    }

    let node = this.head;
    while (node) {
      console.log('Node', node.val);
      node = node.right;
    }
  }
}
