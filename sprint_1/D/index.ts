import { readNumbersFromLine } from "../../utils/inputOutput";

const _inputLines = ["3", "-2 -10 2"];

const solve = () => {
  let result = 0;
  const n = +_inputLines[0],
    data = readNumbersFromLine(_inputLines, 1);
  if (n === 1) result++;

  for (let i = 0; i < n; i++) {
    const prev = data[i - 1];
    const el = data[i];
    const next = data[i + 1];

    if (
      (!Number.isInteger(prev) && el > next) ||
      (el > prev && el > next) ||
      (!Number.isInteger(next) && el > prev)
    )
      result++;
  }

  console.log(result);
};

solve();
