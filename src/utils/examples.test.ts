import {summation, emmanuelInfo} from './examples';
describe('test for summation function', () => {
  test('should pass with a return value of 9', () => expect(summation(5, 4)).toBe(9));
});

describe('test for different object data-types', () => {
  test('should pass under un-enumerable extension', () =>
    expect(emmanuelInfo).toEqual(
      expect.objectContaining(
        Object.defineProperties(emmanuelInfo, {
          crush: {
            value: 'Martha Spark',
            writable: true,
          },
          firstLove: {
            value: 'Judith',
            writable: false,
          },
        })
      )
    ));
  test('should pass', () => expect(emmanuelInfo).toEqual(expect.not.objectContaining({crush: undefined})));
});

describe('Testing Error types', () => {
  test('should test undefined error type', () => {
    let error: string = '';

    try {
      summation(-5, 5);
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });
});
