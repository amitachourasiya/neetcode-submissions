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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        
        let res = [];
             this.inOrder(root,k,res);  
             return res[k-1]  
            }

    inOrder(root,k,res){
            if(!root){
                return ;
            }
            this.inOrder(root.left,k,res)
            console.log("rootval",root.val);
            res.push(root.val)
                if (res.length-1 === k) {
                 console.log("kth smallest", res[k - 1]);
                }
            this.inOrder(root.right,k,res)
            
    }

}
