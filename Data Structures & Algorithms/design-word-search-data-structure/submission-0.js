class TrieNode{
    constructor(){
        this.children = new Map();
        this.endWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let char of word){
            if(!curr.children.has(char)){
             curr.children.set(char,new TrieNode)
            }
            curr = curr.children.get(char);
        }
         curr.endWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word,0,this.root);
    }

    dfs(word,index,root){
        let curr = root;
    for(let i=index;i<word.length;i++){
        let char = word[i]
    if( char === "."){
        for(let child of curr.children.values()){
            if(this.dfs(word,i+1,child)){
                return true;
            }
        }
        return false;
    }else{
        if(!curr.children.has(char)){
            return false;
        }
        curr = curr.children.get(char);
    }

        }
        return curr.endWord;
    }
}
