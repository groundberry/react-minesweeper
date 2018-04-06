import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper;

  beforeEach(() => {
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

    wrapper = shallow(<Grid grid={grid} />);
  });

  it('renders a grid component', () => {
    expect(wrapper.find('.Grid')).toHaveLength(1);
  });

  it('renders a grid component of size 9x9', () => {
    expect(wrapper.find('Cell')).toHaveLength(81);
  });
});
