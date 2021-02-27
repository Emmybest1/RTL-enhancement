export const summation = (firstValue: number, secondValue: number): number => {
  if (!firstValue || !secondValue) {
    throw new Error('Value is falsy and addition is redundant');
  }
  return Math.round(firstValue + secondValue);
};

export const emmanuelInfo = {
  name: 'Emmanuel Onah',
  age: '21',
  occupation: 'Frontend Engineering Architect',
};
