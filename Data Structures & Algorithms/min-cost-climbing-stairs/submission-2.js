class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const _steps = cost.length
        let arr = new Array(_steps-1).fill(0);
        arr[_steps - 1] = cost[_steps-1]
        arr[_steps - 2] = cost[_steps -2]
        for(let i =_steps-3; i >= 0; i--){
            arr[i] = Math.min(cost[i] + arr[i+1], cost[i] + arr[i+2])
        }
        console.log(arr)
        return Math.min(arr[0],arr[1]);
    }
}
