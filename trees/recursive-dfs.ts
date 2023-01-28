import { TreeNode } from "./utils";

export function recursiveDFS(
  node: TreeNode,
  stack: TreeNode[],
  process: (node: TreeNode, stack: TreeNode[]) => void
) {
  stack.push(node);

  if (node.left) {
    recursiveDFS(node.left, stack, process);
  }

  if (node.right) {
    recursiveDFS(node.right, stack, process);
  }

  process(node, stack);
  stack.pop();
}
