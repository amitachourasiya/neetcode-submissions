class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let i=0;i<strs.length;i++){
            res +=  strs[i].length  + "#" + strs[i];
            console.log("str", res);
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let array = [];
            console.log('strDecode',str);
            let i = 0;
            while(i < str.length){
                let j = i;

                while(str[j] !== "#"){
                    j++;
                }

                let length = parseInt(str.slice(i,j));
                console.log("length",length);
                let word = str.slice(j+1,j+1+length);
                array.push(word);
                i = j + 1 + length;
            }

            return array;
    }
}
