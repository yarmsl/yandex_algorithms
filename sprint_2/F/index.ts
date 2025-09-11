{
  const solve = () => {
    const _inputLines = [
      "22",
      "push -2",
      "get_max",
      "push 5",
      "pop",
      "push 3",
      "pop",
      "push 8",
      "get_max",
      "pop",
      "pop",
      "pop",
      "pop",
      "push 5",
      "get_max",
      "get_max",
      "push 8",
      "push -4",
      "push 8",
      "pop",
      "push -1",
      "pop",
      "get_max",
    ];
    const n = +_inputLines[0];

    //solution
    class StackMax {
      stack: number[];

      constructor() {
        this.stack = [];
      }

      size() {
        return this.stack.length;
      }

      isEmpty() {
        return this.size() === 0;
      }

      push(el: number) {
        this.stack.push(el);
      }

      pop() {
        if (this.isEmpty()) return "error";
        this.stack.pop();
      }

      get_max() {
        if (this.isEmpty()) return "None";
        return Math.max(...this.stack);
      }
    }

    const stack = new StackMax();

    let results = [];

    for (let i = 1; i <= n; i++) {
      const command = _inputLines[i].split(" ");
      const result = (stack as any)[command[0]](
        command[1] ? +command[1] : undefined
      );

      if (result != null) results.push(result);
    }

    // output

    console.log(results.join("\n"));
  };

  solve();
}
