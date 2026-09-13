class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map();
        let numLen = nums.length
       const dfs = (i) =>{
        if(cache.has(i)){
            return cache.get(i);
        }
        if(i >= numLen){
            return 0;
        }
        //robbing ith house
        let money = Math.max(dfs(i+2) + nums[i],dfs(i+1)) 
        cache.set(i,money);
        return money
        }
        return dfs(0);
    }
}
