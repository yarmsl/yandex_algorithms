import { mockNode } from "../../mocks/node";
import { Node } from "../../utils/node";

{
  const solution = (node: Node) => {
    const result = [];

    while (node.next) {
      result.push(node.value);
      node = node.next;
    }

    result.push(node.value);

    return result.join("\n");
  };

  console.log(solution(mockNode));
}
