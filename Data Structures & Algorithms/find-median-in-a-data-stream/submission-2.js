class MedianFinder {
    constructor() {
        this.maxQueue = new PriorityQueue((a,b)=>b-a);
        this.minQueue = new PriorityQueue((a,b)=>a-b);


    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.maxQueue.isEmpty() || this.maxQueue.front() >= num){
            this.maxQueue.enqueue(num)
        }
        else{
            this.minQueue.enqueue(num);
        }

        if(this.maxQueue.size() > this.minQueue.size() +1){
            this.minQueue.enqueue(this.maxQueue.dequeue());
        }
        else if(this.minQueue.size() > this.maxQueue.size() +1){
            this.maxQueue.enqueue(this.minQueue.dequeue());
        }
        }


    /**
     * @return {number}
     */
    findMedian() {
        if(this.minQueue.size() > this.maxQueue.size()){
            return this.minQueue.front();
        }
        else if(this.minQueue.size() <   this.maxQueue.size()){
            return this.maxQueue.front();
        } 
        else{
            console.log((this.maxQueue.front() + this.minQueue.front())/2)
            return ((this.maxQueue.front() + this.minQueue.front())/2.0)
        }

    }
}
