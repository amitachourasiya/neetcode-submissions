class trieNode {
    constructor(){
        this.children = new Map();
        this.endWord = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new trieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let char of word){
            if(!curr.children.has(char)){
                curr.children.set(char, new trieNode);
            }
            curr = curr.children.get(char);
        }
        curr.endWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(let char of word){
            if(!curr.children.has(char)){
                return false;
            }
            curr = curr.children.get(char);
        }
        return curr.endWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children.has(char)){
                return false;
            }
            curr = curr.children.get(char);
        }
        return true;
    }
}
