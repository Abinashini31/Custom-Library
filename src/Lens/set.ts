import { Lens } from './lens';

export function set(lensObj: Lens, value: any, obj: any) {
  return lensObj.set(value, obj);
}