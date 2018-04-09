import { cloneGrid } from './array';

describe('array', () => {
  describe('cloneGrid', () => {
    const array = [[1, 2, 3], [4, 5, 6]];
    const copy = [[1, 2, 3], [4, 5, 6]];

    it('returns a copy of the original bidimensional array', () => {
      expect(cloneGrid(array)).toEqual(copy);
    });
  });
});
