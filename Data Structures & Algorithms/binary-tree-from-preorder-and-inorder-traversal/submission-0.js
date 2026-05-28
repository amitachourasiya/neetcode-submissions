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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */

    buildTree(preorder, inorder) {
        let map = new Map();
        let preIndex = 0;
        inorder.forEach((val,ind)=>{
            map.set(val,ind);
        })
    function getTree(l,r){
        if(l>r) return null;
        let root  = new TreeNode(preorder[preIndex++]);
        let mid = map.get(root.val);
        root.left = getTree(l,mid-1);
        root.right = getTree(mid+1,r)
        return root;

    }
    return getTree(0,inorder.length-1);

    }



}