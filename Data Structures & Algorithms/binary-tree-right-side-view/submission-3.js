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
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = [root];
        let index = 0
        let result = [];
        let temp;
        if(!root){
            return [];
        }
        while(index < queue.length){
            let size = queue.length - index
            for(let i=0; i < size;i++){
            let node = queue[index++];
            if(node.left) queue.push(node.left)
             if(node.right) queue.push(node.right)
            temp = node.val
        }  
        result.push(temp)
        } 
       return result;
    }
}
