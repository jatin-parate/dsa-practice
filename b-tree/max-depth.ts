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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return (
    1 +
    Math.max(
      root.left ? maxDepth(root.left) : 0,
      root.right ? maxDepth(root.right) : 0
    )
  );
}

assert.equal(maxDepth(null), 0);

assert.equal(maxDepth(new TreeNode()), 1);
assert.equal(maxDepth(new TreeNode(undefined, new TreeNode(), null)), 2);
assert.equal(maxDepth(new TreeNode(undefined, null, new TreeNode())), 2);
