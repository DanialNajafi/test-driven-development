export function formatDuration(seconds: number): string {
  // Spezialfall: negatives Argument -> Exception
  if (seconds < 0) {
    throw new Error('Negative time is not valid!');
  }

  // Rundung von Nachkommastellen
  seconds = Math.round(seconds);

  if (seconds === 0) {
    return '0s';
  }

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const parts: string[] = [];
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  if (sec > 0) {
    parts.push(`${sec}s`);
  }

  return parts.join('');
}
