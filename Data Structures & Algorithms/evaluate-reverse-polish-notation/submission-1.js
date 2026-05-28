class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let tok of tokens){
            if("+/-*".includes(tok) && stack.length){
                    let top = stack.pop();
                    let topSecond =  stack.pop();
                    if(tok == "+"){
                        stack.push(parseInt(top)+parseInt(topSecond));
                    }
                    if(tok == "-"){
                        stack.push(topSecond - top);
                    }
                    if(tok == "*"){
                        stack.push(top * topSecond);
                    }
                    if(tok == "/"){
                        stack.push(Math.trunc(topSecond / top));
                    }
            }
            else{
                stack.push(tok);
            }
        }
        return stack.pop();
    }
}
