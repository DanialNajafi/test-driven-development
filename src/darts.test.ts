import { calcPoints, possibleCheckout } from './darts';

describe('Darts - calcPoints', () => {
  test('calculates points for valid input "3 20 1 17 2 4"', () => {

    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
  });

  test('calculates points for valid input "2 15 1 18 3 19"', () => {
 
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
  });

  test('calculates points for valid input "3 20 1 5"', () => {

    expect(calcPoints("3 20 1 5")).toBe(65);
  });

  test('returns 0 for empty input', () => {
    expect(calcPoints("")).toBe(0);
  });
});

describe('Darts - possibleCheckout', () => {
  test('returns valid double checkout for x=477 (501-477=24)', () => {

    expect(possibleCheckout(477)).toBe("Double 12");
  });

  test('returns null when checkout is not possible (odd remainder)', () => {

    expect(possibleCheckout(480)).toBeNull();
  });

  test('returns null when checkout is not possible (resulting double out of range)', () => {
 
    expect(possibleCheckout(441)).toBeNull();
  });

  test('returns valid double checkout for lower numbers', () => {
 
    expect(possibleCheckout(499)).toBe("Double 1");
  });
});
