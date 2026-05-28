class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;
        let pac = new Set();
        let alt = new Set();
        let dfs = (r,c,visit,preHeight) =>{
            if(r <0 || 
            c < 0 ||
            r == rows || 
            c == cols || 
            visit.has(`${r},${c}`) || 
            heights[r][c]<preHeight){
                return;
            }

            visit.add(`${r},${c}`);
            dfs(r+1,c,visit,heights[r][c]);
            dfs(r-1,c,visit,heights[r][c])
            dfs(r,c+1,visit,heights[r][c])
            dfs(r,c-1,visit,heights[r][c])
        }
        for(let c=0;c<cols;c++){
            dfs(0,c,pac,heights[0][c]);
            dfs(rows-1,c,alt,heights[rows-1][c]);
        }
        for(let r=0;r<rows;r++){
            dfs(r,0,pac,heights[r][0]);
            dfs(r,cols-1,alt,heights[r][cols-1]);
        }
            let res = [];
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(pac.has(`${r},${c}`) && alt.has(`${r},${c}`)){
                    res.push([r,c])
                }

            }
        }
        return res;
        
}
}
