{
  const _inputLines = ["xtkpx", "xkctpx"];

  const solve = () => {
    const s = _inputLines[0];
    const t = _inputLines[1];

    const tMap = new Map();
    for (const letter of t) {
      if (tMap.has(letter)) tMap.set(letter, tMap.get(letter) + 1);
      else tMap.set(letter, 1);
    }

    for (const letter of s) {
      if (tMap.has(letter)) {
        const tLetterCount = tMap.get(letter);
        if (tLetterCount < 2) tMap.delete(letter);
        else tMap.set(letter, tLetterCount - 1);
      }
    }

    console.log([...tMap][0][0]);
  };

  solve();
}
