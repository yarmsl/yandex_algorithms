import { bubbleSort } from "../../utils/sort";

const _inputLines = ["6"];

const solve = () => {
  let n = +_inputLines[0];

  //solution
  const result = [];

  while (n % 2 === 0) {
    result.push(2);
    n /= 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }

  if (n > 2) result.push(n);

  // output
  console.log(`${bubbleSort(result).join(" ")}`);
};

solve();
