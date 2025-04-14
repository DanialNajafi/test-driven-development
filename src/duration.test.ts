import { formatDuration } from './duration';

describe('formatDuration', () => {
  test('should return "33s" for 33 seconds', () => {
    expect(formatDuration(33)).toBe('33s');
  });

  test('should format 123 seconds as "2m3s"', () => {
    expect(formatDuration(123)).toBe('2m3s');
  });

  test('should format 500 seconds as "8m20s"', () => {
    expect(formatDuration(500)).toBe('8m20s');
  });

  test('should format 3600 seconds as "1h"', () => {
    expect(formatDuration(3600)).toBe('1h');
  });

  test('should format 3999 seconds as "1h6m39s"', () => {
    expect(formatDuration(3999)).toBe('1h6m39s');
  });

  test('should format 0 seconds as "0s"', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  test('should round decimal seconds correctly', () => {
    expect(formatDuration(2.4)).toBe('2s');  // Rundet ab
    expect(formatDuration(2.6)).toBe('3s');  // Rundet auf
  });

  test('should throw an error for negative values', () => {
    expect(() => formatDuration(-10)).toThrow('Negative time is not valid!');
  });
});
