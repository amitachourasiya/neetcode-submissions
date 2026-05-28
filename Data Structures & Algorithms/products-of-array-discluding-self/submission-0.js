class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let array = Array(nums.length).fill(1);
            // let array = Array(nums.length).fill(1);
            let prefix = 1;
           for(let i=0; i <nums.length ;i++){
            array[i] = prefix;
            prefix *=nums[i];
           } 
          console.log("array",array);
            let suffix = 1;
           for(let i = nums.length-1 ; i >=0 ; i--){
                array[i] *= suffix;
                suffix *= nums[i];
           }

            return array;
    }
}
