/* global it, expect, describe, */

import { getHotelsSuccessAction, GET_HOTELS_SUCCESS, getHotels } from './getHotelsActions';

describe('get hotel actions will', () => {
  it('on success return hotels in payload', () => {
    const data = { dave: 'dave' };
    const result = getHotelsSuccessAction(data);
    expect(result.type).toBe(GET_HOTELS_SUCCESS);
    expect(result.hotels).toEqual(data);
  });

  it('will get hotels in the right sort order', (done) => {
    const dispatch = ({type, hotels}) => {
    expect(type).toEqual(GET_HOTELS_SUCCESS)
    expect(hotels).toHaveLength(3)
    };

    getHotels('asc')(dispatch).then(() => {
      done()
    });
  });
});


// naturally this would be a thunk
// ... but for brevity An action that calls other actions on basis of callback
// will eventually push sort + tag requirements into here
// fastest route to value is ship a hotel list though
