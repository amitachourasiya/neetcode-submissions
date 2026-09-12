let cache = new Map();
class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let x = 0 ;
        let y = 0 ;
        if(n==0){
            return 1;
        }
        if(cache.has(n)){
            return cache.get(n)
        }
        if(n-1 >=0){
            x = this.climbStairs(n-1);
        }
        if(n-2 >=0){
            y = this.climbStairs(n-2);
        }
        cache.set(n,x + y);
        return x + y;
    }
}
