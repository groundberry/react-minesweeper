import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import './Timer.css';

class Timer extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  render() {
    const { startTime, endTime } = this.props;
    const currentTime = Date.now();
    let time = 0;

    if (startTime !== null) {
      time = Math.round((currentTime - startTime) / 1000);
    }

    if (endTime !== null) {
      time = Math.round((endTime - startTime) / 1000);
    }

    return (
      <div className="Timer">
        <Time time={time} />
      </div>
    );
  }
}

Timer.propTypes = {
  startTime: PropTypes.number,
  endTime: PropTypes.number,

};

Timer.defaultProps = {
  startTime: null,
  endTime: PropTypes.number,

};

export default Timer;
