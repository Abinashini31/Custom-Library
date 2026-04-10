export function findByPredicate<T>(
  arr: T[],
  fn: (value: T, index: number, arr: T[]) => boolean
): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}