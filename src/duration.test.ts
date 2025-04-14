import { formatDuration } from './duration';

test('should format 33 seconds as 33s', () => {
  expect(formatDuration(33)).toBe('33s');
});
