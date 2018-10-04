import { hotels } from './getHotelsAdapter';

export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';


export const getHotelsSuccessAction = () => ({
  type: GET_HOTELS_SUCCESS,
  hotels,
});
