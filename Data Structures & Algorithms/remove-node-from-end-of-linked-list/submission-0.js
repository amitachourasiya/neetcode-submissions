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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = 0;
        let dummy = new ListNode(0,head);
       let first = head;
       let second = dummy;
       while(first!==null){
        first = first.next;
        count++
        if(count > n){
            second = second.next;
        }
       }
       second.next = second.next.next;
      return dummy.next
        
    }
}
