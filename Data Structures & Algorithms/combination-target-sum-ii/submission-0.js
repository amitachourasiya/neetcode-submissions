class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum2(nums, target) {
        const res = [];
        nums.sort((a,b)=>a -b);
        this.dfs(0,[],0,nums,target,res);
        return res;

    }

    dfs(i, curr, total,nums,target,res){
    if(total==target){
        // if(!res.includes(curr)){
            res.push([...curr]); 
            return 
        // }
           
    }
    if(total>target){
            return;
        }

    for(let j=i;j<nums.length;j++){
        curr.push(nums[j]);
        this.dfs(j+1,curr,total+nums[j], nums,target,res);
        curr.pop();
            while(nums[j]==nums[j+1]){
                j++;
            }
    }
    
    }
}
