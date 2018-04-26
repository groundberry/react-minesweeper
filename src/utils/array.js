export const cloneGrid = grid => grid.map(row => row.slice());

export function isPresent(array, cell) {
  for (let i = 0; i < array.length; i += 1) {
    const currentCell = array[i];
    if (currentCell[0] === cell[0] && currentCell[1] === cell[1]) {
      return true;
    }
  }
  return false;
}
