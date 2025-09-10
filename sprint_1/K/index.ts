{
  const _inputLines = ["4", "1 2 0 0", "34"];

  const solve = () => {
    const n = +_inputLines[0];
    let list = _inputLines[1].split(" ");
    let k = _inputLines[2].split("");

    let remainder = 0;

    for (let i = n - 1, j = k.length - 1; j >= 0 || remainder; i--, j--) {
      const summ = (+list?.[i] || 0) + (+k?.[j] || 0) + remainder;

      if (remainder) remainder--;

      if (summ >= 10) {
        if (list[i]) list[i] = `${summ - 10}`;
        else list.unshift(`${summ - 10}`);
        remainder++;
      } else {
        if (list[i]) list[i] = `${summ}`;
        else list.unshift(`${summ}`);
      }
    }

    if (remainder) list.unshift(`${remainder}`);

    console.log(list.join(" "));
  };

  solve();
}
