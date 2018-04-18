import React, { Component } from 'react';
import LevelOptions from './LevelOptions';
import Face from './Face';
import Timer from './Timer';
import Grid from './Grid';
import { cloneGrid } from './utils/array';
import { startGame, getPressedGrid, getGrid } from './utils/grid';
import { getMinesCoordinates } from './utils/mine';
import changeLevel from './actions/changeLevel';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const level = 1;
    const grid = startGame(level);
    const pressedGrid = getPressedGrid(level);

    this.state = {
      level,
      grid,
      pressedGrid,
      gameOver: false,
      startTime: null,
      endTime: null,
    };

    this.handleChangeSelectLevel = this.handleChangeSelectLevel.bind(this);
    this.handleClickPressedCell = this.handleClickPressedCell.bind(this);
    this.handleClickGameOver = this.handleClickGameOver.bind(this);
    this.handleClickRestartGame = this.handleClickRestartGame.bind(this);
  }

  handleChangeSelectLevel(e) {
    const level = parseInt(e.target.value, 10);
    this.setState(changeLevel(level));
  }

  handleClickPressedCell([row, col]) {
    this.setState((prevState) => {
      const newPressedGrid = cloneGrid(prevState.pressedGrid);
      newPressedGrid[row][col] = true;

      let start;
      if (prevState.startTime === null) {
        start = Date.now();
      } else {
        start = prevState.startTime;
      }

      return {
        pressedGrid: newPressedGrid,
        startTime: start,
      };
    });
  }

  handleClickGameOver() {
    this.setState({
      gameOver: true,
      endTime: Date.now(),
    });
  }

  handleClickRestartGame() {
    this.setState((prevState) => {
      const { level } = prevState;
      const mines = getMinesCoordinates(level);
      return {
        grid: getGrid(level, mines),
        pressedGrid: getPressedGrid(level),
        gameOver: false,
        startTime: null,
        endTime: null,
      };
    });
  }

  render() {
    const {
      grid,
      gameOver,
      level,
      pressedGrid,
      startTime,
      endTime,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <LevelOptions
          level={level}
          onChange={this.handleChangeSelectLevel}
        />
        <Face
          gameOver={gameOver}
          onClick={this.handleClickRestartGame}
        />
        <Timer
          startTime={startTime}
          endTime={endTime}
        />
        <Grid
          level={level}
          gameOver={gameOver}
          grid={grid}
          onClickCell={this.handleClickPressedCell}
          onClickMine={this.handleClickGameOver}
          pressedGrid={pressedGrid}
        />
      </div>
    );
  }
}

export default App;
