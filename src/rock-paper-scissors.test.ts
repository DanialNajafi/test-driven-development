describe('Rock Paper Scissors', () => {
  test('rock vs rock -> 0', () => {
    expect(play('rock', 'rock')).toBe(0);
  });
  test('rock vs paper -> 2', () => {
    expect(play('rock', 'paper')).toBe(2);
  });
  // usw.
});
