import { TreeNode } from "./utils";

export function dfsWithStack(
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
