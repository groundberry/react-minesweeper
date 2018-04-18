import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';

describe('Time', () => {
  let wrapper;
  const startTime = 1000;

  beforeEach(() => {
    wrapper = shallow(<Time time={startTime} />);
  });

  it('renders a Grid component', () => {
    expect(wrapper.find('.Time')).toHaveLength(1);
  });
});
