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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [root];
        let index = 0;
        let preresult = [];
        let result = [];
        if(!root){
            return [];
        }
        while(index < queue.length){
            let size = queue.length - index;
            console.log('size',size)
            for(let i = 0; i < size; i++){
            let node = queue[index++];

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

            preresult.push(node.val);
            }
            result.push(preresult);
            preresult = [];
            
        }
        return result;
    }
}
