import {
  getWidth,
  getHeight,
} from './config';

import { getCellValue } from './cell';

import { getMinesCoordinates } from './mine';

export function getCustomGrid(level, customizer) {
  const width = getWidth(level);
  const height = getHeight(level);
  const grid = [];

  for (let row = 0; row < height; row += 1) {
    const currentRow = [];
    for (let col = 0; col < width; col += 1) {
      currentRow.push(customizer([row, col]));
    }
    grid.push(currentRow);
  }

  return grid;
}

export function getGrid(level, mines) {
  const customizer = coordinates => getCellValue(level, mines, coordinates);
  return getCustomGrid(level, customizer);
}

export function getPressedGrid(level) {
  const customizer = () => false;
  return getCustomGrid(level, customizer);
}

export function getDiscoveredGrid(level) {
  const customizer = () => true;
  return getCustomGrid(level, customizer);
}

export function startGame(level) {
  const mines = getMinesCoordinates(level);
  return getGrid(level, mines);
}
