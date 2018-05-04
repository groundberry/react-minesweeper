import React from 'react';
import PropTypes from 'prop-types';
import { getStatusImage } from './utils/game';
import './Face.css';

const imgCool = require('./img/minesweeper_cool_face.png');

function Face(props) {
  const { gameOver, winGame, onClick } = props;
  let img = null;

  if (winGame) {
    img = imgCool;
  } else {
    img = getStatusImage(gameOver);
  }

  return (
    <button
      style={{ backgroundImage: `url(${img})` }}
      className="Face Face--button Face--image"
      onClick={onClick}
    />
  );
}

Face.propTypes = {
  gameOver: PropTypes.bool,
  winGame: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Face.defaultProps = {
  gameOver: false,
  winGame: false,
};

export default Face;
