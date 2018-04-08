import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
  constructor() {
    super();

    this.renderCells = this.renderCells.bind(this);
  }

  renderCells() {
    const arrayOfCells = [];
    const { grid, onClickMine } = this.props;

    for (let row = 0, height = grid.length; row < height; row += 1) {
      for (let col = 0, width = grid[row].length; col < width; col += 1) {
        const cellIndex = col + (row * width);
        const cellContent = grid[row][col];
        arrayOfCells.push(<Cell
          key={cellIndex}
          content={cellContent}
          onClickMine={onClickMine}
        />);
      }
    }
    return arrayOfCells;
  }

  render() {
    const { grid } = this.props;
    const width = grid[0].length;

    return (
      <div
        className="Grid"
        style={{ gridTemplateColumns: `repeat(${width}, 25px)` }}
      >
        {this.renderCells()}
      </div>
    );
  }
}

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onClickMine: PropTypes.func.isRequired,
};

export default Grid;
