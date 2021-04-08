class Graph{
    constructor(){
      this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
      }

    //Errors out if there is no vertex of that name present in the adjacencyList
    removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
          let adjacentVertex = this.adjacencyList[vertex].pop()
          this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
      }

    breadthFirstSearch(start){
    const queue = [start]
    const result = []
    const visited = {}
    visited[start] = true
    let currentVertex

    while(queue.length){
        currentVertex = queue.shift()
        result.push(currentVertex)

        this.adjacencyList[currentVertex].forEach(
            neighbour => {
            if(!visited[neighbour]){
            visited[neighbour] = true
            queue.push(neighbour)
            }
            }
        )
    }
    return result
    }
  
  }

  //test code
  let g = new Graph()

  g.addVertex("Tokyo")
  g.addVertex("Dallas")
  g.addVertex("Aspen")
  g.addVertex("HongKong")
  g.addVertex("LA")
  // g.adjacencyList["Tokyo"].push("japan")
  g.addEdge("Dallas", "Tokyo")
  g.addEdge("Aspen", "Dallas")
  g.addEdge("HongKong","Tokyo")
  g.addEdge("HongKong","Dallas")
  g.addEdge("LA","Aspen")
  g.addEdge("LA","HongKong")
  // g.removeEdge("Aspen","Dallas")
  g.removeVertex("HongKong")