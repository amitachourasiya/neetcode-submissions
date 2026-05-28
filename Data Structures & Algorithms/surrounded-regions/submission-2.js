class Solution {
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        // Mark border-connected O's as T
        for (let r = 0; r < rows; r++) {
            this.dfs(r, 0, board, rows, cols);
            this.dfs(r, cols - 1, board, rows, cols);
        }

        for (let c = 0; c < cols; c++) {
            this.dfs(0, c, board, rows, cols);
            this.dfs(rows - 1, c, board, rows, cols);
        }

        // Flip remaining O -> X
        // Restore T -> O
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {

                if (board[i][j] === 'O') {
                    board[i][j] = 'X';
                }

                else if (board[i][j] === 'T') {
                    board[i][j] = 'O';
                }
            }
        }
    }

    dfs(r, c, board, rows, cols) {

        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            board[r][c] !== 'O'
        ) {
            return;
        }

        board[r][c] = 'T';

        this.dfs(r + 1, c, board, rows, cols);
        this.dfs(r - 1, c, board, rows, cols);
        this.dfs(r, c + 1, board, rows, cols);
        this.dfs(r, c - 1, board, rows, cols);
    }
}