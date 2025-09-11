import { mockDoubleNode } from "../../mocks/node";
import { DoubleNode } from "../../utils/node";

{
  const solution = (node: DoubleNode) => {
    while (node && node.next) {
      [node.prev, node.next] = [node.next, node.prev];

      node = node.prev;
    }

    if (node) {
      [node.prev, node.next] = [node.next, node.prev];
    }

    return node;
  };

  console.log(solution(mockDoubleNode));
}
