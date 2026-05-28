class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=> a[0]-b[0]);
        
        const result = [];
        let [start,end] = intervals[0];
        // result.push(intervals[0])
        console.log('start,end',start,end);
      for(let i=1; i<intervals.length; i++){
        const newStart = intervals[i][0];
        const newEnd = intervals[i][1];
        if(end>=newStart){
            end = Math.max(end,newEnd); 
        }
         else{
            result.push([start,end]);
            start = newStart;
            end = newEnd;
         }
      }
      result.push([start,end]);
      return result

    }
}
