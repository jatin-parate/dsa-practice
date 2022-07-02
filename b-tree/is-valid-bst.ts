import assert from "assert";

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

const dfs = (node: TreeNode, min: number, max: number): boolean => {
  if (node.val <= min || node.val >= max) {
    return false;
  }

  if (node.left) {
    if (!dfs(node.left, min, node.val)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.val, max)) {
      return false;
    }
  }

  return true;
};

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return dfs(root, -Infinity, Infinity);
}

assert.equal(
  isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))),
  true
);
