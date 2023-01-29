import { TreeNode } from "./utils";

export function sortedArrayToBST(
  nums: number[],
  i = 0,
  j = nums.length - 1
): TreeNode | null {
  if (i > j) return null;
  if (i === j) return new TreeNode(nums[i]);

  const mid = Math.floor((i + j) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, i, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, j);

  return root;
}
