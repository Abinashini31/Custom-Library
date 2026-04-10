export function map<T, U>(
  fn: (value: T, index: number, array: readonly T[]) => U,
  arr: readonly T[] | null | undefined
): U[] {
  if (!arr) return [];

  const result: U[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i, arr);
  }

  return result;
}