import {
  getNumberOfMines,
  getWidth,
  getHeight,
} from './config';

export function getRandomMine(width, height) {
  const row = Math.floor(Math.random(0, height) * height);
  const col = Math.floor(Math.random(0, width) * width);
  return [row, col];
}

export function getMinesCoordinates(level) {
  const mines = [];
  const width = getWidth(level);
  const height = getHeight(level);
  const numberOfMines = getNumberOfMines(level);

  for (let i = 0; i < numberOfMines; i += 1) {
    const mine = getRandomMine(width, height);
    mines.push(mine);
  }

  return mines;
}

export function isMine(mines, cell) {
  for (let i = 0; i < mines.length; i += 1) {
    const mine = mines[i];
    if (mine[0] === cell[0] && mine[1] === cell[1]) {
      return true;
    }
  }
  return false;
}
