class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        console.log("sorted",nums);
        let res = [];
        for(let i=0; i<nums.length; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
                let j= i+1;
                let k = nums.length-1;
                while(j < k){
                    let sum = nums[i] + nums[j] + nums[k];
                    if(sum > 0){
                        k--;
                    }
                    else if(sum < 0){
                        j++;
                    }
                    else{
                        res.push([nums[i], nums[j], nums[k]]);
                        k--;
                        j++;
                        while(nums[j]==nums[j-1] && j<k) j++;
                        while(nums[k]==nums[k+1] && j<k) k--;
                    }
                }
        }
        return res;
        // if(res.length){
        //     return Array.from(new Set(res.map(JSON.stringify)),JSON.parse);
        // }
        // else{
        //     return [];
        // }
    }
}
