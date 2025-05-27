// Math Utilities
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : null;
}

function mod(a, b) {
  return a % b;
}

function power(base, exp) {
  return Math.pow(base, exp);
}

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sqrt(n) {
  return Math.sqrt(n);
}

function isEven(n) {
  return n % 2 === 0;
}

// String Utilities
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const s = str.toLowerCase();
  return s === s.split('').reverse().join('');
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}

function repeat(str, times) {
  return str.repeat(times);
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function contains(str, sub) {
  return str.includes(sub);
}

function startsWith(str, prefix) {
  return str.startsWith(prefix);
}

function endsWith(str, suffix) {
  return str.endsWith(suffix);
}

// Array Utilities
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function average(arr) {
  return arr.length ? sumArray(arr) / arr.length : 0;
}

function maxInArray(arr) {
  return Math.max(...arr);
}

function minInArray(arr) {
  return Math.min(...arr);
}

function unique(arr) {
  return [...new Set(arr)];
}

function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b), []);
}

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

function includesValue(arr, val) {
  return arr.includes(val);
}

function countOccurrences(arr, val) {
  return arr.filter(item => item === val).length;
}

// Date Utilities
function getToday() {
  return new Date().toDateString();
}

function getYear(date) {
  return new Date(date).getFullYear();
}

function getMonth(date) {
  return new Date(date).getMonth() + 1;
}

function getDay(date) {
  return new Date(date).getDay();
}

function isWeekend(date) {
  const d = new Date(date).getDay();
  return d === 0 || d === 6;
}

// Object Utilities
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function objectKeys(obj) {
  return Object.keys(obj);
}

function objectValues(obj) {
  return Object.values(obj);
}

// Boolean Utilities
function xor(a, b) {
  return !!(a !== b);
}

function and(a, b) {
  return a && b;
}

function or(a, b) {
  return a || b;
}

function not(a) {
  return !a;
}

function isTruthy(value) {
  return !!value;
}


module.exports = {
  add, subtract, multiply, divide, mod,
  power, square, cube, sqrt, isEven,
  capitalize, reverseString, isPalindrome, truncate, repeat,
  toLowerCase, toUpperCase, contains, startsWith, endsWith,
  sumArray, average, maxInArray, minInArray, unique,
  flatten, chunkArray, removeFalsy, includesValue, countOccurrences,
  getToday, getYear, getMonth, getDay, isWeekend,
  mergeObjects, deepClone, hasKey, objectKeys, objectValues,
  xor, and, or, not, isTruthy
};
