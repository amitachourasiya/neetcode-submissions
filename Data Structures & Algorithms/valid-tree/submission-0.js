class Solution {
    validTree(n, edges) {

        // Tree must have exactly n-1 edges
        if (edges.length !== n - 1) {
            return false;
        }

        let graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        // Undirected graph
        for (let [a, b] of edges) {
            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        let visited = new Set();

        const dfs = (node, parent) => {
            console.log('node',node)

            if (visited.has(node)) {
                return false;
            }

            visited.add(node);

            for (let neighbor of graph.get(node)) {
                console.log('neighbor',neighbor)

                // Skip parent
                if (neighbor === parent) {
                    continue;
                }

                if (!dfs(neighbor, node)) {
                    return false;
                }
            }

            return true;
        };

        if (!dfs(0, -1)) {
            return false;
        }

        return visited.size === n;
    }
}