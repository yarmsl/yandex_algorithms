{
  const _inputLines = ["1010", "1011"];

  const solve = () => {
    let [num1, num2] = [_inputLines[0], _inputLines[1]];

    const maxLength = Math.max(num1.length, num2.length);
    if (num1.length !== maxLength)
      num1 = new Array(maxLength - num1.length).fill(0).join("") + num1;
    if (num2.length !== maxLength)
      num2 = new Array(maxLength - num2.length).fill(0).join("") + num2;
    let result = "";
    let remainder = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
      const summ = +num1[i] + +num2[i] + remainder;

      if (remainder > 0) remainder--;
      if (summ > 1) remainder++;

      if (summ % 2 === 0) {
        result = "0" + result;
      } else {
        result = "1" + result;
      }
    }

    if (remainder) result = "1" + result;

    console.log(result);
  };

  solve();
}
