class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
        const maxHeap = new PriorityQueue((a,b)=>b[0]-a[0])
        for(let point of points){
            let x = point[0];
            let y = point[1];
            maxHeap.enqueue([x**2+y**2,point]);
            if(maxHeap.size()>k){
                maxHeap.dequeue();
            }
        }  
        let res = [];
        while(maxHeap.size()>0){
            const [data,x] = maxHeap.dequeue();
            res.push(x);
        }      
        return res;
         
    }
    
}
