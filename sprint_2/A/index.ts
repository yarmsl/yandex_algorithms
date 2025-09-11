import { readMatrixAndPayload } from "../../utils/inputOutput";

{
  const _inputLines = ["4", "3", "1 2 3", "0 2 6", "7 4 1", "2 7 0"];

  const solve = () => {
    const { n, m, matrix } = readMatrixAndPayload(_inputLines);

    const result: number[][] = [];

    for (let j = 0; j < m; j++) {
      const row = [];
      for (let i = 0; i < n; i++) {
        row.push(matrix[i][j]);
      }
      result.push(row);
    }

    console.log(result.map((row) => row.join(" ")).join("\n"));
  };

  solve();
}
