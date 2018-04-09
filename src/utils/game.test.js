import { getStatusImage } from './game';

describe('game', () => {
  describe('getStatusImage', () => {
    it('returns the image of a smiley face if the game is not over', () => {
      const gameOver = undefined;
      expect(getStatusImage(gameOver)).toEqual('minesweeper_smiley_face.png');
    });

    it('returns the image of a smiley face if the game is not over', () => {
      const gameOver = false;
      expect(getStatusImage(gameOver)).toEqual('minesweeper_smiley_face.png');
    });

    it('returns the image of a sad face if the game is over', () => {
      const gameOver = true;
      expect(getStatusImage(gameOver)).toEqual('minesweeper_sad_face.png');
    });
  });
});
