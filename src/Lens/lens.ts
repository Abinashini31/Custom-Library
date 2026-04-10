import { getDeep, setDeep } from './utils';

export type Lens = {
  get: (obj: any) => any;
  set: (value: any, obj: any) => any;
};

export function lens(path: string): Lens {
  const keys = path ? path.split('.') : [];

  return {
    get: (obj: any) => getDeep(obj, keys),
    set: (value: any, obj: any) => setDeep(obj, keys, value)
  };
}