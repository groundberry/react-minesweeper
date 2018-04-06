import React, { Component } from 'react';
import Grid from './Grid';
import { startGame } from './utils';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const level = 1;
    const grid = startGame(level);

    this.state = {
      grid,
    };
  }

  render() {
    const { grid } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <Grid grid={grid} />
      </div>
    );
  }
}

export default App;
