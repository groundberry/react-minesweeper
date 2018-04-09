import {
  getConfigForLevel,
  getNumberOfMines,
  getWidth,
  getHeight,
} from './config';

describe('config', () => {
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
});
