class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0;
        let r =1;
        let max = 0;
        while(r < prices.length){
            if(prices[r] <= prices[l]){
                l = r;
                r++;
            }
            else{
                max = Math.max(prices[r]-prices[l],max);
                r++; 

            }
            
        }
        return max > 0 ? max : 0
    }
}
