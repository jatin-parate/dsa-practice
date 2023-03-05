import { TreeNode } from "../trees/utils";

type Arr = [boolean, boolean];
function mergeBoolArray(first: Arr, second: Arr): void {
  first[0] = first[0] || second[0];
  first[1] = first[1] || second[1];
}

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return root;
  let isFound = false;
  let ancestor: TreeNode | null = null;

  function dfs(node: TreeNode | null): Arr {
    if (isFound) return [true, true];
    if (!node) return [false, false];

    let res: Arr = [false, false];
    if (node === p) res[0] = true;
    if (node === q) res[1] = true;

    mergeBoolArray(res, dfs(node.left));

    if (isFound) return [true, true];

    if (res[0] && res[1]) {
      ancestor = node;
      isFound = true;
      return res;
    }

    mergeBoolArray(res, dfs(node.right));

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
