export function reduce<T, U>(
  fn: (acc: U, val: T, index: number, arr: T[]) => U,
  initial: U,
  arr: T[]
): U {
  let acc = initial;

  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }

  return acc;
}
export function reduceRight<T, U>(
  fn: (acc: U, val: T, index: number, arr: T[]) => U,
  initial: U,
  arr: T[]
): U {
  let acc = initial;

  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i], i, arr);
  }

  return acc;
}