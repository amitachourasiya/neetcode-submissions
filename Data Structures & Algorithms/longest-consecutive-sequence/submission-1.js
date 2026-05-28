class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ==0) return 0;
        const unique  = new Set(nums);
        let longest = 1;
        for (let num of unique){
        if(!unique.has(num-1)){
            var length = 1 ;
            while(unique.has(num + length)){
                length++;
            }
        }
        if(length > longest){
            longest = length;
        }
        }
            return longest;
    }
}
