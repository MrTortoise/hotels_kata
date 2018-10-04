/* global it, expect, describe, */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const hotels = [{ name: 'one' }, { name: 'two' }];

let app = {};
describe('app will', () => {
  beforeEach(() => {
    app = shallow(
    <Provider store={store}>
      <App />
    </Provider>);
  });

  it('render without crashing', () => {
    expect(app.exists()).toEqual(true);
  });


});
