import { getWidth, getHeight } from './config';
import { isPresent } from './array';
import { isMine } from './mine';

const imgMine = require('../img/minesweeper_mine.png');
const imgBlank = require('../img/minesweeper_blank.png');
const img1 = require('../img/minesweeper_1.png');
const img2 = require('../img/minesweeper_2.png');
const img3 = require('../img/minesweeper_3.png');

const imageMap = {
  '*': imgMine,
  0: imgBlank,
  1: img1,
  2: img2,
  3: img3,
};

export function getCellValue(level, mines, cell) {
  const width = getWidth(level);
  const height = getHeight(level);

  if (isMine(mines, cell)) {
    return '*';
  }

  const cellStartRow = Math.max(0, cell[0] - 1);
  const cellEndRow = Math.min(height, cell[0] + 1);
  const cellStartColumn = Math.max(0, cell[1] - 1);
  const cellEndColumn = Math.min(width, cell[1] + 1);

  let result = 0;

  for (let row = cellStartRow; row <= cellEndRow; row += 1) {
    for (let col = cellStartColumn; col <= cellEndColumn; col += 1) {
      if (isMine(mines, [row, col])) {
        result += 1;
      }
    }
  }
  return result.toString();
}

export function getCellImage(content) {
  return imageMap[content];
}

export function hasNeighboringMines(grid, cell) {
  const row = cell[0];
  const col = cell[1];

  if (grid[row][col] !== '0') {
    return true;
  }

  return false;
}

export function getNeighboringCells(grid, selectedCell) {
  const width = grid[0].length;
  const height = grid.length;
  const selectedRow = selectedCell[0];
  const selectedCol = selectedCell[1];

  const cellStartRow = Math.max(0, selectedRow - 1);
  const cellEndRow = Math.min(height - 1, selectedRow + 1);
  const cellStartColumn = Math.max(0, selectedCol - 1);
  const cellEndColumn = Math.min(width - 1, selectedCol + 1);
  const neighboringCells = [];

  for (let row = cellStartRow; row <= cellEndRow; row += 1) {
    for (let col = cellStartColumn; col <= cellEndColumn; col += 1) {
      if (selectedRow !== row || selectedCol !== col
      ) {
        neighboringCells.push([row, col]);
      }
    }
  }

  return neighboringCells;
}

export function getExpandedNeighboringCells(grid, cell) {
  const neighboringCells = getNeighboringCells(grid, cell);
  const visitedCells = [];

  while (neighboringCells.length > 0) {
    const currentCell = neighboringCells.shift();
    const row = currentCell[0];
    const col = currentCell[1];

    if (!isPresent(visitedCells, [row, col])) {
      visitedCells.push([row, col]);
    }

    const neighboringCellsToVisit = [];

    if (grid[row][col] === '0') {
      const currentCellNeighboringCells = getNeighboringCells(grid, currentCell);

      for (let i = 0; i < currentCellNeighboringCells.length; i += 1) {
        const currentNeighboringCell = currentCellNeighboringCells[i];
        if (!isPresent(visitedCells, currentNeighboringCell)) {
          neighboringCellsToVisit.push(currentNeighboringCell);
        }
      }
      neighboringCells.push(...neighboringCellsToVisit);
    }
  }
  return visitedCells;
}
