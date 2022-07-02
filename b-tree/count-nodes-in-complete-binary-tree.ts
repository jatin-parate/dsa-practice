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

const countNodes = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let i = 0;
  while (i !== queue.length) {
    const currNode = queue[i];
    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }

    i += 1;
  }

  return i;
};

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
