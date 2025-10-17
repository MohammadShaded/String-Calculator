const calc = require('./calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
  });

  // Additional test: allow calc to handle an unknown amount of numbers
  it('should handle an unknown amount of numbers', () => {
    expect(calc(1, '+', 2, '+', 3, '+', 4)).toBe(10);
  });

  // Additional test: Numbers bigger than 1000 should be ignored
  it('should ignore numbers bigger than 1000', () => {
    expect(calc(2, '+', 1001)).toBe(2);
  });

  // Edge case: no arguments should return 0
  it('should return 0 when called with no arguments', () => {
    expect(calc()).toBe(0);
  });

  // Edge case: single number should return that number
  it('should return the number when a single number is provided', () => {
    expect(calc(5)).toBe(5);
  });

  // Edge case: malformed (even number of args) should throw Invalid expression
  it('should throw Invalid expression for incomplete expressions', () => {
    expect(() => calc(1, '+')).toThrow('Invalid expression');
  });

  // Edge case: NaN input should throw Invalid input type
  it('should throw Invalid input type for NaN', () => {
    expect(() => calc(NaN, '+', 1)).toThrow('Invalid input type');
  });

  // Edge case: operator is not a string should throw Invalid operator
  it('should throw Invalid operator when operator is not a string', () => {
    expect(() => calc(1, 2, 3)).toThrow('Invalid operator');
  });

  // Edge case: multiplication with ignored number >1000
  it('should treat numbers >1000 as ignored in multiplication', () => {
    expect(calc(2, '*', 1001)).toBe(0);
  });
});
