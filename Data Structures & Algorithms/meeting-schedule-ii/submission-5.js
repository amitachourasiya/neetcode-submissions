/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let count = 0;
        let start = [];
        let end = [];
        let i=0;
        let j = 0;
        let res = 0
        // intervals = intervals.sort((a,b) => a.start-b.start);
        // intervals = intervals.sort((a,b) => a.end-b.end);
        console.log(intervals)
        for(let interval of intervals){
            start.push(interval.start);
            end.push(interval.end);
        }

        start.sort((a,b)=> a-b);
        end.sort((a,b)=> a-b);

        while(i<start.length){
            if(start[i]< end[j]){
                i++;
                count++;
            }
            else{
                j++;
                count--;
            } 
            res = Math.max(res,count);
        }


        return res;
    }
}
