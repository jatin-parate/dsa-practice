import { TreeNode } from "./utils";

export function sumNumbers(root: TreeNode | null, sum = 0): number {
  if (!root) return 0;
  const currSum = sum * 10 + root.val;

  if (!root.left && !root.right) return currSum;

  return sumNumbers(root.left, currSum) + sumNumbers(root.right, currSum);
}
