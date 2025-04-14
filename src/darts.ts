export function calcPoints(input: string): number {
  if (!input.trim()) {
    return 0;
  }
  const tokens = input.trim().split(/\s+/);
  if (tokens.length % 2 !== 0) {
    throw new Error("Input must contain pairs of multipliers and sectors");
  }
  let total = 0;
  for (let i = 0; i < tokens.length; i += 2) {
    const multiplier = parseInt(tokens[i], 10);
    const sector = parseInt(tokens[i + 1], 10);
    if (isNaN(multiplier) || isNaN(sector)) {
      throw new Error("Invalid number in input");
    }
    total += multiplier * sector;
  }
  return total;
}

export function possibleCheckout(x: number): string | null {
  const remaining = 501 - x;

  if (remaining % 2 !== 0) {
    return null;
  }
  const half = remaining / 2;
  if (half < 1 || half > 20) {
    return null;
  }
  return `Double ${half}`;
}
