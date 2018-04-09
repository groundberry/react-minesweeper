import {
  getCellValue,
  getCellImage,
} from './cell';

describe('utils', () => {
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
