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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return traverse(root);
}

function leftDepth(node: TreeNode | null): number {
  if (!node) return 0;
  return leftDepth(node.left) + 1;
}

function rightDepth(node: TreeNode | null): number {
  if (!node) return 0;
  return rightDepth(node.right) + 1;
}

function traverse(node: TreeNode | null): number {
  const leftLen = leftDepth(node);
  const rightLen = rightDepth(node);

  if (leftLen === rightLen) return 2 ** leftLen - 1;
  return traverse(node!.left) + traverse(node!.right) + 1;
}

assert.equal(countNodes(null), 0);
assert.equal(countNodes(new TreeNode()), 1);
assert.equal(
  countNodes(new TreeNode(undefined, new TreeNode(), new TreeNode())),
  3
);
assert.equal(
  countNodes(
    new TreeNode(
      undefined,
      new TreeNode(undefined, new TreeNode(), new TreeNode()),
      new TreeNode()
    )
  ),
  5
);
assert.equal(
  countNodes(
    new TreeNode(
      undefined,
      new TreeNode(undefined, new TreeNode(), new TreeNode()),
      new TreeNode(undefined, new TreeNode(), new TreeNode())
    )
  ),
  7
);
assert.equal(
  countNodes(
    new TreeNode(
      undefined,
      new TreeNode(undefined, new TreeNode(), new TreeNode()),
      new TreeNode(undefined, new TreeNode())
    )
  ),
  6
);
