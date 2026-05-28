class TimeMap {
    constructor() {
        this.keyStore = new Map();
       

    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[]);
        }
        this.keyStore.get(key).push([value,timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res = ""
        if(!this.keyStore.has(key)){
            return '';
        }
        let l = 0;
         let values = this.keyStore.get(key)
        let r = values.length -1;
       
        while(l <= r){
            let mid = Math.floor((l+r)/2);
            if(values[mid][1] <= timestamp){
                res = values[mid][0];
                l = mid+1;
            }
            else{
                r = mid -1;
            }
        }
       return res;
    }
}
