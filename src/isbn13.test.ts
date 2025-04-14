import { isValid } from './isbn13';

describe('ISBN-13 validation', () => {
  test('valid ISBN without hyphens', () => {
    expect(isValid('9783161484100')).toBe(true);
  });

  test('valid ISBN with hyphens', () => {
    expect(isValid('978-3-16-148410-0')).toBe(true);
  });

  test('invalid ISBN with wrong check digit', () => {
    expect(isValid('9783161484101')).toBe(false);
  });

  test('invalid ISBN with letters', () => {
    expect(isValid('97831614841A0')).toBe(false);
  });

  test('invalid ISBN due to wrong length', () => {
    expect(isValid('123456789012')).toBe(false);
  });
});
