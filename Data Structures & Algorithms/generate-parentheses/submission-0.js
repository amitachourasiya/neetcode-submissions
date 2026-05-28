class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    backtracking(open,close,res,n,stack){
        if(open === close && open === n){
            const newStack = stack.join('');
            res.push(newStack);
        }
        if(open < n ){
            stack.push('(')
            this.backtracking(open+1,close,res,n,stack)
            stack.pop();
        }
        if(close < open){
            stack.push(')')
            this.backtracking(open,close+1,res,n,stack)
            stack.pop();
        }
    }
    generateParenthesis(n) {
        let stack = [];
        let res =[];
        this.backtracking(0,0,res,n,stack);
        return res;
    }
}
