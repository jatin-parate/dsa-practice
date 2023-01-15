class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function areIdenticalBTrees(
  t1: TreeNode | null,
  t2: TreeNode | null
): boolean {
  if (t1 === t2) return true;

  if (!t1 || !t2) return false;
  if (t1.val !== t1.val) return false;

  return (
    areIdenticalBTrees(t1.left, t2.left) &&
    areIdenticalBTrees(t1.right, t2.right)
  );
}
