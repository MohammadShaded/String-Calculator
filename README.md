# String Calculator

Lightweight string-style calculator with a comprehensive Jest test suite. This repository is structured for Test-Driven Development (TDD): tests describe the required behavior and the implementation in `calculator.js` should make the tests pass.

Contents
- `calculator.js` — exports `calc(...args)` (implementation to satisfy tests)
- `calculator.test.js` — Jest tests (behavioral and edge cases)
- `README.md` — this file

Why this project
- Demonstrates TDD and clear unit tests using the Arrange-Act-Assert pattern.
- Exercises parsing/evaluation, operator precedence, input validation, and edge case handling.

Contract
-----------
- Module: `calculator.js`
- Export: `calc` function
- Signature: `calc(...args)` where `args` is an alternating sequence: number, operator, number, operator, ... , number.
  - Example: `calc(2, '+', 3, '*', 4)`

Supported operators
-------------------
- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)

Behavior & rules
-----------------
- Operator precedence: `*` and `/` evaluated before `+` and `-`.
- Variable-length expressions: any number of operands/operators are allowed as long as they alternate correctly.
- Numbers strictly greater than 1000 are ignored in evaluation (e.g., `calc(2, '+', 1001) === 2`). `1000` is not ignored.
- The function must throw exact error messages for cases covered by tests (these exact strings are asserted in the test suite):
  - `Invalid input type` — when a non-number appears where a number is expected.
  - `Invalid operator` — when an unsupported operator is encountered.
  - `Division by zero` — when any division by zero occurs during evaluation.
  - `Invalid expression` — when the argument list is malformed (not alternating number/operator or incomplete).

Examples
--------
- Simple add: `calc(2, '+', 3)` // 5
- Mixed with precedence: `calc(2, '+', 3, '*', 4)` // 14
- Ignore >1000: `calc(2, '+', 1001)` // 2

Installation
------------
Node.js (>=12) and npm are required. From the project root run:

```powershell
# Open a terminal in the repository root (where this README is located) and run:
npm install
```

If you don't yet have a `package.json` you can create one and install Jest:

```powershell
npm init -y
npm install --save-dev jest
```

Add a test script to `package.json` if it's missing:

```json
"scripts": {
  "test": "jest --coverage"
}
```

Running tests
-------------
Run the test suite (Windows PowerShell or cross-platform):

```powershell
npm test
```

This will run Jest and produce coverage information.

Contributing / TDD notes
------------------------
- Tests should follow Arrange-Act-Assert (AAA).
- Prefer small, focused commits when you follow TDD; tests should be added before implementation changes.

Repository checklist (for reviewers)
-----------------------------------
- Tests cover: basic ops, division-by-zero, invalid operator, invalid input type, negative numbers, decimals, operator precedence, variable args, ignore >1000, malformed expressions.
- Error messages in implementation match the exact strings asserted by tests.

License
-------
This repository is released under the MIT License. Replace or adjust as needed for your project.

