export const bubbleSort = (numbers: number[]) => {
  let n = numbers.length,
    swapped: boolean = false;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return numbers;
};
