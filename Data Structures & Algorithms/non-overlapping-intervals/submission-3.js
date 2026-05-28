class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let count = 0;
        intervals = intervals.sort((a,b) => a[1]-b[1]);
        
        let end = intervals[0][1];

        for(let i = 1; i < intervals.length; i++){
            let [newStart, newEnd] = intervals[i];
            if(end > newStart){
                count++;
            }
            else{
                end = newEnd;
            }
        }
        return count;
    }
}
