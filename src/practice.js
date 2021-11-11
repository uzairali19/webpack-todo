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

export { stringLength, stringReverse };
