import React from 'react';
import PropTypes from 'prop-types';

export const Hotel = hotel => (
  <li key={hotel.name} className="hotel">
a hotel
  </li>
);

export const Hotels = ({ hotels }) => (
  <ul className="hotel-search">
    {hotels.map(Hotel)}
  </ul>
);


Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
};
