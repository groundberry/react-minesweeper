import {
  getCellValue,
  getCellImage,
  hasNeighboringMines,
  getNeighboringCells,
  getExpandedNeighboringCells,
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

  describe('hasNeighboringMines', () => {
    let grid;

    beforeEach(() => {
      grid = [['0', '2', '*'], ['0', '2', '*'], ['0', '1', '1']];
    });

    it('returns true if there are mines around the clicked cell', () => {
      const selectedCell = [0, 1];
      expect(hasNeighboringMines(grid, selectedCell)).toBe(true);
    });

    it('returns false if there are not mines around the clicked cell', () => {
      const selectedCell = [0, 0];
      expect(hasNeighboringMines(grid, selectedCell)).toBe(false);
    });
  });

  describe('getNeighboringCells', () => {
    it('returns an array with the neighboring cells of the top left cell', () => {
      const grid = [['0', '2', '*'], ['0', '2', '*'], ['0', '1', '1']];
      const selectedCell = [0, 0];
      const result = [[0, 1], [1, 0], [1, 1]];
      expect(getNeighboringCells(grid, selectedCell)).toEqual(result);
    });

    it('returns an array with the neighboring cells of the top right cell', () => {
      const grid = [['1', '*', '0'], ['1', '2', '*'], ['1', '1', '1']];
      const selectedCell = [0, 2];
      const result = [[0, 1], [1, 1], [1, 2]];
      expect(getNeighboringCells(grid, selectedCell)).toEqual(result);
    });

    it('returns an array with the neighboring cells of the bottom left cell', () => {
      const grid = [['1', '*', '2'], ['1', '2', '*'], ['0', '1', '1']];
      const selectedCell = [2, 0];
      const result = [[1, 0], [1, 1], [2, 1]];
      expect(getNeighboringCells(grid, selectedCell)).toEqual(result);
    });

    it('returns an array with the neighboring cells of the bottom right cell', () => {
      const grid = [['1', '*', '2'], ['1', '2', '*'], ['1', '1', '0']];
      const selectedCell = [2, 2];
      const result = [[1, 1], [1, 2], [2, 1]];
      expect(getNeighboringCells(grid, selectedCell)).toEqual(result);
    });
  });

  describe('getExpandedNeighboringCells', () => {
    it('returns an array with the expanded neighboring cells if none of them is a mine', () => {
      const grid = [['0', '2', '*'], ['0', '2', '*'], ['0', '1', '1']];
      const selectedCell = [0, 0];
      const result = [[0, 1], [1, 0], [1, 1], [0, 0], [2, 0], [2, 1]];
      expect(getExpandedNeighboringCells(grid, selectedCell)).toEqual(result);
    });
  });
});
