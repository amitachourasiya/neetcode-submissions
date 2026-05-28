class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length-1;
        let res = nums[l];

        while(l<=r){
            if(nums[l] < nums[r]){
                res = Math.min(res,nums[l])
                break;
                }
            let mid = Math.floor((l+r)/2);
            if(res > nums[mid]){
                res = nums[mid]
            }
            if(nums[l]<=nums[mid]){
                l = mid+1;
            }
            else{
                r = mid-1;
            }
        }
        return res;
    }
}
