/* global it, expect, describe */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { Hotels, Hotel } from './Hotel';
import { hotels } from './getHotels/getHotelsAdapter';

Enzyme.configure({ adapter: new Adapter() });

describe('hotel search component will', () => {
  it('have right class', () => {
    const hotelsUT = shallow(<Hotels hotels={hotels} getHotels={() => {}} />);
    expect(hotelsUT.find('.hotel-search').length).toEqual(1);
  });

  it('have one hotel', () => {
    const hotel = shallow(<Hotel hotel={{ name: 'one', starRating: 5, facilities: ['pub', 'rooms'] }} />);
    expect(hotel.find('.hotel').length).toBe(1);
    expect(hotel.find('.hotel-name').length).toBe(1);
    expect(hotel.find('.hotel-starRating').length).toBe(1);
    expect(hotel.find('.hotel-facilities').length).toBe(1);
  });

  it('will have hotel search results', () => {
    const hotelsUT = shallow(<Hotels hotels={hotels} getHotels={() => {}} />);
    expect(hotelsUT.find('.hotel-search-results').length).toEqual(1);
  });

  it('should have a search button - that gets results', (done) => {
    const hotelSearch = () => {
      done();
    };
    const hotelsUT = shallow(<Hotels hotels={hotels} getHotels={hotelSearch} />);
    expect(hotelsUT.find('.hotel-search-submit').length).toEqual(1);
    hotelsUT.find('form').simulate('submit');
  });

  it('should have a sort order option', ()=>{
    const hotelsUT = shallow(<Hotels hotels={hotels} getHotels={() => {}} />);
    expect(hotelsUT.find('.hotel-search-sort-order').length).toEqual(1);
  })
});
