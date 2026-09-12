class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let arr = new Array(n).fill(0);
        arr[0] = 1;
        arr[1] = 1;
       for(let i=2;i<=n;i++){
            arr[i] = arr[i-1] + arr[i-2];
       }
       return arr[n];
    }
}
