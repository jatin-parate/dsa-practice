class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(
  node: Node | null,
  map = new Map<Node, Node>()
): Node | null {
  if (!node) {
    return node;
  }

  const clonedNode = new Node(node.val);
  map.set(node, clonedNode);
  node.neighbors.forEach((neighborNode) => {
    if (map.has(neighborNode)) {
      clonedNode.neighbors.push(map.get(neighborNode)!);
      return;
    }

    const clonedNeighborNode = cloneGraph(neighborNode, map)!;
    clonedNode.neighbors.push(clonedNeighborNode);
  });

  return clonedNode;
}

const graph = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node4.neighbors.push(node2, node3);
node2.neighbors.push(graph, node4);
node3.neighbors.push(graph, node4);
graph.neighbors.push(node2, node3);

console.log(cloneGraph(graph));

export {};
