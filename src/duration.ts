export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error('Negative time is not valid!');
  }

  // Rundung auf die nächste Ganzzahl (Sekunden)
  seconds = Math.round(seconds);

  if (seconds === 0) {
    return '0s';
  }

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  let result = '';
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  if (secs > 0) {
    result += `${secs}s`;
  }
  return result;
}
