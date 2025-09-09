"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("../../utils/inputOutput");
const isEven_1 = require("../../utils/isEven");
const _inputLines = ["1 2 -3"];
/**
 * {@link https://contest.yandex.ru/contest/22449/problems/B/}
 */
const solve = () => {
    const numbers = (0, inputOutput_1.readNumbersFromfirstLine)(_inputLines);
    let result = "WIN";
    const isFirstElementEven = (0, isEven_1.isEven)(numbers[0]);
    let i = 1;
    while (i < numbers.length) {
        if ((0, isEven_1.isEven)(numbers[i]) !== isFirstElementEven) {
            result = "FAIL";
            break;
        }
        i++;
    }
    console.log(result);
};
solve();
