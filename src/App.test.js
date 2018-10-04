/* global it, expect, document */

import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import App from './App';

Enzyme.configure({ adapter: new Adapter() })

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

it('has a hotel search component', ()=>{
  const app = shallow(<App />);
  expect(app.find('.hotel-search').length).toBeGreaterThan(0)
})