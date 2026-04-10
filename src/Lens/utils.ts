// src/Lens/utils.ts

export function getDeep(obj: any, keys: string[]) {
  return keys.reduce((acc, key) => acc?.[key], obj);
}

export function setDeep(obj: any, keys: string[], value: any): any {
  if (keys.length === 0) return value;

  const [first, ...rest] = keys;

  return {
    ...obj,
    [first]: rest.length
      ? setDeep(obj?.[first] ?? {}, rest, value)
      : value
  };
}