class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preMap = new Map();
        for(let i = 0; i < numCourses; i++){
            preMap.set(i,[]);
        }

        for(let [chr, pre] of prerequisites){ 
            preMap.get(chr).push(pre);
        }
        const visit = new Set();
        const dfs = (chr) => {
            if(visit.has(chr)){
                return false;
            }
            if(preMap.get(chr).length == 0){
                return true;
            }

            visit.add(chr);
            for(let pre of preMap.get(chr)){
                if(!dfs(pre)){
                    return false;
                }
            }
            visit.delete(chr);
            preMap.set(chr,[]);
            return true;

        }

            for(let j=0; j<numCourses;j++){
                if(!dfs(j)){
                    return false;
                }
            }
            return true;
    }
}
