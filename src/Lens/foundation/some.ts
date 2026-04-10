export function some<T>(
  fn: (value: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}