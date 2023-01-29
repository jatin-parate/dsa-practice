import { TreeNode } from "./utils";

type QueueItem = TreeNode | null;

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let holder = root.right;
  root.right = root.left;
  root.left = holder;
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
