class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //  let arr = Array(nums.length).fill(1);
let arr =[];
let prefix = 1;
let suffix =1;
 for(let i=0;i<nums.length; i++){
    arr[i] =1;
    arr[i] *= prefix;
    prefix *= nums[i]
 }

 for(let i=nums.length-1;i>=0; i--){
    arr[i] *= suffix;
    suffix *= nums[i]
 }
 return arr;

    }

}
