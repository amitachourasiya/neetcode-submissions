class Node{
    constructor(key,value) {
        this.prev = null
        this.key  = key
        this.val = value
        this.next = null

    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.left = new Node(0,0);
        this.right = new Node(0,0);
        this.cache = new Map();
        this.cap = capacity;
        this.left.next = this.right;
        this.right.prev = this.left
    }

    insert(node){
        const pre = this.right.prev;
        pre.next = node;
        node.prev = pre;
        node.next = this.right;
        this.right.prev = node;
    }

    remove(node){
        const next = node.next;
        const prev = node.prev;
        prev.next = next;
        next.prev = prev; 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
        }
        const node = new Node(key,value);
        this.cache.set(key , node);
        this.insert(node);
        if(this.cache.size > this.cap){
            const LRU = this.left.next;
            this.remove(LRU); 
            this.cache.delete(LRU.key);       
    }
    }

}
