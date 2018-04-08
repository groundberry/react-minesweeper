import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getCellImage } from './utils';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false,
    };

    this.handleClickShowContent = this.handleClickShowContent.bind(this);
  }

  handleClickShowContent() {
    const { content, onClickMine } = this.props;

    this.setState({
      showContent: true,
    });

    if (content === '*') {
      onClickMine();
    }
  }

  render() {
    const { content } = this.props;
    const { showContent } = this.state;
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
  content: PropTypes.string.isRequired,
  onClickMine: PropTypes.func.isRequired,
};

export default Cell;
