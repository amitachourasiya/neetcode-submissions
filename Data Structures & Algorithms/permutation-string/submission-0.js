class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }
        let s1count = new Array(26).fill(0);
        let s2count = new Array(26).fill(0);
        
        for(let k = 0;k < s1.length; k++ ){
            s1count[s1.charCodeAt(k) - 97]++ ;
            s2count[s2.charCodeAt(k) - 97]++ ;
        }
        let matches = 0;
        for(let m = 0; m < 26; m++){
            if(s1count[m]===s2count[m]){
                matches++;
            }
        }

        let l=0;
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26){
                return true;
            }

            let index = s2.charCodeAt(r)-97;
            s2count[index]++;
            if(s1count[index] === s2count[index]){
                matches++;
            }
            else if(s1count[index] + 1 === s2count[index]){
                matches--;
            }

            index = s2.charCodeAt(l)-97;
            s2count[index]--;
            if(s1count[index] === s2count[index]){
                matches++;
            }
            else if(s1count[index]-1 === s2count[index]){
                matches--;
            }
            l++;

        }
        return matches === 26;

    }
}
