class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = new Map();
        let col = new Map();
        let grid = new Map();

        for(let i=0; i < board.length ; i++){
            for(let j =0 ; j < board.length; j++){
                const val = board[i][j];
                // const gridKey = (Math.floor(i/3) + (Math.floor(j/3)*3));
                const gridKey = `${Math.floor(i/3)}-${Math.floor(j/3)}`

                if(!row.has(i)) row.set(i,new Set());
                if(!col.has(j)) col.set(j,new Set());
                if(!grid.has(gridKey)) grid.set(gridKey, new Set());

                if((val !== ".") && ((row.get(i).has(val)) || (col.get(j).has(val)) || (grid.get(gridKey).has(val)))){
                    return false;
                }
                else{
                    row.get(i).add(val);
                    col.get(j).add(val);
                    grid.get(gridKey).add(val);
                }
            }
        }
        return true;
    }
}
