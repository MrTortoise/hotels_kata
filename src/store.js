import { combineReducers, createStore } from 'redux';
import { hotelsReducer } from './hotelsReducer';

const reducers = combineReducers({
  hotels: hotelsReducer,
});

export default createStore(reducers);
