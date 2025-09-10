export const readNumbersFromLine = (lines: string[], lineNumber = 0) =>
  lines[lineNumber].split(" ").map((num) => Number(num));

export const readMatrixAndPayload = (lines: string[]) => {
  const [nS, mS, ...rest] = lines,
    n = +nS,
    m = +mS,
    matrix: number[][] = [],
    payload: string[] = [];

  for (let i = 0; i < rest.length; i++) {
    if (i < n) {
      matrix.push(rest[i].split(" ").map((num) => Number(num)));
    } else {
      payload.push(rest[i]);
    }
  }

  return { n, m, matrix, payload };
};
