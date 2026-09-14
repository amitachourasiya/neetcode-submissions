class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    palindrom(l,r,s){
        while(l >= 0 && r < s.length && s[l] ===s[r]){
            l -= 1;
            r += 1;
        }
        //loop will end at l=-1 and r=s so we need to return correct index
        return [l+1,r-1];
    }

    longestPalindrome(s) {
        let res = '';
        let resLen = 0;
        for (let i = 0; i < s.length; i++) {

        //odd number of string 
        let l = i;
        let r = i;
        [l,r] = this.palindrom(l,r,s);
        let len = r - l + 1;
        if(len > resLen){
            resLen = len;
            res = s.slice(l,r+1);
        }

        //even number of string 
         l = i;
         r = i+1;
        [l,r] = this.palindrom(l,r,s);
        let len2 = r - l + 1;
        if(len2 > resLen){
            resLen = len2;
            res = s.slice(l,r+1);
        }
        }
        return res;
        
    }
}
