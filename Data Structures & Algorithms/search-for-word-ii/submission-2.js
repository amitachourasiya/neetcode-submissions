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
                board[r][c] == '#' || 
                // visited.has(`${r},${c}`) || 
                !node.children.has(board[r][c])){
                    return;
                }
            const temp = board[r][c];
            board[r][c] = '#';
            // visited.add(`${r},${c}`);
            node = node.children.get(temp);
            word +=temp;
            if(node.endOfWord){
                res.add(word);
            }

            dfs(r+1,c,node,word);
            dfs(r-1,c,node,word);
            dfs(r,c+1,node,word);
            dfs(r,c-1,node,word);
            board[r][c] = temp;
            // visited.delete(`${r},${c}`);
        
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < column; c++){
                dfs(r,c,this.root,'');
        }
        }
        return [...res];
    }
}
