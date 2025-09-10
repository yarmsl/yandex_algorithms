{
  const _inputLines = ["14"];

  const solve = () => {
    let num = +_inputLines[0];

    let result: string | number = "";
    if (num === 0) result = 0;

    while (num > 0) {
      result = String(num % 2) + result;
      num = Math.floor(num / 2);
    }

    console.log(String(result));
  };

  solve();
}
