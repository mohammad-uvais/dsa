/**
 * Graph
 *
 * A graph is a non-linear DS that consists of a finite number of vertices (also called nodes) connected by edges
 *
 * Trees are a specific type of graph DS
 */

/**
 * Types of Graph
 *
 * Directed - A graph in which the edges have a direction
 * Undirected - A graph in which the edges are bidirectional. It can be traversed in either direction.
 */

/**
 * Graph usage
 *
 * Google maps - Cities are represented as the vertices and the roads as edges to help build a navigation system
 * Social Media sites - Users are considered as vertices and edges are the links between connections.
 * FB, IG and LinkedIn, all use graph DS to show mutual connections, post suggestions and other recommendations.
 */

/**
 * Graph Representation
 *
 * Adjacency Matrix
 * Adjacency List
 */

/**
 * Adjacency Matrix
 * It is a 2D array of size V x V where V is the number of vertices in the graph.
 * Each row and column represent a vertex
 * If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.
 */

/**
 * Adjacency List
 * Vertices are stored in a map like DS, and every vertex stores a list of its adjacent vertices.
 */

/**
 * Adjacency Matrix vs Adjacency List
 * With an adjacency list, we only need to store the values that exist.
 * With adjacency matrix, you store values irrespective of whether an edge exists or not.
 * Storage wise, an adjacency list is way more efficient
 *
 * With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacent matrix, it is linear time compleity.
 *
 * An adjacency list allows you to store additonal values with an edge such as weight of the edge.
 * With adjacency matrix, such information would have to be stored externally.
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
graph.removeVertex("B");
graph.display();
