import { isWinner } from './isWinner';

describe('isWinner', () => {
  describe('isWinner', () => {
    const level = 1;

    it('returns true if the user found all the mines', () => {
      const cellsClicked = 71;
      expect(isWinner(level, cellsClicked)).toEqual(true);
    });

    it('returns false if the user did not find all the mines', () => {
      const cellsClicked = 70;
      expect(isWinner(level, cellsClicked)).toEqual(false);
    });
  });
});
