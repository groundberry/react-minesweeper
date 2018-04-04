const configPerLevel = {
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
  return configPerLevel[level];
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
