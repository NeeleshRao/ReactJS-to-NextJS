import {
  clamp,
  isPrime,
  factorial,
  fibonacci,
  gcd,
  lcm,
  isPositive,
  isNegative,
  roundToDecimals,
  randomInt,
  removeDuplicates,
  difference,
  intersection,
  union,
  zip,
  unzip,
  sortAsc,
  sortDesc,
  shuffle,
  findIndex,
  kebabCase,
  snakeCase,
  camelCase,
  padStartStr,
  padEndStr,
  removeSpaces,
  isAlpha,
  isNumeric,
  isAlphaNumeric,
  escapeHTML,
  unescapeHTML,
  debounce,
  throttle,
  once,
  memoize,
  sleep,
  getRandomElement,
  generateUUID,
  parseJSON,
  safeAccess,
  isEmptyObject,
  deepEqual,
  pick,
  omit,
  mergeDeep,
  countWords,
  countChars,
  getFirstElement,
  getLastElement,
  chunkString
} from './output_try2';

describe('Additional Math Functions', () => {
  test('clamp', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-5, 0, 100)).toBe(0);
  });

  test('isPrime', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(8)).toBe(false);
  });

  test('factorial', () => {
    expect(factorial(5)).toBe(120);
  });

  test('fibonacci', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('gcd', () => {
    expect(gcd(12, 18)).toBe(6);
  });

  test('lcm', () => {
    expect(lcm(4, 6)).toBe(12);
  });

  test('isPositive', () => {
    expect(isPositive(3)).toBe(true);
    expect(isPositive(-1)).toBe(false);
  });

  test('isNegative', () => {
    expect(isNegative(-3)).toBe(true);
    expect(isNegative(1)).toBe(false);
  });

  test('roundToDecimals', () => {
    expect(roundToDecimals(3.14159, 2)).toBeCloseTo(3.14);
  });

  test('randomInt', () => {
    const num = randomInt(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
  });
});

describe('Additional Array Utilities', () => {
  test('removeDuplicates', () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('difference', () => {
    expect(difference([1, 2, 3], [2, 3])).toEqual([1]);
  });

  test('intersection', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('union', () => {
    expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
  });

  test('zip', () => {
    expect(zip(['a', 'b'], [1, 2])).toEqual([['a', 1], ['b', 2]]);
  });

  test('unzip', () => {
    expect(unzip([['a', 1], ['b', 2]])).toEqual([['a', 'b'], [1, 2]]);
  });

  test('sortAsc', () => {
    expect(sortAsc([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('sortDesc', () => {
    expect(sortDesc([1, 3, 2])).toEqual([3, 2, 1]);
  });

  test('shuffle', () => {
    const original = [1, 2, 3];
    const result = shuffle([...original]);
    expect(result).toHaveLength(3);
    expect(result.sort()).toEqual(original.sort());
  });

  test('findIndex', () => {
    expect(findIndex([1, 2, 3], x => x === 2)).toBe(1);
  });
});

describe('String Case & Format', () => {
  test('kebabCase', () => expect(kebabCase('Hello World')).toBe('hello-world'));
  test('snakeCase', () => expect(snakeCase('Hello World')).toBe('hello_world'));
  test('camelCase', () => expect(camelCase('hello world')).toBe('helloWorld'));
  test('padStartStr', () => expect(padStartStr('42', 5, '0')).toBe('00042'));
  test('padEndStr', () => expect(padEndStr('42', 5, '0')).toBe('42000'));
  test('removeSpaces', () => expect(removeSpaces('  a b c  ')).toBe('abc'));
  test('isAlpha', () => expect(isAlpha('abc')).toBe(true));
  test('isNumeric', () => expect(isNumeric('123')).toBe(true));
  test('isAlphaNumeric', () => expect(isAlphaNumeric('abc123')).toBe(true));
  test('escapeHTML', () => expect(escapeHTML('<div>')).toBe('&lt;div&gt;'));
  test('unescapeHTML', () => expect(unescapeHTML('&lt;div&gt;')).toBe('<div>'));
});

describe('Advanced Utility Functions', () => {
  test('debounce', done => {
    const fn = jest.fn();
    const debounced = debounce(fn, 50);
    debounced();
    debounced();
    setTimeout(() => {
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    }, 100);
  });

  test('throttle', done => {
    const fn = jest.fn();
    const throttled = throttle(fn, 50);
    throttled();
    throttled();
    setTimeout(() => {
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    }, 60);
  });

  test('once', () => {
    const fn = jest.fn();
    const runOnce = once(fn);
    runOnce();
    runOnce();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('memoize', () => {
    const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
    expect(fib(10)).toBe(55);
  });

  test('sleep', async () => {
    const before = Date.now();
    await sleep(50);
    const after = Date.now();
    expect(after - before).toBeGreaterThanOrEqual(50);
  });

  test('getRandomElement', () => {
    const arr = [1, 2, 3];
    const element = getRandomElement(arr);
    expect(arr.includes(element)).toBe(true);
  });

  test('generateUUID', () => {
    const uuid = generateUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBeGreaterThan(10);
  });

  test('parseJSON', () => {
    expect(parseJSON('{"a":1}')).toEqual({ a: 1 });
    expect(parseJSON('invalid')).toBeNull();
  });

  test('safeAccess', () => {
    const obj = { a: { b: { c: 42 } } };
    expect(safeAccess(obj, ['a', 'b', 'c'])).toBe(42);
    expect(safeAccess(obj, ['a', 'x', 'c'])).toBe(undefined);
  });

  test('isEmptyObject', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('deepEqual', () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(deepEqual({ a: 1 }, { b: 2 })).toBe(false);
  });

  test('pick', () => {
    expect(pick({ a: 1, b: 2 }, ['a'])).toEqual({ a: 1 });
  });

  test('omit', () => {
    expect(omit({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 });
  });

  test('mergeDeep', () => {
    expect(mergeDeep({ a: { b: 1 } }, { a: { c: 2 } })).toEqual({ a: { b: 1, c: 2 } });
  });

  test('countWords', () => {
    expect(countWords('Hello world!')).toBe(2);
  });

  test('countChars', () => {
    expect(countChars('abc')).toBe(3);
  });

  test('getFirstElement', () => {
    expect(getFirstElement([1, 2, 3])).toBe(1);
  });

  test('getLastElement', () => {
    expect(getLastElement([1, 2, 3])).toBe(3);
  });

  test('chunkString', () => {
    expect(chunkString('abcdef', 2)).toEqual(['ab', 'cd', 'ef']);
  });
});
