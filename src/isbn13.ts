export function isValid(isbn: string): boolean {
  
  const cleaned = isbn.replace(/-/g, '');
  if (!/^\d{13}$/.test(cleaned)) {
    return false;
  }
  
  const digits = cleaned.split('').map(Number);
  let sum = 0;
  
  for (let i = 0; i < 12; i++) {
    sum += digits[i] * (i % 2 === 0 ? 1 : 3);
  }
  
  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === digits[12];
}
