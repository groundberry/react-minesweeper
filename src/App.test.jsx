import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the name of the app', () => {
    expect(wrapper.find('h1').text()).toEqual('Minesweeper');
  });

  it('renders a Face component', () => {
    expect(wrapper.find('LevelOptions')).toHaveLength(1);
  });

  it('renders a Face component', () => {
    expect(wrapper.find('Face')).toHaveLength(1);
  });

  it('renders a Grid component', () => {
    expect(wrapper.find('Grid')).toHaveLength(1);
  });
});
