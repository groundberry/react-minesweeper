import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

it('renders one cell component', () => {
  const wrapper = shallow(<Cell
    content="1"
  />);
  expect(wrapper).toMatchSnapshot();
});
