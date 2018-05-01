import React from 'react';
import PropTypes from 'prop-types';
import leftPad from './utils/leftpad';
import './Time.css';

function Time(props) {
  const minutes = Math.floor(props.time / 60);
  const seconds = leftPad(props.time % 60);

  return (
    <span className="Time">
      {minutes}:{seconds}
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Time;
