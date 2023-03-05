import { TreeNode } from "../trees/utils";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return root;
  let isFound = false;
  let ancestor: TreeNode | null = null;

  function dfs(node: TreeNode | null): [boolean, boolean] {
    if (isFound) return [true, true];
    if (!node) return [false, false];

    let res: [boolean, boolean] = [false, false];
    if (node === p) res[0] = true;
    if (node === q) res[1] = true;

    const leftRes = dfs(node.left);
    res = [res[0] || leftRes[0], res[1] || leftRes[1]];

    if (isFound) return [true, true];

    if (res[0] && res[1]) {
      ancestor = node;
      isFound = true;
      return res;
    }

    const rightRes = dfs(node.right);
    res = [res[0] || rightRes[0], res[1] || rightRes[1]];

    if (isFound) return [true, true];

    if (res[0] && res[1]) {
      ancestor = node;
      isFound = true;
    }

    return res;
  }

  dfs(root);
  return ancestor;
}
