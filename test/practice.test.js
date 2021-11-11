const stringLength = require('../src/practice');

test('Returns length of a given string', () => {
  const str = 'Hello';
  expect(stringLength(str)).toBe(5);
});

test('Checks if the string is between 1-10 characters long', () => {
  const str = 'Hello';
  expect(stringLength(str)).toBeGreaterThanOrEqual(1);
  expect(stringLength(str)).toBeLessThanOrEqual(10);
});

test('Returns an error', () => {
  const str = 'Hello world family';
  expect(() => {
    stringLength(str);
  }).toThrow('Input condition not met');
});
