class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        let subset = [];
        nums.sort((a,b)=>a-b);
        this.dfs(nums,0,subset,res);
        return res;
    }

    dfs(nums, i, subset, res){
        res.push([...subset]);

        for(let j=i;j<nums.length;j++){
        subset.push(nums[j]);
        this.dfs(nums, j+1, subset, res);
        subset.pop();
        while(nums[j]==nums[j+1]){
            j++;
        }
        }
    }
}
