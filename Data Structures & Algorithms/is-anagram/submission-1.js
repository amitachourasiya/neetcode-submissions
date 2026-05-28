class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var hasTableS = {};
    if (s.length !== t.length){
        return false;
    }
    else{
        for(let char of s){
            if(hasTableS[char]){
                 hasTableS[char]++; 
            }
            else{
                hasTableS[char] = 1;
            }
        } 
        for(let str in t){
            var char = t[str];
            if(char in hasTableS){
                hasTableS[char]--;
                if(hasTableS[char] < 0){
                    return false;
                }
            }
            else{
                return false;
            }
        }
    }
    return true;
    }
}
