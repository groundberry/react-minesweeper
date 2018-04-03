import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  document.createElement('div');
  shallow(<App />);
});

it('renders the name of the app', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
