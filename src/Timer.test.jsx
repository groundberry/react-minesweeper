import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {
  let wrapper;
  const startTime = 1000;
  const endTime = 1010;

  beforeEach(() => {
    wrapper = shallow(<Timer startTime={startTime} endTime={endTime} />);
  });

  it('renders a Grid component', () => {
    expect(wrapper.find('Time')).toHaveLength(1);
  });
});
