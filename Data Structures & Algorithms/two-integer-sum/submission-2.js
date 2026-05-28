class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var hasTable = {};
        for(let i=0; i<nums.length; i++){
            var lookupElement = target - nums[i];
            if(lookupElement in hasTable){
                if(hasTable[lookupElement] !== i){
                    console.log("table",hasTable);
                    return [hasTable[lookupElement], i];
                }
            }  
            hasTable[nums[i]] = i;
        }
        return [-1,-1];
    }
}
