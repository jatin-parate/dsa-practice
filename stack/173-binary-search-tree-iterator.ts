class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BSTIterator {
  private readonly stack: TreeNode[] = [];

  constructor(private root: TreeNode | null) {
    let curr = root;

    while (curr) {
      this.stack.push(curr);
      curr = curr.left;
    }
  }

  next(): number {
    const top = this.stack.pop()!;
    let curr = top.right;
    while (curr) {
      this.stack.push(curr);
      curr = curr.left;
    }

    return top.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
