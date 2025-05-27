
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}

export function factorial(n: number): number {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export function isPositive(num: number): boolean {
  return num > 0;
}

export function isNegative(num: number): boolean {
  return num < 0;
}

export function roundToDecimals(num: number, decimals: number): number {
  return parseFloat(num.toFixed(decimals));
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function removeDuplicates(arr: any[]): any[] {
  return [...new Set(arr)];
}

export function difference(arr1: any[], arr2: any[]): any[] {
  return arr1.filter(x => !arr2.includes(x));
}

export function intersection(arr1: any[], arr2: any[]): any[] {
  return arr1.filter(x => arr2.includes(x));
}

export function union(arr1: any[], arr2: any[]): any[] {
  return [...new Set([...arr1, ...arr2])];
}

export function zip(a: any[], b: any[]): any[][] {
  return a.map((k, i) => [k, b[i]]);
}

export function unzip(zipped: any[][]): [any[], any[]] {
  return zipped.reduce(([a, b], [x, y]) => {
    a.push(x);
    b.push(y);
    return [a, b];
  }, [[], []]);
}

export function sortAsc(arr: any[]): any[] {
  return [...arr].sort((a, b) => a - b);
}

export function sortDesc(arr: any[]): any[] {
  return [...arr].sort((a, b) => b - a);
}

export function shuffle(arr: any[]): any[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function findIndex(arr: any[], predicate: (arg0: any) => boolean): number {
  return arr.findIndex(predicate);
}

export function kebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-');
}

export function snakeCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '_');
}

export function camelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function padStartStr(str: string, len: number, char = ' '): string {
  return str.padStart(len, char);
}

export function padEndStr(str: string, len: number, char = ' '): string {
  return str.padEnd(len, char);
}

export function removeSpaces(str: string): string {
  return str.replace(/\s+/g, '');
}

export function isAlpha(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

export function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

export function isAlphaNumeric(str: string): boolean {
  return /^[A-Za-z0-9]+$/.test(str);
}

export function escapeHTML(str: string): string {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function unescapeHTML(str: string): string {
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

export function debounce(func: any, wait: number): any {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function throttle(func: any, limit: number): any {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function once(fn: any): any {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
  };
}

export function memoize(fn: any): any {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn.apply(this, args);
    }
    return cache[key];
  };
}

export function sleep(ms: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomElement(arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function parseJSON(str: string): any {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

export function safeAccess(obj: any, path: any[]): any {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function isEmptyObject(obj: any): boolean {
  return Object.keys(obj).length === 0;
}

export function deepEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function pick(obj: any, keys: any[]): any {
  return keys.reduce((res, key) => {
    if (key in obj) res[key] = obj[key];
    return res;
  }, {});
}

export function omit(obj: any, keys: any[]): any {
  return Object.keys(obj).reduce((res, key) => {
    if (!keys.includes(key)) res[key] = obj[key];
    return res;
  }, {});
}

export function mergeDeep(target: any, source: any): any {
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

export function countWords(str: string): number {
  return str.trim().split(/\s+/).length;
}

export function countChars(str: string): number {
  return str.length;
}

export function getFirstElement(arr: any[]): any {
  return arr[0];
}

export function getLastElement(arr: any[]): any {
  return arr[arr.length - 1];
}

export function chunkString(str: string, size: number): string[] {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}
