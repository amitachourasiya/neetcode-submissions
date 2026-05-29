class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = new Map();
        let visited = new Set();
    
        for(let i=0;i<n;i++){
            graph.set(i,[]);
        }

        for(let [a,b] of edges){
            graph.get(a).push(b);
            graph.get(b).push(a);
        }
        
        const dfs = (node) =>{
            if(visited.has(node)){
                return;
            }
            visited.add(node);

            for(let neighbor of graph.get(node)){
                dfs(neighbor);
            }

        }
        let component = 0;
        for(let i=0;i<n;i++){
            if(!visited.has(i))
            component++;
            dfs(i);
        }
        
    return component;
    }
}
