function calc(...args) {
  // Basic validation: must have odd number of args (number op number ...)
  if (args.length === 0) return 0;
  if (args.length % 2 === 0) throw new Error('Invalid expression');

  const isOperator = (op) => ['+', '-', '*', '/'].includes(op);

  // Validate alternating sequence and normalize numbers >1000 to 0 (ignored)
  const tokens = args.slice();
  for (let i = 0; i < tokens.length; i++) {
    if (i % 2 === 0) {
      // number position
      const val = tokens[i];
      if (typeof val !== 'number' || Number.isNaN(val)) {
        throw new Error('Invalid input type');
      }
      // ignore numbers strictly greater than 1000
      if (val > 1000) tokens[i] = 0;
    } else {
      // operator position
      const op = tokens[i];
      // require operator to be a string; defer validity check to evaluation
      if (typeof op !== 'string') {
        throw new Error('Invalid operator');
      }
    }
  }

  // First pass: handle * and /
  const pass1 = [];
  pass1.push(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const next = tokens[i + 1];
    if (op === '*' || op === '/') {
      const prev = pass1.pop();
      if (op === '/' && next === 0) {
        throw new Error('Division by zero');
      }
      const res = op === '*' ? prev * next : prev / next;
      pass1.push(res);
    } else {
      pass1.push(op);
      pass1.push(next);
    }
  }

  // Second pass: handle + and - left to right
  let result = pass1[0];
  for (let i = 1; i < pass1.length; i += 2) {
    const op = pass1[i];
    const next = pass1[i + 1];
    if (op === '+') result = result + next;
    else if (op === '-') result = result - next;
    else throw new Error('Invalid operator');
  }

  return result;
}

module.exports = calc;
