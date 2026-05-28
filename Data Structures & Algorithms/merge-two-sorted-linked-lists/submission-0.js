/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        
        let resultnode = new ListNode();
        let newNode = resultnode
        let currt1 = list1;
        let currt2 = list2;
        while(currt1 && currt2){
            if(currt1.val < currt2.val){
                newNode.next = currt1
                currt1 = currt1.next;
                
            }
            else{
                newNode.next = currt2
                currt2 = currt2.next;
            }
            newNode = newNode.next;
            
        }
        newNode.next = currt1? currt1 : currt2;
        return resultnode.next
    }
    
}
