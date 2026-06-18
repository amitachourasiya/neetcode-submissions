class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l =0;
        let maxLength =0;
        let maxFreq =0 ;
        const freq = {};

        for(let r = 0; r < s.length; r++){
            
            let ch = s[r];
            freq[ch] = (freq[ch] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[ch]);
            let windowLen = r-l+1;
            
            while(windowLen - maxFreq > k){
                ch = s[l];
                freq[ch] = freq[ch]-1
                l++;
                windowLen = r-l+1;

            }
            maxLength = Math.max(maxLength,windowLen);
        }

        return maxLength;

    }
}
