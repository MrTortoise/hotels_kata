import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { hotelsReducer } from './hotelsReducer';

const reducers = combineReducers({
  hotels: hotelsReducer,
});

export default createStore(reducers, applyMiddleware(thunk));
