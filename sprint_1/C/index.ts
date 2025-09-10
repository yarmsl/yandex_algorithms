import { readMatrixAndPayload } from "../../utils/inputOutput";
import { bubbleSort } from "../../utils/sort";

const _inputLines = ["4", "3", "1 2 3", "0 2 6", "7 4 1", "2 7 0", "3", "0"];

const solve = () => {
  const { n, m, matrix, payload } = readMatrixAndPayload(_inputLines),
    x = +payload[1],
    y = +payload[0],
    result: number[] = [];

  if (y > 0) result.push(matrix[y - 1][x]);
  if (x < m - 1) result.push(matrix[y][x + 1]);
  if (y < n - 1) result.push(matrix[y + 1][x]);
  if (x > 0) result.push(matrix[y][x - 1]);

  console.log(bubbleSort(result));
};

solve();
