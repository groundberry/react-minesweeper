import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', () => {
  it('renders one cell component', () => {
    const onClickMine = jest.fn();
    const onClickCell = jest.fn();
    const coordinates = [0, 1];
    const showContent = false;

    const wrapper = shallow(<Cell
      content="1"
      coordinates={coordinates}
      onClickMine={onClickMine}
      onClickCell={onClickCell}
      showContent={showContent}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
