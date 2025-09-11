import { mockNode } from "../../mocks/node";
import { Node } from "../../utils/node";

{
  const solution = (head: Node | null, value: string) => {
    let result = -1;
    let foundIndex = 0;

    while (head) {
      if (head.value === value) {
        result = foundIndex;
        break;
      }

      head = head.next;
      foundIndex++;
    }

    return result;
  };

  console.log(solution(mockNode, "value_5"));
}
