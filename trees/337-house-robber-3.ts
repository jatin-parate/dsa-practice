import { TreeNode } from "./utils";

export function rob(root: TreeNode | null): number {
  if (!root) return 0;

  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [0, 0];

    const left = dfs(node.left);
    const right = dfs(node.right);

    return [
      node.val + left[1] + right[1], // with curr node
      Math.max(...left) + Math.max(...right), // without curr node
    ];
  }

  return Math.max(...dfs(root));
}
