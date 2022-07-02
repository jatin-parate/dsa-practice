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

const levelOrder = (root: TreeNode | null): Array<Array<number>> => {
  if (!root) {
    return [];
  }

  let output: Array<Array<TreeNode>> = [];
  output.push([root]);
  while (true) {
    let newArray: TreeNode[] = [];
    let currLevelNodes = output.at(-1)!;

    currLevelNodes.forEach((node) => {
      if (node.left) {
        newArray.push(node.left);
      }

      if (node.right) {
        newArray.push(node.right);
      }
    });

    if (!newArray.length) {
      break;
    }
    output.push(newArray);
  }

  return output.map((level) => {
    return level.map(node => node.val!)
  });
};

assert.deepEqual(
  levelOrder(
    new TreeNode(
      4,
      new TreeNode(3, new TreeNode(1), new TreeNode(2)),
      new TreeNode(7, new TreeNode(5), new TreeNode(8))
    )
  ),
  [[4], [3, 7], [1, 2, 5, 8]]
);

assert.deepEqual(levelOrder(null), []);

assert.deepEqual(levelOrder(new TreeNode(4)), [[4]]);
