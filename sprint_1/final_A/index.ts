{
  const _inputLines = ["6", "0 7 9 4 8 20"];

  const solve = () => {
    const n = +_inputLines[0];
    const numbers = _inputLines[1].split(" ").map((num) => Number(num));

    let slow = 0;
    let fast = 0;
    let distance = 0;
    let noZeroes = true;

    const handleBackDistance = () => {
      const endPoint = noZeroes ? -1 : Math.floor(distance / 2) + slow;
      let backDistance = 0;

      for (let i = fast - 1; i > endPoint; i--) {
        numbers[i] = ++backDistance;
      }
    };

    while (fast < n) {
      if (numbers[fast] !== 0) {
        numbers[fast] = ++distance;
      } else {
        handleBackDistance();
        slow = fast;
        distance = 0;
        noZeroes = false;
      }
      fast++;
    }

    console.log(numbers.join(" "));
  };

  solve();
}
