const imgSmiley = require('../img/minesweeper_smiley_face.png');
const imgSad = require('../img/minesweeper_sad_face.png');

export function getStatusImage(gameOver) {
  return gameOver ? imgSad : imgSmiley;
}

export default getStatusImage;
