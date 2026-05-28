class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
       
        const rows = grid.length;
        const columns = grid[0].length;
        const dfs = (r,c) => {
             let islandCount = 1;
            if(r < 0 ||
               c < 0 ||
               r >= rows ||
               c >= columns ||
               grid[r][c] == 0){
                return 0;
               }

                grid[r][c] = 0;
                islandCount += dfs(r+1, c);
                islandCount += dfs(r-1, c);
                islandCount += dfs(r, c+1);
                islandCount += dfs(r, c-1);

                return islandCount;
        }
        let res = 0 ;
        for(let r=0; r < rows; r++){
            for(let c = 0; c < columns; c++){
                if(grid[r][c]==1){
                    res = Math.max(dfs(r,c),res);
                
                    // islandCount++
                }
            }
        }
        return res;
    }
}
