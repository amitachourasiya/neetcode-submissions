class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s= s.replace(/[^A-Za-z0-9]/g,'').toLocaleLowerCase();
        // var string = s.split(" ").join("").toLowerCase();
      for(let i=0, j=s.length-1; i<=j; i++, j-- ){
        if(s[i] !== s[j]){
            return false;
        }
      }
      return true;
    }
}
