import { startGame, getPressedGrid } from '../utils/grid';

export default function changeLevel(level) {
  return {
    level,
    grid: startGame(level),
    pressedGrid: getPressedGrid(level),
    gameOver: false,
  };
}
