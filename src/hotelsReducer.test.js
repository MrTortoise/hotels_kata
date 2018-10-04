/* global it, expect, describe, */
import { hotels } from './getHotels/getHotelsAdapter';
import { GET_HOTELS_SUCCESS } from './getHotels/getHotelsActions';

const initialState = { hotels: [] };

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_HOTELS_SUCCESS:
    return {
      ...state,
      hotels: action.hotels,
    };
  default:
    return state;
  }
};

describe('hotels reducer will', () => {
  it('returns initial state when initialised', () => {
    const result = hotelsReducer(undefined, {});
    expect(result).toBe(initialState);
  });

  it('return state when no action to apply', () => {
    const someState = { dave: 'dave' };
    const result = hotelsReducer(someState, {});
    expect(result).toBe(someState);
  });

  it('will apply the hotels from GET_HOTELS_SUCCESS to state', () => {
    const result = hotelsReducer(hotels, { type: GET_HOTELS_SUCCESS, hotels });
    expect(result.hotels).toEqual(hotels);
  });
});
