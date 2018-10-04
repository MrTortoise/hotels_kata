import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotelsSuccessAction } from './getHotels/getHotelsActions';

import './App.css';

const Hotel = hotel => (
  <li key={hotel.name} className="hotel">
a hotel
  </li>
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHotels();
  }

  render() {
    return (
      <ul className="hotel-search">
        {this.props.hotels.map(Hotel)}
      </ul>
    );
  }
}

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
