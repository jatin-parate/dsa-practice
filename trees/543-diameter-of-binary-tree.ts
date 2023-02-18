import { TreeNode } from "./utils";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    let left = dfs(node.left); // 0
    let right = dfs(node.right); //

    max = Math.max(
      max,
      (node.left ? 1 + left : 0) + (node.right ? 1 + right : 0)
    );

    return node.left || node.right ? 1 + Math.max(left, right) : 0;
  }

  dfs(root);
  return max;
}
