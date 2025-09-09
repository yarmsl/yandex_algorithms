import { readNumbersFromfirstLine } from "../../utils/inputOutput";
import { isEven } from "../../utils/isEven";

const _inputLines = ["1 2 -3"];

/**
 * {@link https://contest.yandex.ru/contest/22449/problems/B/}
 */
const solve = () => {
  const numbers = readNumbersFromfirstLine(_inputLines);
  let result = "WIN";
  const isFirstElementEven = isEven(numbers[0]);

  let i = 1;
  while (i < numbers.length) {
    if (isEven(numbers[i]) !== isFirstElementEven) {
      result = "FAIL";
      break;
    }
    i++;
  }

  console.log(result);
};

solve();
