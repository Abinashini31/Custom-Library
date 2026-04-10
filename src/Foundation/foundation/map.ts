export function map<T, R>(
  fn: (item: T, index: number) => R,
  arr: T[]
): R[] {
  if (!Array.isArray(arr)) return [];

  const result: R[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
}