export class Node {
  value: string;
  next: Node | null;
  constructor(value: string, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class DoubleNode {
  value: string;
  next: DoubleNode | null;
  prev: DoubleNode | null;
  constructor(
    value: string,
    next: DoubleNode | null = null,
    prev: DoubleNode | null = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export const getNodeValues = (node: Node | null) => {
  const result = [];
  if (!node) return node;
  while (node.next) {
    result.push(node.value);
    node = node.next;
  }
  result.push(node.value);

  return result;
};

export const removeNodeByIndex = (node: Node | null, index: number) => {
  if (!node) return;

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
