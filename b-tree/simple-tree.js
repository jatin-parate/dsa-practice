class BtreeNode {
  constructor(data) {
    this.data = data;
    // this.left = null;
    // this.right = null;
  }

  setLeft(data) {
    this.left = new BtreeNode(data);
  }

  setRight(data) {
    this.right = new BtreeNode(data);
  }
}

const tree = new BtreeNode(1);
tree.setRight(3);
tree.setLeft(2);

tree.left.setLeft(4);

console.log(JSON.stringify(tree, null, 3));
