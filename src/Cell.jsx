import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getCellImage } from './utils/cell';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();

    this.handleClickShowContent = this.handleClickShowContent.bind(this);
    this.handleClickShowFlag = this.handleClickShowFlag.bind(this);
  }

  handleClickShowContent() {
    const {
      coordinates,
      content,
      flaggedCell,
      onClickCell,
      onClickMine,
    } = this.props;

    if (flaggedCell) {
      return;
    }

    if (content === '*') {
      onClickMine();
    } else {
      onClickCell(coordinates);
    }
  }

  handleClickShowFlag(evt) {
    evt.preventDefault();

    const {
      coordinates,
      onClickFlagCell,
    } = this.props;

    onClickFlagCell(coordinates);
  }

  render() {
    const { content, showContent, flaggedCell } = this.props;
    const pressedImg = getCellImage(content);
    const flaggedCellImage = getCellImage('f');
    const flagImg = flaggedCell && flaggedCellImage;

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
  flaggedCell: PropTypes.bool.isRequired,
  onClickCell: PropTypes.func.isRequired,
  onClickFlagCell: PropTypes.func.isRequired,
  onClickMine: PropTypes.func.isRequired,
};

export default Cell;
