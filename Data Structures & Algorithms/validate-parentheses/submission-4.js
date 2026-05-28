class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let parenthese = {
            ")": "(",
            "]" : "[",
            "}" : "{"
        };
        for(let char of s){
            if(parenthese[char]){
                if(stack.length>0 && stack[stack.length-1] === parenthese[char]){
                    stack.pop();
                }
                else{
                return false;
                }
        }
        else{
                stack.push(char);
        }

    }
    return stack.length === 0;
}
}
