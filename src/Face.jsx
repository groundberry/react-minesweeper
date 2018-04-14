import React from 'react';
import PropTypes from 'prop-types';
import { getStatusImage } from './utils/game';
import './Face.css';

function Face(props) {
  const { gameOver, onClick } = props;
  const img = getStatusImage(gameOver);

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
  onClick: PropTypes.func.isRequired,
};

Face.defaultProps = {
  gameOver: false,
};

export default Face;
