class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        // nums.sort((a,b)=>a -b);
        this.dfs(0,[],0,nums,target,res);
        return res;

    }

    dfs(i, curr, total,nums,target,res){
    if(total==target){
        res.push([...curr]);     
    }
    for(let j=i;j<nums.length;j++){
        if(total>target){
            return;
        }
        curr.push(nums[j]);
        this.dfs(j,curr,total+nums[j], nums,target,res);
        curr.pop();
    }
    
    }
}
