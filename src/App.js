import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotelsSuccessAction } from './getHotels/getHotelsActions';
import { Hotels } from './Hotel';

import './App.css';

const App = ({ hotels, getHotels }) => (<Hotels hotels={hotels} searchForHotel={getHotels} />);

App.propTypes = {
  hotels: PropTypes.array.isRequired,
  getHotels: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hotels: state.hotels.hotels,
});

const mapDispatchToProps = dispatch => ({
  getHotels: () => {
    dispatch(getHotelsSuccessAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
