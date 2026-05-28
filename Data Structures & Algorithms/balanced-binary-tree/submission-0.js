/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    leftLen= 0; rightLen= 0;
    // rightLen1 = 0;
    isBalanced(root) {
        return this.height(root)>=0;
    }
    height(root){
        if(root==null)
        return 0;
        let left = this.height(root.left);
        if(left === -1) return -1;
        let right = this.height(root.right);
        if(right === -1) return -1;
        if (Math.abs(left-right) > 1) return -1;
        // const balanced = Math.abs(right-left > 1) return -1;
        return 1+Math.max(left,right);

        // return 1+Math.max(this.height(root.left),this.height(root.right));
    }
}
