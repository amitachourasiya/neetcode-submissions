class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let column = grid[0].length;
        let queue = [];
        for(let i=0; i<rows; i++){
            for(let j=0;j<column;j++){
                if(grid[i][j]===0){
                    queue.push([i,j]);
                }
            }
        }
            let dir = [[1,0],[-1,0],[0,1],[0,-1]]
        while(queue.length){
            let [r,c] = queue.shift();
            for(let [dr,dc] of dir){
                const nr = dr + r
                const nc = dc + c  
                if(nr <0 || 
                nc<0 || 
                nr>= rows ||
                nc >= column || 
                grid[nr][nc] !== 2147483647){
                    continue;
                }

                grid[nr][nc] = grid[r][c] + 1;
                queue.push([nr,nc]); 
            }

        }

    }
}
