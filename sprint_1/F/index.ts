{
  const _inputLines = ["A man, a plan, a canal: Panama"];

  const solve = () => {
    let result = "True";
    const string = _inputLines[0].replace(/[^a-zA-Z0-9]+/g, "");

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      if (string[left].toLowerCase() !== string[right].toLowerCase()) {
        result = "False";
        break;
      }
      left++;
      right--;
    }

    console.log(result);
  };

  solve();
}
