{
  const _inputLines = ["256"];

  const solve = () => {
    let n = +_inputLines[0];
    let result = "";

    while (n % 4 === 0) {
      n /= 4;
    }

    if (n === 1) result = "True";
    else result = "False";

    console.log(result);
  };

  solve();
}
