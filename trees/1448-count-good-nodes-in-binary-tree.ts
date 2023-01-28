import assert from "assert";
import { TreeNode } from "./utils";

function dfs(
  root: TreeNode,
  processNode: (node: TreeNode, stack: TreeNode[]) => void
) {
  const stack = [root];
  const visited = new Set<TreeNode>();

  while (stack.length > 0) {
    if (stack.at(-1)!.left && !visited.has(stack.at(-1)!.left!)) {
      let left = stack.at(-1)!.left;
      while (left) {
        stack.push(left);
        left = stack.at(-1)!.left;
      }
    }

    const lastNode = stack.at(-1)!;
    processNode(lastNode, stack);
    visited.add(lastNode);

    if (lastNode.right && !visited.has(lastNode.right)) {
      stack.push(lastNode.right);
    } else {
      stack.pop();
      if (
        stack.length > 0 &&
        stack.at(-1)!.right &&
        !visited.has(stack.at(-1)!.right!)
      ) {
        stack.push(stack.at(-1)!.right!);
      }
    }
  }
}

export function goodNodes(root: TreeNode | null): number {
  if (!root) return 1;
  const goodNodes = new Set<TreeNode>();

  dfs(root, (node, stack) => {
    const x = node.val;

    if (stack.length === 1) {
      goodNodes.add(node);
      return;
    }

    for (let i = stack.length - 1; i >= 0; i -= 1) {
      if (stack[i].val > x) {
        return;
      }

      if (goodNodes.has(stack[i])) {
        goodNodes.add(node);
        return;
      }
    }

    goodNodes.add(node);
    return;
  });

  return goodNodes.size;
}

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
