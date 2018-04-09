import {
  getRandomMine,
  getMinesCoordinates,
  isMine,
} from './mine';

describe('mine', () => {
  describe('getRandomMine', () => {
    const width = 9;
    const height = 9;

    it('returns a coordinate with the x being less than the height of the grid', () => {
      expect(getRandomMine(width, height)[0]).toBeLessThan(height);
    });

    it('returns a coordinate with the y being less than the width of the grid', () => {
      expect(getRandomMine(width, height)[1]).toBeLessThan(width);
    });
  });

  describe('getMinesCoordinates', () => {
    const level = 1;

    it('returns an array with the coordinates of all the mines', () => {
      expect(getMinesCoordinates(level)).toHaveLength(10);
    });
  });

  describe('isMine', () => {
    const mines = [[0, 2], [1, 2]];

    it('returns an array with the content of every cell in the grid', () => {
      const cell = [0, 2];
      expect(isMine(mines, cell)).toEqual(true);
    });

    it('returns an array with the content of every cell in the grid', () => {
      const cell = [2, 2];
      expect(isMine(mines, cell)).toEqual(false);
    });
  });
});
