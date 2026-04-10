// src/Extraction/pluck.ts

type Path = string | string[];

/**
 * Polymorphic pluck:
 * - "id" → simple property
 * - "a.b.c" → deep path
 * - ["id", "tags"] → multi-key pick
 */
export function pluck<T>(path: Path, data: T[]): any[] {
  if (!Array.isArray(data) || data.length === 0) return [];

  if (Array.isArray(path)) {
    return multiPick(path, data);
  }

  if (typeof path === 'string' && path.includes('.')) {
    return deepPick(path, data);
  }

  return simplePick(path as string, data);
}

/* ------------------ Helpers ------------------ */

function simplePick<T>(key: string, data: T[]) {
  return data.map(item => (item as any)?.[key]);
}

function deepPick<T>(path: string, data: T[]) {
  const keys = path.split('.');

  return data.map(obj =>
    keys.reduce((acc: any, key) => acc?.[key], obj)
  );
}

function multiPick<T>(keys: string[], data: T[]) {
  return data.map(obj =>
    keys.reduce((acc: any, key) => {
      acc[key] = (obj as any)?.[key];
      return acc;
    }, {})
  );
}