import React, { Component } from 'react';
import Grid from './Grid';
import Face from './Face';
import { startGame } from './utils';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const level = 1;
    const grid = startGame(level);

    this.state = {
      level,
      grid,
      gameOver: false,
    };

    this.handleClickGameOver = this.handleClickGameOver.bind(this);
    this.handleClickRestartGame = this.handleClickRestartGame.bind(this);
  }

  handleClickGameOver() {
    this.setState({
      gameOver: true,
    });
  }

  handleClickRestartGame() {
    const { level } = this.state;

    this.setState({
      grid: startGame(level),
      gameOver: false,
    });
  }

  render() {
    const { grid, gameOver } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <Face gameOver={gameOver} onClick={this.handleClickRestartGame} />
        <Grid grid={grid} onClickMine={this.handleClickGameOver} />
      </div>
    );
  }
}

export default App;
