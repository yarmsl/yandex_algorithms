import { mockNode } from "../../mocks/node";
import { getNodeValues, Node } from "../../utils/node";

{
  const solution = (node: Node | null, index: number) => {
    if (!node) return node;

    let currentNode: Node | null = node,
      previousNode = null,
      currentIndex = 0;

    while (currentNode && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode) {
      if (previousNode) {
        previousNode.next = currentNode.next;
      } else {
        node = currentNode.next;
      }
    }

    return node;
  };

  console.log(getNodeValues(solution(mockNode, 0)));
}
