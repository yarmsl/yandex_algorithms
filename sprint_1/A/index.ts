import { readNumbersFromLine } from "../../utils/inputOutput";

const _inputLines = ["-8 -5 -2 7"];

export const solve = () => {
  const [a, x, b, c] = readNumbersFromLine(_inputLines);

  console.log(String(a * Math.pow(x, 2) + b * x + c));
};

solve();
