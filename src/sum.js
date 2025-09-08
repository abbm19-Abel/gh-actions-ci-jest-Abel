export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('sum() expects numbers');
  }
  return a + b;
}
