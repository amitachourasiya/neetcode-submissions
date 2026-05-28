class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = [];
        let stack = [];
        for(let i=0; i < position.length;i++){
            pair.push([position[i],speed[i]]);
        }

        pair.sort((a,b) => b[0]-a[0])

        for(let char of pair){
            const data = (target - char[0])/char[1];
                if(stack.length==0){
                    stack.push(data);
                }
                else if(stack[stack.length-1]<data){
                    stack.push(data);
                }
        }
        return stack.length;
    }
}
 