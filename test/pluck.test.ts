// test/pluck.test.ts

import { pluck } from '../src/Extraction/pluck';

describe('pluck utility', () => {
  const data = [
    { id: 1, info: { email: 'v@test.com' }, tags: ['dev'] },
    { id: 2, info: { email: 'a@test.com' }, tags: ['hr'] }
  ];

  /* ------------------ Simple Property ------------------ */

  it('should extract simple property', () => {
    const result = pluck('id', data);
    expect(result).toEqual([1, 2]);
  });

  /* ------------------ Deep Path ------------------ */

  it('should extract deep path using dot notation', () => {
    const result = pluck('info.email', data);
    expect(result).toEqual(['v@test.com', 'a@test.com']);
  });

  /* ------------------ Multi Key ------------------ */

  it('should extract multiple keys', () => {
    const result = pluck(['id', 'tags'], data);

    expect(result).toEqual([
      { id: 1, tags: ['dev'] },
      { id: 2, tags: ['hr'] }
    ]);
  });

  /* ------------------ Edge Cases ------------------ */

  it('should return empty array for empty input', () => {
    expect(pluck('id', [])).toEqual([]);
  });

  it('should handle null/undefined safely', () => {
    // @ts-ignore
    expect(pluck('id', null)).toEqual([]);
    // @ts-ignore
    expect(pluck('id', undefined)).toEqual([]);
  });

  it('should handle missing keys gracefully', () => {
    const result = pluck('nonexistent', data);
    expect(result).toEqual([undefined, undefined]);
  });

  it('should handle deep missing paths', () => {
    const result = pluck('info.phone.number', data);
    expect(result).toEqual([undefined, undefined]);
  });

  it('should handle multi-pick with missing keys', () => {
    const result = pluck(['id', 'missing'], data);

    expect(result).toEqual([
      { id: 1, missing: undefined },
      { id: 2, missing: undefined }
    ]);
  });

  /* ------------------ Immutability ------------------ */

  it('should not mutate original data (simple)', () => {
    const copy = JSON.parse(JSON.stringify(data));
    pluck('id', data);
    expect(data).toEqual(copy);
  });

  it('should not mutate original data (deep)', () => {
    const copy = JSON.parse(JSON.stringify(data));
    pluck('info.email', data);
    expect(data).toEqual(copy);
  });

  it('should not mutate original data (multi)', () => {
    const copy = JSON.parse(JSON.stringify(data));
    pluck(['id', 'tags'], data);
    expect(data).toEqual(copy);
  });
});