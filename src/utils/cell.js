import {
  getWidth,
  getHeight,
} from './config';

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
