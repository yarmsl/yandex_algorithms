{
  const _inputLines = ["21", "frog jumps from river"];

  const solve = () => {
    let result = "";
    const words = _inputLines[1].split(" ");
    for (const word of words) {
      if (word.length > result.length) result = word;
    }

    console.log(result + "\n" + result.length);
  };

  solve();
}
