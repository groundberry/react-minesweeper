import {
  getConfigForLevel,
  getNumberOfMines,
  getWidth,
  getHeight,
  getRandomMine,
  getMinesCoordinates,
  isMine,
  getCellValue,
  getGrid,
  startGame,
  getCellImage,
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

  describe('getCellValue', () => {
    const level = 1;
    const mines = [[0, 2], [1, 2]];

    it('returns a string with the content of the selected cell', () => {
      const cell = [1, 1];
      expect(getCellValue(level, mines, cell)).toEqual('2');
    });

    it('returns a string "*" if the selected cell is a mine', () => {
      const cell = [0, 2];
      expect(getCellValue(level, mines, cell)).toEqual('*');
    });
  });

  describe('getGrid', () => {
    const level = 1;
    const mines = [
      [0, 0], [0, 5], [1, 3], [2, 8], [3, 0], [3, 6], [5, 5], [7, 3], [8, 7], [8, 8]];
    const result = [
      ['*', '1', '1', '1', '2', '*', '1', '0', '0'],
      ['1', '1', '1', '*', '2', '1', '1', '1', '1'],
      ['1', '1', '1', '1', '1', '1', '1', '2', '*'],
      ['*', '1', '0', '0', '0', '1', '*', '2', '1'],
      ['1', '1', '0', '0', '1', '2', '2', '1', '0'],
      ['0', '0', '0', '0', '1', '*', '1', '0', '0'],
      ['0', '0', '1', '1', '2', '1', '1', '0', '0'],
      ['0', '0', '1', '*', '1', '0', '1', '2', '2'],
      ['0', '0', '1', '1', '1', '0', '1', '*', '*']];

    it('returns an array with the content of every cell in the grid', () => {
      expect(getGrid(level, mines)).toEqual(result);
    });

    it('returns the length of the grid', () => {
      expect(getGrid(level, mines)).toHaveLength(9);
    });
  });

  describe('startGame', () => {
    const level = 1;

    it('returns an array with the content of every cell in the grid', () => {
      expect(startGame(level)).toHaveLength(9);
    });
  });

  describe('getCellImage', () => {
    it('returns the image of a mine if the selected cell is a mine', () => {
      const content = '2';
      expect(getCellImage(content)).toEqual('minesweeper_2.png');
    });

    it('returns the image of the number of mines around the selected cell if the selected cell is not a mine', () => {
      const content = '*';
      expect(getCellImage(content)).toEqual('minesweeper_mine.png');
    });
  });
});
