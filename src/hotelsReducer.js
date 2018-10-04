import { GET_HOTELS_SUCCESS } from './getHotels/getHotelsActions';

export const initialState = { hotels: [] };

export const hotelsReducer = (state = initialState, action) => {
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
