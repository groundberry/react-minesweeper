import React from 'react';
import { shallow } from 'enzyme';
import LevelOptions from './LevelOptions';

describe('LevelOptions', () => {
  let onChange;
  let wrapper;

  beforeEach(() => {
    onChange = jest.fn();
    wrapper = shallow(<LevelOptions
      level={1}
      onChange={onChange}
    />);
  });

  it('renders a form to select level option', () => {
    expect(wrapper.find('.LevelOptions')).toHaveLength(1);
  });
});
