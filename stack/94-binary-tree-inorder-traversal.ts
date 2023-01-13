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

export function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const res: number[] = [];
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
}
