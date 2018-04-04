import {
  getConfigForLevel,
  getNumberOfMines,
  getWidth,
  getHeight,
  getRandomMine,
  getMinesCoordinates,
} from './utils';

describe('utils', () => {
  describe('getConfigForLevel', () => {
    const level = 1;
    const config = {
      mines: 10,
      width: 9,
      height: 9,
    };

    it('returns the configuration for the selected level', () => {
      expect(getConfigForLevel(level)).toEqual(config);
    });
  });


  describe('getNumberOfMines', () => {
    const level = 1;

    it('returns the total number of mines on the grid', () => {
      expect(getNumberOfMines(level)).toBe(10);
    });
  });

  describe('getWidth', () => {
    const level = 1;

    it('returns the width of the grid', () => {
      expect(getWidth(level)).toBe(9);
    });
  });

  describe('getHeight', () => {
    const level = 1;

    it('returns the height of the grid', () => {
      expect(getHeight(level)).toBe(9);
    });
  });

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
});
