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

const rightSideView = (root: TreeNode | null): Array<number> => {
  const rightSideViewNodes: number[] = [];

  if (!root) {
    return rightSideViewNodes;
  }

  const queue = [root];
  let i = 0;
  let currLevelEndIndex = 0;

  while (i !== queue.length) {
    const currNode = queue[i];
    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }

    if (i === currLevelEndIndex) {
      currLevelEndIndex = queue.length - 1;
      rightSideViewNodes.push(currNode.val);
    }

    i += 1;
  }

  return rightSideViewNodes;
};

assert.deepEqual(rightSideView(new TreeNode(1)), [1]);
assert.deepEqual(rightSideView(null), []);
assert.deepEqual(
  rightSideView(
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(7, new TreeNode(6), new TreeNode(8))
    )
  ),
  [5, 7, 8]
  // [5, 3, 7, 2, 4, 6, 8]
);
