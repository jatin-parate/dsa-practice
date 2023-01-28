import assert from "assert";
import { recursiveDFS } from "./recursive-dfs";
import { TreeNode } from "./utils";

export function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let count = 0;

  recursiveDFS(root, [], (node, stack) => {
    for (let i = stack.length - 2; i >= 0; i -= 1) {
      if (stack[i].val > node.val) {
        return;
      }
    }

    count += 1;
  });
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
