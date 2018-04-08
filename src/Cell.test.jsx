import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', () => {
  it('renders one cell component', () => {
    const onClickMine = jest.fn();
    const onClickCell = jest.fn();

    const wrapper = shallow(<Cell
      content="1"
      onClickMine={onClickMine}
      onClickCell={onClickCell}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
