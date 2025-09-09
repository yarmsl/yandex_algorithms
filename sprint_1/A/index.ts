import { readNumbersFromfirstLine } from "../../utils/inputOutput";

const _inputLines = ["-8 -5 -2 7"];

/**
 * {@link https://contest.yandex.ru/contest/22449/problems/}
 */
export const solve = () => {
  const [a, x, b, c] = readNumbersFromfirstLine(_inputLines);

  console.log("Sprint_1 А ", String(a * Math.pow(x, 2) + b * x + c));
};

solve();
