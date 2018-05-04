/* eslint-disable import/prefer-default-export */

export function countClickedCells(grid) {
  let cellsClicked = 0;
  for (let i = 0; i < grid.length; i += 1) {
    const currentRow = grid[i];
    for (let j = 0; j < currentRow.length; j += 1) {
      const cell = currentRow[j];
      if (cell === true) {
        cellsClicked += 1;
      }
    }
  }

  return cellsClicked;
}
