export class BST {
  left?: BST;
  right?: BST;

  constructor(public value: number) {}

  insertNode(value: number) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insertNode(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insertNode(value);
      }
    }
  }

  printInOrder(): string {
    return `${this.left?.printInOrder() ?? ""} ${this.value} ${
      this.right?.printInOrder() ?? ""
    }`;
  }
}

const tree = new BST(1);
tree.insertNode(2);
tree.insertNode(4);
tree.insertNode(3);
tree.insertNode(0);

console.log(tree.printInOrder());
