/* global it, expect, describe, */

import { getHotelsSuccessAction, GET_HOTELS_SUCCESS } from './getHotelsActions';
import { hotels } from './getHotelsAdapter';

describe('get hotel actions will', () => {
  it('on success return hotels in payload', () => {
    const result = getHotelsSuccessAction();
    expect(result.type).toBe(GET_HOTELS_SUCCESS);
    expect(result.hotels).toEqual(hotels);
  });
});

// naturally this would be a thunk 
// ... but for brevity An action that calls other actions on basis of callback
