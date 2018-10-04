import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotelsSuccessAction } from './getHotels/getHotelsActions';
import Hotel from './Hotel'

import './App.css';

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
