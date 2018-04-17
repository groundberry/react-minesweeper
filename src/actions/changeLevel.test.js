import changeLevel from './changeLevel';

describe('changeLevel', () => {
  describe('changeLevel', () => {
    const level = 2;

    it('returns a new state object with the selected level', () => {
      expect(changeLevel(level).level).toEqual(2);
    });

    it('returns a new state object with a new grid length', () => {
      expect(changeLevel(level).grid.length).toEqual(16);
    });

    it('returns a new state object with a new pressedGrid length', () => {
      expect(changeLevel(level).pressedGrid.length).toEqual(16);
    });

    it('returns a new state object with a restarted game', () => {
      expect(changeLevel(level).gameOver).toEqual(false);
    });
  });
});
