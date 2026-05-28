class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var arr=[];
        var isDuplicate = false;
        for(let i=0; i<nums.length; i++){
            if(arr.includes(nums[i])){
                return true;
            }
            arr.push(nums[i]);
        }
        return false;
    }
}
