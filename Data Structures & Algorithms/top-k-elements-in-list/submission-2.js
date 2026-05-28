class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for(let num of nums){
            freq.has(num) ? freq.set(num,freq.get(num) + 1 ) : freq.set(num, 1);
        }
        const Bucket = Array(nums.length + 1).fill().map(() => []);
        for(let [num, fre] of freq.entries()){
            Bucket[fre].push(num);
        }
        // const filteredBucked = Bucket.filter((buck) => buck.length>0);
        const result = [];
        for(let i = Bucket.length-1; i >=0 && result.length < k; i--){
            for(let num of Bucket[i]){
            result.push(num);
            if(result.length===k) break;
            }
        }
        return result;
    }
}
