export function filter<T>(
  fn: (value: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[] | null | undefined
): T[] {
  if (!arr) return [];

  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}