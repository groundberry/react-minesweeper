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
