import {
  add, subtract, multiply, divide, mod,
  power, square, cube, sqrt, isEven,
  capitalize, reverseString, isPalindrome, truncate, repeat,
  toLowerCase, toUpperCase, contains, startsWith, endsWith,
  sumArray, average, maxInArray, minInArray, unique,
  flatten, chunkArray, removeFalsy, includesValue, countOccurrences,
  getToday, getYear, getMonth, getDay, isWeekend,
  mergeObjects, deepClone, hasKey, objectKeys, objectValues,
  xor, and, or, not, isTruthy
} from './output_try1';

describe('Math functions', () => {
  test('add', () => expect(add(2, 3)).toBe(5));
  test('subtract', () => expect(subtract(5, 2)).toBe(3));
  test('multiply', () => expect(multiply(4, 2)).toBe(8));
  test('divide', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(5, 0)).toBeNull();
  });
  test('mod', () => expect(mod(10, 3)).toBe(1));
  test('power', () => expect(power(2, 3)).toBe(8));
  test('square', () => expect(square(4)).toBe(16));
  test('cube', () => expect(cube(3)).toBe(27));
  test('sqrt', () => expect(sqrt(16)).toBe(4));
  test('isEven', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });
});

describe('String functions', () => {
  test('capitalize', () => expect(capitalize('hello')).toBe('Hello'));
  test('reverseString', () => expect(reverseString('abc')).toBe('cba'));
  test('isPalindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });
  test('truncate', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...');
    expect(truncate('Hi', 5)).toBe('Hi');
  });
  test('repeat', () => expect(repeat('a', 3)).toBe('aaa'));
  test('toLowerCase', () => expect(toLowerCase('HeLLo')).toBe('hello'));
  test('toUpperCase', () => expect(toUpperCase('HeLLo')).toBe('HELLO'));
  test('contains', () => {
    expect(contains('hello world', 'world')).toBe(true);
    expect(contains('hello world', 'mars')).toBe(false);
  });
  test('startsWith', () => {
    expect(startsWith('hello', 'he')).toBe(true);
    expect(startsWith('hello', 'lo')).toBe(false);
  });
  test('endsWith', () => {
    expect(endsWith('hello', 'lo')).toBe(true);
    expect(endsWith('hello', 'he')).toBe(false);
  });
});

describe('Array functions', () => {
  test('sumArray', () => expect(sumArray([1, 2, 3])).toBe(6));
  test('average', () => {
    expect(average([2, 4, 6])).toBe(4);
    expect(average([])).toBe(0);
  });
  test('maxInArray', () => expect(maxInArray([1, 5, 3])).toBe(5));
  test('minInArray', () => expect(minInArray([1, 5, 3])).toBe(1));
  test('unique', () => expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]));
  test('flatten', () => expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]));
  test('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });
  test('removeFalsy', () => expect(removeFalsy([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]));
  test('includesValue', () => {
    expect(includesValue([1, 2, 3], 2)).toBe(true);
    expect(includesValue([1, 2, 3], 4)).toBe(false);
  });
  test('countOccurrences', () => expect(countOccurrences(['a', 'b', 'a'], 'a')).toBe(2));
});

describe('Date functions', () => {
  test('getToday', () => {
    const today = new Date().toDateString();
    expect(getToday()).toBe(today);
  });
  test('getYear', () => expect(getYear('2020-05-15')).toBe(2020));
  test('getMonth', () => expect(getMonth('2020-05-15')).toBe(5));
  test('getDay', () => expect(typeof getDay('2020-05-15')).toBe('number'));
  test('isWeekend', () => {
    expect(isWeekend('2023-12-17')).toBe(true); // Sunday
    expect(isWeekend('2023-12-18')).toBe(false); // Monday
  });
});

describe('Object functions', () => {
  test('mergeObjects', () => {
    const a = { x: 1 };
    const b = { y: 2 };
    expect(mergeObjects(a, b)).toEqual({ x: 1, y: 2 });
  });
  test('deepClone', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });
  test('hasKey', () => {
    expect(hasKey({ a: 1 }, 'a')).toBe(true);
    expect(hasKey({ a: 1 }, 'b')).toBe(false);
  });
  test('objectKeys', () => expect(objectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']));
  test('objectValues', () => expect(objectValues({ a: 1, b: 2 })).toEqual([1, 2]));
});

describe('Boolean functions', () => {
  test('xor', () => {
    expect(xor(true, false)).toBe(true);
    expect(xor(true, true)).toBe(false);
  });
  test('and', () => expect(and(true, true)).toBe(true));
  test('or', () => expect(or(false, true)).toBe(true));
  test('not', () => expect(not(true)).toBe(false));
  test('isTruthy', () => {
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy(0)).toBe(false);
  });
});
