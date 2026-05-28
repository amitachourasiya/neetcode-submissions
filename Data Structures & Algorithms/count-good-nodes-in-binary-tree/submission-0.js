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
     * @return {number}
     */
    goodNodes(root) {
        let maxValue = root.val
         return (this.getMaxCount(root,maxValue));
    }
    getMaxCount(root,maxValue){
        
        if(!root){
            return 0;
        }
        let res = 0;
        if(maxValue <= root.val){
            res++;
        }
        maxValue = Math.max(maxValue,root.val);

        res += this.getMaxCount(root.left,maxValue);
        console.log("res left",res);
        res += this.getMaxCount(root.right,maxValue);
        console.log("res right",res);
        return res;
    }
}
