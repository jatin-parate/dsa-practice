import assert from "assert";
import { TreeNode } from "./utils";

export function goodNodes(root: TreeNode | null, max = -Infinity): number {
  if (!root) return 0;

  let count = 0;

  if (root.val >= max) {
    max = root.val;
    count += 1;
  }

  if (root.left) count += goodNodes(root.left, max);
  if (root.right) count += goodNodes(root.right, max);

  return count;
}

assert.equal(
  goodNodes(
    new TreeNode(1, new TreeNode(4, new TreeNode(6, null, new TreeNode(10))))
  ),
  4
);

assert.equal(
  goodNodes(
    new TreeNode(
      3,
      new TreeNode(1, new TreeNode(3)),
      new TreeNode(4, new TreeNode(1), new TreeNode(5))
    )
  ),
  4
);

assert.equal(
  goodNodes(new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2)))),
  3
);

assert.equal(goodNodes(new TreeNode(1)), 1);

assert.equal(
  goodNodes(
    new TreeNode(
      2,
      null,
      new TreeNode(4, new TreeNode(10), new TreeNode(8, new TreeNode(4)))
    )
  ),
  4
);
