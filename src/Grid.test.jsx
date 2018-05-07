import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper;

  beforeEach(() => {
    const gameOver = false;
    const grid = [
      ['*', '1', '1', '1', '2', '*', '1', '0', '0'],
      ['1', '1', '1', '*', '2', '1', '1', '1', '1'],
      ['1', '1', '1', '1', '1', '1', '1', '2', '*'],
      ['*', '1', '0', '0', '0', '1', '*', '2', '1'],
      ['1', '1', '0', '0', '1', '2', '2', '1', '0'],
      ['0', '0', '0', '0', '1', '*', '1', '0', '0'],
      ['0', '0', '1', '1', '2', '1', '1', '0', '0'],
      ['0', '0', '1', '*', '1', '0', '1', '2', '2'],
      ['0', '0', '1', '1', '1', '0', '1', '*', '*']];
    const onClickMine = jest.fn();
    const onClickCell = jest.fn();
    const onClickFlagCell = jest.fn();
    const pressedGrid = [
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
    ];
    const flaggedGrid = [
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false],
    ];

    wrapper = shallow(<Grid
      gameOver={gameOver}
      grid={grid}
      onClickMine={onClickMine}
      onClickCell={onClickCell}
      onClickFlagCell={onClickFlagCell}
      pressedGrid={pressedGrid}
      flaggedGrid={flaggedGrid}
    />);
  });

  it('renders a grid component', () => {
    expect(wrapper.find('.Grid')).toHaveLength(1);
  });

  it('renders a grid component of size 9x9', () => {
    expect(wrapper.find('Cell')).toHaveLength(81);
  });
});
