const imgMine = require('./img/minesweeper_mine.png');
const img1 = require('./img/minesweeper_1.png');
const img2 = require('./img/minesweeper_2.png');
const img3 = require('./img/minesweeper_3.png');

const configForLevel = {
  1: {
    mines: 10,
    width: 9,
    height: 9,
  },
  2: {
    mines: 40,
    width: 16,
    height: 16,
  },
  3: {
    mines: 99,
    width: 24,
    height: 24,
  },
};

export function getConfigForLevel(level) {
  return configForLevel[level];
}

export function getNumberOfMines(level) {
  return getConfigForLevel(level).mines;
}

export function getWidth(level) {
  return getConfigForLevel(level).width;
}

export function getHeight(level) {
  return getConfigForLevel(level).height;
}

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

export function getGrid(level, mines) {
  const width = getWidth(level);
  const height = getHeight(level);

  const grid = [];

  for (let row = 0; row < height; row += 1) {
    const currentRow = [];
    for (let col = 0; col < width; col += 1) {
      currentRow.push(getCellValue(level, mines, [row, col]));
    }
    grid.push(currentRow);
  }

  return grid;
}

export function startGame(level) {
  const mines = getMinesCoordinates(level);
  return getGrid(level, mines);
}

export function getCellImage(content) {
  if (content === '*') {
    return imgMine;
  }
  if (content === '1') {
    return img1;
  }
  if (content === '2') {
    return img2;
  }
  if (content === '3') {
    return img3;
  }

  return '';
}
