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

function findVal(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val) return root;
  if (root.val < val) return findVal(root.right, val);
  return findVal(root.left, val);
}

export function lowestCommonAncestor(
  root: TreeNode | null,
  v1: number,
  v2: number
): TreeNode | null {
  if (!root) {
    return root;
  }

  // case 0: both values are same as root
  if (v1 === root.val && v2 === root.val) {
    return root;
  }
  // case 1: both values are smaller than root
  if (v1 < root.val && v2 < root.val) {
    return lowestCommonAncestor(root.left, v1, v2);
  }
  // case 2: both values are bigger than root
  if (v1 > root.val && v2 > root.val) {
    return lowestCommonAncestor(root.right, v1, v2);
  }
  // case 3: one is smaller or equal than root and other is bigger or equal than root
  return findVal(root, v1) && findVal(root, v2) ? root : null;
}
