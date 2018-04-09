import {
  getCustomGrid,
  getGrid,
  getPressedGrid,
  startGame,
} from './grid';

describe('grid', () => {
  describe('getCustomGrid', () => {
    const level = 1;

    it('returns an array with the content of every cell in the grid', () => {
      const customizer = () => true;
      const result = [
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
      ];
      expect(getCustomGrid(level, customizer)).toEqual(result);
    });
  });

  describe('getGrid', () => {
    const level = 1;
    const mines = [
      [0, 0],
      [0, 5],
      [1, 3],
      [2, 8],
      [3, 0],
      [3, 6],
      [5, 5],
      [7, 3],
      [8, 7],
      [8, 8],
    ];
    const result = [
      ['*', '1', '1', '1', '2', '*', '1', '0', '0'],
      ['1', '1', '1', '*', '2', '1', '1', '1', '1'],
      ['1', '1', '1', '1', '1', '1', '1', '2', '*'],
      ['*', '1', '0', '0', '0', '1', '*', '2', '1'],
      ['1', '1', '0', '0', '1', '2', '2', '1', '0'],
      ['0', '0', '0', '0', '1', '*', '1', '0', '0'],
      ['0', '0', '1', '1', '2', '1', '1', '0', '0'],
      ['0', '0', '1', '*', '1', '0', '1', '2', '2'],
      ['0', '0', '1', '1', '1', '0', '1', '*', '*'],
    ];

    it('returns an array with the content of every cell in the grid', () => {
      expect(getGrid(level, mines)).toEqual(result);
    });

    it('returns the length of the grid', () => {
      expect(getGrid(level, mines)).toHaveLength(9);
    });
  });

  describe('getPressedGrid', () => {
    const level = 1;
    const result = [
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
    ];

    it('returns an array with the content of every cell in the grid', () => {
      expect(getPressedGrid(level)).toEqual(result);
    });

    it('returns the length of the grid', () => {
      expect(getPressedGrid(level)).toHaveLength(9);
    });
  });

  describe('startGame', () => {
    const level = 1;

    it('returns an array with the content of every cell in the grid', () => {
      expect(startGame(level)).toHaveLength(9);
    });
  });
});
