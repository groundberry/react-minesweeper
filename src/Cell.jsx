import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getCellImage } from './utils/cell';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();

    this.state = {
      flagged: false,
    };

    this.handleClickShowContent = this.handleClickShowContent.bind(this);
    this.handleClickShowFlag = this.handleClickShowFlag.bind(this);
  }

  handleClickShowContent() {
    const { flagged } = this.state;
    const {
      coordinates,
      content,
      onClickCell,
      onClickMine,
    } = this.props;

    if (flagged) {
      return;
    }

    if (content === '*') {
      onClickMine();
    }

    onClickCell(coordinates);
  }

  handleClickShowFlag(evt) {
    evt.preventDefault();

    this.setState(prevState => ({ flagged: !prevState.flagged }));
  }

  render() {
    const { flagged } = this.state;
    const { content, showContent } = this.props;
    const pressedImg = getCellImage(content);
    const flagImg = flagged && getCellImage('f');

    return (
      <Fragment>
        {showContent ? (
          <div
            style={{ backgroundImage: `url(${pressedImg})` }}
            className="Cell Cell--image"
          />
        ) : (
          <button
            style={{ backgroundImage: `url(${flagImg})` }}
            className="Cell Cell--button Cell--image"
            onClick={this.handleClickShowContent}
            onContextMenu={this.handleClickShowFlag}
          />
        )}
      </Fragment>
    );
  }
}

Cell.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  content: PropTypes.string.isRequired,
  showContent: PropTypes.bool.isRequired,
  onClickCell: PropTypes.func.isRequired,
  onClickMine: PropTypes.func.isRequired,
};

export default Cell;
