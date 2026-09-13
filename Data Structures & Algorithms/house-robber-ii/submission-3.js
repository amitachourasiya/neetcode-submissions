
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map()
        if (nums.length === 1) return nums[0];

        const dfs = (i, flag) => {
            const compoundKey = `${i}:${flag}`
            if (cache.has(compoundKey)){
                return cache.get(compoundKey)
            }
            if (i >= nums.length || (flag && i === nums.length - 1)) return 0;

            let _result = Math.max(
                dfs(i + 1, flag),
                nums[i] + dfs(i + 2, flag),
            );

            cache.set(compoundKey, _result);
            return _result;
        };

        return Math.max(dfs(0, true), dfs(1, false));
    }
}