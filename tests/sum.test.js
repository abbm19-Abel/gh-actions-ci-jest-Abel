const { sum } = require('../src/sum');

describe('sum()', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('throws error when inputs are not numbers', () => {
    expect(() => sum(2, 'a')).toThrow(/expects numbers/);
  });
});
