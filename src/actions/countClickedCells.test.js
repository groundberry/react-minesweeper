import { countClickedCells } from './countClickedCells';

describe('countClickedCells', () => {
  describe('countClickedCells', () => {
    const grid = [
      [true, true, true, true, true, false, false, false, false],
      [true, true, true, true, false, false, false, true, true],
      [false, false, false, false, false, false, false, false, false],
      [true, true, true, true, true, false, true, true, true],
      [true, true, true, true, true, false, true, true, true],
      [false, false, false, false, false, false, false, true, true],
      [true, false, true, true, true, false, false, false, false],
      [true, false, true, true, false, false, false, false, true],
      [true, false, false, true, true, false, false, true, true],
    ];

    it('returns the number of uncovered cells', () => {
      expect(countClickedCells(grid)).toEqual(42);
    });
  });
});
