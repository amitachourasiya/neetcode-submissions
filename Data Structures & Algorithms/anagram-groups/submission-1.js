class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groupAngrm = [];
        for(let char of strs){
            var sorted = char.split('').sort().join('');
            if(!groupAngrm[sorted]){
                groupAngrm[sorted] = []; 
            }
            groupAngrm[sorted].push(char);
        }
        console.log("arry",Array.isArray(groupAngrm))
        console.log("arry", typeof groupAngrm)
        return Object.values(groupAngrm);   
    }   
}
