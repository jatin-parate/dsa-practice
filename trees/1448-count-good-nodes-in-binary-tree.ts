import assert from "assert";
import { dfsWithStack } from "./dfs-with-stack";
import { TreeNode } from "./utils";

function dfs(node: TreeNode, stack: TreeNode[]) {
  stack.push(node);
  let count = 0;

  if (node.left) {
    count += dfs(node.left, stack);
  }

  if (node.right) {
    count += dfs(node.right, stack);
  }

  let isBroken = false;
  for (let i = 0; i < stack.length; i += 1) {
    if (stack[i].val > node.val) {
      isBroken = true;
      break;
    }
  }

  if (!isBroken) {
    count += 1;
  }

  stack.pop();
  return count;
}

export function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  return dfs(root, []);
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
