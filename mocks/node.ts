import { DoubleNode, Node } from "../utils/node";

export const mockNode = new Node(
  "value_1",
  new Node(
    "value_2",
    new Node(
      "value_3",
      new Node("value_4", new Node("value_5", new Node("value_6")))
    )
  )
);

const double_node_4 = new DoubleNode("value_4");
const double_node_3 = new DoubleNode("value_3", double_node_4);
const double_node_2 = new DoubleNode("value_2", double_node_3);
const double_node_1 = new DoubleNode("value_1", double_node_2);
const double_node_0 = new DoubleNode("value_0", double_node_1);
double_node_1.prev = double_node_0;
double_node_2.prev = double_node_1;
double_node_3.prev = double_node_2;
double_node_4.prev = double_node_3;

export const mockDoubleNode = double_node_0;
