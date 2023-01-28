import assert from "assert";
import { TreeNode } from "./utils";

function dfs(
  root: TreeNode,
  processNode: (node: TreeNode, stack: TreeNode[]) => void
) {
  const stack = [root];
  const visited = new Set<TreeNode>();

  if (!root.left && root.right) {
    stack.push(root.right);
  }

  while (stack.length > 0) {
    if (stack.at(-1)!.left && !visited.has(stack.at(-1)!.left!)) {
      let left = stack.at(-1)!.left;
      while (left) {
        stack.push(left);
        left = stack.at(-1)!.left;
      }
    }

    const lastNode = stack.at(-1)!;
    if (visited.has(lastNode)) {
      stack.pop();
      continue;
    }

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
  let count = 0;

  dfs(root, (node, stack) => {
    const x = node.val;

    if (stack.length === 1) {
      // console.log(
      //   x,
      //   stack.map((node) => node.val)
      // );
      count++;
      return;
    }

    for (let i = stack.length - 1; i >= 0; i -= 1) {
      if (stack[i].val > x) {
        return;
      }
    }

    // console.log(
    //   x,
    //   stack.map((node) => node.val)
    // );
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
