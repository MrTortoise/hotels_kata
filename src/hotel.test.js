/* global it, expect, describe, beforeEach */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { Hotels, Hotel } from './Hotel';
import { hotels } from './getHotels/getHotelsAdapter';

Enzyme.configure({ adapter: new Adapter() });

describe('hotel search component will', () => {
  it('have right class', () => {
    const hotelsUT = shallow(<Hotels hotels={hotels} />);
    expect(hotelsUT.find('.hotel-search').length).toEqual(1);
  });

  it('have one hotel', () => {
    const hotel = shallow(<Hotel hotel={{ name: 'one', starRating: 5, facilities: ['pub', 'rooms'] }} />);
    expect(hotel.find('.hotel').length).toBe(1);
    expect(hotel.find('.hotel-name').length).toBe(1);
    expect(hotel.find('.hotel-starRating').length).toBe(1);
    expect(hotel.find('.hotel-facilities').length).toBe(1);
  });
});
