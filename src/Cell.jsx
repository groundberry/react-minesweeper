import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getCellImage } from './utils/cell';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();

    this.handleClickShowContent = this.handleClickShowContent.bind(this);
  }

  handleClickShowContent() {
    const {
      coordinates,
      content,
      gameOver,
      onClickCell,
      onClickMine,
    } = this.props;

    if (gameOver) {
      return;
    }

    if (content === '*') {
      onClickMine();
    }

    onClickCell(coordinates);
  }

  render() {
    const { content, showContent } = this.props;
    const img = getCellImage(content);

    return (
      <Fragment>
        {showContent ? (
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="Cell Cell--image"
          />
        ) : (
          <button
            className="Cell Cell--button"
            onClick={this.handleClickShowContent}
          />
        )}
      </Fragment>
    );
  }
}

Cell.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  content: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired,
  showContent: PropTypes.bool.isRequired,
  onClickCell: PropTypes.func.isRequired,
  onClickMine: PropTypes.func.isRequired,
};

export default Cell;
