class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let time = 0;
        let fresh = 0;
        let queue = [];
        let row = grid.length;
        let column  = grid[0].length;
        for(let r = 0;r < row; r++){
            for(let c =0; c<column; c++){
                if(grid[r][c]===1){
                    fresh++;
                    
                }
                if(grid[r][c]===2){
                    queue.push([r,c]);
                }
            }
        }
        const dir = [[0,1],[1,0],[0,-1],[-1,0]]
        while(queue.length && fresh > 0){
            const length =  queue.length;
            for(let i=0; i<length;i++){
                 const [noder, nodec] = queue.shift();
                for(const [dr,dc] of dir){
                    const rowgrid = noder + dr;
                    const columngrid = nodec+dc;
                    if(rowgrid>=0 && 
                    columngrid>=0 && 
                    rowgrid<row &&
                    columngrid<column &&
                    grid[rowgrid][columngrid]==1){
                        grid[rowgrid][columngrid] = 2;
                        fresh--;
                        queue.push([rowgrid, columngrid])
                    }
                }
            }
            time++;
        }

            return fresh > 0 ? -1 : time;

    }
}
