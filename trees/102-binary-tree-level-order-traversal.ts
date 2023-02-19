import { TreeNode } from "./utils";

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const nextLevel: TreeNode[] = [];
    const currLevelVals: number[] = [];

    while (queue.length > 0) {
      const ele = queue.shift()!;
      if (ele.left) nextLevel.push(ele.left);
      if (ele.right) nextLevel.push(ele.right);
      currLevelVals.push(ele.val);
    }

    result.push(currLevelVals);
    queue.push(...nextLevel);
  }

  return result;
}
