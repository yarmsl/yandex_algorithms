{
  function solve() {
    // input
    const _inputLines = [
      "10",
      "1",
      "push 1",
      "size",
      "push 3",
      "size",
      "push 1",
      "pop",
      "push 1",
      "pop",
      "push 3",
      "push 3",
    ];
    const n = +_inputLines[0];
    const maxSize = +_inputLines[1];

    //solution
    class MyQueueSized {
      queue;
      max_n;
      head;
      tail;
      length;
      constructor(n: number) {
        this.queue = new Array(n).fill(null);
        this.max_n = n;
        this.head = 0;
        this.tail = 0;
        this.length = 0;
      }

      is_empty() {
        return this.length == 0;
      }

      push(x: number) {
        if (this.length === this.max_n) return "error";

        this.queue[this.tail] = x;
        this.tail = (this.tail + 1) % this.max_n;
        this.length += 1;
      }

      pop() {
        if (this.is_empty()) {
          return "None";
        }
        let x = this.queue[this.head];
        this.queue[this.head] = null;
        this.head = (this.head + 1) % this.max_n;
        this.length -= 1;
        return x;
      }

      peek() {
        if (this.is_empty()) {
          return "None";
        }
        let x = this.queue[this.head];
        return x;
      }
      size() {
        return this.length;
      }
    }
    const queue = new MyQueueSized(maxSize);

    let results = [];

    for (let i = 2; i <= n + 1; i++) {
      const [command, value] = _inputLines[i].split(" ");
      const result = (queue as any)[command](value ? +value : undefined);

      if (result != null) results.push(result);
    }

    type testC = keyof MyQueueSized;
    const testCCC: testC = "pop";

    // output
    console.log(results.join("\n"));
  }

  solve();
}
