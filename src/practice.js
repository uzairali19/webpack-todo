const stringLength = (string) => {
  if (string.length > 1 && string.length < 10) {
    return string.length;
  }
  throw new Error('Input condition not met');
};

const stringReverse = (string) => {
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
};

class Calculator {
  add(one, two) {
    return one + two;
  }
  substract(one, two) {
    return one - two;
  }
  divide(one, two) {
    return one / two;
  }
  multiply(one, two) {
    return one * two;
  }
}

export { stringLength, stringReverse, Calculator };
