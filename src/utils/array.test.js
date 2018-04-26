import {
  cloneGrid,
  isPresent,
} from './array';

describe('array', () => {
  describe('cloneGrid', () => {
    const array = [[1, 2, 3], [4, 5, 6]];
    const copy = [[1, 2, 3], [4, 5, 6]];

    it('returns a copy of the original bidimensional array', () => {
      expect(cloneGrid(array)).toEqual(copy);
    });
  });

  describe('isPresent', () => {
    const array = [[0, 0], [0, 1], [0, 2]];
    it('returns true if the cell is in the array', () => {
      const cell = [0, 0];
      expect(isPresent(array, cell)).toBe(true);
    });

    it('returns false if the cell is not in the array', () => {
      const cell = [1, 0];
      expect(isPresent(array, cell)).toBe(false);
    });
  });
});
