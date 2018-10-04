/* global it, expect, describe, */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const hotels = [{ name: 'one' }, { name: 'two' }];

describe('app will', () => {
  it('render without crashing', () => {
    const component = shallow(<App hotels={hotels} />);
    expect(component.exists()).toEqual(true);
  });

  it('have a hotel search component', () => {
    const app = shallow(<App hotels={hotels} />);
    expect(app.find('.hotel-search').length).toBeGreaterThan(0);
  });

  it('have hotels', () => {
    const app = shallow(<App hotels={hotels} />);
    expect(app.find('.hotel').length).toBe(2);
  });
});
