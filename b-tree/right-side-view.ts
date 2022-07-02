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
  if (!root) {
    return [];
  }

  let queue = [root];
  let nextLevelNodes: TreeNode[] = [];
  const rightSideViewNodeValues: number[] = [root.val];

  while (true) {
    while (queue.length) {
      const currNode = queue.shift()!;
      if (currNode.left) {
        nextLevelNodes.push(currNode.left);
      }
      if (currNode.right) {
        nextLevelNodes.push(currNode.right);
      }
    }
    if (nextLevelNodes.length) {
      rightSideViewNodeValues.push(nextLevelNodes.at(-1)!.val);
      queue = nextLevelNodes;
      nextLevelNodes = [];
    } else {
      return rightSideViewNodeValues;
    }
  }
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
