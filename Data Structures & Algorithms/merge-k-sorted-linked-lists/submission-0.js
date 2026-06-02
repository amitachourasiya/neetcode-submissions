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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length==0) return null;
        let minHeap = new MinPriorityQueue((x) => x.val);
        for(let list of lists){
            minHeap.enqueue(list);
        }
        
        let res = new ListNode(0);
        let curr = res;
        while(minHeap.size()>0){
            curr.next = minHeap.dequeue();
            curr = curr.next;
            if(curr.next !== null){
                minHeap.enqueue(curr.next);
            }
        }
        return res.next;

    }
}
