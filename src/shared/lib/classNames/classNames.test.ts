import { cn } from './classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(cn('someClass')).toBe('someClass');
  });
  test('with additional (1 and 3 params)', () => {
    expect(cn('someClass', {}, ['add1', 'add2'])).toBe('someClass add1 add2');
  });
  test('with mods and additional (all params)', () => {
    const expected = 'someClass add1 add2 active visible';
    expect(
      cn('someClass', { active: true, visible: true, scrolled: false }, ['add1', 'add2']),
    ).toBe(expected);
  });
  test('with strings in mods', () => {
    expect(cn('someClass', { active: 'string', visible: '' })).toBe(
      'someClass active',
    );
  });
});
