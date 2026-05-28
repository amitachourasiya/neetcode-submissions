class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var groupAngrm = [];
        for(let char of strs){
            var sorted = char.split('').sort().join('');
            if(!groupAngrm[sorted]){
                groupAngrm[sorted] = []; 
            }
            groupAngrm[sorted].push(char);
        }
        return Object.values(groupAngrm);
    }
}
