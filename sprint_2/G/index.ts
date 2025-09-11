{
  const solve = () => {
    const _inputLines = [
      "13",
      "pop",
      "pop",
      "top",
      "push 4",
      "push -5",
      "top",
      "push 7",
      "pop",
      "pop",
      "get_max",
      "top",
      "pop",
      "get_max",
    ];

    const n = +_inputLines[0];

    class StackMaxEffective {
      stack: number[];
      maxStack: number[];
      constructor() {
        this.stack = [];
        this.maxStack = [];
      }

      max() {
        return this.maxStack[this.maxStack.length - 1];
      }

      isMaxStackEmpty() {
        return this.maxStack.length === 0;
      }

      size() {
        return this.stack.length;
      }

      isEmpty() {
        return this.size() === 0;
      }

      peek() {
        return this.stack[this.size() - 1];
      }

      push(el: number) {
        if (this.isMaxStackEmpty() || el >= this.max()) this.maxStack.push(el);
        this.stack.push(el);
      }

      pop() {
        if (this.isEmpty()) return "error";
        if (this.peek() === this.max()) {
          this.maxStack.pop();
        }
        this.stack.pop();
      }

      top() {
        if (this.isEmpty()) return "error";
        return this.peek();
      }

      get_max() {
        if (this.isEmpty()) return "None";
        return this.max();
      }
    }

    const stack = new StackMaxEffective();

    let results: any[] = [];

    for (let i = 1; i <= n; i++) {
      const command = _inputLines[i].split(" ");
      const result = (stack as any)[command[0]](
        command[1] ? +command[1] : undefined
      );
      if (result != null) results.push(result);
    }

    // output
    console.log("res: ", results);
  };
  solve();
}
