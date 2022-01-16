/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 * @param {Array<TreeNode>} path
 * @param {TreeNode} node
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
const dfs = function (path, node, p, q) {
  path.push(node);
  let pPath, qPath;
  if (p && node.val === p.val) {
    pPath = [...path];
  }
  if (q && node.val === q.val) {
    qPath = [...path];
  }
  if (!pPath || !qPath) {
    if (node.left) {
      dfs(path, node.left, !pPath && p, !qPath && q);
    }
    if (node.right) {
      dfs(path, node.right, !pPath && p, !qPath && q);
    }
  }
  return [pPath, qPath];
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {};

/**
 cases: 
 1) are Sibling - answer is parent
 2) are in same sub tree - answer is the element with upper level
 3) are in different subtree - answer is root of both sub trees
 */

/**
 facts:
 - if answer is not found, ultimately the answer is the root node.
 */
