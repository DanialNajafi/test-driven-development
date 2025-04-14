import { play } from './rock-paper-scissors';

describe('Rock Paper Scissors', () => {
  test('rock vs rock should be a tie', () => {
    expect(play('rock', 'rock')).toBe(0);
  });

  test('rock vs paper should win for player 2', () => {
    expect(play('rock', 'paper')).toBe(2);
  });

  test('rock vs scissors should win for player 1', () => {
    expect(play('rock', 'scissors')).toBe(1);
  });

  test('paper vs scissors should win for player 2', () => {
    expect(play('paper', 'scissors')).toBe(2);
  });

  test('paper vs rock should win for player 1', () => {
    expect(play('paper', 'rock')).toBe(1);
  });

  test('scissors vs paper should win for player 1', () => {
    expect(play('scissors', 'paper')).toBe(1);
  });

  test('scissors vs rock should win for player 2', () => {
    expect(play('scissors', 'rock')).toBe(2);
  });

  test('should ignore case and surrounding spaces', () => {
    expect(play(' Rock ', '  pAper')).toBe(2);
  });

  test('should throw an error for invalid moves', () => {
    expect(() => play('invalid', 'rock')).toThrow('Invalid move: invalid');
    expect(() => play('paper', 'invalid')).toThrow('Invalid move: invalid');
  });
});
