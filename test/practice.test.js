import {
  stringLength,
  stringReverse,
  Calculator,
  capString,
} from '../src/practice';

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

test('reverse string', () => {
  const str = 'Hello World';
  expect(stringReverse(str)).toBe('dlroW olleH');
});

describe('Calculator', () => {
  const cal = new Calculator();
  test('add', () => {
    expect(cal.add(1, 2)).toBe(3);
    expect(cal.add(-1, 3)).toBe(2);
    expect(cal.add(0, 2)).toBe(2);
  });
  test('subtract', () => {
    expect(cal.substract(2, 1)).toBe(1);
    expect(cal.substract(20, 10)).toBe(10);
    expect(cal.substract(1, 5)).toBe(-4);
  });
  test('divide', () => {
    expect(cal.divide(10, 5)).toBe(2);
    expect(cal.divide(0, 5)).toBe(0);
    expect(cal.divide(6, 0)).toBe(Infinity);
  });
  test('add', () => {
    expect(cal.multiply(3, 2)).toBe(6);
    expect(cal.multiply(-4, 2)).toBe(-8);
    expect(cal.multiply(6, 0)).toBe(0);
  });
});

describe('Capitalize String', () => {
  test('First word capital', () => {
    const str = 'hello';
    expect(capString(str)).toBe('Hello');
  });

  test('Throw error if not capital', () => {
    const str = '';
    expect(() => {
      stringLength(str);
    }).toThrowError();
  });
});
