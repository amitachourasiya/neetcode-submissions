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
     * @return {void}
     */
    reorderList(head) {
        let fast = head.next;
        let slow = head;
        let pre = new ListNode();
        while(fast !==null && fast.next !==null){
            fast = fast.next.next;
            pre = slow;
            slow = slow.next;
        }
        let second = slow.next;
        slow.next = null;
        const reversedList = this.getReversedlinledlist(second);
        const firstList = head;
        this.getFinalList(firstList,reversedList);

    }

    getReversedlinledlist(slowLinkedlist){
        let pre = null;
        let nextNode = new ListNode();
        while(slowLinkedlist !== null ){
            nextNode = slowLinkedlist.next;
            slowLinkedlist.next = pre;
            pre = slowLinkedlist;
            slowLinkedlist = nextNode;
        }
        return pre;
    }

    getFinalList(firstList,reversedList){
        while(reversedList !==null){
            let temp1 = firstList.next; let temp2= reversedList.next
            firstList.next = reversedList;
            reversedList.next = temp1;
            firstList  = temp1;
            reversedList = temp2
        }
    }
}