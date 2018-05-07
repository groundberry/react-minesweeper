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
    const {
      gameOver,
      grid,
      onClickCell,
      onClickFlagCell,
      onClickMine,
      pressedGrid,
      flaggedGrid,
    } = this.props;

    for (let row = 0, height = grid.length; row < height; row += 1) {
      for (let col = 0, width = grid[row].length; col < width; col += 1) {
        const cellIndex = col + (row * width);
        const cellContent = (grid[row][col]).toString();
        const coordinates = [row, col];
        const showContent = pressedGrid[row][col];
        const flaggedCell = flaggedGrid[row][col];

        arrayOfCells.push(<Cell
          key={cellIndex}
          coordinates={coordinates}
          content={cellContent}
          gameOver={gameOver}
          showContent={showContent}
          flaggedCell={flaggedCell}
          onClickCell={onClickCell}
          onClickFlagCell={onClickFlagCell}
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
  gameOver: PropTypes.bool.isRequired,
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onClickCell: PropTypes.func.isRequired,
  onClickFlagCell: PropTypes.func.isRequired,
  onClickMine: PropTypes.func.isRequired,
  pressedGrid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  flaggedGrid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
};

export default Grid;
