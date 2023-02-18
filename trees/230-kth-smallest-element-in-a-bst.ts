import assert from "assert";
import { TreeNode } from "./utils";

export function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;

  const stack: TreeNode[] = [root];
  let i = 0;

  while (stack.at(-1)!.left) stack.push(stack.at(-1)!.left!);

  while (stack.length > 0) {
    const top = stack.pop()!;
    i += 1;

    if (i === k) return top.val;

    if (top.right) {
      stack.push(top.right);
      while (stack.at(-1)!.left) stack.push(stack.at(-1)!.left!);
    }
  }

  return -1;
}

assert.equal(
  kthSmallest(
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
      new TreeNode(6)
    ),
    3
  ),
  3
);
