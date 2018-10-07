import sortHotelByStarRating from './sortHotelsByStarRating';
import { hotels } from './getHotelsAdapter';

export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';


export const getHotelsSuccessAction = hotelResults => ({
  type: GET_HOTELS_SUCCESS,
  hotels: hotelResults,
});

export const getHotels = sortOrder => dispatch => new Promise((resolve, _) => {
  const results = sortHotelByStarRating(sortOrder, hotels);
  resolve(results);
})
  .then((response) => {
    dispatch(getHotelsSuccessAction(response));
  })
  .catch((error) => {
    throw (error);
  });
