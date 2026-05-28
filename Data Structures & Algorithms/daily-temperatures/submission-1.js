class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];
        let right = 0;
        for(let i=0;i<temperatures.length;i++){
            let count = 1;
            right = i+1;
            while(temperatures[right]<=temperatures[i]){
                right++;
                count++;
            }
            count = right === temperatures.length ? 0 : count; 
            res.push(count);
        }
        return res;
    }
}
