import React from 'react';
import { shallow } from 'enzyme';
import Face from './Face';

describe('Face', () => {
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('renders a smiley face when not game over', () => {
    const wrapper = shallow(<Face onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a sad face when game over', () => {
    const wrapper = shallow(<Face gameOver onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the onClick callback when clicked', () => {
    const wrapper = shallow(<Face onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
