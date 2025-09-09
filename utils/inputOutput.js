"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readNumbersFromfirstLine = void 0;
const readNumbersFromfirstLine = (lines) => lines[0].split(" ").map((num) => Number(num));
exports.readNumbersFromfirstLine = readNumbersFromfirstLine;
