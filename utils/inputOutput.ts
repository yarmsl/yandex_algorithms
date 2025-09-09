export const readNumbersFromfirstLine = (lines: string[]) =>
  lines[0].split(" ").map((num) => Number(num));
