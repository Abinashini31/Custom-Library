// src/Lens/view.ts

import { Lens } from './lens';

export function view(lensObj: Lens, obj: any) {
  return lensObj.get(obj);
}