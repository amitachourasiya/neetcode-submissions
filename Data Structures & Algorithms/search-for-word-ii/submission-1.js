class triesNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class Solution {
    constructor(){
        this.root = new triesNode();
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

addWord(words){
    let curr = this.root;
    for(let word of words){
        if(!curr.children.has(word)){
            curr.children.set(word, new triesNode());
        }
        curr = curr.children.get(word);
    }
    curr.endOfWord = true;
}

    findWords(board, words) {
        let rows = board.length;
        let column = board[0].length;
        let visited = new Set();
        let res = new Set()

        for(let word of words ){
            this.addWord(word);
        }

        const dfs = (r,c,node,word) => {
            if(r < 0 || 
                c < 0 ||
                r >= rows || 
                c >= column || 
                visited.has(`${r},${c}`) || 
                !node.children.has(board[r][c])){
                    return;
                }
            visited.add(`${r},${c}`);
            node = node.children.get(board[r][c]);
            word += board[r][c];
            if(node.endOfWord){
                res.add(word);
            }

            dfs(r+1,c,node,word);
            dfs(r-1,c,node,word);
            dfs(r,c+1,node,word);
            dfs(r,c-1,node,word);
            visited.delete(`${r},${c}`);
        
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < column; c++){
                dfs(r,c,this.root,'');
        }
        }
        return [...res];
    }
}
