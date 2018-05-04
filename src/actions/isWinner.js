/* eslint-disable import/prefer-default-export */

import { getWidth, getHeight, getNumberOfMines } from '../utils/config';

export function isWinner(level, cellsClicked) {
  const width = getWidth(level);
  const height = getHeight(level);
  const mines = getNumberOfMines(level);
  const totalCells = width * height;

  return (cellsClicked === totalCells - mines);
}
