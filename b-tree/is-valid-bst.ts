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

const traverse = (node: TreeNode | null, output: number[]) => {
  if (!node) {
    return;
  }
  if (node.left) {
    traverse(node.left, output);
  }
  output.push(node.val);
  if (node.right) {
    traverse(node.right, output);
  }
};

function isValidBST(
  root: (TreeNode & { min?: number; max?: number }) | null
): boolean {
  if (!root) {
    return true;
  }
  // traverse tree in left-root-right
  const output: number[] = [];

  traverse(root, output);
  console.log(output);

  for (let i = 1; i < output.length; i += 1) {
    if (output[i] <= output[i - 1]) {
      return false;
    }
  }

  return true;
}

isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
