class trieNode {
    constructor() {
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
        for(let wrd of word){
            if(!curr.children.has(wrd)){
                curr.children.set(wrd, new trieNode());
            }
            curr = curr.children.get(wrd);
        }
       curr.endWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(let wrd of word){
            if(!curr.children.has(wrd)){
                return false;
            }
        curr = curr.children.get(wrd);
        }
        return curr.endWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root
        for(let pre of prefix){
            if(!curr.children.has(pre)){
                return false;
            }
        curr = curr.children.get(pre);
        }
        return true;
    }
}
