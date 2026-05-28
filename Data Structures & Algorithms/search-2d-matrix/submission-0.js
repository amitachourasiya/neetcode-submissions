class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++){
            let col = matrix[i];
            let l = 0;
            let r = col.length-1;
            if(target > col[col.length-1]){
                continue;
            }
            else{
                while(l<=r){
                    const mid = l + Math.floor((r - l)/2);
                    if(target > col[mid]){
                        l = mid + 1;
                    }
                    else if(target < col[mid]){
                        r = mid -1 ;
                    }
                    else{
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
