// test/lens.test.ts

import { lens } from '../src/Lens/lens';
import { view } from '../src/Lens/view';
import { set } from '../src/Lens/set';

describe('Lens (split modules)', () => {
  const user = {
    id: 1,
    profile: {
      settings: {
        theme: 'light'
      }
    }
  };

  /* ------------------ VIEW ------------------ */

  it('should view deep value', () => {
    const l = lens('profile.settings.theme');

    expect(view(l, user)).toBe('light');
  });

  it('should return undefined for missing path', () => {
    const l = lens('profile.settings.lang');

    expect(view(l, user)).toBeUndefined();
  });

  it('should handle null safely', () => {
    const l = lens('a.b.c');

    // @ts-ignore
    expect(view(l, null)).toBeUndefined();
  });

  /* ------------------ SET ------------------ */

  it('should update value immutably', () => {
    const l = lens('profile.settings.theme');

    const updated = set(l, 'dark', user);

    expect(updated.profile.settings.theme).toBe('dark');
    expect(user.profile.settings.theme).toBe('light'); // unchanged
  });

  it('should create missing path', () => {
    const l = lens('profile.preferences.language');

    const updated = set(l, 'en', user);

    expect(updated.profile.preferences.language).toBe('en');
  });

  it('should not mutate original object', () => {
    const copy = JSON.parse(JSON.stringify(user));

    const l = lens('profile.settings.theme');
    set(l, 'dark', user);

    expect(user).toEqual(copy);
  });

  it('should preserve other fields', () => {
    const l = lens('profile.settings.theme');

    const updated = set(l, 'dark', user);

    expect(updated.id).toBe(1);
  });

  it('should work with empty object', () => {
    const l = lens('a.b.c');

    const result = set(l, 10, {});

    expect(result).toEqual({
      a: { b: { c: 10 } }
    });
  });

  /* ------------------ EMPTY PATH ------------------ */

  it('should replace entire object when path is empty', () => {
    const l = lens('');

    const result = set(l, { x: 1 }, { a: 1 });

    expect(result).toEqual({ x: 1 });
  });

  it('should return entire object on view when path is empty', () => {
    const l = lens('');

    expect(view(l, user)).toEqual(user);
  });
});