class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const part = [];
        this.dfs(s,0,part,res);
        return res;
    }

    dfs(s,i,part,res){
        if(i>=s.length){
            res.push([...part]);
            return
        }

        for(let j = i; j<s.length;j++){
            if(this.ispalindrom(s,i,j)){
                part.push(s.substring(i,j+1));
                this.dfs(s,j+1,part,res)
                part.pop();
            }    
        }
    }
ispalindrom(s,l,r){
    while(l<=r){
        if(s[l]!==s[r]){
            return false
        }
        l++;
        r--;
    }
    return true;
}


}
