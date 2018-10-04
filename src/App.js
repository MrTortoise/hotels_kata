import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const Hotel = hotel => (
  <li key={hotel.name} className="hotel">
a hotel
  </li>
);

const App = ({ hotels }) => (
  <ul className="hotel-search">
    {hotels.map(Hotel)}
  </ul>
);

App.propTypes = {
  hotels: PropTypes.array.isRequired,
};

export default App;
