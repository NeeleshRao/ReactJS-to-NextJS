// Math & Number Utilities
export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}

export function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

export function isPositive(num) {
  return num > 0;
}

export function isNegative(num) {
  return num < 0;
}

export function roundToDecimals(num, decimals) {
  return parseFloat(num.toFixed(decimals));
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array Utilities
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export function difference(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}

export function intersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

export function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

export function zip(a, b) {
  return a.map((k, i) => [k, b[i]]);
}

export function unzip(zipped) {
  return zipped.reduce(([a, b], [x, y]) => {
    a.push(x);
    b.push(y);
    return [a, b];
  }, [[], []]);
}

export function sortAsc(arr) {
  return [...arr].sort((a, b) => a - b);
}

export function sortDesc(arr) {
  return [...arr].sort((a, b) => b - a);
}

export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function findIndex(arr, predicate) {
  return arr.findIndex(predicate);
}

// String Utilities
export function kebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

export function snakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, '_');
}

export function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function padStartStr(str, len, char = ' ') {
  return str.padStart(len, char);
}

export function padEndStr(str, len, char = ' ') {
  return str.padEnd(len, char);
}

export function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

export function isAlpha(str) {
  return /^[A-Za-z]+$/.test(str);
}

export function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}

export function isAlphaNumeric(str) {
  return /^[A-Za-z0-9]+$/.test(str);
}

export function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function unescapeHTML(str) {
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

// Advanced Utilities
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
  };
}

export function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn.apply(this, args);
    }
    return cache[key];
  };
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

export function safeAccess(obj, path) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

export function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function pick(obj, keys) {
  return keys.reduce((res, key) => {
    if (key in obj) res[key] = obj[key];
    return res;
  }, {});
}

export function omit(obj, keys) {
  return Object.keys(obj).reduce((res, key) => {
    if (!keys.includes(key)) res[key] = obj[key];
    return res;
  }, {});
}

export function mergeDeep(target, source) {
  const output = { ...target };
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      output[key] = mergeDeep(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

export function countWords(str) {
  return str.trim().split(/\s+/).length;
}

export function countChars(str) {
  return str.length;
}

export function getFirstElement(arr) {
  return arr[0];
}

export function getLastElement(arr) {
  return arr[arr.length - 1];
}

export function chunkString(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}
