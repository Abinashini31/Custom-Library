export function findByKeyValue<T>(
  arr: T[],
  key: keyof T,
  value: any
): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
    }
  }
  return undefined;
}