"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
const inputOutput_1 = require("../../utils/inputOutput");
const _inputLines = ["-8 -5 -2 7"];
/**
 * {@link https://contest.yandex.ru/contest/22449/problems/}
 */
const solve = () => {
    const [a, x, b, c] = (0, inputOutput_1.readNumbersFromfirstLine)(_inputLines);
    console.log("Sprint_1 А ", String(a * Math.pow(x, 2) + b * x + c));
};
exports.solve = solve;
(0, exports.solve)();
