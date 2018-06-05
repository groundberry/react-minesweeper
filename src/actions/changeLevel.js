import { startGame, getPressedGrid } from '../utils/grid';

export default function changeLevel(level) {
  return {
    level,
    grid: startGame(level),
    pressedGrid: getPressedGrid(level),
    flaggedGrid: getPressedGrid(level),
    gameOver: false,
    winGame: false,
    startTime: null,
    endTime: null,
  };
}
