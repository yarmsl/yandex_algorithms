{
  const _inputLines = ["3", "1231", "2..2", "2..2", "2..2"];

  const solve = () => {
    //input
    const k = +_inputLines[0];
    const lines = 4;
    const simulator: Record<string, number> = {};
    const boysCount = 2;

    for (let i = 1; i <= lines; i++) {
      for (const el of _inputLines[i].split("")) {
        if (el !== ".") {
          Object.assign(simulator, { [el]: (simulator[el] || 0) + 1 });
        }
      }
    }

    //solve
    let result = 0;
    for (const t of Object.keys(simulator)) {
      if (k * boysCount >= simulator[t]) {
        result++;
      }
    }

    //output
    console.log(String(result));
  };

  solve();
}
