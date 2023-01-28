import { TreeNode } from "./utils";

function _isBalanced(root: TreeNode | null, level = 0): [boolean, number] {
  if (!root) {
    return [true, 0];
  }

  const [isLeftBalanced, leftSubTreeMaxHeight] = _isBalanced(
    root.left,
    level + 1
  );
  const [isRightBalanced, rightSubTreeMaxHeight] = _isBalanced(
    root.right,
    level + 1
  );

  return [
    isLeftBalanced && isRightBalanced
      ? Math.abs(rightSubTreeMaxHeight - leftSubTreeMaxHeight) <= 1
      : false,
    1 + Math.max(leftSubTreeMaxHeight, rightSubTreeMaxHeight),
  ];
}

export function isBalanced(root: TreeNode | null): boolean {
  return _isBalanced(root)[0]
}
