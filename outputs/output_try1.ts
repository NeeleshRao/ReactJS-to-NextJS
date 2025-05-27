
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return b !== 0 ? a / b : null;
}

function mod(a: number, b: number): number {
  return a % b;
}

function power(base: number, exp: number): number {
  return Math.pow(base, exp);
}

function square(n: number): number {
  return n * n;
}

function cube(n: number): number {
  return n * n * n;
}

function sqrt(n: number): number {
  return Math.sqrt(n);
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

function isPalindrome(str: string): boolean {
  const s = str.toLowerCase();
  return s === s.split('').reverse().join('');
}

function truncate(str: string, len: number): string {
  return str.length > len ? str.slice(0, len) + '...' : str;
}

function repeat(str: string, times: number): string {
  return str.repeat(times);
}

function toLowerCase(str: string): string {
  return str.toLowerCase();
}

function toUpperCase(str: string): string {
  return str.toUpperCase();
}

function contains(str: string, sub: string): boolean {
  return str.includes(sub);
}

function startsWith(str: string, prefix: string): boolean {
  return str.startsWith(prefix);
}

function endsWith(str: string, suffix: string): boolean {
  return str.endsWith(suffix);
}

function sumArray(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

function average(arr: number[]): number {
  return arr.length ? sumArray(arr) / arr.length : 0;
}

function maxInArray(arr: number[]): number {
  return Math.max(...arr);
}

function minInArray(arr: number[]): number {
  return Math.min(...arr);
}

function unique(arr: number[]): number[] {
  return [...new Set(arr)];
}

function flatten(arr: any[][]): any[] {
  return arr.reduce((a, b) => a.concat(b), []);
}

function chunkArray(arr: any[], size: number): any[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function removeFalsy(arr: any[]): any[] {
  return arr.filter(Boolean);
}

function includesValue(arr: any[], val: any): boolean {
  return arr.includes(val);
}

function countOccurrences(arr: any[], val: any): number {
  return arr.filter(item => item === val).length;
}

function getToday(): string {
  return new Date().toDateString();
}

function getYear(date: string | Date): number {
  return new Date(date).getFullYear();
}

function getMonth(date: string | Date): number {
  return new Date(date).getMonth() + 1;
}

function getDay(date: string | Date): number {
  return new Date(date).getDay();
}

function isWeekend(date: string | Date): boolean {
  const d = new Date(date).getDay();
  return d === 0 || d === 6;
}

function mergeObjects(obj1: any, obj2: any): any {
  return { ...obj1, ...obj2 };
}

function deepClone(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

function hasKey(obj: any, key: string | symbol): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function objectKeys(obj: any): (keyof any)[] {
  return Object.keys(obj);
}

function objectValues(obj: any): (keyof any)[] {
  return Object.values(obj);
}

function xor(a: boolean, b: boolean): boolean {
  return !!(a !== b);
}

function and(a: boolean, b: boolean): boolean {
  return a && b;
}

function or(a: boolean, b: boolean): boolean {
  return a || b;
}

function not(a: boolean): boolean {
  return !a;
}

function isTruthy(value: any): boolean {
  return !!value;

}
export { 
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