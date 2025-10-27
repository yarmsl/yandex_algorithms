{
  const _inputLines = ["{[()[]]{[()()]}}"];
  function solve() {
    // input
    const string = _inputLines[0];

    //solution

    class Stack {
      storage: string[];

      constructor() {
        this.storage = [];
      }

      size() {
        return this.storage.length;
      }

      isEmpty() {
        return this.size() === 0;
      }

      push(el: string) {
        return this.storage.push(el);
      }

      pop() {
        return this.storage.pop();
      }

      pick() {
        return this.storage?.[this.size() - 1] || undefined;
      }
    }

    const stack = new Stack();

    const is_correct_bracket_seq = (brackets: string) => {
      for (const bracket of brackets) {
        if (["(", "{", "["].includes(bracket)) {
          stack.push(bracket);
        } else if (
          bracket === ")" &&
          !stack.isEmpty() &&
          stack.pick() === "("
        ) {
          stack.pop();
        } else if (
          bracket === "}" &&
          !stack.isEmpty() &&
          stack.pick() === "{"
        ) {
          stack.pop();
        } else if (
          bracket === "]" &&
          !stack.isEmpty() &&
          stack.pick() === "["
        ) {
          stack.pop();
        } else {
          return false;
        }
      }

      return stack.isEmpty() ? "True" : "False";
    };

    const result = is_correct_bracket_seq(string);

    // output
    console.log(result);
  }

  solve();
}
