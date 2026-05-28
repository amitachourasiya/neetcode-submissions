class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let res = 0;
        while(left < right){

        let minimum = Math.min(heights[left],heights[right]);
        let prod = (right-left) * minimum;
        res = Math.max(prod,res);
       if(heights[left] < heights[right]){
            left++;
        }
        else{
            right--;
        }
        }
        return res;

    }
}
